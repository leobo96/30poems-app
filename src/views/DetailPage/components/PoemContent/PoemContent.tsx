import { useEffect, useState } from "react";
import { ShowAllButton } from "../../../../components/ShowAllButton/ShowAllButton";
import { Poem } from "../../../../models";

export interface PoemContentProps {
  poem: Poem;
}
export const PoemContent = ({ poem }: PoemContentProps) => {
  const [collapsed, setCollapsed] = useState(true);

  const lines = poem.lines.map((line, index) => <p key={index}>{line}</p>);
  const firstFiveLines = lines.filter((_, index) => index < 5);
  const isShowMoreButtonVisible = lines.length > 5;

  useEffect(() => {
    setCollapsed(true);
  }, [poem]);

  return (
    <>
      <div
        className="overflow-scroll"
        style={{
          maxHeight: "500px",
        }}
      >
        <h1 className="mb-3">{poem.title}</h1>
        {collapsed ? firstFiveLines : lines}
      </div>
      {isShowMoreButtonVisible && (
        <ShowAllButton
          collapsed={collapsed}
          onClick={() => setCollapsed(!collapsed)}
        />
      )}
      {collapsed ? `(${poem.linecount} versi)` : ""}
    </>
  );
};
