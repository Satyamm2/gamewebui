import prize from './nav-icons/prize.png'
import Slotgames from './Slotgames.png'
import Casino1 from './Casino1.png'
import gambler from './nav-icons/gambler.png'
import winner from './nav-icons/winner.png'
import launch from './nav-icons/launch.png'
import comp from './nav-icons/comp.png'
import giftbox from './nav-icons/giftbox.png';
import boy from './nav-icons/boy.png'
import ebook from './nav-icons/ebook.png'
import hrs from './nav-icons/24hours.png';
import wheel from './nav-icons/wheel.png';

export const SideNavigations = [
  {
    category: "Games",
    list: [
      { name: "Popular Games", icon: prize, href: "" },
      { name: "Slot Games", icon: Slotgames, href: "" },
      { name: "Casino", icon: Casino1, href: "" },
      { name: "Live Casino", icon: gambler, href: "" },
      { name: "Live Winners", icon: winner, href: "" },
      { name: "New Releases", icon: launch, href: "" },
      { name: "Table Games", icon: comp, href: "" },
    ],
  },
  {
    category: "",
    list: [
      { name: "Promotions", icon: giftbox, href: "" },
      { name: "Redeem", icon: boy, href: "" },
      { name: "Buy", icon: giftbox, href: "" },
    ],
  },
  {
    category: "",
    list: [
      { name: "How to Play", icon: ebook, href: "" },
      { name: "Help Center", icon: hrs, href: "" },
      { name: "Spin Wheel", icon: wheel, href: "" },
    ],
  },
];
