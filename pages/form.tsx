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

const Form: NextPage = (props: Props) => {
  const initialValues: MyFormValues = { firstName: "" };
  const step = useState(0)

  return (
    <main>
      <div className="flex items-center h-screen p-16">
        <Formik
          initialValues={initialValues}
          onSubmit={(props) => {
            console.log("props:", props);
          }}
        >
          {() => (
            <form className="w-full">
              <FormControl label={Questions.q1.q} number="1">
                <ButtonGroup options={Questions.q1.options}/>
              </FormControl>

            </form>
          )}
        </Formik>
      </div>

      <span></span>
    </main>
  );
};

export default Form;
