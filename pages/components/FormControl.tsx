import { ReactNode } from "react";

type Props = {
  label: string;
  number: string;
  children?: ReactNode;
  className? : string;
};

const FormControl = ({ label, number, children, className }: Props) => {
  return (
    <div className={`transition transform duration-600 ease 0s opacity duration-300 ease 0s ${className}`}>
      <div className="mb-10"><span className="">{number}. </span>{`${label}`}</div>
      {children}
    </div>
  );
};

export default FormControl;
