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
    name: 'home',
    Icon: IoHomeOutline
  },
  {
    name: 'skills',
    Icon: BiStar
  },
  {
    name: 'projects',
    Icon: BiBook
  },
  {
    name: 'contact',
    Icon: BiMessageDetail
  }
]

export const projects = [
  {
    title: 'Favlog Movies',
    img: 'https://res.cloudinary.com/bosti-web/image/upload/v1691282656/Projects/favlog-movies.webp',
    gitUrl: 'https://github.com/fabrinucci/react-favlog-movies',
    demoUrl: '',
    technologies: ['React', 'TypeScript', 'Tailwindcss']
  },
  {
    title: 'BosStream',
    img: 'https://res.cloudinary.com/bosti-web/image/upload/v1691282924/Projects/bosstream.webp',
    gitUrl: 'https://github.com/fabrinucci/next-streamer-app',
    demoUrl: 'https://next-streamer.vercel.app/',
    technologies: ['Next.js', 'TypeScript', 'Tailwindcss']
  },
  {
    title: 'Pokemon App',
    img: 'https://res.cloudinary.com/bosti-web/image/upload/v1691282923/Projects/pokemon-app.webp',
    gitUrl: 'https://github.com/fabrinucci/next-pokemon-app',
    demoUrl: 'https://pokemon-app-fn.vercel.app/',
    technologies: ['Next.js', 'TypeScript', 'NextUI']
  },
  {
    title: 'Dev Finder',
    img: 'https://res.cloudinary.com/bosti-web/image/upload/v1691282924/Projects/dev-finder.webp',
    gitUrl: 'https://github.com/fabrinucci/react-dev-finder',
    demoUrl: 'https://fabrinucci.github.io/react-dev-finder/',
    technologies: ['React', 'Material UI']
  },
  {
    title: 'Heroes App',
    img: 'https://res.cloudinary.com/bosti-web/image/upload/v1691282924/Projects/heroes-app.webp',
    gitUrl: 'https://github.com/fabrinucci/react-heroes-app',
    demoUrl: 'https://heroes-app-fn.netlify.app/',
    technologies: ['React', 'Router Dom', 'Bootstrap']
  },

  {
    title: 'Patient Manager',
    img: 'https://res.cloudinary.com/bosti-web/image/upload/v1691282923/Projects/patient-manager.webp',
    gitUrl: 'https://github.com/fabrinucci/app-citas-mascotas-react',
    demoUrl: 'https://app-citas-bosti.netlify.app/',
    technologies: ['React']
  }
]

export const contact = [
  {
    Icon: RiMailLine,
    title: 'Email',
    contact: `${mail}`,
    href: `mailto:${mail}`
  },
  {
    Icon: RiTwitterFill,
    title: 'Twitter',
    contact: `@${twitter}`,
    href: `https://twitter.com/${twitter}`
  },
  {
    Icon: RiWhatsappLine,
    title: 'Whatsapp',
    contact: `${whatsapp}`,
    href: `https://wa.me/${whatsapp}`
  }
]

export const skills = [
  {
    name: 'HTML',
    Icon: SiHtml5
  },
  {
    name: 'CSS',
    Icon: SiCss3
  },
  {
    name: 'JavaScript',
    Icon: SiJavascript
  },
  {
    name: 'React',
    Icon: SiReact
  },
  {
    name: 'TypeScript',
    Icon: SiTypescript
  },
  {
    name: 'Next.js',
    Icon: SiNextdotjs
  },
  {
    name: 'Node.js',
    Icon: SiNodedotjs
  },
  {
    name: 'Mongodb',
    Icon: SiMongodb
  }
]