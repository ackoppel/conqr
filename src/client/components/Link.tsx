import * as elements from 'typed-html';
import { NAVIGATION_ROOT } from '../constants';

interface IProps extends elements.Children {
  to: string;
  className?: string;
}

const Link = ({ to, className = '', children }: IProps) => (
  <a
    class={className}
    href={to}
    hx-target={`#${NAVIGATION_ROOT}`}
    hx-swap="outerHTML"
  >
    {children}
  </a>
);

export default Link;
