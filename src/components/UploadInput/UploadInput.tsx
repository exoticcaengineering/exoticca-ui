import { useRef } from 'react';
import { WrapperLabel, FlexColumn, Description } from './UploadInput.styles';
import { Button } from '../Button';
import UploadedItem from './UploadedItem';
import { deleteByValue, onChange } from './UploadInput.utils';

interface props {
  value: File[];
  description?: string;
  testId?: string;
  setValue: (field: string, value: File[]) => void;
  type?: string;
  name?: string;
}

export const UploadInput = ({
  setValue,
  value = [],
  description = 'File size limit: 3MB · Allowed file types: word, excel, PDF and Image',
  testId = 'upload-input',
  type = 'image/*, .pdf, .doc, .docx, .ppt, .pptx, .odt',
  name = 'uploadedDocs',
}: props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = (e) => {
    e.preventDefault();
    if (!inputRef) return;
    return inputRef?.current?.click();
  };

  return (
    <FlexColumn>
      <WrapperLabel data-testid={testId}>
        <Button
          text="Add documents"
          variant="secondary"
          onClick={handleClick}
        />
        <Description>{description}</Description>
        <input
          ref={inputRef}
          type="file"
          style={{ display: 'none' }}
          id="uploads"
          accept={type}
          name={name}
          onChange={(e) => onChange({ e, value, name, setValue })}
          multiple
        />
      </WrapperLabel>
      {value?.length ? (
        <ul>
          {value.map((item, index) => {
            console.log({ item });
            return (
              <>
                <UploadedItem
                  key={item.name + index}
                  name={item.name}
                  size={item.size}
                  onDeleteCB={() =>
                    deleteByValue({
                      value: item.name,
                      setValue,
                      name: name,
                      prevValue: value,
                    })
                  }
                />
              </>
            );
          })}
        </ul>
      ) : null}
    </FlexColumn>
  );
};
