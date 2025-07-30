import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProtectedRoute from "./protectedRoute/ProtectedRoute";
import Loader from "./components/common/Loader";

//  Non-lazy routes
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import OtpVerification from "./pages/OtpVerification";
import ResetPassword from "./pages/ResetPassword";

//  Lazy-loaded routes
const Dashboard = lazy(() => import("./pages/Dashboard"));
const League = lazy(() => import("./pages/League"));
const Competitions = lazy(() => import("./pages/Competitions"));
const Teams = lazy(() => import("./pages/Teams"));
const Fixtures = lazy(() => import("./pages/Fixtures"));
const Notfound = lazy(() => import("./components/Notfound"));

const App: React.FC = () => {
  const location = useLocation();
  const token = Cookies.get("token");

  const hideSidebarRoutes: string[] = [
    "/login",
    "/sign-up",
    "/forget-password",
    "/forget-password/otp-verification",
    "/forget-password/reset-password",
  ];

  const shouldShowSidebar: boolean = !hideSidebarRoutes.includes(
    location.pathname
  );

  return (
    <div>
      <Navbar />

      <div className="flex mt-[80px]">
        {shouldShowSidebar && <Sidebar />}

        <div
          className={
            shouldShowSidebar ? "ml-[80px] md:ml-[221px] flex-1" : "flex-1"
          }
        >
          <Suspense fallback={<Loader />}>
            <Routes>
              {/*  Non-lazy public routes */}
              <Route
                path="/sign-up"
                element={token ? <Navigate to="/" replace /> : <Signup />}
              />
              <Route
                path="/login"
                element={token ? <Navigate to="/" replace /> : <Login />}
              />
              <Route path="/forget-password">
                <Route
                  index
                  element={
                    token ? <Navigate to="/" replace /> : <ForgetPassword />
                  }
                />
                <Route
                  path="otp-verification"
                  element={
                    token ? <Navigate to="/" replace /> : <OtpVerification />
                  }
                />
                <Route
                  path="reset-password"
                  element={
                    token ? <Navigate to="/" replace /> : <ResetPassword />
                  }
                />
              </Route>

              {/*  Lazy-loaded protected routes */}
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/league"
                element={
                  <ProtectedRoute>
                    <League />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/competitions"
                element={
                  <ProtectedRoute>
                    <Competitions />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/teams"
                element={
                  <ProtectedRoute>
                    <Teams />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/fixtures"
                element={
                  <ProtectedRoute>
                    <Fixtures />
                  </ProtectedRoute>
                }
              />

              {/* Fallback for unmatched routes */}
              <Route path="*" element={<Notfound />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default App;
