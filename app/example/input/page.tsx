import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function InputDemo() {
  return (
    <div className={"flex flex-col"}>
      <p>Input</p>
      <Input type="email" placeholder="Email" />
      <p>Disabled</p>
      <Input disabled type="email" placeholder="Email" />
      <p>File</p>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="picture">Picture</Label>
        <Input id="picture" type="file" />
      </div>
      <p>With Button</p>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="email" placeholder="Email" />
        <Button type="submit">Subscribe</Button>
      </div>
      <p>With Label</p>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
      <p>With Text</p>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email-2">Email</Label>
        <Input type="email" id="email-2" placeholder="Email" />
        <p className="text-sm text-muted-foreground">
          Enter your email address.
        </p>
      </div>
    </div>
  );
}
