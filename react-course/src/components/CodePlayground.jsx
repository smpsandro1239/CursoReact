// Autor: Sandro Pereira (smpsandro1239)
// Projeto: CursoReact – Premium React: O Curso Definitivo (40 Aulas)

import React from 'react';
import EditorInterativo from './EditorInterativo';

const CodePlayground = ({ initialCode }) => {
  return <EditorInterativo initialCode={initialCode?.js || initialCode} />;
};

export default CodePlayground;
