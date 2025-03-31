import React from "react";

import { cn } from "@/lib/utils";
import { Link } from "react-router";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "../ui/NavigationMenu";
import ModeToggle from "../ui/ModeToggle";
import LogoutButton from "../ui/LogoutButton";
import { Separator } from "../ui/Separator";

export default function Navbar() {
  return (
    <div className={cn("sticky top-0 z-50 bg-opacity-70")}>
      <nav className="flex items-center justify-between p-4 bg-background ">
        <div className="flex items-center space-x-4">
          <Link to="/">Furever Friend</Link>
        </div>
        <div className="flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem className={cn("text-inherit top-[3px]")}>
                <ModeToggle />
              </NavigationMenuItem>
              <NavigationMenuItem>
                <LogoutButton />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
      <Separator />
    </div>
  );
}
