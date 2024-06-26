import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'


export default function PDFHead() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">

        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Brolem</span>
          <img className="h-8 w-auto" src="/img/logo.png" alt="" />
        </a>
        <div className="flex flex-1 justify-end">
          <button onClick={() => {
            if (window.history.length > 1) {
              window.history.back();
            } else {
              window.location.href = "/";
            }
          }} className="text-sm font-semibold leading-6 text-gray-900 focus:outline-none">
            Regresar <span aria-hidden="true">&larr;</span>
          </button>
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
              <span className="sr-only">BROLEM</span>
              <img
                className="h-8 w-auto"
                src="/img/logo.png"
                alt=""
              />
            </a>
            <div className="flex flex-1 justify-end">
              <button onClick={() => {
                if (window.history.length > 1) {
                  window.history.back();
                } else {
                  window.location.href = "/";
                }
              }} className="text-sm font-semibold leading-6 text-gray-900 focus:outline-none">
                Regresar <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
