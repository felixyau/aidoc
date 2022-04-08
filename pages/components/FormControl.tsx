import { ReactNode } from "react";

type Props = {
  label: string;
  number: string;
  children?: ReactNode;
};

const FormControl = ({ label, number, children }: Props) => {
  return (
    <div>
      <div className="mb-10"><span className="">{number}. </span>{`${label}`}</div>
      {children}
    </div>
  );
};

export default FormControl;
