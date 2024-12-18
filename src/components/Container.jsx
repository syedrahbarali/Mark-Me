const Container = ({ children, className, ...props }) => {
  return (
    <div className={`w-[90%] md:w-[85%] mx-auto ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
