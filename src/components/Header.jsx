// Header.js
import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { LinkIcon } from '@heroicons/react/24/outline';
import LanguageDropdown from './LanguageDropdown'; // Asegúrate de ajustar la ruta si es necesario
import PropTypes from 'prop-types';

const navigation = [
  {
    nameEn: 'Discover more on our website',
    nameKo: '우리 웹 사이트에서 더 많은 정보를 찾아보세요',
    href: 'https://www.brolem.pe'
  },
]

Header.propTypes = {
  language: PropTypes.string.isRequired
};

export default function Header({ language }) {


  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-slate-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex flex-1">
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="flex items-center text-sm font-semibold leading-6 text-gray-900">
                <LinkIcon className="h-5 w-5 inline-block mr-1" /> { }
                { }
                {language === 'ko' ? item.nameKo : item.nameEn}
              </a>
            ))}
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Brolem</span>
          <img className="h-9 w-auto" src="/img/logo.png" alt="" />
        </a>
        <div className="flex flex-1 justify-end items-center">
          <LanguageDropdown />
        </div>
      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-1">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-9 w-auto"
                src="/img/logo.png"
                alt=""
              />
            </a>
          </div>
          <div className="mt-6 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </a>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
