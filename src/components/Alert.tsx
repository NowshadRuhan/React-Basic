// rafc

interface Props {
  children: string;
}
export const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};
