import React from "react";
import greenLocationIcon from "../../assets/icons/greenLocationIcon.png";
import greenCallIcon from "../../assets/icons/greenCallIcon.png";
import greenEmailIcon from "../../assets/icons/greenEmailIcon.png";

export const Footer = () => {
  return (
    <div className="bg-zinc-800 py-8 mt-40">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Column 1 */}
        <div className="w-full md:w-1/2 lg:w-1/5 mb-8">
          <div className="text-green-400 text-2xl font-bold font-Poppins mb-4">
            ED REVIEWS
          </div>
          <div className="w-64 text-white text-base font-normal font-Poppins leading-normal">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium. Sed ut perspiciatis unde omnis
            iste natus error sit voluptatem accusantium doloremque laudantium.
          </div>
        </div>

        {/* Column 2 */}
        <div className="w-full md:w-1/2 lg:w-1/6 mb-8">
          <div className="text-green-400 text-lg font-medium font-Poppins mb-4">
            Company
          </div>
          <ul className="text-white text-base font-normal font-Poppins">
            <li className="py-3">About</li>
            <li className="py-3">Products</li>
            <li className="py-3">Pricing</li>
            <li className="py-3">Referral Programs</li>
            <li className="py-3">Career</li>
            <li className="py-3">Press and Media</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="w-full md:w-1/2 lg:w-1/6 mb-8">
          <div className="text-green-400 text-lg font-medium font-Poppins mb-4">
            Support
          </div>
          <ul className="text-white text-base font-normal font-Poppins">
            <li className="py-3">Support Portal</li>
            <li className="py-3">List of Charges</li>
            <li className="py-3">Pricing</li>
            <li className="py-3">Referral Programs</li>
            <li className="py-3">Download Resources</li>
            <li className="py-3">Videos</li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/6 mb-8">
          <div className="text-green-400 text-lg font-medium font-Poppins mb-4">
            Contact Us
          </div>
          <ul className="text-white text-base font-normal font-Poppins">
            <li className="py-3 flex items-center">
              <img
                src={greenCallIcon}
                alt="footer-location-icon"
                className="w-[16px] h-4 mr-3"
              />
              +91 33555 6778
            </li>
            <li className="py-3 flex items-center">
              <img
                src={greenEmailIcon}
                alt="footer-location-icon"
                className="w-[18px] h-[12px] mr-3"
              />
              JohnDoe@gmail.com
            </li>
            <li className="py-3 flex items-center">
              <img
                src={greenLocationIcon}
                alt="footer-location-icon"
                className="w-[14px] h-4 mr-3"
              />
              Street 34 Sector 12 B <br /> Mumbai India
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/6 mb-8">
          <div className="text-green-400 text-lg font-medium font-Poppins mb-4">
            Contact with Us
          </div>
          <div className="w-full md:w-1/2 lg:w-1/5 mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="231"
              height="35"
              viewBox="0 0 231 35"
              fill="none"
            >
              <circle
                cx="17.5"
                cy="17.5"
                r="17.5"
                fill="#4DC416"
                fillOpacity="0.44"
              />
              <path
                d="M19.25 18.625H21.125L21.875 15.625H19.25V14.125C19.25 13.3525 19.25 12.625 20.75 12.625H21.875V10.105C21.6305 10.0728 20.7072 10 19.7322 10C17.696 10 16.25 11.2427 16.25 13.525V15.625H14V18.625H16.25V25H19.25V18.625Z"
                fill="white"
              />
              <circle
                cx="66.5"
                cy="17.5"
                r="17.5"
                fill="#4DC416"
                fillOpacity="0.44"
              />
              <path
                d="M66 15.67C64.71 15.67 63.67 16.72 63.67 18C63.67 19.28 64.72 20.33 66 20.33C67.28 20.33 68.33 19.28 68.33 18C68.33 16.72 67.28 15.67 66 15.67ZM73 18C73 17.03 73 16.08 72.95 15.11C72.9 13.99 72.64 12.99 71.82 12.18C71 11.36 70.01 11.1 68.89 11.05C67.92 11 66.97 11 66 11C65.03 11 64.08 11 63.11 11.05C61.99 11.1 60.99 11.36 60.18 12.18C59.36 13 59.1 13.99 59.05 15.11C59 16.08 59 17.03 59 18C59 18.97 59 19.92 59.05 20.89C59.1 22.01 59.36 23.01 60.18 23.82C61 24.64 61.99 24.9 63.11 24.95C64.08 25 65.03 25 66 25C66.97 25 67.92 25 68.89 24.95C70.01 24.9 71.01 24.64 71.82 23.82C72.64 23 72.9 22.01 72.95 20.89C73.01 19.93 73 18.97 73 18ZM66 21.59C64.01 21.59 62.41 19.99 62.41 18C62.41 16.01 64.01 14.41 66 14.41C67.99 14.41 69.59 16.01 69.59 18C69.59 19.99 67.99 21.59 66 21.59ZM69.74 15.1C69.28 15.1 68.9 14.73 68.9 14.26C68.9 13.79 69.27 13.42 69.74 13.42C70.21 13.42 70.58 13.79 70.58 14.26C70.5825 14.3695 70.5625 14.4784 70.5212 14.5799C70.48 14.6814 70.4183 14.7733 70.34 14.85C70.2633 14.9283 70.1714 14.99 70.0699 15.0312C69.9684 15.0725 69.8595 15.0925 69.75 15.09L69.74 15.1Z"
                fill="white"
              />
              <circle
                cx="115.5"
                cy="17.5"
                r="17.5"
                fill="#4DC416"
                fillOpacity="0.44"
              />
              <path
                d="M122.759 13.4245C122.206 13.669 121.621 13.8295 121.021 13.901C121.653 13.5224 122.126 12.9269 122.351 12.2255C121.758 12.5788 121.107 12.8265 120.429 12.9604C119.973 12.4728 119.369 12.1495 118.711 12.0406C118.052 11.9317 117.376 12.0434 116.788 12.3583C116.2 12.6733 115.732 13.1738 115.457 13.7821C115.182 14.3903 115.117 15.0723 115.269 15.7219C114.065 15.6617 112.887 15.3489 111.812 14.8037C110.737 14.2586 109.788 13.4934 109.027 12.5578C108.758 13.0201 108.617 13.5456 108.618 14.0805C108.618 15.1304 109.153 16.0579 109.964 16.6009C109.484 16.5858 109.013 16.4559 108.593 16.2223V16.2592C108.593 16.9585 108.835 17.6363 109.278 18.1777C109.72 18.719 110.337 19.0905 111.022 19.2292C110.576 19.3503 110.108 19.3681 109.654 19.2814C109.847 19.8833 110.224 20.4098 110.731 20.787C111.239 21.1641 111.851 21.3731 112.483 21.3847C111.855 21.8781 111.136 22.2429 110.366 22.458C109.597 22.6732 108.793 22.7346 108 22.6388C109.384 23.5289 110.995 24.0015 112.641 24C118.212 24 121.257 19.3856 121.257 15.3838C121.257 15.2535 121.254 15.1217 121.249 14.9921C121.841 14.5637 122.353 14.0324 122.759 13.4245Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="text-center">
        <span className="text-white text-base font-normal font-Poppins leading-normal">
          Design & Developed by{" "}
        </span>
        <span className="text-primary-lime-600 text-base font-normal font-Poppins leading-normal">
          ZySoftec
        </span>
      </div>
    </div>
  );
};
