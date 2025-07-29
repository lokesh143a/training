import { data } from "../assets/data";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import Cookies from "js-cookie";
import { useConfigStore } from "../store/configStore";

const baseUrl = useConfigStore.getState().baseUrl;

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
  const navigate = useNavigate();

  const handleSubmit = async (
    values: ForgetValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      console.log(values);

      const response = await axios.post(
        `${baseUrl}/training/auth/forgot-password`,
        values
      );

      if (response.status === 200) {
        const expirationTime = new Date(new Date().getTime() + 10 * 60 * 1000); // 10 minutes in milliseconds

        Cookies.set("email", values.email, { expires: expirationTime });
        toast.success("OTP sent successfully to your email.");
        resetForm();
        setTimeout(() => {
          navigate("/forget-password/otp-verification");
        }, 2000);
      } else {
        toast.error(response.data.message || "Sending OTP failed!");
      }
    } catch (error: any) {
      console.error("OTP send error:", error);
      toast.error(error.response?.data?.message || "Sending OTP failed!");
    }
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center px-4">
      <div className="w-full max-w-md p-6 sm:p-8 border border-borderColor rounded-lg my-6 md:my-10">
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
                className="w-full border px-3 py-3 mt-1 rounded-lg placeholder:text-gray-300 focus:ring-2 focus:ring-blue-600 outline-none"
                placeholder="Enter your email ID"
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
              className="w-full bg-darkBlue text-white text-sm sm:text-[16px] py-4 rounded-xl cursor-pointer hover:bg-blue-900 transition-all"
            >
              Send OTP
            </button>
          </Form>
        </Formik>
      </div>
      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ForgetPassword;
