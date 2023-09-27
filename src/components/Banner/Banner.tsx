import { FC } from 'react';
import { Wrapper, ContentSection } from './Banner.styles';
import { getPosition } from './Banner.utils';
import type { Props } from './Banner.types';

export const Banner: FC<Props> = ({
  testId = 'hero-banner-wrapper',
  height,
  verticalPosition,
  horizontalPosition,
  backgroundImg,
  Content,
  rows = 3,
  columns = 3,
}) => {
  const initialRow = getPosition(verticalPosition);
  const initialColumn = getPosition(horizontalPosition);
  return (
    <Wrapper
      data-testid={testId}
      image={backgroundImg}
      height={height}
      rows={rows}
      columns={columns}
    >
      {Content ? (
        <ContentSection column={initialColumn} row={initialRow}>
          <Content />
        </ContentSection>
      ) : null}
    </Wrapper>
  );
};
