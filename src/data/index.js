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
    title: 'Favlog Movies',
    img: 'https://res.cloudinary.com/bosti-web/image/upload/v1691282656/Projects/favlog-movies.webp',
    gitUrl: 'https://github.com/fabrinucci/react-favlog-movies',
    demoUrl: '',
    technologies: ['React', 'TypeScript', 'Tailwindcss']
  },
  {
    id: 2,
    title: 'BosStream',
    img: 'https://res.cloudinary.com/bosti-web/image/upload/v1691282924/Projects/bosstream.webp',
    gitUrl: 'https://github.com/fabrinucci/next-streamer-app',
    demoUrl: 'https://next-streamer.vercel.app/',
    technologies: ['Next.js', 'TypeScript', 'Tailwindcss']
  },
  {
    id: 3,
    title: 'Pokemon App',
    img: 'https://res.cloudinary.com/bosti-web/image/upload/v1691282923/Projects/pokemon-app.webp',
    gitUrl: 'https://github.com/fabrinucci/next-pokemon-app',
    demoUrl: 'https://pokemon-app-fn.vercel.app/',
    technologies: ['Next.js', 'TypeScript', 'NextUI']
  },
  {
    id: 4,
    title: 'Dev Finder',
    img: 'https://res.cloudinary.com/bosti-web/image/upload/v1691282924/Projects/dev-finder.webp',
    gitUrl: 'https://github.com/fabrinucci/react-dev-finder',
    demoUrl: 'https://fabrinucci.github.io/react-dev-finder/',
    technologies: ['React', 'Material UI']
  },
  {
    id: 5,
    title: 'Heroes App',
    img: 'https://res.cloudinary.com/bosti-web/image/upload/v1691282924/Projects/heroes-app.webp',
    gitUrl: 'https://github.com/fabrinucci/react-heroes-app',
    demoUrl: 'https://heroes-app-fn.netlify.app/',
    technologies: ['React', 'Router Dom', 'Bootstrap']
  },

  {
    id: 6,
    title: 'Patient Manager',
    img: 'https://res.cloudinary.com/bosti-web/image/upload/v1691282923/Projects/patient-manager.webp',
    gitUrl: 'https://github.com/fabrinucci/app-citas-mascotas-react',
    demoUrl: 'https://app-citas-bosti.netlify.app/',
    technologies: ['React']
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
