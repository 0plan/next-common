import { LucideIcon } from "lucide-react";

interface IChildren extends IExample {
  path: string;
  icon?: LucideIcon;
}
export interface IExample {
  title: string;
  children?: IChildren[];
}

export const examples: IExample[] = [
  {
    title: "Accordion",
    children: [{ title: "demo", path: "/example/accordion" }],
  },
  {
    title: "Alert",
    children: [{ title: "demo", path: "/example/alert" }],
  },
  {
    title: "Alert Dialog",
    children: [{ title: "demo", path: "/example/alert-dialog" }],
  },
  {
    title: "Aspect Ratio",
    children: [{ title: "demo", path: "/example/aspect-ratio" }],
  },
  {
    title: "Avatar",
    children: [{ title: "demo", path: "/example/avatar" }],
  },
  {
    title: "Command",
    children: [
      { title: "demo", path: "/example/command/demo" },
      { title: "combobox", path: "/example/command/combobox" },
      { title: "dialog", path: "/example/command/dialog" },
      { title: "dropdown-menu", path: "/example/command/dropdown-menu" },
      { title: "popover", path: "/example/command/popover" },
    ],
  },
  {
    title: "Context Menu",
    children: [{ title: "demo", path: "/example/context-menu" }],
  },
  {
    title: "Dialog",
    children: [{ title: "demo", path: "/example/dialog" }],
  },
  {
    title: "Dropdown Menu",
    children: [
      { title: "demo", path: "/example/dropdown-menu" },
      { title: "checkboxes", path: "/example/dropdown-menu/check-boxes" },
      { title: "radio-group", path: "/example/dropdown-menu/radio-group" },
    ],
  },
  {
    title: "Hover Card",
    children: [{ title: "demo", path: "/example/hover-card" }],
  },
  {
    title: "Input",
    children: [{ title: "demo", path: "/example/input" }],
  },
  {
    title: "Label",
    children: [{ title: "demo", path: "/example/label" }],
  },
  {
    title: "Menu Bar",
    children: [{ title: "demo", path: "/example/menubar" }],
  },
  {
    title: "Navigation Menu",
    children: [{ title: "demo", path: "/example/navigation-menu" }],
  },
  {
    title: "Popover",
    children: [{ title: "demo", path: "/example/popover" }],
  },
  {
    title: "Progress",
    children: [{ title: "demo", path: "/example/progress" }],
  },
  {
    title: "Radio Group",
    children: [{ title: "demo", path: "/example/radio-group" }],
  },
  {
    title: "Scroll Area",
    children: [{ title: "demo", path: "/example/scroll-area" }],
  },
  {
    title: "Select",
    children: [{ title: "demo", path: "/example/select" }],
  },
  {
    title: "Separator",
    children: [{ title: "demo", path: "/example/separator" }],
  },
  {
    title: "Sheet",
    children: [{ title: "demo", path: "/example/sheet" }],
  },
  {
    title: "Skeleton",
    children: [{ title: "demo", path: "/example/skeleton" }],
  },
  {
    title: "Switch",
    children: [{ title: "demo", path: "/example/switch" }],
  },
  {
    title: "Tabs",
    children: [{ title: "demo", path: "/example/tabs" }],
  },
  {
    title: "Textarea",
    children: [{ title: "demo", path: "/example/textarea" }],
  },
  {
    title: "Toast",
    children: [{ title: "demo", path: "/example/toast" }],
  },
  {
    title: "Toggle",
    children: [{ title: "demo", path: "/example/toggle" }],
  },
  {
    title: "Tooltip",
    children: [{ title: "demo", path: "/example/tooltip" }],
  },
  {
    title: "Typography",
    children: [
      { title: "demo", path: "/example/typography" },
      { title: "table", path: "/example/typography/table" },
      { title: "mark down example", path: "/example/typography/readme" },
    ],
  },
  {
    title: "Markdown Editor",
    children: [
      { title: "Viewer", path: "/example/markdown/viewer" },
      { title: "Editor", path: "/example/markdown/editor" },
    ],
  },
  {
    title: "Lineage",
    children: [
      { title: "React Diagrams", path: "/example/lineage/react-diagram" },
    ],
  },
];
