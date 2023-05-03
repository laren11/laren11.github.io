import { useRef, useState, useContext } from "react";
import { Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import LanguageSelect from "./LanguageSelect";
import Hamburger from "hamburger-react";
import { FormattedMessage } from "react-intl";
import LocalizationContext from "../../context/LocalizationContext";
import logo from "../../photos/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const navigate = useNavigate();

  function handleLogoClick() {
    navigate("/");
  }

  return (
    <div style={{ fontFamily: "MyFont" }}>
      <nav className="" style={{ backgroundColor: "whitesmoke" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-20 w-20"
                  src={logo}
                  onClick={() => handleLogoClick()}
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="/"
                    className=" hover:bg-gray-100 text-black px-3 py-2 rounded-md text-md font-medium"
                  >
                    <FormattedMessage id="app.homepage" />
                  </Link>

                  <Link
                    to="/quality"
                    className="text-black hover:bg-gray-100 hover:text-gray-600 px-3 py-2 rounded-md text-md font-medium"
                  >
                    <FormattedMessage id="app.quality" />
                  </Link>

                  <Link
                    to="/contact"
                    className="text-black hover:bg-gray-100 hover:text-gray-600 px-3 py-2 rounded-md text-md font-medium"
                  >
                    <FormattedMessage id="app.contact" />
                  </Link>

                  <Link
                    to="/gallery"
                    className="text-black hover:bg-gray-100 hover:text-gray-600 px-3 py-2 rounded-md text-md font-medium"
                  >
                    <FormattedMessage id="app.gallery" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:hidden pr-3 ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className=" items-center justify-center rounded-md text-gray-400 hover:text-white "
                aria-expanded="false"
              >
                <Hamburger
                  hideOutline={true}
                  toggled={isOpen}
                  toggle={setIsOpen}
                  size={32}
                />
              </button>
            </div>
            <LanguageSelect />
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 scale-90"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-150 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-90"
        >
          {isOpen && (
            <div
              className="md:hidden transition ease-in-out duration-500"
              id="mobile-menu"
            >
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/"
                  className="hover:bg-gray-100 text-black block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <FormattedMessage id="app.homepage" />
                </Link>

                <Link
                  to="/quality"
                  className="text-black hover:bg-gray-100 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <FormattedMessage id="app.quality" />
                </Link>

                <Link
                  to="/contact"
                  className="text-black hover:bg-gray-100 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <FormattedMessage id="app.contact" />
                </Link>

                <Link
                  to="/gallery"
                  className="text-black hover:bg-gray-100 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <FormattedMessage id="app.gallery" />
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
