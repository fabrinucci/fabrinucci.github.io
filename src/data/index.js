import { IoHomeOutline } from 'react-icons/io5'
import { BiBook, BiMessageDetail, BiStar } from 'react-icons/bi'
import { RiMailLine, RiTwitterFill, RiWhatsappLine } from 'react-icons/ri'
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiReact,
  SiMongodb
} from 'react-icons/si'

const mail = 'fabrinuccidev@gmail.com'
const twitter = 'FabrizioDev'
const whatsapp = '5493764853252'

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
  }
]

export const projects = [
  {
    id: 1,
    title: 'projects.project1',
    img: 'https://i.imgur.com/36yMPCK.png',
    gitUrl: 'https://github.com/fabrinucci/bata-bit',
    demoUrl: 'https://bata-bit-bosti.netlify.app',
    technologies: ['Html', 'Css']
  },
  {
    id: 2,
    title: 'projects.project2',
    img: 'https://i.imgur.com/oy7wkG0.png',
    gitUrl: 'https://github.com/fabrinucci/app-citas-mascotas-react',
    demoUrl: 'https://app-citas-bosti.netlify.app/',
    technologies: ['React']
  },
  {
    id: 3,
    title: 'projects.project3',
    img: 'https://i.imgur.com/yDOxg4u.png',
    gitUrl: 'https://github.com/fabrinucci/My-crypto-app-react',
    demoUrl: 'https://bosti-react-crypto.netlify.app/',
    technologies: ['React']
  },
  {
    id: 4,
    title: 'projects.project4',
    img: 'https://my-portfolio-react-bostidev.netlify.app/static/media/portfolio1.f5e72352e5aa840702b8.jpg',
    gitUrl: 'https://github.com/fabrinucci/react-dev-finder',
    demoUrl:
      'https://dribbble.com/shots/,17919820-Orion-UI-kit-Charts-templates-infographics-in-Figma',
    technologies: ['React', 'Material UI']
  },
  {
    id: 5,
    title: 'projects.project5',
    img: 'https://my-portfolio-react-bostidev.netlify.app/static/media/portfolio1.f5e72352e5aa840702b8.jpg',
    gitUrl: 'https://github.com/fabrinucci/fabrinucci.github.io',
    demoUrl:
      'https://dribbble.com/shots/,17919820-Orion-UI-kit-Charts-templates-infographics-in-Figma',
    technologies: ['React']
  },
  {
    id: 6,
    title: 'projects.project6',
    img: 'https://i.imgur.com/Aq7BfmY.png',
    gitUrl: 'https://github.com/fabrinucci/next-pokemon-app-old-version',
    demoUrl: 'https://pokemon-app-fn.vercel.app/',
    technologies: ['Next.js', 'TypeScript', 'NextUI']
  }
]

export const contact = [
  {
    id: 1,
    Icon: RiMailLine,
    title: 'Email',
    contact: `${mail}`,
    href: `mailto:${mail}`
  },
  {
    id: 2,
    Icon: RiTwitterFill,
    title: 'Twitter',
    contact: `@${twitter}`,
    href: `https://twitter.com/${twitter}`
  },
  {
    id: 3,
    Icon: RiWhatsappLine,
    title: 'Whatsapp',
    contact: `${whatsapp}`,
    href: `https://wa.me/${whatsapp}`
  }
]

export const skills = [
  {
    id: 1,
    name: 'HTML',
    Icon: SiHtml5
  },
  {
    id: 2,
    name: 'CSS',
    Icon: SiCss3
  },
  {
    id: 3,
    name: 'JavaScript',
    Icon: SiJavascript
  },
  {
    id: 4,
    name: 'React',
    Icon: SiReact
  },
  {
    id: 5,
    name: 'TypeScript',
    Icon: SiTypescript
  },
  {
    id: 6,
    name: 'Next.js',
    Icon: SiNextdotjs
  },
  {
    id: 7,
    name: 'Node.js',
    Icon: SiNodedotjs
  },
  {
    id: 8,
    name: 'Mongodb',
    Icon: SiMongodb
  }
]
