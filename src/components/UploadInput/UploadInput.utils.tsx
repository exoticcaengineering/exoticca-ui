import { Dispatch, SetStateAction, ChangeEvent } from 'react';

export const handleFileUpload = (
  uploads: File[],
  setError: Dispatch<SetStateAction<string[]>>,
  exceededSizeLimit: string,
) => {
  const filteredList = uploads.filter((element) => {
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
    prevValue.filter((item) => item.name !== value),
  );
  setValue(
    name,
    prevValue.filter((item) => item.name !== value),
  );

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
  );
  const newData = [...value, ...filteredFiles];
  return setValue(name, newData);
};
