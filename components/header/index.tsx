"use client";

import Link from "next/link";
import MobileMenu from "@/components/header/mobile-menu";
import { ToggleTheme } from "@/components/theme";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Menu from "@/components/header/menu";
import * as React from "react";

export function Header() {
  const menuItems = [{ path: "/example", name: "Example" }];

  return (
    <header className="fixed top-0 z-50 flex w-full flex-wrap justify-start py-4 text-sm backdrop-blur-sm">
      <nav className="mx-auto flex w-full max-w-[85rem] items-center justify-between px-4">
        <div className="sm:hidden">
          <MobileMenu menuItems={menuItems} />
        </div>
        <Link href="/" className="text-left text-xl font-semibold">
          <span className="font-bold sm:inline-block">TITLE</span>
        </Link>
        <div className="hidden grow basis-full sm:block">
          <Menu menuItems={menuItems} />
        </div>
        <div className="flex items-center justify-end sm:px-10">
          <Link
            href="https://github.com/0plan/next-common"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant={"ghost"} className={"w-9 px-0"}>
              <GitHubLogoIcon className="size-4" />
              <span className="sr-only">Github</span>
            </Button>
          </Link>
          <ToggleTheme />
        </div>
      </nav>
    </header>
  );
}
