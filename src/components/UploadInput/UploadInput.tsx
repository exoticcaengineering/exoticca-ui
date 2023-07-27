import { useState, useEffect } from 'react';
import { MouseEventHandler, useRef } from 'react';
import {
  WrapperLabel,
  FlexColumn,
  Description,
  ErrorMessage,
} from './UploadInput.styles';
import { Button } from '../Button';
import UploadedItem from './UploadedItem';
import { deleteByValue, onChange } from './UploadInput.utils';

export interface uploadInputProps {
  value: File[];
  description?: string;
  testId?: string;
  setValue: (field: string, value: File[]) => void;
  type?: string;
  name?: string;
  buttonText?: string;
  errorMessages?: {
    exceededSizeLimit: string;
    erasedCorrectly: string;
  };
}

export const UploadInput = ({
  setValue,
  value = [],
  description = 'File size limit: 3MB · Allowed file types: word, excel, PDF and Image',
  testId = 'upload-input',
  type = 'image/*, .pdf, .doc, .docx, .ppt, .pptx, .odt',
  name = 'uploadedDocs',
  buttonText = 'Add documents',
  errorMessages = {
    exceededSizeLimit: 'exceeeds the size limit',
    erasedCorrectly: 'removed correctly',
  },
}: uploadInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string[]>([]);

  useEffect(() => {
    //setting an MVP of notifications messages for errors
    if (error.length) {
      setTimeout(
        () =>
          setError((prev) => {
            const previous = [...prev];

            previous.shift();
            return previous;
          }),
        10000,
      );
    }
  }, [error]);

  const handleClick: MouseEventHandler = (e) => {
    e.preventDefault();
    if (!inputRef) return;
    return inputRef?.current?.click();
  };

  return (
    <FlexColumn>
      <WrapperLabel data-testid={testId}>
        <Button
          text={buttonText}
          variant="secondary"
          testId="upload-input-button"
          onClick={handleClick}
        />
        <Description>{description}</Description>
        <input
          ref={inputRef}
          type="file"
          style={{ display: 'none' }}
          data-testid="upload-native-input"
          accept={type}
          name={name}
          onChange={(e) =>
            onChange({
              e,
              value,
              name,
              setValue,
              setError,
              exceededSizeLimit: errorMessages.exceededSizeLimit,
            })
          }
          multiple
        />
      </WrapperLabel>
      {error.length ? (
        <ul>
          {error.map((err: string, idx: number) => (
            <ErrorMessage key={err + idx}>{err}</ErrorMessage>
          ))}
        </ul>
      ) : null}
      {value?.length ? (
        <ul data-testid="upload-input-list">
          {value.map((item) => {
            return (
              <UploadedItem
                key={item.name + item.size}
                name={item.name}
                size={item.size}
                onDeleteCB={() =>
                  deleteByValue({
                    value: item.name,
                    setValue,
                    name: name,
                    prevValue: value,
                    deletedMessage: errorMessages.erasedCorrectly,
                    setError,
                  })
                }
              />
            );
          })}
        </ul>
      ) : null}
    </FlexColumn>
  );
};
