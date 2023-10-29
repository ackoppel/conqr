import * as elements from "typed-html";

/** @todo - Content width */
const PageFrame = ({ children }: elements.Children) => (
  <div class="flex min-h-full flex-col items-center">{children}</div>
);

export default PageFrame;
