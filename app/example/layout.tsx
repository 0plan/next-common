import Aside from "@/components/aside";
import { examples } from "@/public/data/example";
import * as React from "react";

export default function Example({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <Aside examples={examples} />
      <main className="container">{children}</main>
    </div>
  );
}
