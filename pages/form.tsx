import { NextPage } from "next";
import { useState } from "react";
import { Formik } from "formik";
import ButtonGroup from "./components/ButtonGroup";
import Questions from "./questions";
import FormControl from "./components/FormControl";

type Props = {};

interface MyFormValues {
  firstName: string;
}

const goesUp = "opacity-0 translate-y-n-screen absolute w-full"
const goesDown = "opacity-0 translate-y-screen absolute w-full"
const present = "opacity-1 translate-y-0"

const getClassName = (activeStep:number, questionNumber:number) => {
  if (activeStep === questionNumber) return present 
  if (activeStep > questionNumber) return goesUp
  else return goesDown
}

const Form: NextPage = (props: Props) => {
  const initialValues: MyFormValues = { firstName: "" };
  const [step, setStep] = useState(1);

  return (
    <main>
      <div className="h-screen pl-16 pr-16">
        <Formik
          initialValues={initialValues}
          onSubmit={(props) => {
            console.log("props:", props);
          }}
        >
          {() => (
            <form className="w-full relative top-1/2 -translate-y-1/2">
              <FormControl
                label={Questions.q1.q}
                number="1"
                className={
                  getClassName(step, 1)
                }
              >
                <ButtonGroup options={Questions.q1.options} />
              </FormControl>

              <FormControl
                label={Questions.q2.q}
                number="2"
                className={
                  getClassName(step, 2)
                }
              >
                <ButtonGroup options={Questions.q2.options} />
              </FormControl>
            </form>
          )}
        </Formik>
          <div className="fixed right-4 bottom-4">
          <button  onClick={() => setStep((step) => step + 1)}>add 1</button>
          <button onClick={() => setStep((step) => step - 1)}>minus 1</button>
        </div>
      </div>

      <span></span>
    </main>
  );
};

export default Form;
