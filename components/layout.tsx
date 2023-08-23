import { Analytics } from "@vercel/analytics/react";
import Header from "./header";
import Meta from "./meta";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Header />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Analytics />
    </>
  );
};

export default Layout;
