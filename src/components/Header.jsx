import React, { useState } from "react";
//import icons
import { BsInstagram } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { MdAdd, MdLogout } from "react-icons/md";
import Avatar from "../assets/img/usericon.png";
//import { CgProfile } from "react-icons/cg";

//import link
import { Link } from "react-router-dom";
//import logo
import Logo from "../assets/img/logo.png";
import { motion } from "framer-motion";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../utils/firebaseConfig.js";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/Reducer";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();

  const [isMenu, setisMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setisMenu(!isMenu);
    }
  };

  return (
    <header className="fixed z-50 w-screen p-5 px-4 md:p-2 md:px-16 bg-bgTransparent">
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className=" object-cover" alt="logo" />
        </Link>

        {/* navbar links */}
        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 200 }}
            className="flex items-center gap-8"
          >
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              For Sale
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              For Rent
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Residences
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Property Management
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
          </motion.ul>
          {/*<Link to="forsale">
            <a href="*"> FOR SALE </a>
          </Link>
          <Link to="forrent">
            <a href="*"> FOR RENT </a>
          </Link>
          <Link to="residences">
            <a href="*"> RESIDENCES </a>
          </Link>
          <Link to="property-management">
            <a href="*"> PROPERTY MANAGEMENT </a>
          </Link>
          <Link to="about-us">
            <a href="*"> ABOUT US </a>
          </Link>*/}
        </div>

        {/* Social Media */}
        <div className="flex items-center gap-6 text-xl">
          <Link className="" to="">
            {" "}
            <BsInstagram />{" "}
          </Link>

          <Link to="">
            <ImFacebook2 />
          </Link>
          {/* Social Media */}
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              onClick={login}
              src={user ? user.photoURL : Avatar}
              alt="userprofile"
              className="text-2xl shadow-2xl w-7 cursor-pointer rounded-full"
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className=" text-sm w-32 bg-slate-100 shadow-xl rounded-lg flex flex-col absolute top-8 right-0 "
              >
                {user && user.email === "tito.cubanito@gmail.com" && (
                  <Link to={"createContainer"}>
                    <p className="py-1 flex items-center justify-center gap-2 cursor-pointer hover:bg-blue-300 rounded-lg">
                      Add Item <MdAdd />
                    </p>
                  </Link>
                )}
                <p className="py-1 flex items-center justify-center gap-2 cursor-pointer hover:bg-blue-300 rounded-lg">
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="flex items-center justify-between md:hidden w-full h-full">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-20" />
        </Link>

        {/* Social Media */}
        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            onClick={login}
            src={user ? user.photoURL : Avatar}
            alt="userprofile"
            className="text-2xl shadow-2xl w-9 cursor-pointer rounded-full mr-3"
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className=" text-sm w-32 bg-slate-100 shadow-xl rounded-lg flex flex-col absolute top-10 right-3 "
            >
              {user && user.email === "tito.cubanito@gmail.com" && (
                <Link to={"createContainer"}>
                  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-blue-300 rounded-lg">
                    Add Item <MdAdd />
                  </p>
                </Link>
              )}

              <ul className="flex flex-col ">
                <li className="text-base text-textColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-blue-300 rounded-lg px-4 py-2">
                  For Sale
                </li>
                <li className="text-base text-textColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-blue-300 rounded-lg px-4 py-2">
                  For Rent
                </li>
                <li className="text-base text-textColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-blue-300 rounded-lg px-4 py-2">
                  Residences
                </li>
                <li className="text-base text-textColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-blue-300 rounded-lg px-4 py-2">
                  Property M.
                </li>
                <li className="text-base text-textColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-blue-300 rounded-lg px-4 py-2">
                  About Us
                </li>
              </ul>

              <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-blue-300 rounded-lg">
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
