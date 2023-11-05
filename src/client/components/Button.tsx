import * as elements from 'typed-html';
import { NAVIGATION_ROOT } from '../constants';

interface IHxProps {
  get?: string;
  target?: string;
  swap?: string;
}

const toHxElementProps = (props?: IHxProps) =>
  Object.entries(props || {}).reduce((acc, [key, val]) => {
    acc[`hx-${key}`] = val;
    return acc;
  }, {});

interface IProps extends elements.Children {
  to?: string;
  className?: string;
  hx?: IHxProps;
  type?: string;
}

const Button = ({
  to = '',
  className = '',
  hx = {},
  type = '',
  children,
}: IProps) =>
  to ? (
    <a
      class={className}
      href={to}
      hx-target={`#${NAVIGATION_ROOT}`}
      hx-swap="outerHTML"
      {...toHxElementProps(hx)}
    >
      {children}
    </a>
  ) : (
    <button
      class={`m-0 w-auto appearance-none border-none bg-transparent p-0 ${className}`}
      type={type}
      {...toHxElementProps(hx)}
    >
      {children}
    </button>
  );

export default Button;
