import React from "react";
import { v4 as uuid } from 'uuid';

type Option = {
  label: string;
  value: string;
};

type Props = {
  options: Array<Option>;
  nextStep: (e:any)=>void
};

const ButtonGroup = ({ options, nextStep }: Props) => {
  return (
    <>
      {options.map((option) => (
        <div key={uuid()} onClick={nextStep} className="w-3/12 mb-4 rounded-xl bg-white p-4 shadow-md transition duration-100 active:scale-75 active:shadow-lg">
            {option.label}
        </div>
      ))}
    </>
  );
};

const Button = () => {

}

export default ButtonGroup;
