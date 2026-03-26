import Link from "next/link";

const Sidebar = () => {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/tasks">Tasks</Link>
      </li>
      <li>
        <Link href="/journal">Journal</Link>
      </li>
    </ul>
  );
};

export default Sidebar;
