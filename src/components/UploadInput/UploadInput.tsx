import { SetStateAction, useEffect, useRef } from 'react';
import { handleFileUpload } from './UploadInput.utils';
import { WrapperLabel, FlexColumn, Description } from './UploadInput.styles';
import { Button } from '../Button';
import { Tooltip } from '../Tooltip';
import { TextBody2 } from '../TypographyVariants';
import UploadedItem from './UploadedItem';
import { deleteByValue, onChange } from './UploadInput.utils';
// import { InputProps } from './Input.types';

interface props {
  value: File[] | [''];
  description?: string;
  testId?: string;
  setValue: React.Dispatch<SetStateAction<File[]>>;
  type?: string;
}

export const UploadInput = ({
  // icon,
  // label,
  // placeholder,
  // rounded,
  setValue,
  value = [],
  description = 'File size limit: 3MB · Allowed file types: word, excel, PDF and Image',
  testId = 'upload-input',
  type = 'image/*, .pdf, .doc, .docx, .ppt, .pptx, .odt',
}: // onClick,
// readOnly,
// disabled,
// className,
props) => {
  const inputRef = useRef<any>(null);

  const handleClick = (event) => {
    inputRef.current.click();
  };

  const mockedValue = [{ name: 'dsaadasda', size: '3.4kb' }];

  return (
    <FlexColumn>
      <WrapperLabel>
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
          // placeholder={placeholder}
          onChange={(e) => onChange(e, setValue)}
          multiple
        />
      </WrapperLabel>
      {value?.length ? (
        <ul>
          {value.map((item, index) => {
            console.log({ item });
            if (item === '') return;
            return (
              <>
                <UploadedItem
                  key={item.name + index}
                  name={item.name}
                  size={item.size}
                  onDeleteCB={() => deleteByValue(item.name, setValue)}
                />
              </>
            );
          })}
        </ul>
      ) : null}
    </FlexColumn>
  );
};
