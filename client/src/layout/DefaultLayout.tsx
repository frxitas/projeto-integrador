import { Header } from "@/components/Header/header.js";
import Navbar from "../components/Navbar/Navbar.js";

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex w-full h-screen overflow-y-hidden">
      <Navbar />
      <div className="relative w-full">
        <Header />
        <div className="w-full h-[calc(100%-56px)] px-6 py-4 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
