import SidebarLink from "@/app/components/ui/SidebarLink";
import { settingsLinks } from "@/app/settings/_components/navigation/Sidebar/links";

const LinkContainer = () => {
  return (
    <ul className="max-sm:hidden">
      {settingsLinks.map(({ name, path }, index) => (
        <li key={index}>
          <SidebarLink href={path}>{name}</SidebarLink>
        </li>
      ))}
    </ul>
  );
};

export default LinkContainer;
