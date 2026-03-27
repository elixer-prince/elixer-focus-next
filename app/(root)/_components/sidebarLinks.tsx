import { MdHomeFilled, MdTaskAlt } from "react-icons/md";

export const defaultLinks = [
  {
    href: "/",
    icon: <MdHomeFilled size={20} />,
    label: "Home",
  },
  // {
  //   href: "/profile",
  //   icon: <MdAccountCircle size={20} />,
  //   label: "Profile",
  // },
  // {
  //   href: "/journal",
  //   icon: <MdLibraryBooks size={20} />,
  //   label: "Journal",
  // },
  {
    href: "/tasks",
    icon: <MdTaskAlt size={20} />,
    label: "Tasks",
  },
];
