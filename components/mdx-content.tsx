import { MDXContent as MDXContent_ } from "@content-collections/mdx/react";
import { mdxComponents } from "./mdx-components";

export const MDXContent = (props: React.ComponentProps<typeof MDXContent_>) => {
  return (
    <MDXContent_
      {...props}
      components={{ ...mdxComponents, ...props.components }}
    />
  );
};
