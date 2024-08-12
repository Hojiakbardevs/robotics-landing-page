import Logos from "./../assets/img/logofull.svg";
import Menuicon from "./../assets/img/menu.svg";
export const Headernav = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#">
            <img src={Logos} className="h-8 w-auto" alt="roboticslab logos" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-3 inline-flex items-center justify-center rounded-md p-3 text-gray-700">
            <span className="sr-only">Open main menu</span>
            <img src={Menuicon} alt="menu icon" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-8 lg:content-center lg:items-center">
          <a
            href="#"
            className="text-sm font-medium leading-6 text-gray-900 hover:text-red-600">
            Home
          </a>
          <a
            href="#"
            className="text-sm font-medium leading-6 text-gray-900 hover:text-red-600">
            Product
          </a>
          <div className="relative">
            <button
              className="flex items-center gap-x-1 text-sm font-medium leading-6 text-gray-900 hover:text-red-600"
              type="button"
              aria-expanded="false">
              Course
              <img src="" alt="" />
            </button>
            <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus-within:outline-none">
              
            </div>
          </div>
          <a
            href="#"
            className="text-sm font-medium leading-6 text-gray-900 hover:text-red-600">
            Blog
          </a>
          <a
            href="#"
            className="text-sm font-medium leading-6 text-gray-900 hover:text-red-600">
            Demo Course
          </a>
          <a
            href="#"
            className="relative inline-block px-4 py-2 font-medium group">
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>

            <span className="relative text-black group-hover:text-white flex gap-2 content-center items-center">
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
              Menejer bilan bo'glanish
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
};
