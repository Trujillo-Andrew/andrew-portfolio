import React from "react";
import AndrewLogo from "../img/andrew-Trujillo-Logo.png";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <div>
      <div
        class="w-full bg-center bg-cover h-[32rem] min-h-screen"
        style={{
          backgroundImage: `url("https://trujillomedia.com/img/teamPhotos/drew-blog.jpg")`}}
      >
        <div class="flex items-center justify-center w-full h-full bg-black bg-opacity-75">
          <div class="text-center">
          <img
                src={AndrewLogo}
                className="md:w-96 w-60"
                alt="Trujillo Media Logo"
                srcset=""
              />
            <Link to='/Portfolio' class="w-full px-4 py-2 mt-4 text-md font-medium text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              Enter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
