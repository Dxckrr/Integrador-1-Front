import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import USER_IMAGE from "../assets/svg/icons/extra/UserBlack.svg";
import LOGO_IPS from "../assets/img/logos/LogoSanavit(Pequeño).png";
import { navigation } from "../utils/navLinks.routes.js";
import { useState } from "react";
import {
  ArrowLeftEndOnRectangleIcon,
  ArrowLeftStartOnRectangleIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import Login from "./views/Login";

/**
 * This function takes a list of classes and joins them together in one
 * @param  {...any} classes
 * @returns a single class
 */
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

/**
 * This component represents the Navegation Bar that is displayed on top of the screen and its fixed.
 * @returns {Component} Navbar
 */
const NavBar = () => {
  // Mock authentication status
  const userLogin = false;
  const isAuthenticated = false;
  const logoutContext = () => {
    // Implement logout functionality here
    console.log("User logged out");
  };

  // State to manage the login modal visibility
  const [showLogin, setShowLogin] = useState<boolean>(false);

  const openLogin = () => setShowLogin(true);
  const closeLogin = () => setShowLogin(false);

  return (
    <>
      {/* Render Login modal if visible */}
      {showLogin && <Login onClose={closeLogin} />}

      <Disclosure as="nav" className="bg-white shadow-customNav fixed top-0 left-0 right-0 z-10">
        {({ open }) => (
          <>
            <div className="w-full px-2 sm:px-6 lg:px-8">
              <div className="relative px-10 flex h-16 items-center justify-between xl:px-20">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                {/* Logo section */}
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <a href="/">
                      <img
                        className="h-14 w-auto"
                        src={LOGO_IPS}
                        alt="Salud PRO - IPS"
                      />
                    </a>
                  </div>
                </div>

                {/* Items section */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                  <div className="hidden sm:ml-36 sm:block">
                    <div className="flex items-center">
                      {navigation.map((item) => (
                        <a
                          aria-current={item.current ? "page" : undefined}
                          href={item.href}
                          className="relative group mx-7 px-1 2xl:mx-8 2xl:px-2 hover:cursor-pointer">
                          <span> {item.name}</span>
                          <span className="absolute -bottom-1 left-1/2 w-0 h-[1.5px] bg-black group-hover:w-1/2 group-hover:transition-all" />
                          <span className="absolute -bottom-1 right-1/2 w-0 h-[1.5px] bg-black group-hover:w-1/2 group-hover:transition-all" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-8">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only bg-white">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={USER_IMAGE}
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95">
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {isAuthenticated ? (
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "flex items-center px-2 py-1 text-sm text-black"
                                )}>
                                <UserIcon className="w-6 mr-2 text-gray-800" />
                                {/* {userLogin.user.nameUser} */}
                              </a>
                            )}
                          </Menu.Item>
                        ) : null}
                        {isAuthenticated ? (
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                onClick={(event) => {
                                  event.preventDefault();
                                  logoutContext();
                                }}
                                href="/"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "flex items-center px-2 py-1 text-sm text-black"
                                )}>
                                <ArrowLeftStartOnRectangleIcon className="w-6 mr-2 text-gray-800" />
                                Log out
                              </a>
                            )}
                          </Menu.Item>
                        ) : (
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                onClick={() => openLogin()}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "flex justify-between px-2 py-1 text-sm text-black"
                                )}>
                                Log in
                                <ArrowLeftEndOnRectangleIcon className="w-6 mr-2 text-gray-800" />
                              </a>
                            )}
                          </Menu.Item>
                        )}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            {/* Items on responsive mode */}
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-black"
                        : "text-black hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}>
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default NavBar;
