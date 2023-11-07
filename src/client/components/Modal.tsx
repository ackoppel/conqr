import * as elements from 'typed-html';

interface IProps extends elements.Children {
  title: string;
}

const Modal = ({ title, children }: IProps) => (
  /* Backdrop */
  <div class="fixed bottom-0 left-0 right-0 top-0 z-[1001] h-full w-full overflow-auto overscroll-contain bg-black/30 py-10">
    {/* Inner */}
    <div class="mx-auto w-modal max-w-full overflow-hidden rounded-lg bg-white">
      {/* Header */}
      <div class="w-full border-b border-b-slate-300 bg-slate-100 px-4 py-2">
        <h2 class="text-title">{title}</h2>
      </div>
      {/* Body */}
      <div class="p-4">{children}</div>
    </div>
  </div>
);

export default Modal;
