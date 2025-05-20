// components/ui/tooltip.tsx

import React, { ReactElement } from "react";
import { Tooltip as RNTooltip } from "react-native-paper";

type TooltipProps = {
  children: ReactElement;
  label: string;
};

export const TooltipProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export const TooltipTrigger = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export const TooltipContent = ({ label, children }: TooltipProps) => {
  return (
    <RNTooltip title={label} enterTouchDelay={200} leaveTouchDelay={100}>
      {children}
    </RNTooltip>
  );
};
