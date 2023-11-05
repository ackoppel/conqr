import * as elements from 'typed-html';
import { NAVIGATION_ROOT } from '../../constants';

const PageFrame = ({ children }: elements.Children) => (
  <div
    id={NAVIGATION_ROOT}
    class="flex h-full w-full flex-col items-center px-9 py-6"
  >
    {children}
  </div>
);

export default PageFrame;
