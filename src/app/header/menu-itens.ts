export class MenuItem {
  name: string;
  text: string;
  route: string;
  active: boolean;
}

export const menuItems: MenuItem[] = [
  {
    name: 'dashboard',
    text: 'Home',
    route: '/dashboard',
    active: true
  },
  {
    name: 'company',
    text: 'Empresa',
    route: '/company',
    active: false
  },
  {
    name: 'distribution',
    text: 'Distribuição',
    route: '/distribution',
    active: false
  },
  {
    name: 'contact',
    text: 'Contato',
    route: '/contact',
    active: false
  },
];
