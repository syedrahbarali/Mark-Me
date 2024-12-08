import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Login from "./pages/Login";
import authService from "./appwrite/authService";
import { useDispatch } from "react-redux";
import { login } from "./store/slices/authSlice";
import Spinner from "./components/Spinner";
import Logo from "./components/Logo";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    authService
      .getAccount()
      .then((res) => {
        toast.success("Logged in");
        dispatch(login(res));
      })
      .catch((err) => navigate("/login"))
      .finally(() =>
        setTimeout(() => {
          setLoading(false);
        }, 1000)
      );
  }, []);

  return (
    <>
      <Toaster />
      {loading ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="flex flex-col items-center">
            <Spinner />
            <Logo />
          </div>
        </div>
      ) : (
        <div className="w-screen">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </div>
      )}
    </>
  );
};

export default App;

const UserProtectedRoute = ({ children }) => {
    return 
};
