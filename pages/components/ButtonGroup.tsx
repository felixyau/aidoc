import React from "react";

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
        <div className="mb-4 rounded-lg border-2 border-gray-300 p-4">
            {option.label}
        </div>
      ))}
    </>
  );
};

const Button = () => {

}

export default ButtonGroup;
