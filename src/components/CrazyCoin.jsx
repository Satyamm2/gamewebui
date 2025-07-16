import { SideNavigations } from "./SidebarData";
import React from "react";
import logo from "./crazylogo.svg";
import bgimg from "./2.jpg";
import girl1 from "./girl1.png";
import girl2 from "./girl2.png";
import Slotgames from "./Slotgames.png";
import Glyph from "./Glyph-1.svg";
import gambler from "./gambler.svg";
import winner from "./winner.svg";
import competition from "./competition.svg";
import newrel from "./newrel.svg";
import SearchIcon from "./Search.svg";
import GameSection from "./GameSection";
import gameCover from "./gameCover.png";
import Casino1 from "./Casino1.png";
import home from "./nav-icons/home.png";
import scgc from "./SCGC.png";

const links = [
  {
    name: "Slot Games",
    icon: Slotgames,
    href: "/",
  },
  {
    name: "Casino",
    icon: Glyph,
    href: "/",
  },
  {
    name: "LiveCasino",
    icon: gambler,
    href: "/",
  },
  {
    name: "Live Winners",
    icon: winner,
    href: "/",
  },
  {
    name: "New Release",
    icon: newrel,
    href: "/",
  },
  {
    name: "Table Games",
    icon: competition,
    href: "/",
  },
];

const data = {
  slotGames: [
    "Wild Kennel",
    "Wild West Girls",
    "5 Lions Megaways",
    "Panda Gold",
    "Humes Slots",
    "Raging Buffalo",
  ],
  casino: [
    "Snoop Dogg Dollars",
    "Power of Olympus",
    "Jungle Jackpot",
    "Rubber Duck",
    "Joker’s Jewels",
    "3 Pot Buffalo",
  ],
  liveCasino: [
    "VIP Blackjack 10 - Ruby",
    "VIP Blackjack 3 - Ruby",
    "VIP Blackjack 2 - Ruby",
    "VIP Blackjack 4 - Ruby",
    "VIP Blackjack",
    "VIP Blackjack 10 - Ruby",
  ],
};

const images = {
  slot: [gameCover, gameCover, gameCover, gameCover, gameCover, gameCover],
  casino: [gameCover, gameCover, gameCover, gameCover, gameCover, gameCover],
  live: [gameCover, gameCover, gameCover, gameCover, gameCover, gameCover],
};

const CasinoUI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-500 to-black text-white font-sans">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
        <div className="p-0 m-0">
          <img
            src={logo}
            className="h-10 w-auto block m-0 p-0"
            alt="Brand Logo"
          />
        </div>
        <div className="flex ">
          <img src={scgc} className="h-12 w-auto block m-0 p-0" />
        </div>
        <div className="flex items-center gap-4 pr-10">
          <button className="bg-black px-8 py-2 text-sm rounded-md text-white cursor-pointer">
            Login
          </button>
          <button className="bg-black text-white text-sm px-6 py-2 rounded-md cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-2/12 bg-black p-4 space-y-4">
          <button className="w-full flex gap-1 justify-center text-white bg-gradient-to-r from-yellow-400 to-yellow-600 font-bold py-2 rounded">
            <img src={home} alt="home" className="h-5 w-5" />
            Home
          </button>
          <div className="space-y-6">
            {SideNavigations.map((section, index) => (
              <div
                key={index}
                className="text-sm bg-gray-950 p-2 rounded-md text-gray-300 space-y-2"
              >
                {section.category && (
                  <div className="text-white font-semibold border-b border-gray-600 pb-1">
                    {section.category}
                  </div>
                )}
                <ul className="space-y-2">
                  {section.list.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 hover:text-white cursor-pointer"
                    >
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-5 h-5"
                      />
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        {/* Welcome Banner */}
        <div className="flex-1 w-full flex-col">
          <section
            className="relative flex flex-col justify-center items-center text-center overflow-hidden"
            style={{
              height: "400px",

              backgroundImage: `url(${bgimg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Left Girl Image */}
            <img
              src={girl1}
              alt="Girl 1"
              className="hidden md:block absolute bottom-0 top-14 left-10 h-full object-contain transform scale-130"
            />

            {/* Right Girl Image */}
            <img
              src={girl2}
              alt="Girl 2"
              className="hidden md:block absolute bottom-0 top-12 right-0 left-130 h-full object-contain transform scale-130"
            />

            {/* Text Content */}
            <div className="w-full max-w-3xl text-center mr-30  z-10">
              <h1
                className="text-3xl font-bold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Welcome Offer 200% Extra
              </h1>
              <p
                className="text-3xl text-yellow-500 font-bold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Coins on First Purchase
              </p>
            </div>
          </section>

          {/* Main Content */}
          <main className="flex-1  p-6 mx-20 my-0">
            {/* Tabs */}
            <div className="flex gap-2">
              {/* Search Box */}
              <div className="flex items-center justify-between px-3 py-3 mb-4 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 text-white w-48 shadow-inner h-12">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent outline-none text-white placeholder-white w-full text-base"
                />
                <img src={SearchIcon} alt="search" className="h-4 w-4" />
              </div>

              {links.map((link, index) => (
                <button
                  key={index}
                  className="relative bg-black hover:bg-gradient-to-r from-yellow-400 to-yellow-600 text-yellow-200 hover:text-white  py-2 h-12 rounded cursor-pointer flex flex-col items-center justify-end w-27"
                >
                  <div className="absolute -top-4 flex justify-center w-full">
                    <img
                      src={link.icon}
                      alt={link.name}
                      className="w-10 h-10  bg-transparent p-1"
                    />
                  </div>
                  <span className="text-xs font-semibold mt-2">
                    {link.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Game Cards */}
            <div className="min-h-screen">
              <GameSection
                title={
                  <div className="flex items-center gap-2">
                    <img src={Slotgames} alt="Slot Icon" className="w-4 h-4" />
                    <span className="text-sm font-semibold">Slot Games</span>
                  </div>
                }
                items={data.slotGames}
                images={images.slot}
              />
              <GameSection
                title={
                  <div className="flex items-center gap-2">
                    <img src={Casino1} alt="Slot Icon" className="w-4 h-4" />
                    <span className="text-sm font-semibold">Casino</span>
                  </div>
                }
                items={data.casino}
                images={images.casino}
              />
              <GameSection
                title={
                  <div className="flex items-center gap-2">
                    <img src={Casino1} alt="Slot Icon" className="w-4 h-4" />
                    <span className="text-sm font-semibold">Live Casino</span>
                  </div>
                }
                items={data.liveCasino}
                images={images.live}
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CasinoUI;
