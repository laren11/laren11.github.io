import Flag from "react-flagkit";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useState, useContext, useEffect } from "react";
import LocalizationContext from "../../context/LocalizationContext";
import { FormattedMessage } from "react-intl";

const LanguageSelect = () => {
  const { language, setLanguage } = useContext(LocalizationContext);

  const [flagLanguage, setFlagLanguage] = useState("GB");

  useEffect(() => {
    switch (language) {
      case "en":
        setFlagLanguage("GB");
        break;
      case "si":
        setFlagLanguage("SI");
        break;
      case "de":
        setFlagLanguage("DE");
        break;
      default:
    }
  }, []);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <Flag country={flagLanguage} />
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
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
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  onClick={() => {
                    setFlagLanguage("SI");
                    setLanguage("si");
                  }}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  <div className="flex ">
                    <Flag country="SI" className="mr-1" />
                    Slovenščina
                  </div>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  onClick={() => {
                    setFlagLanguage("GB");
                    setLanguage("en");
                  }}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  <div className="flex ">
                    <Flag country="GB" className="mr-1" />
                    English
                  </div>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  onClick={() => {
                    setFlagLanguage("DE");
                    setLanguage("de");
                  }}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  <div className="flex ">
                    <Flag country="DE" className="mr-1" />
                    Deutsch
                  </div>
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={() => {
                      setFlagLanguage("ES");
                      setLanguage("es");
                    }}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    <div className="flex ">
                      <Flag country="ES" className="mr-1" />
                      Español
                    </div>
                  </a>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default LanguageSelect;
