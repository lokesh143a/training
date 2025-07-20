import { data } from "../assets/data";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

interface ForgetValues {
  email: string;
}

const initialValues: ForgetValues = {
  email: "",
  
};

const validationSchema = Yup.object({
  email: Yup.string().required("Email is required"),
 
});

const ForgetPassword = () => {

  const navigate = useNavigate()

  const handleSubmit = (
    values: ForgetValues,
    { resetForm }: {resetForm : () => void}
  ) => {
    alert("sent otp");
    console.log(values);
    resetForm();
    navigate("/forget-password/otp-verification")

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
            Forgot your password
          </h2>
        </div>

        <p className="text-gray-700 text-sm sm:text-[14px] ">
          Please enter your registered email address
        </p>

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


            {/* send otp button */}
            <button
              type="submit"
              className="w-full bg-darkBlue text-white text-sm sm:text-[16px] py-3 rounded-lg cursor-pointer hover:bg-blue-900 transition-all"
            >
              Send OTP
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ForgetPassword;
