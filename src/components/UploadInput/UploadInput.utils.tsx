import { ChangeEvent, SetStateAction } from 'react';

export const handleFileUpload = (uploads: File[]) => {
  const filteredList = uploads.filter((element) => {
    console.log(element.size <= 1048576 * 3, {
      size: element.size,
      totalSize: 1048576 * 3,
    });
    //MAX SIZE 3 MB PER EACH FILE
    return element.size <= 1048576 * 3;
  });

  return filteredList;
};
export const deleteByValue = ({
  prevValue,
  value,
  name,
  setValue,
}: {
  prevValue: File[];
  value: string;
  name: string;
  setValue: (field: string, value: File[]) => void;
}) => {
  return setValue(
    name,
    prevValue.filter((item) => item.name !== value),
  );
};

export const onChange = ({
  e,
  name,
  value,
  setValue,
}: {
  name: string;
  value: File[];
  e: ChangeEvent<HTMLInputElement>;
  setValue: (field: string, value: File[]) => void;
}) => {
  if (!e.target?.files) {
    return;
  }
  const filteredFiles = handleFileUpload([...e.target.files]);
  console.log('INSIDE ACTION', [...e.target.files]);
  const newData = [...value, ...filteredFiles];
  console.log(newData);
  return setValue(name, newData);
};
