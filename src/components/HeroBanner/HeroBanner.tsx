import { FC } from 'react';

import { Wrapper, ContentSection } from '../HeroBanner/HeroBanner.styles';
import { Props } from './HeroBanner.types';
import { getPosition } from './HeroBanner.utils';

export const HeroBanner: FC<Props> = ({
  testId = 'hero-banner-wrapper',
  height,
  verticalPosition,
  horizontalPosition,
  backgroundImg,
  Content,
}) => {
  const initialRow = getPosition(verticalPosition);
  const initialColumn = getPosition(horizontalPosition);
  return (
    <Wrapper data-testid={testId} image={backgroundImg} height={height}>
      {Content ? (
        <ContentSection column={initialColumn} row={initialRow}>
          <Content />
        </ContentSection>
      ) : null}
    </Wrapper>
  );
};
