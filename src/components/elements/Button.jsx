const Button = ({ variant = "primary", className, children }) => {
  const styleD = `
        bg-primary hover:bg-primary/80 font-bold text-n-1 rounded-lg px-4 py-2
    ${className || ""}`;
  return (
    <button className={variant === "primary" ? styleD : ""} variant={variant}>
      {children}
    </button>
  );
};
export default Button;
