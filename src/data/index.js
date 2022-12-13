import { IoHomeOutline } from 'react-icons/io5';
import { BiBook, BiMessageDetail, BiStar } from 'react-icons/bi';
import { RiMailLine, RiTwitterLine, RiWhatsappLine } from 'react-icons/ri';

const mail = 'fabrinuccidev@gmail.com';
const twitter = 'FabrizioDev';
const whatsapp = '+54 9 376 485-3252';

export const navigation = [
  {
    id: 1,
    name: 'home',
    translation: 'nav.home',
    Icon: IoHomeOutline,
  },
  {
    id: 2,
    name: 'skills',
    translation: 'nav.skills',
    Icon: BiStar,
  },
  {
    id: 3,
    name: 'projects',
    translation: 'nav.projects',
    Icon: BiBook,
  },
  {
    id: 4,
    name: 'contact',
    translation: 'nav.contact',
    Icon: BiMessageDetail,
  },
] 

export const projects = [
  {
    id: 1,
    title: 'Dash',
    img: 'https://my-portfolio-react-bostidev.netlify.app/static/media/portfolio1.f5e72352e5aa840702b8.jpg',
    gitUrl: 'https://github.com/fabrinucci/fabrinucci.github.io',
    demoUrl: 'https://dribbble.com/shots/17919820-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 2,
    title: 'Dash',
    img: 'https://my-portfolio-react-bostidev.netlify.app/static/media/portfolio1.f5e72352e5aa840702b8.jpg',
    gitUrl: 'https://github.com/fabrinucci/fabrinucci.github.io',
    demoUrl: 'https://dribbble.com/shots/17919820-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 3,
    title: 'Dash',
    img: 'https://my-portfolio-react-bostidev.netlify.app/static/media/portfolio1.f5e72352e5aa840702b8.jpg',
    gitUrl: 'https://github.com/fabrinucci/fabrinucci.github.io',
    demoUrl: 'https://dribbble.com/shots/17919820-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 4,
    title: 'Dash',
    img: 'https://my-portfolio-react-bostidev.netlify.app/static/media/portfolio1.f5e72352e5aa840702b8.jpg',
    gitUrl: 'https://github.com/fabrinucci/fabrinucci.github.io',
    demoUrl: 'https://dribbble.com/shots/17919820-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 5,
    title: 'Dash',
    img: 'https://my-portfolio-react-bostidev.netlify.app/static/media/portfolio1.f5e72352e5aa840702b8.jpg',
    gitUrl: 'https://github.com/fabrinucci/fabrinucci.github.io',
    demoUrl: 'https://dribbble.com/shots/17919820-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 6,
    title: 'Dash',
    img: 'https://my-portfolio-react-bostidev.netlify.app/static/media/portfolio1.f5e72352e5aa840702b8.jpg',
    gitUrl: 'https://github.com/fabrinucci/fabrinucci.github.io',
    demoUrl: 'https://dribbble.com/shots/17919820-Orion-UI-kit-Charts-templates-infographics-in-Figma'
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
    Icon: RiTwitterLine,
    title: 'Twitter',
    contact: `@${ twitter }`,
    href: `https://twitter.com/${ twitter }`,
  },
  {
    id: 3,
    Icon: RiWhatsappLine,
    title: 'Whatsapp',
    contact: `${ whatsapp }`,
    href: `https://api.whatsapp.com/send?phone=${ whatsapp }`,
  },
]