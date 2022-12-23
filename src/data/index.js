import { IoHomeOutline } from 'react-icons/io5';
import { BiBook, BiMessageDetail, BiStar } from 'react-icons/bi';
import { RiMailLine, RiTwitterFill, RiWhatsappLine } from 'react-icons/ri';

const mail = 'fabrinuccidev@gmail.com';
const twitter = 'FabrizioDev';
const whatsapp = '5493764853252';

export const navigation = [
  {
    id: 1,
    name: 'home',
    Icon: IoHomeOutline,
    translate: 'nav.home'
  },
  {
    id: 2,
    name: 'skills',
    Icon: BiStar,
    translate: 'nav.skills'
  },
  {
    id: 3,
    name: 'projects',
    Icon: BiBook,
    translate: 'nav.projects'
  },
  {
    id: 4,
    name: 'contact',
    Icon: BiMessageDetail,
    translate: 'nav.contact'
  },
] 

export const projects = [
  {
    id: 1,
    title: 'projects.project1',
    img: 'https://i.imgur.com/36yMPCK.png',
    gitUrl: 'https://github.com/fabrinucci/bata-bit',
    demoUrl: 'https://bata-bit-bosti.netlify.app'
  },
  {
    id: 2,
    title: 'projects.project2',
    img: 'https://i.imgur.com/oy7wkG0.png',
    gitUrl: 'https://github.com/fabrinucci/app-citas-mascotas-react',
    demoUrl: 'https://app-citas-bosti.netlify.app/'
  },
  {
    id: 3,
    title: 'projects.project3',
    img: 'https://i.imgur.com/yDOxg4u.png',
    gitUrl: 'https://github.com/fabrinucci/My-crypto-app-react',
    demoUrl: 'https://bosti-react-crypto.netlify.app/'
  },
  {
    id: 4,
    title: 'projects.project4',
    img: 'https://my-portfolio-react-bostidev.netlify.app/static/media/portfolio1.f5e72352e5aa840702b8.jpg',
    gitUrl: 'https://github.com/fabrinucci/react-dev-finder',
    demoUrl: 'https://dribbble.com/shots/17919820-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 5,
    title: 'projects.project5',
    img: 'https://my-portfolio-react-bostidev.netlify.app/static/media/portfolio1.f5e72352e5aa840702b8.jpg',
    gitUrl: 'https://github.com/fabrinucci/fabrinucci.github.io',
    demoUrl: 'https://dribbble.com/shots/17919820-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 6,
    title: 'projects.project6',
    img: 'https://i.imgur.com/Aq7BfmY.png',
    gitUrl: 'https://github.com/fabrinucci/next-pokemon-app-old-version',
    demoUrl: 'https://pokemon-app-fn.vercel.app/'
  },
]

export const contact = [
  {
    id: 1,
    Icon: RiMailLine,
    title: 'Email',
    contact: `${ mail }`,
    href: `mailto:${ mail }`,
  },
  {
    id: 2,
    Icon: RiTwitterFill,
    title: 'Twitter',
    contact: `@${ twitter }`,
    href: `https://twitter.com/${ twitter }`,
  },
  {
    id: 3,
    Icon: RiWhatsappLine,
    title: 'Whatsapp',
    contact: `${ whatsapp }`,
    href: `https://wa.me/${ whatsapp }`,
  },
]

export const experience = [
  {
    id: 1,
    name: 'HTML',
    level: 'skills.intermediate',
  },
  {
    id: 2,
    name: 'CSS',
    level: 'skills.intermediate',
  },
  {
    id: 3,
    name: 'JavaScript',
    level: 'skills.intermediate',
  },
  {
    id: 4,
    name: 'React',
    level: 'skills.intermediate',
  },
  {
    id: 5,
    name: 'TypeScript',
    level: 'skills.basic',
  },
  {
    id: 6,
    name: 'Node.js',
    level: 'skills.basic',
  },
]