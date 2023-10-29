import * as elements from 'typed-html';

import Link from './Link';

const navItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Create',
    href: '/create',
  },
];

const Header = () => (
  <header class="flex w-full items-center justify-between border-b border-b-slate-200 px-9 py-2">
    <div class="text-title">conqr</div>
    <nav class="flex gap-6">
      {navItems.map(({ label, href }) => (
        <Link to={href}>{label}</Link>
      ))}
    </nav>
  </header>
);

export default Header;
