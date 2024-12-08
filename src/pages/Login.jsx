import LabelInput from "../components/LabelInput";
import { useState } from "react";
import { Divider } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Button from "../components/Button";
import LabelPassword from "../components/LabelPassword";
import authService from "../appwrite/authService";
import employeeService from "../appwrite/employeeService";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/authSlice";

const Login = () => {
  const [user, setUser] = useState({ userName: "", password: "" });
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();

    await authService
      .login({ email: user.userName, password: user.password })
      .then(async (user) => {
        const dateTime = new Date();
        const loginDateTime = dateTime.toISOString();

        await employeeService
          .markAttendance(user.$id, loginDateTime)
          .then((res) => {
            console.log(user);
            dispatch(login(user));
          })
          .catch(async (err) => {
            await authService.logout().then((res) => console.log(res));
          });
      });
  };

  return (
    <div className="pt-[12vh]">
      <form
        action=""
        className="border-2 shadow-md p-4 md:p-8 rounded-xl min-w-[320px] max-w-[480px] space-y-4 mx-auto "
      >
        <h3 className="text-2xl font-semibold my-4">
          Log in to <br /> your account
        </h3>
        <LabelInput
          onChange={(e) => setUser({ ...user, userName: e.target.value })}
          label="Username or Email"
          type="email"
          placeholder="Username or Email"
        />
        <LabelPassword
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          label="Password"
          placeholder="Password"
        />

        <Button onClick={(e) => onSubmit(e)} className="w-full">
          Log in
        </Button>
        <Divider
          textAlign="center"
          className="text-gray-500 font-light select-none py-4"
        >
          or
        </Divider>

        <div className="w-full flex items-center justify-evenly">
          <GoogleIcon
            sx={{ fontSize: 30 }}
            className="p-2 rounded-full border-2 border-black hover:shadow-md cursor-pointer box-content"
          />
          <FacebookIcon
            sx={{ fontSize: 30 }}
            className="p-2 rounded-full border-2 border-black hover:shadow-md cursor-pointer box-content"
          />
          <TwitterIcon
            sx={{ fontSize: 30 }}
            className="p-2 rounded-full border-2 border-black hover:shadow-md cursor-pointer box-content"
          />
        </div>
      </form>
      <Button onClick={() => authService.logout()}> Logout</Button>
    </div>
  );
};

export default Login;
