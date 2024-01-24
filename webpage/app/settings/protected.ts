import { RouterInterface } from '../models/common/layout';

// define layout
const routers: RouterInterface[] = [
  {
    id: 1,
    name: 'home',
    url: '/',
  },
  {
    id: 2,
    name: 'news',
    url: '/news',
  },
  {
    id: 3,
    name: 'learn',
    url: '/learn',
  },
];

export { routers };
