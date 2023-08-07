import { Dispatch, SetStateAction, ChangeEvent } from 'react';

const duplicityCheck = (arr) => {
  const IDs = new Set(arr.map((item) => item.name));
  console.log('ids', IDs);
};

export const handleFileUpload = (
  uploads: File[],
  setError: Dispatch<SetStateAction<string[]>>,
  exceededSizeLimit: string,
  uploadedList: File[],
) => {
  const filteredList = uploads.filter((element) => {
    //CHECK IF ALREADY EXIST
    if (
      uploadedList.some(
        (e) => e.name === element.name && e.size === element.size,
      )
    ) {
      console.log('heyyy i found it ', element);
      return false;
    }
    if (element.size >= 1048576 * 3) {
      return setError((prev) => [
        ...prev,
        `${element.name}${exceededSizeLimit}`,
      ]);
    }
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
  deletedMessage,
  setError,
}: {
  prevValue: File[];
  value: string;
  name: string;
  deletedMessage: string;
  setValue: (field: string, value: File[]) => void;
  setError: Dispatch<SetStateAction<string[]>>;
}) => {
  console.log(
    'filter -> ',
    name,
    prevValue.filter((item) => item.name !== value),
  );
  setValue(name, [...new Set(prevValue.filter((item) => item.name !== value))]);

  return setError((prev) => [...prev, `${name} ${deletedMessage}`]);
};

export const onChange = ({
  e,
  name,
  value,
  exceededSizeLimit,
  setValue,
  setError,
}: {
  name: string;
  value: File[];
  e: ChangeEvent<HTMLInputElement>;
  setValue: (field: string, value: File[]) => void;
  setError: Dispatch<SetStateAction<string[]>>;
  exceededSizeLimit: string;
}) => {
  if (!e.target?.files) {
    return;
  }

  const filteredFiles = handleFileUpload(
    [...e.target.files],
    setError,
    exceededSizeLimit,
    value,
  );
  duplicityCheck([...value, ...filteredFiles]);
  const newData = [...new Set([...value, ...filteredFiles])];
  console.log(newData);
  return setValue(name, newData);
};
