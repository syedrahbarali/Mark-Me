import LabelInput from "../components/LabelInput";
import { useState } from "react";
import { Divider } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google"; // For Google icon
import FacebookIcon from "@mui/icons-material/Facebook"; // For Facebook icon
import TwitterIcon from "@mui/icons-material/Twitter"; // For Twitter icon
import Button from "../components/Button";

const Login = () => {
  const [user, setUser] = useState({ userName: "", password: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <div className="">
      <form
        action=""
        className="border-2 shadow-md p-4 md:p-8 rounded-xl min-w-[320px] max-w-[480px] space-y-4 mx-auto translate-y-[20%]"
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
        <LabelInput
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          label="Password"
          type="password"
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
    </div>
  );
};

export default Login;
