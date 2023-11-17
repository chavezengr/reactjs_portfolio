import React, { useState } from "react";
// import head_tw from "../utils/header-tw";
import Tabs from "./Tabs";
import TabButton from "./TabButton";
import { NavLink } from "react-router-dom";

export default function Header({ handleModeButtons, mode }) {
  // const { dark, light } = head_tw;
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  const [isToogleSideNav, setIsToogleSideNav] = useState(false);
  // const [isToogleDarkMode, setIsToogleDarkModeNav] = useState(false);

  const { darkMode } = mode;

  const TabButtons = ({ display }) => {
    let activeTab = "";
    if (darkMode) {
      activeTab = "bg-zinc-950";
    } else {
      activeTab = "bg-zinc-400";
    }
    return (
      <div className={display}>
        <TabButton
          isActive={activeContentIndex === 0}
          onClick={() => setActiveContentIndex(0)}
          className={
            activeContentIndex == 0
              ? `hover:bg-slate-900 active:bg-slate-700/50 ${activeTab} rounded-lg md:my-0 my-1 border-x-2 border-stone-700`
              : "hover:bg-slate-900 active:bg-slate-700/50 rounded-lg md:my-0 my-1 border-x-2 border-stone-700"
          }
        >
          <NavLink to="/">
            <div className="w-32 md:h-16 h-10 flex justify-center items-center bg-slate-900/50 rounded-lg">
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  strokeOpacity="0.5"
                  className="w-8 h-6 fill-slate-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </span>
              <span className="text-sm text-slate-200"> Home </span>
            </div>
          </NavLink>
        </TabButton>
        <TabButton
          isActive={activeContentIndex === 1}
          onClick={() => setActiveContentIndex(1)}
          className={
            activeContentIndex == 1
              ? `hover:bg-slate-900 active:bg-slate-700/50 ${activeTab} rounded-lg md:my-0 my-1 border-x-2 border-stone-700`
              : "hover:bg-slate-900 active:bg-slate-700/50 rounded-lg md:my-0 my-1 border-x-2 border-stone-700"
          }
        >
          <NavLink to="/projects">
            <div className="w-32 md:h-16 h-10 flex justify-center items-center bg-slate-900/50 rounded-lg">
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  strokeOpacity="0.5"
                  className="w-8 h-6 fill-slate-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                  />
                </svg>
              </span>
              <span className="text-sm text-slate-200"> Projects </span>
            </div>
          </NavLink>
        </TabButton>
        <TabButton
          isActive={activeContentIndex === 2}
          onClick={() => setActiveContentIndex(2)}
          className={
            activeContentIndex == 2
              ? `hover:bg-slate-900 active:bg-slate-700/50 ${activeTab} rounded-lg md:my-0 my-1 border-x-2 border-stone-700`
              : "hover:bg-slate-900 active:bg-slate-700/50 rounded-lg md:my-0 my-1 border-x-2 border-stone-700"
          }
        >
          <NavLink to="/contacts">
            <div className="w-32 md:h-16 h-10 flex justify-center items-center bg-slate-900/50 rounded-lg">
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  strokeOpacity="0.5"
                  className="w-8 h-6 fill-slate-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>
              <span className="text-sm text-slate-200">Contacts </span>
            </div>
          </NavLink>
        </TabButton>
      </div>
    );
  };

  // const TabScrenModeButtons = ({ display }) => {
  //   return (
  //     <div className={display}>
  //       <TabButton
  //         isActive={activeContentModeIndex === 0}
  //         onClick={handleModeButtons}
  //         className={
  //           activeContentModeIndex == 0
  //             ? "hover:bg-slate-900 active:bg-slate-700/50 bg-zinc-950 rounded-lg md:my-0 my-1 border-x-2 border-stone-700"
  //             : "hover:bg-slate-900 active:bg-slate-700/50 rounded-lg md:my-0 my-1 border-x-2 border-stone-700"
  //         }
  //       >
  //         <div className="w-32 h-10 my-1 flex justify-center items-center bg-slate-900/50 rounded-lg">
  //           <span className="">
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               fill="none"
  //               viewBox="0 0 24 24"
  //               strokeWidth="1.5"
  //               stroke="white"
  //               strokeOpacity="0.5"
  //               className="w-8 h-6 fill-slate-200"
  //             >
  //               <path
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
  //               />
  //             </svg>
  //           </span>
  //           <span className="text-sm text-slate-200"> Light </span>
  //         </div>
  //       </TabButton>
  //       <TabButton
  //         isActive={activeContentModeIndex === 1}
  //         onClick={handleModeButtons}
  //         className={
  //           activeContentModeIndex == 1
  //             ? "hover:bg-slate-900 active:bg-slate-700/50 bg-zinc-950 rounded-lg md:my-0 my-1 border-x-2 border-stone-700"
  //             : "hover:bg-slate-900 active:bg-slate-700/50 rounded-lg md:my-0 my-1 border-x-2 border-stone-700"
  //         }
  //       >
  //         <div className="w-32 my-1 h-10 flex justify-center items-center bg-slate-900/50 rounded-lg">
  //           <span className="">
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               fill="none"
  //               viewBox="0 0 24 24"
  //               strokeWidth="1.5"
  //               stroke="white"
  //               strokeOpacity="0.5"
  //               className="w-8 h-6 fill-slate-200"
  //             >
  //               <path
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
  //               />
  //             </svg>
  //           </span>
  //           <span className="text-sm text-slate-200"> Dark </span>
  //         </div>
  //       </TabButton>
  //     </div>
  //   );
  // };

  // const handleToogleDarkMode = () => {
  //   if (activeContentModeIndex === 1) {
  //     setIsToogleDarkModeNav(true);
  //   }

  // setIsToogleSideNav(false);
  // };

  const handleToogleSideNav = () => {
    setIsToogleSideNav((isToogleSideNav) => !isToogleSideNav);
    // setIsToogleDarkModeNav(false);
  };

  return (
    <header className="">
      {/* <div className={activeContentModeIndex === 1 ? dark : light}> */}
      <div className="inline">
        <span>
          <button className="bg-slate-900/40 rounded-full md:float-left inline-block mt-4 md:ml-10 lg:ml-10 ml-3 hover:bg-slate-500 active:bg-slate-700/50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="w-10 h-6 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>
            {/* <span className="text-sm text-slate-200 flex">Joeram Chavez</span> */}
          </button>
          <button
            className=" md:float-right mt-4 mr-10 md:ml-0 ml-24"
            onClick={handleModeButtons}
          >
            <span className="bg-slate-900/40 rounded-full inline-block hover:bg-slate-500 active:bg-slate-700/50 h-10 w-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                strokeOpacity="0.5"
                className="w-8 h-6 fill-slate-200 inline-block mt-2"
              >
                {darkMode ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                )}
              </svg>
            </span>
            {/* {isToogleDarkMode && (
              <div
                className={`absolute top-10 md:right-10 right-48 mt-4 w-44 max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:highlight-white/5`}
              > */}
            {/* <TabScrenModeButtons display="flex flex-col" /> */}
            {/* </div>
            )} */}
          </button>
        </span>
      </div>
      <div className="relative hidden md:flex lg:flex justify-center items-center ml-auto rounded-md">
        <Tabs buttons={<TabButtons display="flex" />} />
      </div>

      <div className="-my-1 md:hidden lg:hidden float-right inline-block mt-4 mr-4">
        <button
          type="button"
          onClick={handleToogleSideNav}
          className="text-white w-8 h-8 flex items-center justify-center hover:text-slate-400 dark:text-slate-400 dark:hover:text-slate-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </button>
      </div>

      {isToogleSideNav && (
        <div
          className={`fixed md:hidden lg:hidden top-10 right-4 mt-4 w-44 max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:highlight-white/5`}
        >
          <TabButtons display="flex flex-col" />
        </div>
      )}
      {/* </div> */}
    </header>
  );
}
