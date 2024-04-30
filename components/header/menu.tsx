import Link from "next/link";
import { usePathname } from "next/navigation";

export interface IMenu {
  name: string;
  path: string;
}
interface IProps {
  menuItems: IMenu[];
}

function Menu({ menuItems }: IProps) {
  const pathName = usePathname();
  const isActive = (path: string) => pathName?.includes(path);
  return (
    <div className="mt-5 flex flex-col gap-5 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:ps-5">
      {menuItems.map((menu) => (
        <Link
          className={isActive(menu.path.toString()) ? "text-primary" : ""}
          key={menu.path}
          href={menu.path}
        >
          {menu.name}
        </Link>
      ))}
    </div>
  );
}

export default Menu;
