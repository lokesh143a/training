import { data } from "../assets/data";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useConfigStore } from "../store/configStore";
import axios from "axios";

const baseUrl = useConfigStore.getState().baseUrl;

// Type for form values
interface SignUpValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// Initial empty values
const initialValues: SignUpValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

// Form validation schema
const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = async (
    values: SignUpValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      const response = await axios.post(
        `${baseUrl}/training/auth/register`,
        values
      );
      console.log("Signup Success:", response.data);
      toast.success("User created successfully!");
      resetForm();

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error: any) {
      console.error("Signup Error:", error);
      toast.error(error.response?.data?.message || "Signup failed");
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
            Sign-up
          </h2>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col gap-4">
            {/* first name */}
            <div>
              <label className="text-gray-700 text-sm sm:text-[14px]">
                First Name
              </label>
              <Field
                name="firstName"
                className="w-full border px-3 py-3 mt-1 rounded-lg placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 outline-none"
                placeholder="Enter your First Name"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            {/* lastname */}
            <div>
              <label className="text-gray-700 text-sm sm:text-[14px]">
                Last Name
              </label>
              <Field
                name="lastName"
                className="w-full border px-3 py-3 mt-1 rounded-lg placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 outline-none"
                placeholder="Enter your Last Name"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            {/* email */}
            <div>
              <label className="text-gray-700 text-sm sm:text-[14px]">
                Email
              </label>
              <Field
                name="email"
                type="email"
                className="w-full border px-3 py-3 mt-1 rounded-lg placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 outline-none"
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
                className="w-full border px-3 py-3 mt-1 rounded-lg placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 outline-none"
                placeholder="Enter your password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            {/* confirm password */}
            <div>
              <label className="text-gray-700 text-sm sm:text-[14px]">
                Confirm Password
              </label>
              <Field
                name="confirmPassword"
                type="password"
                className="w-full border px-3 py-3 mt-1 rounded-lg placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 outline-none"
                placeholder="Enter your Confirm password"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            {/* sign up button */}
            <button
              type="submit"
              className="w-full bg-darkBlue cursor-pointer text-white text-sm sm:text-[16px] py-4 rounded-xl hover:bg-blue-900 transition-all"
            >
              Sign-up
            </button>
          </Form>
        </Formik>
      </div>

      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Signup;
