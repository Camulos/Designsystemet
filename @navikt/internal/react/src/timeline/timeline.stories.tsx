import { SuccessFilled } from "@navikt/ds-icons";
import { Meta } from "@storybook/react";
import * as React from "react";
import Timeline from "./Timeline";

export default {
  title: "ds-react-internal/Timeline",
  component: Timeline,
  argTypes: {},
} as Meta;

export const Default = () => {
  return (
    <div style={{ width: "80vw" }}>
      <Timeline>
        <Timeline.Row label="Row 1">
          <Timeline.Period
            start={new Date("Jan 1 2022")}
            end={new Date("Jan 31 2022")}
            status="success"
            icon={<SuccessFilled />}
          />
          <Timeline.Period
            start={new Date("Feb 1 2022")}
            end={new Date("Feb 29 2022")}
            status="danger"
            onSelectPeriod={() => console.log("PERIOD SELECTED!")}
            icon={<SuccessFilled />}
          />
          <Timeline.Period
            start={new Date("May 2 2022")}
            end={new Date("May 25 2022")}
            status="success"
            icon={<SuccessFilled />}
          />
          <Timeline.Period
            start={new Date("Mar 1 2022")}
            end={new Date("Mar 31 2022")}
            status="success"
            onSelectPeriod={() => console.log("PERIOD SELECTED!")}
            icon={<SuccessFilled />}
          />
          <Timeline.Period
            start={new Date("Jul 1 2022")}
            end={new Date("Jul 31 2022")}
            status="warning"
            icon={<SuccessFilled />}
          />

          <Timeline.Period
            start={new Date("Aug 1 2022")}
            end={new Date("Aug 30 2022")}
            status="warning"
            icon={<SuccessFilled />}
          />
        </Timeline.Row>
        <Timeline.Row label="Navn på rad navn">
          <Timeline.Period
            start={new Date("May 13 2022")}
            end={new Date("May 25 2022")}
            status="warning"
            onSelectPeriod={() => console.log("PERIOD SELECTED!")}
            icon={<SuccessFilled />}
          />
          <Timeline.Period
            start={new Date("Feb 1 2022")}
            end={new Date("May 2 2022")}
            status="default"
            onSelectPeriod={() => console.log("PERIOD SELECTED!")}
            icon={<SuccessFilled />}
          />
        </Timeline.Row>
        <Timeline.Row>
          <Timeline.Period
            start={new Date("Jan 1 2022")}
            end={new Date("Aug 20 2022")}
            status="information"
            onSelectPeriod={() => console.log("PERIOD SELECTED!")}
            icon={<SuccessFilled />}
          />
        </Timeline.Row>
      </Timeline>
    </div>
  );
};

export const PG = () => {
  return (
    <div style={{ width: "80vw" }}>
      <Timeline>
        <Timeline.Row label="Row 1">
          <Timeline.Period start={new Date("Feb 2 2022")} end={new Date()} />
          <Timeline.Period
            start={new Date("May 2 2022")}
            end={new Date("Dec 1 2022")}
          />
        </Timeline.Row>
        <Timeline.Row label="Row 2">
          <Timeline.Period
            start={new Date("May 2 2001")}
            end={new Date("Dec 1 2028")}
          />
          <Timeline.Period
            start={new Date("May 2 2014")}
            end={new Date("Dec 1 2022")}
          />
        </Timeline.Row>
        <Timeline.Row label="Row 3" />
      </Timeline>
    </div>
  );
};
