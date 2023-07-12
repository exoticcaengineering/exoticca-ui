import { useEffect } from 'react';
import { Icon } from '../Icon';
import { ProgressBar } from '../ProgressBar';
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

const UploadedItem = ({ name, size, key, onDeleteCB }: ItemProps) => {
  return (
    <StyledListItem key={key}>
      <Icon icon="document-text" size="xLarge" flexShrink={0} />
      <ItemDescription>
        <span>{name}</span>
        <span>{Math.trunc(size / 1000)} Kb</span>
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
      <Icon
        style={{ cursor: 'pointer' }}
        icon="trash"
        size="medium"
        flexShrink={0}
        onClick={onDeleteCB}
      />
    </StyledListItem>
  );
};

export default UploadedItem;
