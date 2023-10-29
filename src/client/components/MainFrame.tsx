import * as elements from 'typed-html';

import BaseHtml from './BaseHtml';

const MainFrame = ({ children }: elements.Children) => (
  <BaseHtml>
    <body class="flex h-screen w-screen flex-col items-center">
      <header></header>

      {children}

      <footer></footer>
    </body>
  </BaseHtml>
);

export default MainFrame;
