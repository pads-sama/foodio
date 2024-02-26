import { Text, Line } from "components";
import { navData } from "lib";
import { NavLink, useNavigate } from "react-router-dom";

type LinksProp = (typeof navData)[number];

const Links = ({ url, label }: LinksProp) => {
  return (
    <NavLink
      to={url}
      aria-current="page"
      style={({ isActive }) => {
        return isActive
          ? { color: "#f87171", borderBottom: "2px solid #f87171" }
          : {};
      }}
      className="border-b-2 border-b-transparent hover:border-b-red-400 hover:text-red-400 transition ease-in-out duration-300"
    >
      {label}
    </NavLink>
  );
};

export default Links;
