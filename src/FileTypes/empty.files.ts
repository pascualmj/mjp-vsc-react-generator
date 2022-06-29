import { GeneratorFile } from '../types';

export const emptyFiles: GeneratorFile = {
  component: `
import React from 'react';

export const {{NAME}}: React.FC = () => {
  return <>ToDo</>;
};
`,
};
