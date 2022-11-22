/* https://github.com/radix-ui/primitives/blob/main/packages/core/primitive/src/primitive.tsx */
export const composeEventHandlers = <E>(
  originalEventHandler?: (event: E) => void,
  ourEventHandler?: (event: E) => void
) => {
  return function handleEvent(event: E) {
    originalEventHandler?.(event);

    if (!(event as unknown as Event).defaultPrevented) {
      return ourEventHandler?.(event);
    }
  };
};
