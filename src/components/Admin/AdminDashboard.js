import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link, Outlet } from "react-router-dom";
import {
  Bars3CenterLeftIcon,
  CogIcon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
const ordersLinks = [
  {
    name: "Dashboard",
    href: "",
    icon: (props) => (
        <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M1.63.47a.393.393 0 00-.39.39v2.417c0 .212.177.39.39.39h20.74c.213 0 .39-.178.39-.39V.859a.393.393 0 00-.39-.39zm-.045 4.126a.41.41 0 00-.407.337l-1.17 6.314C0 11.274 0 11.3 0 11.327v2.117c0 .23.186.416.416.416h23.168c.23 0 .416-.186.416-.416v-2.126c0-.027 0-.053-.009-.08l-1.169-6.305a.41.41 0 00-.407-.337zM1.7 14.781a.457.457 0 00-.46.46v7.829c0 .257.203.46.46.46h14.108c.257 0 .46-.203.46-.46v-6.589c0-.257.204-.46.461-.46h4.02c.258 0 .461.203.461.46v6.589c0 .257.204.46.46.46h.62a.456.456 0 00.461-.46v-7.829a.458.458 0 00-.46-.46zm1.842 1.55h7.847c.212 0 .39.177.39.39V21.6c0 .212-.178.39-.39.39H3.542a.393.393 0 01-.39-.39v-4.88c0-.221.178-.39.39-.39z" />
      </svg>
    ),
    current: true,
  },
  {
    name: "Manage Orders",
    href: "manage-orders",
    icon: (props) => (
        <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        height="1em"
        width="1em"
        {...props}
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-3.5-6H14a.5.5 0 100-1h-4a2.5 2.5 0 110-5h1V6h2v2h2.5v2H10a.5.5 0 100 1h4a2.5 2.5 0 110 5h-1v2h-2v-2H8.5v-2z" />
      </svg>
    ),
  },
  {
    name: "Customers",
    href: "customers",
    icon: (props) => (
        <svg
        viewBox="0 0 640 512"
        fill="currentColor"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M184 88c0 30.9-25.1 56-56 56s-56-25.1-56-56 25.1-56 56-56 56 25.1 56 56zM64 245.7c-10 11.2-16 26.1-16 42.3s6 31.1 16 42.3v-84.6zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32v-26.8C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416v-21.5c20-24.7 32-56.2 32-90.5 0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112 0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32zM568 88c0 30.9-25.1 56-56 56s-56-25.1-56-56 25.1-56 56-56 56 25.1 56 56zm8 157.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 160c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm-80 144c0 16.2 6 31 16 42.3v-84.6c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zm64 42.3c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-42.8c-37.8-18-64-56.5-64-101.2 0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z" />
      </svg>
    ),
  },
];

const productsLinks = [
  {
    name: "Add Product",
    href: "add-product",
    icon: (props) => (
        <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        height="1em"
        width="1em"
        {...props}
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M11 7V4a1 1 0 011-1h9a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V8a1 1 0 011-1h8zm-6 9v2h5v-2H5zm9 0v2h5v-2h-5zm0-3v2h5v-2h-5zm0-3v2h5v-2h-5zm-9 3v2h5v-2H5z" />
      </svg>
    ),
    current: false,
  },

  {
    name: "Manage Stock",
    href: "manage-products",
    icon: ScaleIcon,
    current: false,
  },
];

const couponsLinks = [
  {
    name: "Add Coupon",
    href: "add-coupon",
    icon: (props) => (
        <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        height="1em"
        width="1em"
        {...props}
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M10 21H3a1 1 0 01-1-1V4a1 1 0 011-1h7a2 2 0 104 0h7a1 1 0 011 1v16a1 1 0 01-1 1h-7a2 2 0 10-4 0zm-1.465-2A3.998 3.998 0 0112 17c1.48 0 2.773.804 3.465 2H20V5h-4.535A3.998 3.998 0 0112 7a3.998 3.998 0 01-3.465-2H4v14h4.535zM6 8h2v8H6V8zm10 0h2v8h-2V8z" />
      </svg>
    ),
  },
  {
    name: "Manage Coupon",
    href: "manage-coupon",
    icon: (props) => (
        <svg
      viewBox="0 0 640 512"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M144 160c44.2 0 80-35.8 80-80S188.2 0 144 0 64 35.8 64 80s35.8 80 80 80zm368 0c44.2 0 80-35.8 80-80S556.2 0 512 0s-80 35.8-80 80 35.8 80 80 80zM0 298.7C0 310.4 9.6 320 21.3 320h214.1c-26.6-23.5-43.3-57.8-43.3-96 0-7.6.7-15 1.9-22.3-13.6-6.3-28.7-9.7-44.6-9.7h-42.7C47.8 192 0 239.8 0 298.7zM320 320c24 0 45.9-8.8 62.7-23.3 2.5-3.7 5.2-7.3 8-10.7 2.7-3.3 5.7-6.1 9-8.3C410 262.3 416 243.9 416 224c0-53-43-96-96-96s-96 43-96 96 43 96 96 96zm65.4 60.2c-10.3-5.9-18.1-16.2-20.8-28.2H261.3C187.7 352 128 411.7 128 485.3c0 14.7 11.9 26.7 26.7 26.7h300.5c-2.1-5.2-3.2-10.9-3.2-16.4v-3c-1.3-.7-2.7-1.5-4-2.3l-2.6 1.5c-16.8 9.7-40.5 8-54.7-9.7-4.5-5.6-8.6-11.5-12.4-17.6l-.1-.2-.1-.2-2.4-4.1-.1-.2-.1-.2c-3.4-6.2-6.4-12.6-9-19.3-8.2-21.2 2.2-42.6 19-52.3l2.7-1.5v-2.3-2.3l-2.7-1.5zM533.3 192h-42.6c-15.9 0-31 3.5-44.6 9.7 1.3 7.2 1.9 14.7 1.9 22.3 0 17.4-3.5 33.9-9.7 49 2.5.9 4.9 2 7.1 3.3l2.6 1.5c1.3-.8 2.6-1.6 4-2.3v-3c0-19.4 13.3-39.1 35.8-42.6 7.9-1.2 16-1.9 24.2-1.9s16.3.6 24.2 1.9c22.5 3.5 35.8 23.2 35.8 42.6v3c1.3.7 2.7 1.5 4 2.3l2.6-1.5c16.8-9.7 40.5-8 54.7 9.7 2.3 2.8 4.5 5.8 6.6 8.7-2.1-57.1-49-102.7-106.6-102.7zm91.3 163.9c6.3-3.6 9.5-11.1 6.8-18-2.1-5.5-4.6-10.8-7.4-15.9l-2.3-4c-3.1-5.1-6.5-9.9-10.2-14.5-4.6-5.7-12.7-6.7-19-3L574.4 311c-8.9-7.6-19.1-13.6-30.4-17.6v-21c0-7.3-4.9-13.8-12.1-14.9-6.5-1-13.1-1.5-19.9-1.5s-13.4.5-19.9 1.5c-7.2 1.1-12.1 7.6-12.1 14.9v21c-11.2 4-21.5 10-30.4 17.6l-18.2-10.5c-6.3-3.6-14.4-2.6-19 3-3.7 4.6-7.1 9.5-10.2 14.6l-2.3 3.9c-2.8 5.1-5.3 10.4-7.4 15.9-2.6 6.8.5 14.3 6.8 17.9l18.2 10.5c-1 5.7-1.6 11.6-1.6 17.6s.6 11.9 1.6 17.5l-18.2 10.5c-6.3 3.6-9.5 11.1-6.8 17.9 2.1 5.5 4.6 10.7 7.4 15.8l2.4 4.1c3 5.1 6.4 9.9 10.1 14.5 4.6 5.7 12.7 6.7 19 3l18.2-10.2c8.9 7.6 19.2 13.6 30.4 17.6v21c0 7.3 4.9 13.8 12.1 14.9 6.5 1 13.1 1.5 19.9 1.5s13.4-.5 19.9-1.5c7.2-1.1 12.1-7.6 12.1-14.9v-21c11.2-4 21.5-10 30.4-17.6l18.2 10.5c6.3 3.6 14.4 2.6 19-3 3.7-4.6 7.1-9.4 10.1-14.5l2.4-4.2c2.8-5.1 5.3-10.3 7.4-15.8 2.6-6.8-.5-14.3-6.8-17.9l-18.2-10.5c1-5.7 1.6-11.6 1.6-17.5s-.6-11.9-1.6-17.6l18.2-10.5zM552 384c0 22.1-17.9 40-40 40s-40-17.9-40-40 17.9-40 40-40 40 17.9 40 40z" />
    </svg>
    ),
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const CategoryLinks = [
  { name: "Add Category", href: "category-to-add",  
    icon: (props) => (
    <svg
      viewBox="0 0 640 512"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M224 256c-70.7 0-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128-57.3 128-128 128zm-45.7 48h91.4c11.8 0 23.4 1.2 34.5 3.3-2.1 18.5 7.4 35.6 21.8 44.8-16.6 10.6-26.7 31.6-20 53.3 4 12.9 9.4 25.5 16.4 37.6s15.2 23.1 24.4 33c15.7 16.9 39.6 18.4 57.2 8.7v.9c0 9.2 2.7 18.5 7.9 26.3H29.7C13.3 512 0 498.7 0 482.3 0 383.8 79.8 304 178.3 304zM436 218.2c0-7 4.5-13.3 11.3-14.8 10.5-2.4 21.5-3.7 32.7-3.7s22.2 1.3 32.7 3.7c6.8 1.5 11.3 7.8 11.3 14.8v30.6c7.9 3.4 15.4 7.7 22.3 12.8l24.9-14.3c6.1-3.5 13.7-2.7 18.5 2.4 7.6 8.1 14.3 17.2 20.1 27.2s10.3 20.4 13.5 31c2.1 6.7-1.1 13.7-7.2 17.2l-25 14.4c.4 4 .7 8.1.7 12.3s-.2 8.2-.7 12.3l25 14.4c6.1 3.5 9.2 10.5 7.2 17.2-3.3 10.6-7.8 21-13.5 31s-12.5 19.1-20.1 27.2c-4.8 5.1-12.5 5.9-18.5 2.4L546.3 442c-6.9 5.1-14.3 9.4-22.3 12.8v30.6c0 7-4.5 13.3-11.3 14.8-10.5 2.4-21.5 3.7-32.7 3.7s-22.2-1.3-32.7-3.7c-6.8-1.5-11.3-7.8-11.3-14.8v-30.6c-8-3.4-15.6-7.7-22.5-12.9l-24.7 14.3c-6.1 3.5-13.7 2.7-18.5-2.4-7.6-8.1-14.3-17.2-20.1-27.2s-10.3-20.4-13.5-31c-2.1-6.7 1.1-13.7 7.2-17.2l24.8-14.3c-.4-4.1-.7-8.2-.7-12.4s.2-8.3.7-12.4L343.8 325c-6.1-3.5-9.2-10.5-7.2-17.2 3.3-10.6 7.7-21 13.5-31s12.5-19.1 20.1-27.2c4.8-5.1 12.4-5.9 18.5-2.4l24.8 14.3c6.9-5.1 14.5-9.4 22.5-12.9v-30.4zm92.1 133.5c0-26.5-21.5-48-48.1-48s-48.1 21.5-48.1 48 21.5 48 48.1 48 48.1-21.5 48.1-48z" />
    </svg>
  ), 
    },
  {
    name: "Manage Category",
    href: "manage-category",
    icon: (props) => (
        <svg
        viewBox="0 0 640 512"
        fill="currentColor"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M144 160c44.2 0 80-35.8 80-80S188.2 0 144 0 64 35.8 64 80s35.8 80 80 80zm368 0c44.2 0 80-35.8 80-80S556.2 0 512 0s-80 35.8-80 80 35.8 80 80 80zM0 298.7C0 310.4 9.6 320 21.3 320h214.1c-26.6-23.5-43.3-57.8-43.3-96 0-7.6.7-15 1.9-22.3-13.6-6.3-28.7-9.7-44.6-9.7h-42.7C47.8 192 0 239.8 0 298.7zM320 320c24 0 45.9-8.8 62.7-23.3 2.5-3.7 5.2-7.3 8-10.7 2.7-3.3 5.7-6.1 9-8.3C410 262.3 416 243.9 416 224c0-53-43-96-96-96s-96 43-96 96 43 96 96 96zm65.4 60.2c-10.3-5.9-18.1-16.2-20.8-28.2H261.3C187.7 352 128 411.7 128 485.3c0 14.7 11.9 26.7 26.7 26.7h300.5c-2.1-5.2-3.2-10.9-3.2-16.4v-3c-1.3-.7-2.7-1.5-4-2.3l-2.6 1.5c-16.8 9.7-40.5 8-54.7-9.7-4.5-5.6-8.6-11.5-12.4-17.6l-.1-.2-.1-.2-2.4-4.1-.1-.2-.1-.2c-3.4-6.2-6.4-12.6-9-19.3-8.2-21.2 2.2-42.6 19-52.3l2.7-1.5v-2.3-2.3l-2.7-1.5zM533.3 192h-42.6c-15.9 0-31 3.5-44.6 9.7 1.3 7.2 1.9 14.7 1.9 22.3 0 17.4-3.5 33.9-9.7 49 2.5.9 4.9 2 7.1 3.3l2.6 1.5c1.3-.8 2.6-1.6 4-2.3v-3c0-19.4 13.3-39.1 35.8-42.6 7.9-1.2 16-1.9 24.2-1.9s16.3.6 24.2 1.9c22.5 3.5 35.8 23.2 35.8 42.6v3c1.3.7 2.7 1.5 4 2.3l2.6-1.5c16.8-9.7 40.5-8 54.7 9.7 2.3 2.8 4.5 5.8 6.6 8.7-2.1-57.1-49-102.7-106.6-102.7zm91.3 163.9c6.3-3.6 9.5-11.1 6.8-18-2.1-5.5-4.6-10.8-7.4-15.9l-2.3-4c-3.1-5.1-6.5-9.9-10.2-14.5-4.6-5.7-12.7-6.7-19-3L574.4 311c-8.9-7.6-19.1-13.6-30.4-17.6v-21c0-7.3-4.9-13.8-12.1-14.9-6.5-1-13.1-1.5-19.9-1.5s-13.4.5-19.9 1.5c-7.2 1.1-12.1 7.6-12.1 14.9v21c-11.2 4-21.5 10-30.4 17.6l-18.2-10.5c-6.3-3.6-14.4-2.6-19 3-3.7 4.6-7.1 9.5-10.2 14.6l-2.3 3.9c-2.8 5.1-5.3 10.4-7.4 15.9-2.6 6.8.5 14.3 6.8 17.9l18.2 10.5c-1 5.7-1.6 11.6-1.6 17.6s.6 11.9 1.6 17.5l-18.2 10.5c-6.3 3.6-9.5 11.1-6.8 17.9 2.1 5.5 4.6 10.7 7.4 15.8l2.4 4.1c3 5.1 6.4 9.9 10.1 14.5 4.6 5.7 12.7 6.7 19 3l18.2-10.2c8.9 7.6 19.2 13.6 30.4 17.6v21c0 7.3 4.9 13.8 12.1 14.9 6.5 1 13.1 1.5 19.9 1.5s13.4-.5 19.9-1.5c7.2-1.1 12.1-7.6 12.1-14.9v-21c11.2-4 21.5-10 30.4-17.6l18.2 10.5c6.3 3.6 14.4 2.6 19-3 3.7-4.6 7.1-9.4 10.1-14.5l2.4-4.2c2.8-5.1 5.3-10.3 7.4-15.8 2.6-6.8-.5-14.3-6.8-17.9l-18.2-10.5c1-5.7 1.6-11.6 1.6-17.5s-.6-11.9-1.6-17.6l18.2-10.5zM552 384c0 22.1-17.9 40-40 40s-40-17.9-40-40 17.9-40 40-40 40 17.9 40 40z" />
      </svg>
      ), 
  },
];

const colorsLinks = [
  { name: "Add New Color", href: "add-color", icon: CogIcon },
  {
    name: "All Colors",
    href: "all-colors",
    icon: QuestionMarkCircleIcon,
  },
];

const brandsLinks = [
  { name: "Add New Brand", href: "add-brand", icon: CogIcon },
  {
    name: "All Brands",
    href: "all-brands",
    icon: QuestionMarkCircleIcon,
  },
];

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="min-h-full">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full">
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-orange-100 pt-5 pb-4">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-shrink-0 items-center px-4"></div>
                  <nav
                    className="mt-5 flex flex-1 flex-col divide-y divide-cyan-800 overflow-y-auto"
                    aria-label="Sidebar">
                    {/* orders links mobile */}
                    <div className="mt-1 pt-1">
                      <div className="space-y-1 px-2">
                        {ordersLinks.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-[#ea580c] hover:bg-cyan-600 hover:text-white">
                            <item.icon
                              className="mr-4 h-6 w-6 text-[#ea580c]"
                              aria-hidden="true"
                            />
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-1 px-2 mt-8">
                      {/*Products  links mobile */}
                      {productsLinks.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current
                              ? "bg-cyan-800 text-white"
                              : "text-[#ea580c] hover:text-white hover:bg-cyan-600",
                            "group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                          )}
                          aria-current={item.current ? "page" : undefined}>
                          <item.icon
                            className="mr-4 h-6 w-6 flex-shrink-0 text-[#ea580c]"
                            aria-hidden="true"
                          />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <div className="mt-6 pt-6">
                      <div className="space-y-1 px-2">
                        {couponsLinks.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-[#ea580c] hover:bg-cyan-600 hover:text-white">
                            <item.icon
                              className="mr-4 h-6 w-6 text-[#ea580c]"
                              aria-hidden="true"
                            />
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    {/* Categories mobile */}
                    <div className="mt-3 pt-3">
                      <div className="space-y-1 px-2">
                        {CategoryLinks.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-[#ea580c] hover:bg-cyan-600 hover:text-white">
                            <item.icon
                              className="mr-4 h-6 w-6 text-[#ea580c]"
                              aria-hidden="true"
                            />
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    {/* colors links mobile */}
                    <div className="mt-3 pt-3">
                      <div className="space-y-1 px-2">
                        {colorsLinks.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-[#ea580c] hover:bg-cyan-600 hover:text-white">
                            <item.icon
                              className="mr-4 h-6 w-6 text-[#ea580c]"
                              aria-hidden="true"
                            />
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    {/* brands links mobile */}
                    <div className="mt-3 pt-3">
                      <div className="space-y-1 px-2">
                        {brandsLinks.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-[#ea580c] hover:bg-cyan-600 hover:text-white">
                            <item.icon
                              className="mr-4 h-6 w-6 text-[#ea580c]"
                              aria-hidden="true"
                            />
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </nav>
                  {/* end of mobile nav */}
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>
        

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-grow flex-col overflow-y-auto bg-orange-100 pt-5 pb-4">
            <nav
              className="mt-5 flex flex-1 flex-col divide-y divide-cyan-800 overflow-y-auto"
              aria-label="Sidebar">
              {/* orders links desktop */}
              <div className="mt-1 pt-1">
                <div className="space-y-1 px-2">
                  {ordersLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-[#ea580c] hover:bg-cyan-600 hover:text-white">
                      <item.icon
                        className="mr-4 h-6 w-6 text-[#ea580c]"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="space-y-1 px-2 mt-8">
                {/*Products  links desktop */}
                {productsLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current
                        ? "bg-cyan-800 text-white"
                        : "text-[#ea580c] hover:text-white hover:bg-cyan-600",
                      "group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                    )}
                    aria-current={item.current ? "page" : undefined}>
                    <item.icon
                      className="mr-4 h-6 w-6 flex-shrink-0 text-[#ea580c]"
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="mt-6 pt-6">
                <div className="space-y-1 px-2">
                  {couponsLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-[#ea580c] hover:bg-cyan-600 hover:text-white">
                      <item.icon
                        className="mr-4 h-6 w-6 text-[#ea580c]"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              {/* Categories desktop */}
              <div className="mt-3 pt-3">
                <div className="space-y-1 px-2">
                  {CategoryLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-[#ea580c] hover:bg-cyan-600 hover:text-white">
                      <item.icon
                        className="mr-4 h-6 w-6 text-[#ea580c]"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              {/* colors links desktop */}
              <div className="mt-3 pt-3">
                <div className="space-y-1 px-2">
                  {colorsLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-[#ea580c] hover:bg-cyan-600 hover:text-white">
                      <item.icon
                        className="mr-4 h-6 w-6 text-[#ea580c]"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              {/* brands links desktop */}
              <div className="mt-3 pt-3">
                <div className="space-y-1 px-2">
                  {brandsLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-[#ea580c] hover:bg-cyan-600 hover:text-white">
                      <item.icon
                        className="mr-4 h-6 w-6 text-[#ea580c]"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>

         {/*mobile & dekstop */}

        <div className="flex flex-1 pt-2 px-4 flex-col lg:pl-64">
          <div className="flex flex-col items-end h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:border-none">
            <button
              type="button"
              className=" border-r shadow-lg rounded-lg bg-orange-100 border-white-200 p-3 text-white-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
              onClick={() => setSidebarOpen(true)}>
              <span className="sr-only">Open sidebar</span>
              <Bars3CenterLeftIcon className="h-8 w-8" aria-hidden="true" />
            </button>
            
          </div>
          <main className="flex-1  pb-8">
            {/* Page header */}
              <div className="bg-white shadow ">
                 <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
                    <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
                        <div className="min-w-0 flex-1">
                             {/* Profile */}
                             <div className="flex items-center">
                                <img
                                    className="hidden h-16 w-16 rounded-full sm:block"
                                    src="https://img.freepik.com/free-vector/cute-corgi-dog-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4181.jpg?w=2000"
                                    alt=""
                                />
                                <div>
                                    <div className="flex items-center">
                                        <img
                                            className="h-16 w-16 rounded-full sm:hidden"
                                            src="https://img.freepik.com/free-vector/cute-corgi-dog-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4181.jpg?w=2000"
                                            alt=""
                                        />
                                        <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
                                            Good morning, Steya Tuadles
                                        </h1>
                                        </div>
                                </div>
                                <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                                    <dd className="flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6">
                                        {/* Role */}
                                        <svg
                                        class="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                        </svg>
                                        Role: Admin
                                    </dd>
                                    {/* Date Joined */}
                                    <dd className="mt-3 flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6 sm:mt-0">
                                        <svg
                                        className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                        </svg>
                                        Date Joined: 12/12/2020
                                    </dd>
                                    {/* email */}
                                    <dd className="mt-3 flex items-center text-sm font-medium  text-gray-500 sm:mr-6 sm:mt-0">
                                        <svg
                                        className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                                        </svg>
                                        admin@gmail.com
                                    </dd>
                                </dl>
                             </div>
                             <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                                <button
                                type="button"
                                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">
                                Add money
                                </button>
                                <button
                                type="button"
                                className="inline-flex items-center rounded-md border border-transparent bg-[#fdba74] px-4 py-2 text-sm font-medium text-[#9a3412] shadow-sm hover:text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">
                                Send money
                                </button>
                              </div>
                        </div>
                    </div>
                 </div>                 
              </div>
          </main>
          <main className="flex-1  pb-8">
            <Outlet />
            {/* content */}
          </main>
        </div>
      </div>
    </>
  );
}
