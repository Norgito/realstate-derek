import React from "react";
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
    }
  };

  return (
    <header className="py-2 mb-12 border-b ">
      <div className=" container mx-auto flex justify-between items-center space-x-72">
        {/* logo */}
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>

        {/* navbar links */}
        <div className="flex items-center gap-10">
          <Link to="/pages/forsale">
            <a href="*"> FOR SALE </a>
          </Link>
          <Link to="/pages/forrent">
            <a href="*"> FOR RENT </a>
          </Link>
          <Link to="/pages/residences">
            <a href="*"> RESIDENCES </a>
          </Link>
          <Link to="/pages/property-management">
            <a href="*"> PROPERTY MANAGEMENT </a>
          </Link>
          <Link to="/pages/about-us">
            <a href="*"> ABOUT US </a>
          </Link>
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

          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              onClick={login}
              src={user ? user.photoURL : Avatar}
              alt="userprofile"
              className="text-2xl shadow-2xl w-7 cursor-pointer rounded-full"
            />
            <div className="text-sm w-32 bg-slate-100 shadow-xl rounded-lg flex flex-col absolute top-8 right-0 ">
              <p className="py-1 flex items-center justify-center gap-2 cursor-pointer hover:bg-blue-300 rounded-lg">New Item <MdAdd /></p>
              <p className="py-1 flex items-center justify-center gap-2 cursor-pointer hover:bg-blue-300 rounded-lg">Logout <MdLogout /></p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
