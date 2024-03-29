import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import './Header.css'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import LoginBtn from '../LoginBtn/LoginBtn';



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


// bg-gradient-to-r from-purple-500 to-blue-700

export default function Header() {


  const [current, setCurrent] = useState("Home")
  const navigation = [
    { name: 'Home', href: '/', current: current === "Home" ? true : false },
    { name: 'About Us', href: '/aboutus', current: current === "About Us" ? true : false },
    { name: 'Courses', href: '/courses', current: current === "Courses" ? true : false },
    { name: 'Join Us', href: '/joinus', current: current === "Join Us" ? true : false },
    { name: 'Contact Us', href: '/contact', current: current === "Contact Us" ? true : false },
    // { name: 'Calendar', href: '#', current: false },
  ]
  return (



    <Disclosure as="nav" className="bg-gray-800 sticky-top" >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8" >
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className='d-flex'>
                <NavLink to="/">

                  <img className="hidden h-8  lg:block md:block"
                    src="https://firebasestorage.googleapis.com/v0/b/sansaptak-b8665.appspot.com/o/vector%20images%2F24969119-c8f7-4825-9a48-c7f0d8b7c684-removebg-preview.png?alt=media&token=17476b44-4df6-4301-a78b-c5e6d276c65e"
                    alt="Your Company"
                    width="40px"
                    height="80px"
                  />
                </NavLink>
                <NavLink to="/">

                  <h4 className='text-2xl tracking-tight leading-10 font-extrabold sm:text-2xl text-white sm:leading-none md:text-2xl h-8 hidden lg:block md:block mx-2 '> 
                    LLOGICAL
                  </h4>
                </NavLink>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end ">
                <div className="flex flex-shrink-0 items-center">
                  {/* <img
                className="block h-8  lg:hidden"
                src="https://firebasestorage.googleapis.com/v0/b/sansaptak-b8665.appspot.com/o/vector%20images%2FFB_IMG_1674130454403.jpg?alt=media&token=ce95125b-e8ee-4508-b1ab-f21d41352c67"
                alt="Your Company"
                width="70px"
                height="70px" 
              /> */}
                  <NavLink to="/">

                    <h4 className='text-2xl tracking-tight leading-10 font-extrabold sm:text-2xl text-white sm:leading-none md:text-2xl "block h-8  lg:hidden md:hidden '>
                      LLOGICAL
                    </h4>
                  </NavLink>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 ">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'block px-3 py-2 rounded-md text-base font-medium'
                        )}
                        onClick={() => {
                          setCurrent(item.name)
                        }}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                   <LoginBtn/>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button
              type="button"
              className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button> */}

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      {/* <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  /> */}
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden  ">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  as="a"
                  to={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  onClick={() => { setCurrent(item.name) }}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </NavLink>
              ))}
                 <LoginBtn/>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
