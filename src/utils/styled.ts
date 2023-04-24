/* eslint-disable @typescript-eslint/ban-ts-comment */

import styled from 'styled-components';

const MyStyled: typeof styled =
  // @ts-ignore
  typeof styled === 'function' ? styled : styled.default;

export default MyStyled;
