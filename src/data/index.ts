import bi from 'react-icons/bi/index.js'
import io5 from 'react-icons/io5/index.js'
import ri from 'react-icons/ri/index.js'
import si from 'react-icons/si/index.js'

const { IoHomeOutline } = io5
const { BiBook, BiMessageDetail, BiStar } = bi
const { RiMailLine, RiTwitterFill, RiWhatsappLine } = ri
const {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiReact,
  SiMongodb,
  SiAstro,
  SiTailwindcss,
  SiGit,
  SiMysql
} = si

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
    demoUrl: 'https://fabrinucci.github.io/',
    technologies: ['React', 'TypeScript', 'Tailwindcss']
  },
  {
    title: 'Shopi',
    img: 'https://res.cloudinary.com/bosti-web/image/upload/v1699289914/Projects/shopi.webp',
    gitUrl: 'https://github.com/fabrinucci/react-shopi',
    demoUrl: 'https://shopi-lovat.vercel.app/',
    technologies: ['React', 'TypeScript', 'Tailwindcss']
  },
  {
    title: 'Pokemon App',
    img: 'https://res.cloudinary.com/bosti-web/image/upload/v1691282923/Projects/pokemon-app.webp',
    gitUrl: 'https://github.com/fabrinucci/next-pokemon-app',
    demoUrl: 'https://pokemon-app-fn.vercel.app/',
    technologies: ['Next.js', 'TypeScript', 'NextUI']
  },
  {
    title: 'BosStream',
    img: 'https://res.cloudinary.com/bosti-web/image/upload/v1691282924/Projects/bosstream.webp',
    gitUrl: 'https://github.com/fabrinucci/next-streamer-app',
    demoUrl: 'https://next-streamer.vercel.app/',
    technologies: ['Next.js', 'TypeScript', 'Tailwindcss']
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
    name: 'Tailwindcss',
    Icon: SiTailwindcss
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
    name: 'Astro',
    Icon: SiAstro
  },
  {
    name: 'Node.js',
    Icon: SiNodedotjs
  },
  {
    name: 'Mongodb',
    Icon: SiMongodb
  },
  {
    name: 'MySQL',
    Icon: SiMysql
  },
  {
    name: 'Git',
    Icon: SiGit
  }
]
