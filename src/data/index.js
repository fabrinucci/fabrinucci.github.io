import { IoHomeOutline } from "react-icons/io5";
import { BiBook, BiMessageDetail, BiStar } from "react-icons/bi";

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