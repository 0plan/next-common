"use client";

import { IExample } from "@/public/data/example";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PinRightIcon } from "@radix-ui/react-icons";

export default function Aside({
  examples,
}: Readonly<{ examples: IExample[] }>) {
  const router = useRouter();
  const pathName = usePathname();
  const handleListItemClick = (path: string) => {
    router.push(path);
  };

  return (
    <aside>
      <Sheet>
        <SheetTrigger asChild className="sm:hidden">
          <PinRightIcon />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="mb-4">Example</SheetHeader>
          <ScrollArea className="h-full">
            {examples?.map((example) => (
              <div className="y-4" key={example.title}>
                <h2 className="mb-2 text-lg font-semibold tracking-tight">
                  {example.title}
                </h2>
                <div className="space-y-1 pb-4">
                  {example.children?.map((child) => (
                    <SheetClose key={`${example.title}-${child.title}`} asChild>
                      <Button
                        variant={
                          child.path === pathName ? "secondary" : "ghost"
                        }
                        className="w-full justify-start"
                        onClick={() => handleListItemClick(child?.path)}
                      >
                        {child.title}
                      </Button>
                    </SheetClose>
                  ))}
                </div>
              </div>
            ))}
          </ScrollArea>
        </SheetContent>
      </Sheet>

      <ScrollArea className="hidden h-[calc(100vh-72px-2.5rem)] max-w-sm sm:block">
        {examples?.map((example) => (
          <div className="y-4" key={example.title}>
            <h2 className="mb-2 text-lg font-semibold tracking-tight">
              {example.title}
            </h2>
            <div className="space-y-1 pb-4">
              {example.children?.map((child) => (
                <Button
                  variant={child.path === pathName ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => handleListItemClick(child?.path)}
                  key={`${example.title}-${child.title}`}
                >
                  {child.title}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </ScrollArea>
    </aside>
  );
}
