const Button = ({
  className,
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...rest}
      className={`${className} w-full h-full flex justify-center items-center bg-white text-primary hover:bg-gradient-to-br hover:from-primary/50 hover:to-secondary/50 hover:text-white hover:shadow rounded text-xl font-semibold cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default Button;
