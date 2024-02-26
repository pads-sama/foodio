import {
  Button,
  Img,
  Line,
  List,
  PagerIndicator,
  RatingBar,
  Slider,
  Text,
} from "components";
import { navData } from "lib";

import React from "react";
import { useNavigate } from "react-router-dom";
import Links from "./links";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate("/");
  };
  return (
    <header className="flex items-center justify-center w-full h-[6.25rem] absolute">
      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
        <div className="header-row ">
          <Img
            className="h-[51px] cursor-pointer"
            src="images/img_logo.svg"
            alt="Logo"
            onClick={navigateTo}
          />
          <div className="mobile-menu">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="flex md:flex-1 sm:flex-col flex-row font-opensans sm:hidden items-start justify-center md:ml-[0] ml-[107px] pt-0.5 w-[52%] md:w-full">
          <div className="flex gap-1.5 items-center justify-between w-full ">
            {navData.map((data) => (
              <React.Fragment key={data.id}>
                <Links {...data} />
              </React.Fragment>
            ))}
          </div>
        </div>
        <Button
          className="cursor-pointer flex h-[50px] sm:hidden items-center justify-center md:ml-[0] ml-[122px] w-[50px]"
          leftIcon={
            <Img
              className="h-6 sm:hidden m-[13px]"
              src="images/img_cart.svg"
              alt="cart"
            />
          }
          shape="circle"
          color="white_A700"
          variant="fill"
        >
          <div className="sm:hidden"></div>
        </Button>
        <Button
          className="cursor-pointer font-semibold sm:hidden leading-[normal] min-w-[112px] md:ml-[0] ml-[25px] text-center text-sm"
          shape="round"
          color="red_400"
          size="sm"
          variant="fill"
        >
          Log in
        </Button>
      </div>
    </header>
  );
};

export default Header;
