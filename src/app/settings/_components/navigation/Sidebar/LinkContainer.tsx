import { settingsLinks } from "@/app/settings/_components/navigation/Sidebar/links";
import SidebarLink from "@/ui/components/SidebarLink";

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
