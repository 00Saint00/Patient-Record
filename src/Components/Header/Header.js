import React from "react";
import logo from "../assets/TestLogo.png";
import doc from "../assets/doc.png";
import settings from "../assets/settings.png";
import more from "../assets/more_vert.png";
import home from "../assets/home.png";
import card from "../assets/credit.png";
import calendar from "../assets/calendar.png";
import chat from "../assets/chat.png";
import group from "../assets/group.png";

const Header = () => {
  return (
    <header className="bg-white rounded-full">
      <nav
        className="flex items-center justify-between py-3 px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="w-auto" src={logo} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex gap-x-5">
          <a
            href="#"
            className="flex items-center rounded-full text-gray-900 hover:bg-teal active:bg-teal active:text-white focus:shadow-outline transition duration-300 py-3 px-4"
          >
            <img src={home} className="w-4 h-4 mr-2" alt="home" />
            <span className="text-sm font-semibold leading-6">Features</span>
          </a>

          <a
            href="#"
            className="flex items-center rounded-full text-gray-900 bg-teal active:bg-teal active:text-white focus:shadow-outline transition duration-300 py-3 px-4"
          >
            <img src={group} className="w-4 h-4 mr-2" alt="group" />
            <span className="text-sm font-semibold leading-6">Patients</span>
          </a>
          <a
            href="#"
            className="flex items-center rounded-full text-gray-900 hover:bg-teal active:bg-teal active:text-white focus:shadow-outline transition duration-300 py-3 px-4"
          >
            <img src={calendar} className="w-4 h-4 mr-2" alt="calendar" />
            <span className="text-sm font-semibold leading-6">Schedule</span>
          </a>
          <a
            href="#"
            className="flex items-center rounded-full text-gray-900 hover:bg-teal active:bg-teal active:text-white focus:shadow-outline transition duration-300 py-3 px-4"
          >
            <img src={chat} className="w-4 h-4 mr-2" alt="chat" />
            <span className="text-sm font-semibold leading-6">Message</span>
          </a>
          <a
            href="#"
            className="flex items-center rounded-full text-gray-900 hover:bg-teal active:bg-teal active:text-white focus:shadow-outline transition duration-300 py-3 px-4"
          >
            <img src={card} className="w-4 h-4 mr-2" alt="card" />
            <span className="text-sm font-semibold leading-6">
              Transactions
            </span>
          </a>
        </div>
        <div className="flex lg:flex-1 justify-end gap-3">
          <div className="flex align-center gap-2.5 border-r-2 border-lightGray">
            <img className="w-auto my-auto" src={doc} alt="" />
            <span className="p-2 text-start">
              <p className="mb-0 text-sm font-bold">Dr. Jose Simmons</p>
              <p className="mb-0 text-sm text-gray-600">General Practitioner</p>
            </span>
          </div>
          <div className="flex gap-5 text-center justify-center items-center">
            <img className="w-auto my-auto" src={settings} alt="" />
            <img className="w-auto my-auto" src={more} alt="" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
