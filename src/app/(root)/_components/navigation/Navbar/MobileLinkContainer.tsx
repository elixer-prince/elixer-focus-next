import MobileLink from "@/app/(root)/_components/navigation/Navbar/MobileLink";
import { defaultLinks } from "@/app/(root)/_components/navigation/links";

const MobileLinkContainer = () => {
  return (
    <ul className="w-full max-w-100 space-y-2">
      {defaultLinks.map(({ href, icon, label }) => (
        <li key={href}>
          <MobileLink href={href}>
            {icon} {label}
          </MobileLink>
        </li>
      ))}
    </ul>
  );
};

export default MobileLinkContainer;
