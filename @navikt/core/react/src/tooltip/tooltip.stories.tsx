import React, { useState } from "react";
import { Tooltip } from "../index";
import { Meta } from "@storybook/react/types-6-0";
import { Refresh } from "@navikt/ds-icons";
import { Button } from "../..";

export default {
  title: "ds-react/tooltip",
  component: Tooltip,
  parameters: {
    chromatic: { disable: true },
  },
} as Meta;

export const All = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ margin: "4rem 8rem 4rem 8rem" }}>
      <h2>Controlled</h2>
      <Tooltip
        open={open}
        content="Controlled tooltip example"
        side="top"
        id="testid"
      >
        <Button
          aria-describedby="teststring"
          onClick={() => setOpen((x) => !x)}
        >
          Toggle tooltip
        </Button>
      </Tooltip>

      <h2>onOpenChange</h2>
      <Tooltip content="onOpenChangeTest" side="top" onOpenChange={console.log}>
        <Button>Tooltip</Button>
      </Tooltip>
      <h2>no arrow</h2>
      <Tooltip content="no arrow" side="top" arrow={false}>
        <Button>Tooltip</Button>
      </Tooltip>

      <h2>With disabled element</h2>
      <div>
        <Tooltip content="disabled element example">
          <span tabIndex={0}>
            <Button style={{ pointerEvents: "none" }} disabled>
              Tooltip
            </Button>
          </span>
        </Tooltip>
      </div>
      <h2>all sides + alignments</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          gap: "3rem",
        }}
      >
        {["top", "left", "bottom", "right"].map((side) => (
          <div key={side}>
            <h3>{side}</h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                gap: "3rem",
              }}
            >
              {["center", "start", "end"].map((align) => (
                <Tooltip
                  key={side + align}
                  defaultOpen
                  content={side + align}
                  side={side as any}
                  align={align as any}
                >
                  <Refresh aria-hidden tabIndex={0} />
                </Tooltip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
