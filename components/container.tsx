type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="container max-w-screen mx-auto px-4 md:px-6 pt-6">
      {children}
    </div>
  );
};

export default Container;
