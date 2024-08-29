export const H1 = ({ className, children }) => {
  return <h1 className={`text-5xl lg:text-7xl font-bold ${className}`}>{children}</h1>;
};
export const H2 = ({ className, children }) => {
  return <h2 className={`text-5xl  ${className}`}>{children}</h2>;
};
export const H3 = ({ className, children }) => {
  return <h3 className={`text-3xl font-bold ${className}`}>{children}</h3>;
};
export const H4 = ({ className, children }) => {
  return <h4 className={`text-lg font-medium font-poppins ${className}`}>{children}</h4>;
};
export const Lead = ({ className, children }) => {
  return <p className={`text-lg text-white/65 ${className}`}>{children}</p>;
};
const Typography = ({ className, children }) => {
  return <p className={`text-lg text-white/65 ${className}`}>{children}</p>;
};
export default Typography;
