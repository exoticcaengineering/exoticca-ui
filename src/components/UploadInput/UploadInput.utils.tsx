import { Dispatch, SetStateAction, ChangeEvent } from 'react';

export const handleFileUpload = (
  uploads: File[],
  setError: Dispatch<SetStateAction<string[]>>,
) => {
  const filteredList = uploads.filter((element) => {
    if (element.size >= 1048576 * 3) {
      return setError((prev) => [...prev, `File ${element.name} is too Big`]);
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
  setError,
}: {
  prevValue: File[];
  value: string;
  name: string;
  setValue: (field: string, value: File[]) => void;
  setError: Dispatch<SetStateAction<string[]>>;
}) => {
  setValue(
    name,
    prevValue.filter((item) => item.name !== value),
  );
  return setError((prev) => [...prev, `File ${name} removed correctly`]);
};

export const onChange = ({
  e,
  name,
  value,
  setValue,
  setError,
}: {
  name: string;
  value: File[];
  e: ChangeEvent<HTMLInputElement>;
  setValue: (field: string, value: File[]) => void;
  setError: Dispatch<SetStateAction<string[]>>;
}) => {
  if (!e.target?.files) {
    return;
  }
  const filteredFiles = handleFileUpload([...e.target.files], setError);
  const newData = [...value, ...filteredFiles];
  return setValue(name, newData);
};
