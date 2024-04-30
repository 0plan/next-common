import { Bold, Italic, Underline } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

export default function ToggleDemo() {
  return (
    <div>
      <Toggle aria-label="Toggle italic">
        <Bold className="size-4" />
      </Toggle>
      <Toggle aria-label="Toggle italic" disabled>
        <Underline className="size-4" />
      </Toggle>
      <Toggle size="lg" aria-label="Toggle italic">
        <Italic className="size-4" />
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle italic">
        <Italic className="size-4" />
      </Toggle>
      <Toggle size="sm" aria-label="Toggle italic">
        <Italic className="size-4" />
      </Toggle>
      <Toggle aria-label="Toggle italic">
        <Italic className="mr-2 size-4" />
        Italic
      </Toggle>
    </div>
  );
}
