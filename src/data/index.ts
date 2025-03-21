import { BiBook, BiMessageDetail, BiStar } from 'react-icons/bi'
import { IoHomeOutline } from 'react-icons/io5'
import { RiLinkedinFill, RiMailLine, RiTwitterXFill } from 'react-icons/ri'
import {
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
} from 'react-icons/si'

const mail = 'fabrinuccidev@gmail.com'
const twitter = 'FabrizioDev'
const linkedin = 'fabrinucci'

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
    demoUrl: 'https://favlog-movies.vercel.app/',
    technologies: ['Next.js', 'TypeScript', 'Tailwindcss']
  },
  {
    title: 'InmoBO',
    img: 'https://res.cloudinary.com/bosti-web/image/upload/v1718566080/Projects/inmobo.webp',
    gitUrl: 'https://github.com/fabrinucci/inmobo-client',
    demoUrl: 'https://inmobo.vercel.app/',
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
    title: 'Shopi',
    img: 'https://res.cloudinary.com/bosti-web/image/upload/v1699289914/Projects/shopi.webp',
    gitUrl: 'https://github.com/fabrinucci/react-shopi',
    demoUrl: 'https://shopi-lovat.vercel.app/',
    technologies: ['React', 'TypeScript', 'Tailwindcss']
  },
]

export const contact = [
  {
    Icon: RiMailLine,
    title: 'Email',
    contact: `${mail}`,
    href: `mailto:${mail}`
  },
  {
    Icon: RiTwitterXFill,
    title: 'Twitter',
    contact: `@${twitter}`,
    href: `https://x.com/${twitter}`
  },
  {
    Icon: RiLinkedinFill,
    title: 'LinkedIn',
    contact: `${linkedin}`,
    href: `https://www.linkedin.com/in/${linkedin}`
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
