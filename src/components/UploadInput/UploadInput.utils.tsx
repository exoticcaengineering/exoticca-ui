import { ChangeEvent, SetStateAction } from 'react';

export const handleFileUpload = (uploads: File[]) => {
  const filteredList = uploads.filter((element) => {
    console.log(element.size <= 1048576 * 3, {
      size: element.size,
      totalSize: 1048576 * 3,
    });

    return element.size <= 1048576 * 3;
  });
  // const  fileType = file.type; // image/jpeg
  // let fileSize = file.size; // 3MB

  return filteredList;
};
export const deleteByValue = (
  value: string,
  setValue: React.Dispatch<SetStateAction<File[]>>,
) => {
  return setValue((prev) => {
    console.log('inside remove', { value, prev });
    return prev.filter((item) => item.name !== value);
  });
};

export const onChange = (
  e: ChangeEvent<HTMLInputElement>,
  setValue: React.Dispatch<SetStateAction<File[]>>,
) => {
  if (!e.target?.files) {
    return;
  }
  const filteredFiles = handleFileUpload([...e.target.files]);
  console.log('INSIDE ACTION', [...e.target.files]);
  setValue((prev) => {
    console.log('prev', prev);
    return [...prev, ...filteredFiles] as File[];
  });
};
