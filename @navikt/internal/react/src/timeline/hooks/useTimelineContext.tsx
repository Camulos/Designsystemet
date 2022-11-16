import { createContext, useContext } from "react";

interface TimelineContextProps {
  startDate: Date;
  endDate: Date;
  direction: "left" | "right";
  setStart: (d: Date) => void;
  setEndInclusive: (d: Date) => void;
  activeRow: number;
  setActiveRow: (i: number) => void;
}

export const TimelineContext = createContext<TimelineContextProps>({
  startDate: new Date(),
  endDate: new Date(),
  direction: "left",
  setStart: () => null,
  setEndInclusive: () => null,
  activeRow: 0,
  setActiveRow: () => null,
});

export const useTimelineContext = () => {
  const context = useContext(TimelineContext);

  if (!context) {
    console.warn("useTimelineContext must be used with TimelineContext");
  }

  return context;
};
