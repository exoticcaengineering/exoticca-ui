import { Icon } from '../Icon';
import { ProgressBar } from '../ProgressBar';
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
      <Icon icon="document-text" size="xLarge" />
      <ItemDescription>
        <TextBody3>{name}</TextBody3>
        <TextBody3>{Math.trunc(size / 1000)} Kb</TextBody3>
      </ItemDescription>

      <ProgressBarContainer>
        <ProgressBar
          progressColor="success"
          progressFrom={0}
          progressTo={100}
          duration={1}
          height={9}
          fillMode="forwards"
          iterationCount=""
        />
      </ProgressBarContainer>
      <Icon icon="trash" size="medium" onClick={onDeleteCB} />
    </StyledListItem>
  );
};
