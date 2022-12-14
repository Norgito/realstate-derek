import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineDriveFileRenameOutline, MdCloudUpload, MdDelete, MdAttachMoney, MdBed, MdOutlineBathtub } from "react-icons/md";
import { categories } from "../utils/data";
import Loader from "../components/Loader";

const CreateContainer = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [fields, setFields] = useState(false);
  const [alertStatus, setalertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const uploadImage = () => {};
  const deleteImage = () => {};

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4">
        {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full p-2 rounded-lg text-center text-lg  ${
              alertStatus === "danger"
                ? "bg-red-400 text-red-800"
                : "bg-emerald-400 text-emerald-800"
            }`}
          >
            {msg}
          </motion.p>
        )}

        <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
          <MdOutlineDriveFileRenameOutline className="text-xl text-gray-700" />
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="House name..."
            className="w-full h-full text-md bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor "
          />
        </div>
        <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdAttachMoney className=" text-gray-700 text-2xl" />
            <input type="text"
              required
              placeholder="Price"
            className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"/>
          </div>
        <div className="w-full">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md gap-2"
          >
            <option value="other" className="bg-white">
              Select Category
            </option>
            {categories &&
              categories.map((item) => (
                <option
                  key={item.id}
                  className="text-base border-0 outline-none capitalize bg-white text-gray-700 value={item.urlParamName}"
                >
                  {item.name}
                </option>
              ))}
          </select>
        </div>
        

        <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-420 cursor-pointer rounded-lg">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {!imageAsset ? (
                <>
                  <label className="w-fullh-full flex flex-col items-center justify-center cursor-pointer">
                    <div className="w-fullh-full flex flex-col items-center justify-center gap-2 ">
                      <div className="text-gray-400 hover:text-gray-700 flex flex-col items-center justify-center">
                        <MdCloudUpload className="text-3xl" />
                        <p>Upload Image</p>
                      </div>
                    </div>
                    <input
                      type="file"
                      name="uploadimage"
                      accept="image/*"
                      onChange={uploadImage}
                      className="w-0 h-0"
                    />
                  </label>
                </>
              ) : (
                <>
                  {" "}
                  <div className="relative h-full">
                    <img src={imageAsset} alt="uploadled pic" className="w-full h-full object-cover "/>
                    <button
                      type="button"
                      className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out"
                      onClick={deleteImage}
                        >
                          <MdDelete className="text-white" />
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>

        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdBed className=" text-gray-700 text-2xl" />
            <input type="text"
              required
              placeholder="Bedrooms"
            className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"/>
          </div>

          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdOutlineBathtub className=" text-gray-700 text-2xl" />
            <input type="text"
              required
              placeholder="Bathrooms"
            className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateContainer;
