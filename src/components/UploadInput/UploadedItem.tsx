import { ProgressBar } from '../ProgressBar';
import { DocumentTextIcon } from 'src/components/SvgIcons/DocumentText';
import { TrashIcon } from 'src/components/SvgIcons/Trash';
import { TextBody3 } from '../TypographyVariants';
import {
  StyledListItem,
  ItemDescription,
  ProgressBarContainer,
} from './UploadInput.styles';

interface ItemProps {
  name: string;
  key: string;
  size: number;
  onDeleteCB: () => void;
}

export const UploadedItem = ({ name, size, onDeleteCB }: ItemProps) => {
  return (
    <StyledListItem>
      <DocumentTextIcon size="xLarge" />
      <ItemDescription>
        <TextBody3>{name}</TextBody3>
        <TextBody3>{Math.trunc(size / 1000)} Kb</TextBody3>
      </ItemDescription>

      <ProgressBarContainer>
        <ProgressBar
          progressColor="success"
          value={100}
          duration={1}
          height={9}
          fillMode="forwards"
          iterationCount=""
        />
      </ProgressBarContainer>
      <TrashIcon size="medium" onClick={onDeleteCB} />
    </StyledListItem>
  );
};
