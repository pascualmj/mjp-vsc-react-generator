import { GeneratorFile } from '../types';

export const dumbFiles: GeneratorFile = {
  component: `
import React from 'react';
import { {{NAME}}Style as S } from './{{NAME}}.style';

export const {{NAME}}: React.FC = () => {
  return <S.Container>ToDo</S.Container>;
};
`,
  style: `
import styled from 'styled-components';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { colours } from 'styles/styles';

export const {{NAME}}Style = {
  Container: styled.div\`\`,
};
`,
};
