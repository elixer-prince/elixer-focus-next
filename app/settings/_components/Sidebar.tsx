import Link from "next/link";

const Sidebar = () => {
  return (
    <ul>
      <li>
        <Link href="/settings">Home</Link>
      </li>
      <li>
        <Link href="/settings/timer">Timer</Link>
      </li>
      <li>
        <Link href="/settings/themes">Themes</Link>
      </li>
    </ul>
  );
};

export default Sidebar;
