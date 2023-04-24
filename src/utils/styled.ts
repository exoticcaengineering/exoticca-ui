/* eslint-disable @typescript-eslint/ban-ts-comment */

import styled from 'src/utils/styled';

const MyStyled: typeof styled =
  // @ts-ignore
  typeof styled === 'function' ? styled : styled.default;

export default MyStyled;
