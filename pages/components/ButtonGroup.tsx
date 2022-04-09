import React from "react";
import { v4 as uuid } from 'uuid';

type Option = {
  label: string;
  value: string;
};

type Props = {
  options: Array<Option>;
};

const ButtonGroup = ({ options }: Props) => {
  return (
    <>
      {options.map((option) => (
        <div key={uuid()} className="mb-4 relative rounded-lg border-2 border-gray-300 p-4">
            {option.label}
        </div>
      ))}
    </>
  );
};

const Button = () => {

}

export default ButtonGroup;
