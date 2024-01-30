interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "info";
  onClick: () => void;
}
export const Button = ({ children, color, onClick }: Props) => {
  return (
    <button className={"alert alert-" + color} onClick={onClick}>
      {children}
    </button>
  );
};
