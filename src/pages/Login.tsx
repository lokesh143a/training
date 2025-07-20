import React from "react";
import { data } from "../assets/data";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

interface LoginValues {
  email: string;
  password: string;
}

const initialValues: LoginValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().required("Email is required"),
  password: Yup.string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (
    values: LoginValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    alert("User logged successfully");
    console.log(values);
    resetForm();
  };
  return (
    <div className="min-h-screen flex justify-center items-center px-4">
      <div className="w-full max-w-md p-6 sm:p-8">
        <div className="flex flex-col items-center mb-6">
          <img
            className="w-32 h-16 object-contain"
            src={data.formLogo}
            alt="logo"
          />
          <h2 className="text-darkBlue font-semibold text-2xl mt-4 self-start">
            Login
          </h2>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col gap-4">
            {/* email */}
            <div>
              <label className="text-gray-700 text-sm sm:text-[14px]">
                Email
              </label>
              <Field
                name="email"
                type="email"
                className="w-full border px-3 py-2 mt-1 rounded placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 outline-none"
                placeholder="Enter your Email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            {/* password */}
            <div>
              <label className="text-gray-700 text-sm sm:text-[14px]">
                Password
              </label>
              <Field
                name="password"
                type="password"
                className="w-full border px-3 py-2 mt-1 rounded placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 outline-none"
                placeholder="Enter your password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            {/* forget password */}
            <p onClick={()=> navigate("/forget-password")} className="text-gray-700 font-semibold text-sm sm:text-[14px] hover:text-darkBlue cursor-pointer">
              Forgot Password ?
            </p>

            {/* submit button */}
            <button
              type="submit"
              className="w-full bg-darkBlue text-white text-sm sm:text-[16px] py-3 rounded-lg cursor-pointer hover:bg-blue-900 transition-all"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
