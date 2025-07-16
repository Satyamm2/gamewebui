import React from "react";
import logo from "./crazylogo.svg";
import tele from "./tele.png";
import insta from "./Insta.png";
import twitter from "./twitter.png";
import whatsapp from "./whatsapp.png";
import fb from "./fb.png";
import mskgrp from "./maskgrp.png";

const FooterSection = () => {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${mskgrp})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "15% center",
          backgroundSize: "20%",
        }}
      ></div>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${mskgrp})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "105% center",
          backgroundSize: "20%",
          transform: "rotate(-25deg) translateY(55%)",
        }}
      ></div>

      <div className="relative z-10 pl-90 py-12 mx-auto max-w-6xl">
        {/* Top Section */}
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-8">
            <img src={logo} alt="Crazy Coins Logo" className="h-20" />
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm w-full max-w-5xl mx-auto">
            {/* Features */}
            <div>
              <h4 className="font-bold text-yellow-600 text-left underline mb-2">
                Features
              </h4>
              <ul className="space-y-1 text-left text-gray-500">
                <li>
                  <a href="#" className="underline">
                    Popular Games
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Live Win
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Table Games
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Slot Games
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    New Release
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Live Casino
                  </a>
                </li>
              </ul>
            </div>

            {/* Providers */}
            <div>
              <h4 className="font-bold text-yellow-600 text-left underline mb-2">
                Providers
              </h4>
              <ul className="space-y-1 text-left  text-gray-500">
                <li>
                  <a href="#" className="underline">
                    Pragmatic Play
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Pragmatic Play
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Pragmatic Play
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Pragmatic Play
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Pragmatic Play
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Pragmatic Play
                  </a>
                </li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h4 className="font-bold text-yellow-600 text-left underline mb-2">
                About Crazy Coins
              </h4>
              <ul className="space-y-1 text-left text-gray-500">
                <li>
                  <a href="#" className="underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    How to Play
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Player Safety
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Customer Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-yellow-600 mb-2 text-left underline">
                Contact Us
              </h4>
              <ul className="space-y-1 text-left  text-gray-500">
                <li>
                  <a href="mailto:support@crazycoins.com" className="underline">
                    Support: support@crazycoins.com
                  </a>
                </li>
                <li>
                  <a href="mailto:legal@crazycoins.com" className="underline">
                    Legal: legal@crazycoins.com
                  </a>
                </li>
              </ul>
              <div className="flex mt-10">Follow us</div>
              <div className="flex space-x-4 mt-2 justify-start">
                <a href="#">
                  <img src={tele} />
                </a>
                <a href="#">
                  <img src={insta} />
                </a>
                <a href="#">
                  <img src={twitter} />
                </a>
                <a href="#">
                  <img src={whatsapp} />
                </a>
                <a href="#">
                  <img src={fb} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="mt-10 bg-yellow-700 text-center py-3 text-sm text-black">
        <span className="text-white">
          ©2025 Crazy Coins All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default FooterSection;
