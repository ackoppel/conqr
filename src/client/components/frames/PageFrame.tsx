import * as elements from 'typed-html';
import { NAVIGATION_ROOT } from '../../constants';

const PageFrame = ({ children }: elements.Children) => (
  <div
    id={NAVIGATION_ROOT}
    class="py-4 flex h-full w-full flex-col items-center"
  >
    {children}
  </div>
);

export default PageFrame;
