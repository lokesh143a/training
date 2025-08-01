import { data } from "../assets/data";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import Cookies from "js-cookie";
import { useConfigStore } from "../store/configStore";
import { useNavigate } from "react-router-dom";
import Loader from "../components/common/Loader";
import { useState } from "react";

const baseUrl = useConfigStore.getState().baseUrl;

interface PasswordValues {
  newPassword: string;
  confirmPassword: string;
}

const initialValues: PasswordValues = {
  newPassword: "",
  confirmPassword: "",
};

const validationSchema = Yup.object({
  newPassword: Yup.string()
    .min(6, "Minimum 6 characters")
    .required("New password is required"),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("newPassword")],
      "Oops! That password didn’t match. Double-check and try again."
    )
    .required("Confirm paswword is required"),
});

const ResetPassword = () => {
  const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
  

  const handleSubmit = async (
    values: PasswordValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    const email = Cookies.get("email");

    if (!email) {
      toast.error("Email not found. Please try again.");
      return;
    }

    if (values.newPassword !== values.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setIsLoading(true)
      const response = await axios.post(
        `${baseUrl}/training/auth/reset-password`,
        {
          email,
          newPassword: values.newPassword,
          confirmPassword: values.confirmPassword,
        }
      );

      if (response.status === 200) {
        toast.success("Password changed successfully");
        resetForm();
        Cookies.remove("email");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        toast.error(response.data.message || "Password resetting failed");
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Something went wrong");
      console.error("Reset error:", error);
    }finally{
      setIsLoading(false)
    }
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center px-4">
      <div className="w-full max-w-md p-6 sm:p-8 border border-borderColor my-6 md:my-10 rounded-lg">
        <div className="flex flex-col items-center mb-3">
          <img
            className="w-32 h-16 object-contain"
            src={data.formLogo}
            alt="logo"
          />
          <h2 className="text-darkBlue font-semibold text-2xl mt-4 self-start">
            Reset password
          </h2>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col gap-4">
            {/* new password */}
            <div>
              <label className="text-gray-700 text-sm sm:text-[14px]">
                New Password
              </label>
              <Field
                name="newPassword"
                type="password"
                className="w-full border px-3 py-3 mt-1 rounded-lg placeholder:text-gray-300 focus:ring-2 focus:ring-blue-600 outline-none"
                placeholder="Enter New Password"
              />
              <ErrorMessage
                name="newPassword"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            {/* password contains values */}
            <p className="text-[12px]">
              The length of the password cannot be less than 8 characters & it
              Content.
            </p>
            <ul className="list-disc list-inside text-[12px]">
              <li>1 upper case </li>
              <li>1 special character </li>
              <li>1 lower case </li>
              <li>1 number</li>
            </ul>

            {/* confirm password */}
            <div>
              <label className="text-gray-700 text-sm sm:text-[14px]">
                Confirm Password
              </label>
              <Field name="confirmPassword">
                {({ field, meta }: any) => (
                  <>
                    <input
                      {...field}
                      type="password"
                      placeholder="Enter Confirm Password"
                      className={`w-full border px-3 py-3 mt-1 rounded-lg placeholder:text-gray-300 outline-none${
                        meta.touched && meta.error
                          ? " border-red-600 ring-1 ring-red-600 text-red-600"
                          : " focus:ring-2 focus:ring-blue-600"
                      }`}
                    />
                    {meta.touched && meta.error && (
                      <div className="text-red-600 text-sm mt-1">
                        {meta.error}
                      </div>
                    )}
                  </>
                )}
              </Field>
            </div>

            {/*submit button */}
            <button
              type="submit"
              className="w-full bg-darkBlue text-white text-sm sm:text-[16px] py-4 rounded-xl cursor-pointer hover:bg-blue-900 transition-all"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={3000} />
      {/* loader */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {isLoading && <Loader />}
      </div>
    </div>
  );
};

export default ResetPassword;
