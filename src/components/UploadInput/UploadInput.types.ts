export interface uploadInputProps {
  value: File[];
  description?: string;
  testId?: string;
  setValue: (field: string, value: File[]) => void;
  type?: string;
  name?: string;
}
