import React from "react";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/randhir-kumar03/"
                    target="_blank"
                  />
                  <FaLinkedinIn size={24} />
                </li>
              </ul>
              <FaFacebook size={24} />
              <FaTwitter size={24} />

              <FaInstagram size={24} />
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2025 my compony. All rights reserved.
              </p>
              <p className="text-sm">Supportive partner 💓 Randhir</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
