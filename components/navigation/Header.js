import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Popover, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';

import { navLinks } from '@/data/navigation';

import MenuButton from '@/components/navigation/MenuButton';
import Logo from '@/components/navigation/Logo';
import NavLinksDesktop from '@/components/navigation/NavLinksDesktop';
import NavLinksMobile from '@/components/navigation/NavLinksMobile';

export default function Header() {
  return (
    <Popover as="header" className="py-12 sm:py-6">
      {({ open }) => (
        <>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative flex items-center justify-center lg:justify-between">
              {/* Logo */}
              <Logo />

              {/* Right section on desktop */}
              <div className="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
                <NavLinksDesktop navLinks={navLinks} />
              </div>

              {/* Mobule menu button */}
              <MenuButton open={open} />
            </div>
          </div>

          <Transition.Root as={Fragment}>
            <div className="lg:hidden">
              <Transition.Child
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="duration-150 ease-in"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Popover.Overlay className="z-30 fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <Transition.Child
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-150 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top"
                >
                  <div className="ring-1 ring-black ring-opacity-5 divide-y divide-gray-200">
                    <div className="py-4 bg-gray-100 rounded-lg shadow-lg">
                      <div className="flex items-center justify-between px-4">
                        <Popover.Button>
                          <Link href="/">
                            <a>
                              <span className="sr-only">Bukitt</span>
                              <div className="relative">
                                <Image
                                  className="h-8 w-8"
                                  alt="Bukitt"
                                  src="/logos/wordmark-dark.svg"
                                  layout="intrinsic"
                                  width={50}
                                  height={50}
                                />
                              </div>
                            </a>
                          </Link>
                        </Popover.Button>
                        <div className="-mr-2">
                          <Popover.Button className="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 tw-transition focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                            <span className="sr-only">Close menu</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      <NavLinksMobile navLinks={navLinks} />
                    </div>
                  </div>
                </Popover.Panel>
              </Transition.Child>
            </div>
          </Transition.Root>
        </>
      )}
    </Popover>
  );
}
