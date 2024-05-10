import Image from "next/image";
import MenuLink from "./menuLink/menuLink";

import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdWork,
  MdAnalytics,
  MdOutlineSettings,
  MdHelpCenter,
} from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
// import { auth, signOut } from "@/app/auth";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/admin",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/admin/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Manage",
        path: "/admin/manage",
        icon: <GrUserAdmin />,
      },
      {
        title: "History",
        path: "/admin/history",
        icon: <FaHistory />,
      },
      {
        title: "Revenue",
        path: "/admin/revenue",
        icon: <MdWork />,
      },
    ],
  },

  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/admin/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/admin/help",
        icon: <MdHelpCenter />,
      },
      {
        title: "Reports",
        path: "/admin/reports",
        icon: <MdAnalytics />,
      },
    ],
  },
];

const Sidebar = () => {
  //   const { user } = await auth();
  return (
    <div className="sticky top-10">
      <div className="flex items-center gap-5 mb-5 w-60">
        <Image
          className="rounded-3xl object-cover bg-white"
          src={"/assets/avatar_admin.webp"}
          alt=""
          width="50"
          height="50"
        />
        <div className="flex flex-col">
          <span className="font-medium">LoylP</span>
          <span className="text-slate-300 text-xs">Administrator</span>
        </div>
      </div>
      <ul className="list-none">
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className="text-gray-400 font-bold text-xs mx-2 mt-10 ">
              {cat.title}
            </span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
