import * as elements from 'typed-html';

import Button from './Button';
import { NAVIGATION_ROOT } from '../constants';

const navItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Create',
    hx: {
      get: '/goals/create',
      target: `#${NAVIGATION_ROOT}`,
      swap: 'beforeend',
    },
  },
];

const Header = () => (
  <header class="flex w-full items-center justify-between border-b border-b-slate-200 px-9 py-2">
    <div class="text-logo">
      <Button to="/">conqr</Button>
    </div>
    <nav class="flex gap-6">
      {navItems.map(({ label, href, hx }) => (
        <Button to={href} hx={hx}>
          {label}
        </Button>
      ))}
    </nav>
  </header>
);

export default Header;
