import * as elements from 'typed-html';

import BaseHtml from '../BaseHtml';
import Header from '../Header';
import Footer from '../Footer';

const MainFrame = ({ children }: elements.Children) => (
  <BaseHtml>
    <body
      hx-boost="true"
      class="w-content text-text m-auto flex min-h-screen max-w-full flex-col items-center"
    >
      <Header />

      {children}

      <Footer />
    </body>
  </BaseHtml>
);

export default MainFrame;
