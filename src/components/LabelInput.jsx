import { forwardRef, useId } from "react";

const LabelInput = (
  { className = "", label = "", type = "text", ...props },
  ref
) => {
  const id = useId();
  return (
    <div className="space-y-1 flex flex-col">
      {label && (
        <label htmlFor={id} className="font-medium text-sm">
          {label}
        </label>
      )}
      <input
        id={id}
        ref={ref}
        type={type}
        className={`py-2 px-4 border-2 border-gray-300 rounded-lg shadow-sm ${className}`}
        {...props}
      />
    </div>
  );
};

export default forwardRef(LabelInput);
