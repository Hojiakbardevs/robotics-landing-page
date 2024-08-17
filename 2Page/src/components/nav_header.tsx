import LogoFull from "@/assets/img/logofull.svg";
import Calls from "@/assets/icons/calls.svg";
import { Button } from "./ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3BottomRightIcon,
  ChartPieIcon,
  ChevronDownIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  PhoneIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import { PlayCircleIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about_page" },
  { name: "Demo-course", href: "/demo_course" },
  { name: "Blog", href: "/blog_pages" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];
const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Dasturlash",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Kiberxavsizlik",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Dizayn",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "English",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];
export const Headernav = () => {
  const [mobileOpenMenu, setmobileOpenMenu] = useState(false);
  return (
    <header id="logos" className=" bg-white shadow-sm">
      <nav
        aria-label="Global"
        className="container flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <NavLink to="/" className="-m-1.5 p-1.5">
            <img src={LogoFull} alt="Roboticslab logo" />
          </NavLink>
        </div>
        <div className="flex lg:hidden">
          <Button
            type="button"
            onClick={() => setmobileOpenMenu(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            variant={"outline"}>
            <span className="sr-only">Open main menu</span>
            {/* bars-3-bottom-left */}
            <Bars3BottomRightIcon className="h-6 w-6 " aria-hidden="true" />
          </Button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative flex items-center gap-x-6">
            {navigation.map((item) => (
              <NavLink
                to={item.href}
                key={item.name}
                className="text-lg font-medium leading-6 text-gray-900 hover:text-red-600">
                {item.name}
              </NavLink>
            ))}

            <PopoverButton className="flex items-center gap-x-1 text-lg font-medium leading-6 text-gray-900 hover:text-red-600">
              <NavLink to="/courses_details">Courses</NavLink>
              <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in">
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-gray-600 group-hover:text-red-600"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                    <item.icon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none text-gray-400"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button className="flex content-center items-center gap-2 font-medium bg-black text-white px-5 py-2 rounded-lg hover:bg-red-600 h-12">
            <img src={Calls} alt="call icon" />
            <a href="https://t.me/roboticslab_school">Murojjat qiling</a>
          </Button>
        </div>
      </nav>

      {/* mobile menu */}

      <Dialog open={mobileOpenMenu} onClose={() => setmobileOpenMenu(false)}>
        <div className="fixed inset-0 z-50">
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img src={LogoFull} alt="Roboticslab logo" />
              </a>

              <Button
                type="button"
                variant="outline"
                onClick={() => setmobileOpenMenu(false)}>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:text-red-600">
                      {item.name}
                    </NavLink>
                  ))}
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      Product
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {[...products, ...callsToAction].map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                  <div className="py-6">
                    <NavLink
                      to="/contact"
                      className="flex justify-center items-center gap-2 font-medium text-lg bg-black text-white px-5 py-2 rounded-lg hover:bg-red-600 ">
                      <img src={Calls} alt="Calls icon" />
                      Murojjat qiling
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </header>
  );
};
