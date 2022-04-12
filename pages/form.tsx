import { NextPage } from "next";
import { useState } from "react";
import { Formik } from "formik";
import ButtonGroup from "./components/ButtonGroup";
import Questions from "./questions";
import FormControl from "./components/FormControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import img from "../public/cover.jpg";
import Image from "next/image";

type Props = {};

interface MyFormValues {
  firstName: string;
}

const goesUp = "opacity-0 translate-y-n-screen absolute w-full";
const goesDown = "opacity-0 translate-y-screen absolute w-full";
const present = "opacity-1 translate-y-0";

const getClassName = (activeStep: number, questionNumber: number) => {
  if (activeStep === questionNumber) return present;
  if (activeStep > questionNumber) return goesUp;
  else return goesDown;
};

// const Form: NextPage = (props: Props) => {
//   const initialValues: MyFormValues = { firstName: "" };
//   const [step, setStep] = useState(1);

//   return (
//     <main>
//       <div className="h-screen pl-16 pr-16">
//         <Formik
//           initialValues={initialValues}
//           onSubmit={(props) => {
//             console.log("props:", props);
//           }}
//         >
//           {() => (
//             <form className="w-full relative top-1/2 -translate-y-1/2">
//               <FormControl
//                 label={Questions.q1.q}
//                 number="1"
//                 className={
//                   getClassName(step, 1)
//                 }
//               >
//                 <ButtonGroup options={Questions.q1.options} />
//               </FormControl>

//               <FormControl
//                 label={Questions.q2.q}
//                 number="2"
//                 className={
//                   getClassName(step, 2)
//                 }
//               >
//                 <ButtonGroup options={Questions.q2.options} />
//               </FormControl>
//             </form>
//           )}
//         </Formik>
//           <div className="fixed right-4 bottom-4">
//           <button  onClick={() => setStep((step) => step + 1)}>add 1</button>
//           <button onClick={() => setStep((step) => step - 1)}>minus 1</button>
//         </div>
//       </div>

//       <span></span>
//     </main>
//   );
// };

// export default Form;

const Form: NextPage = (props: Props) => {
  const totalStep = 10;

  const initialValues: MyFormValues = { firstName: "" };
  const [step, setStep] = useState(1);

  const nextStep = () => setTimeout(() => setStep((step) => step + 1), 500);

  return (
    <main>
      <div className="h-screen pl-8 pr-8 bg-secondary overflow-hidden">
        <Formik
          initialValues={initialValues}
          onSubmit={(props) => {
            console.log("props:", props);
          }}
        >
          {() => (
            <form className="w-full lg:ml-16 relative top-1/2 -translate-y-1/2">
              <FormControl
                label={Questions[0].q}
                number="1"
                className={getClassName(step, 1)}
              >
                <ButtonGroup
                  options={Questions[1].options}
                  nextStep={nextStep}
                />
              </FormControl>

              <FormControl
                label={Questions[1].q}
                number="2"
                className={getClassName(step, 2)}
              >
                <ButtonGroup
                  options={Questions[1].options}
                  nextStep={nextStep}
                />
              </FormControl>
            </form>
          )}
        </Formik>

        <div className="flex items-end justify-between fixed bottom-4 left-0 right-0 w-full pr-8 pl-8">
          <div>
            <p>{(step / totalStep * 100)}% completed</p>
            <div className="bg-gray-400 w-72 h-1 mb-6">
              <div className="h-1 bg-gray-800" style={{width:`${(step / totalStep) * 100}%`}}></div>
            </div>
          </div>
          <div>
            <button
              className="bg-black w-14 h-14 rounded-l-md"
              onClick={() => setStep((step) => step - 1)}
            >
              <FontAwesomeIcon
                className="text-3xl text-white"
                icon={faArrowUp}
              />
            </button>
            <button
              className="bg-gray-800 w-14 h-14 rounded-r-md"
              onClick={() => setStep((step) => step + 1)}
            >
              <FontAwesomeIcon
                className="text-3xl text-white"
                icon={faArrowDown}
              />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Form;
