"use client";
import classNames from "classnames";
import React, { useMemo, useState } from "react";
import { ChevronLeft, HeartHandshake, Grid2X2, LayoutList, CheckCheck, CalendarDays, Map, CircleHelp, LogOut  } from 'lucide-react';
import { usePathname } from "next/navigation";
import Link from 'next/link';


const menuItems = [
  { id: 1, label: "Jobs", icon: Grid2X2 , link: "/Jobs"},
  { id: 2, label: "next Jobs", icon: LayoutList , link: ".../auftraege/nextJobs"},
  { id: 3, label: "done Jobs", icon: CheckCheck , link: "/doneJobs"},
  { id: 4, label: "Calendar", icon: CalendarDays , link: "/Calendar"},
  { id: 5, label: "Map", icon: Map , link: "/Map"},
  { id: 6, label: "Help Center", icon: CircleHelp , link: "/HelpCenter"},
  { id: 7, label: "log out", icon: LogOut , link: "/logOut"},
]

const SideBar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

 /*const router = useRouter()*/
 const pathname = usePathname();

 const activeMenu = useMemo(() => menuItems.find(menu => menu.link === pathname), [pathname]);
/*const activeMenu= useMemo(() => menuItems.find(menu => menu.link === router.pathname ), [router.pathname])*/
  
  const wrapperClasses = classNames(
    "h-screen px-4 pt-8 pb-4 bg-primary flex justify-between flex-col",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames("p-4 rounded bg-light-lighter absolute right-0", 
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu: { id: any; label?: string; link?: string; }) => {
    return classNames("flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
    {
      ["bg-light-lighter"]: activeMenu && activeMenu.id === menu.id
    })
  }


  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible)
  }

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  }

  return (
      <div className={wrapperClasses} onMouseEnter={onMouseOver} onMouseLeave={onMouseOver} style={{ transition: "width 300ms cubic-bezier(0, 0, 1, 1) 0s"}}> 
        <div className="flex flex-col">
          <div className="flex items-center justify-between relative">
            <div className="flex items-center pl-1 gap-4">
              <HeartHandshake />
              <span 
                className={classNames("mt-2 text-lg font-medium text-text", {
                  hidden: toggleCollapse,
                })}>
                    Helpateer
              </span>
            </div>
            {isCollapsible &&(
              <button className={collapseIconClasses} onClick={handleSidebarToggle}>
              <ChevronLeft />
            </button>
            )}
          </div>

          <div className="flex flex-col items-start mt-24">
          {menuItems.map(({ icon: Icon, ...menu }) => {
    const classes = getNavItemClasses(menu);
    return (
        <div className={classes} key={menu.id}>
            {/* Link um den gesamten Menüeintrag */}
            <Link href={menu.link} className="flex py-4 px-3 items-center w-full h-full">
                {/* Icon rendern, falls vorhanden */}
                {Icon && <Icon className="mr-2" />}
                {/* Label rendern, wenn nicht ausgeblendet */}
                {!toggleCollapse && (
                    <span className="text-md font-medium text-text-light">
                        {menu.label}
                    </span>
                )}
            </Link>
        </div>
    );
})}

              
          </div>
        </div>

      </div>
  );
};

export default SideBar;
