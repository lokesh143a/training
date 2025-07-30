import { data } from "../assets/data";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Cookies from "js-cookie";
import { useConfigStore } from "../store/configStore";
import { useState } from "react";
import Loader from "../components/common/Loader";

// this is outside the component we call it like this
const baseUrl = useConfigStore.getState().baseUrl;

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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // inside the component we call it like this from zustand
  // const baseUrl = useConfigStore((state) => state.baseUrl)

  const handleSubmit = async (
    values: LoginValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        `${baseUrl}/training/auth/login`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Login Response:", response);

      if (response.status === 200) {
        Cookies.set("token", response.data.token, { expires: 1 });
        toast.success("Login Successful!");
        resetForm();
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        
        toast.error(response.data.message || "Login failed!");
      }
    } catch (error: any) {
      console.error("Login error:", error);
      toast.error(error.response?.data?.message || "Login failed!");
    }finally{
      setIsLoading(false)
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
                className="w-full border px-3 py-3 mt-1 rounded-lg placeholder:text-gray-300 focus:ring-2 focus:ring-blue-600 outline-none"
                placeholder="Enter your email ID"
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
                className="w-full border px-3 py-3 mt-1 rounded-lg placeholder:text-gray-300 focus:ring-2 focus:ring-blue-600 outline-none"
                placeholder="Enter your password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            {/* forget password */}
            <p
              onClick={() => navigate("/forget-password")}
              className="text-gray-700 font-semibold text-sm sm:text-[14px] hover:text-darkBlue cursor-pointer"
            >
              Forgot Password ?
            </p>

            {/* submit button */}
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

export default Login;
