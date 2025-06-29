import { useTheme } from '@/hooks/theme-provider';
import { Link } from '@inertiajs/react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';

export const NavMenu = () => {
  const { theme } = useTheme();

  const menuItemClass = `${
    theme === 'dark' ? 'hover:bg-slate-800' : 'hover:bg-slate-200'
  } rounded-md p-2 text-sm font-medium`;

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link
              href="/"
              className="bg-transparent hover:bg-transparent hover:text-slate-700 dark:hover:text-slate-200"
            >
              <span className="font-bold">Blog</span>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent uppercase hover:bg-transparent hover:text-slate-700 data-[state=open]:hover:bg-transparent data-[state=open]:focus:bg-accent dark:hover:text-slate-200">
            <span className="font-bold">Menu</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li className="grid grid-cols-1 p-2">
                <NavigationMenuLink asChild className={menuItemClass}>
                  <Link href="#">Components</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild className={menuItemClass}>
                  <Link href="#">Documentation</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild className={menuItemClass}>
                  <Link href="#">Blocks</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link
              href="/"
              className="bg-transparent hover:bg-transparent hover:text-slate-700 dark:hover:text-slate-200"
            >
              <span className="font-bold">Contact</span>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
