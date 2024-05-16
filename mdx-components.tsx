import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 className="scroll-m-20 border-b py-4 tracking-tight text-primary">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="scroll-m-20 py-4 tracking-tight">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="scroll-m-24 py-4 tracking-tight">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="scroll-m-20 tracking-tight">{children}</h4>
    ),
    p: ({ children }) => (
      <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-2 pl-6">{children}</blockquote>
    ),
    ul: ({ children }) => (
      <ul className="ml-6 list-disc py-6 [&>li]:mt-2">{children}</ul>
    ),
    table: ({ children }) => <table className={"w-full"}>{children}</table>,
    tr: ({ children }) => (
      <tr className="m-0 border-t p-0 even:bg-muted">{children}</tr>
    ),
    th: ({ children }) => (
      <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
        {children}
      </td>
    ),
    a: ({ href, children }) => (
      <div className={""}>
        <a href={href} className={"underline"}>
          {children}
        </a>
      </div>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
      />
    ),
    pre: ({ children }) => (
      <div className="my-4">
        <pre>{children}</pre>
      </div>
    ),

    ...components,
  };
}
