import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/NavigationMenu";
import { cn } from "@/lib/utils";
import ModeToggle from "@/components/ui/ModeToggle";
import { Link } from "react-router";
import { Separator } from "@/components/ui/Separator";

function Navbar() {
  return (
    <div className={cn("sticky top-0 z-50 bg-opacity-70 ")}>
      <nav className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <Link to="/">Puppy Finder</Link>
        </div>
        <div className="flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <ModeToggle />
              </NavigationMenuItem>
              <NavigationMenuItem>{/* <LogoutButton /> */}</NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
       </nav>
       <Separator />
    </div>
  );
}

export default Navbar;
