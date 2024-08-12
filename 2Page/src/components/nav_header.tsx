import LogoFull from "@/assets/img/logofull.svg";
import { Button } from "./ui/button";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/16/solid";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Contact", href: "#" },
];
export const Headernav = () => {
  const [mobileOpenMenu, setmobileOpenMenu] = useState(false);
  return (
    <header>
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img src={LogoFull} alt="Roboticslab logo" className="h-8 w-auto" />
          </a>
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
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              href={item.href}
              key={item.name}
              className="text-md font-medium leading-6 text-gray-900 hover:text-red-600">
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#_"
            className="flex content-center items-center gap-2 font-medium bg-black text-white px-5 py-2 rounded-lg hover:bg-red-600 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              className="group-hover:fill-white">
              <path
                d="M9.9989 0.953178C4.4759 0.953178 -0.00109863 5.43038 -0.00109863 10.9532C-0.00109863 12.3872 0.31889 13.8154 0.93689 15.1407C0.11689 19.3757 0.0299072 19.7657 0.0299072 19.7657C-0.104093 20.4593 0.49189 21.0533 1.18689 20.922C1.18689 20.922 1.5659 20.8564 5.8429 20.047C7.1339 20.6606 8.5649 20.9532 9.9989 20.9532C15.5219 20.9532 19.9989 16.476 19.9989 10.9532C19.9989 5.43038 15.5219 0.953178 9.9989 0.953178ZM9.9989 2.95318C14.4169 2.95318 17.9989 6.53488 17.9989 10.9532C17.9989 15.3715 14.4169 18.9532 9.9989 18.9532C8.7419 18.9532 7.53489 18.658 6.43689 18.1094C6.24089 18.0118 6.02591 17.975 5.81091 18.0157C2.26091 18.6877 2.5429 18.6476 2.2489 18.7032C2.3069 18.4056 2.25689 18.7145 2.93689 15.2032C2.97889 14.9858 2.9419 14.7447 2.8429 14.547C2.2849 13.4413 1.9989 12.2208 1.9989 10.9532C1.9989 6.53488 5.5809 2.95318 9.9989 2.95318ZM7.18689 5.95318C6.24889 5.95318 4.9989 7.20318 4.9989 8.14068C4.9989 9.34888 6.2489 11.5782 7.4989 12.8282C7.6339 12.9627 7.9889 13.3187 8.1239 13.4532C9.3739 14.7032 11.6029 15.9532 12.8109 15.9532C13.7489 15.9532 14.9989 14.7032 14.9989 13.7657C14.9989 12.8282 13.7489 11.5782 12.8109 11.5782C12.4989 11.5782 11.3679 12.2247 11.2489 12.2032C10.2529 12.0234 8.9569 10.696 8.7489 9.70318C8.7199 9.56458 9.3739 8.45318 9.3739 8.14068C9.3739 7.20318 8.12389 5.95318 7.18689 5.95318Z"
                className="fill-current"
              />
            </svg>
            Murojjat qiling
          </a>
        </div>
      </nav>

      {/* mobile menu */}

      <Dialog open={mobileOpenMenu} onClose={() => setmobileOpenMenu(false)}>
        <div className="fixed inset-0 z-50">
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img
                  src={LogoFull}
                  alt="Roboticslab logo"
                  className="h-8 w-auto"
                />
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
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:text-red-600">
                      {item.name}
                    </a>
                  ))}
                  <div className="py-6">
                    <a
                      href="#_"
                      className="flex content-center items-center gap-2 font-medium bg-black text-white px-5 py-2 rounded-lg hover:bg-red-600 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        className="group-hover:fill-white">
                        <path
                          d="M9.9989 0.953178C4.4759 0.953178 -0.00109863 5.43038 -0.00109863 10.9532C-0.00109863 12.3872 0.31889 13.8154 0.93689 15.1407C0.11689 19.3757 0.0299072 19.7657 0.0299072 19.7657C-0.104093 20.4593 0.49189 21.0533 1.18689 20.922C1.18689 20.922 1.5659 20.8564 5.8429 20.047C7.1339 20.6606 8.5649 20.9532 9.9989 20.9532C15.5219 20.9532 19.9989 16.476 19.9989 10.9532C19.9989 5.43038 15.5219 0.953178 9.9989 0.953178ZM9.9989 2.95318C14.4169 2.95318 17.9989 6.53488 17.9989 10.9532C17.9989 15.3715 14.4169 18.9532 9.9989 18.9532C8.7419 18.9532 7.53489 18.658 6.43689 18.1094C6.24089 18.0118 6.02591 17.975 5.81091 18.0157C2.26091 18.6877 2.5429 18.6476 2.2489 18.7032C2.3069 18.4056 2.25689 18.7145 2.93689 15.2032C2.97889 14.9858 2.9419 14.7447 2.8429 14.547C2.2849 13.4413 1.9989 12.2208 1.9989 10.9532C1.9989 6.53488 5.5809 2.95318 9.9989 2.95318ZM7.18689 5.95318C6.24889 5.95318 4.9989 7.20318 4.9989 8.14068C4.9989 9.34888 6.2489 11.5782 7.4989 12.8282C7.6339 12.9627 7.9889 13.3187 8.1239 13.4532C9.3739 14.7032 11.6029 15.9532 12.8109 15.9532C13.7489 15.9532 14.9989 14.7032 14.9989 13.7657C14.9989 12.8282 13.7489 11.5782 12.8109 11.5782C12.4989 11.5782 11.3679 12.2247 11.2489 12.2032C10.2529 12.0234 8.9569 10.696 8.7489 9.70318C8.7199 9.56458 9.3739 8.45318 9.3739 8.14068C9.3739 7.20318 8.12389 5.95318 7.18689 5.95318Z"
                          className="fill-current"
                        />
                      </svg>
                      Murojjat qiling
                    </a>
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
