import React from "react";
import { Badge } from "reactstrap";

export interface InteractivePillProps {
  author: string;
  isActive: boolean;
  onClick: () => void;
}
export const InteractivePill = ({
  author,
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
      {author}
    </Badge>
  );
};
