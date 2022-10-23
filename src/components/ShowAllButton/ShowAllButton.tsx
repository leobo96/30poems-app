export interface ShowAllButtonProps {
  collapsed: boolean;
  onClick: () => void;
}
export const ShowAllButton = ({ collapsed, onClick }: ShowAllButtonProps) => {
  return (
    <button className="btn btn-link text-primary ps-0" onClick={onClick}>
      {collapsed ? `Mostra tutto` : "Mostra meno"}
    </button>
  );
};
