import React from "react";
import { Badge } from "reactstrap";

export interface InteractivePillProps {
  text: string;
  isActive: boolean;
  onClick: () => void;
}
export const InteractivePill = ({
  text,
  isActive,
  onClick,
}: InteractivePillProps) => {
  return (
    <Badge
      pill
      className={`me-1 mb-1 ${isActive ? "bg-primary" : ""}`}
      style={{
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {text}
    </Badge>
  );
};
