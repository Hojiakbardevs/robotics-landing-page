import Logos from "./../assets/img/logofull.svg";
import Menuicon from "./../assets/img/menu.svg";
export const Headernav = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#">
            <img src={Logos} className="h-8 w-auto" alt="roboticslab logos" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-3 inline-flex items-center justify-center rounded-md p-3 text-gray-700">
            <span className="sr-only">Open main menu</span>
            <img src={Menuicon} alt="menu icon" className="h-6 w-6"/>
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-8">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Home
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Product
          </a>
        </div>
      </nav>
    </header>
  );
};
