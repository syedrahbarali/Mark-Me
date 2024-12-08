import { forwardRef, useId, useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

const LabelPassword = ({ className = "", label = "", ...props }, ref) => {
  const id = useId();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-1 flex flex-col">
      {label && (
        <label htmlFor={id} className="font-medium text-sm">
          {label}
        </label>
      )}
      <div className="w-full relative">
        <input
          ref={ref}
          type={showPassword ? "text" : "password"}
          id={id}
          className={`w-full py-2 px-4 pr-10 border-2 border-gray-300 rounded-lg shadow-sm ${className}`}
          {...props}
        />

        <span className="absolute right-4 top-[50%] translate-y-[-50%]">
          {showPassword ? (
            <IoEye
              size={20}
              className="cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <IoEyeOff
              size={20}
              className="cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </span>
      </div>
    </div>
  );
};

export default forwardRef(LabelPassword);
