import React from "react";
import { ContentBlock } from "./ContentBlock";

export default {
  title: "ds-react/layout/ContentBlock",
  component: ContentBlock,
  argTypes: {
    size: {
      control: {
        type: "radio",
        options: ["xs", "sm", "md", "lg"],
      },
    },
  },
};

export const Default = (props) => {
  return (
    <>
      <ContentBlock className="demo" {...props}>
        Quis deserunt irure sunt id incididunt.
      </ContentBlock>
      <style>{`.demo {
        display: flex;
        justify-content:center;
  min-height: 5rem;
  width: 100vw;
  padding:1rem;
  background: repeating-linear-gradient(
    45deg,
    #d6d6d6,
    #d6d6d6 10px,
    transparent 10px,
    transparent 20px
  );
}`}</style>
    </>
  );
};

export const Widths = () => {
  return (
    <div className="colgap">
      <ContentBlock className="demo" width="lg">
        Quis deserunt irure sunt id incididunt.
      </ContentBlock>
      <ContentBlock className="demo" width="md">
        Quis deserunt irure sunt id incididunt.
      </ContentBlock>
      <ContentBlock className="demo" width="sm">
        Quis deserunt irure sunt id incididunt.
      </ContentBlock>
      <ContentBlock className="demo" width="xs">
        Quis deserunt irure sunt id incididunt.
      </ContentBlock>
      <style>{`.demo {
        display: flex;
        justify-content:center;
  min-height: 5rem;
  gap:1rem;
  width: 100vw;
  padding:1rem;
  background: repeating-linear-gradient(
    45deg,
    #d6d6d6,
    #d6d6d6 10px,
    transparent 10px,
    transparent 20px
  );
}`}</style>
    </div>
  );
};
