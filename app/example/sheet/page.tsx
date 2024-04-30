"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const SHEET_POSITIONS = ["top", "right", "bottom", "left"] as const;
const SHEET_SIZES = ["sm", "default", "lg", "xl", "full", "content"] as const;

type SheetPosition = (typeof SHEET_POSITIONS)[number];
type SheetSize = (typeof SHEET_SIZES)[number];

export default function SheetPosition() {
  const [position, setPosition] = useState<SheetPosition>("right");
  const [size, setSize] = useState<SheetSize>("default");

  return (
    <div className="flex flex-col space-y-8">
      <RadioGroup
        defaultValue={position}
        onValueChange={(value) => setPosition(value as SheetPosition)}
      >
        <div className="grid grid-cols-2 gap-2">
          {SHEET_POSITIONS.map((position, index) => (
            <div
              key={`${position}-${index}`}
              className="flex items-center space-x-2"
            >
              <RadioGroupItem value={position} id={position} />
              <Label htmlFor={position}>{position}</Label>
            </div>
          ))}
        </div>
      </RadioGroup>
      <RadioGroup
        defaultValue={size}
        onValueChange={(value) => setSize(value as SheetSize)}
      >
        <div className="grid grid-cols-2 gap-2">
          {SHEET_SIZES.map((size, index) => (
            <div
              key={`${size}-${index}`}
              className="flex items-center space-x-2"
            >
              <RadioGroupItem value={size} id={size} />
              <Label htmlFor={size}>{size}</Label>
            </div>
          ))}
        </div>
      </RadioGroup>
      <Sheet>
        <SheetTrigger asChild>
          <Button>Open {position} sheet</Button>
        </SheetTrigger>
        <SheetContent side={position}>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <SheetFooter>
            <Button type="submit">Save changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
