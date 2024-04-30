"use client";

import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import { useTheme } from "next-themes";

interface IProps {
  height: number;
  markdownMessage: string;
}

export default function MarkdownEditor({ height, markdownMessage }: IProps) {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [value, setValue] = useState<string>(markdownMessage);
  const changeCode = (code: string | undefined) => {
    if (code !== undefined) setValue(code);
  };
  return (
    <div className="container">
      <div data-color-mode={currentTheme === "dark" ? "light" : "dark"}>
        <MDEditor
          value={value}
          height={height}
          onChange={(value) => changeCode(value)}
        />
      </div>
    </div>
  );
}
