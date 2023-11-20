import Navbar from "../ds/Navbar/Navbar.jsx";
import "./DefaultLayout.css";

const DefaultLayout = ({ children }) => {
  return (
    <div className="default-layout">
      <Navbar />
      <div className="default-layout-content">{children}</div>
    </div>
  );
};

export default DefaultLayout;
