import { defaultLinks } from "@/app/(root)/_components/navigation/links";
import SidebarLink from "@/ui/components/SidebarLink";

const Sidebar = () => {
  return (
    // Default Sidebar
    <nav>
      <ul className="border-r-base-content/50 fixed top-(--navbar-height) bottom-0 hidden w-(--sidebar-width) flex-col overflow-y-auto border-r px-3 pt-6 select-none md:flex">
        {defaultLinks.map(({ icon, href, label }) => (
          <li key={href}>
            <SidebarLink href={href}>
              {icon} {label}
            </SidebarLink>
          </li>
        ))}
      </ul>

      {/*<div className="mt-auto px-4 py-2">(Profile)</div>*/}
    </nav>
  );
};

export default Sidebar;
