import { data } from "../assets/data";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialValues: { otp: string } = { otp: "" };

const validationSchema = Yup.object({
  otp: Yup.string().min(6, "Minumum 6 digits").required("OTP required"),
});

const OtpVerification = () => {
  const navigate = useNavigate();

  const handleSubmit = (
    values: { otp: string },
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log(values);
    toast.success("OTP verified successfully");
    resetForm();
    setTimeout(() => {
      navigate("/forget-password/reset-password");
    }, 2000);
  };

  const resendCode = (): void => {};

  return (
    <div className="min-h-screen flex justify-center items-center px-4">
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
          Enter the code sent to xyz@example.com to Reset Password .{" "}
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col gap-4">
            {/* otp */}
            <div>
              <label className="text-gray-700 text-sm sm:text-[14px]">
                OTP
              </label>
              <Field
                name="otp"
                type="text"
                className="w-full border px-3 py-3 mt-1 rounded-lg placeholder:text-gray-300 focus:ring-2 focus:ring-blue-600 outline-none"
                placeholder="Enter 6 Digit Code Here"
              />
              <ErrorMessage
                name="otp"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            {/* resend code */}
            <p
              onClick={resendCode}
              className="text-gray-700 text-sm sm:text-[14px] hover:text-darkBlue cursor-pointer"
            >
              Resend Code ?
            </p>

            {/* verify otp button */}
            <button
              type="submit"
              className="w-full bg-darkBlue text-white text-sm sm:text-[16px] py-4 rounded-xl cursor-pointer hover:bg-blue-900 transition-all"
            >
              verify OTP
            </button>
          </Form>
        </Formik>
      </div>
      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default OtpVerification;
