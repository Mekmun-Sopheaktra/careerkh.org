/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

export default function Hero() {
    return (
        <div className="relative overflow-hidden">

            <main>
                <div className=" pt-2 sm:pt-2 lg:overflow-hidden lg:pt-0 lg:pb-1">
                    <div className="mx-auto max-w-7xl lg:px-8">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                                <div className="lg:py-8">
                                    <a
                                        href="#"
                                        className="inline-flex items-center rounded-full bg-secondary p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
                                    >
                                        <span className="rounded-full bg-primary px-3 py-0.5 text-sm font-semibold leading-5 text-white font-inter">
                                            WE'RE WORKING
                                        </span>
                                        <span className="ml-4 text-sm font-inter">Visit our contact page</span>
                                        <ChevronRightIcon className="ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                                    </a>
                                    <h1 className="mt-4 text-4xl tracking-tight text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl font-righteous">
                                        <span className="block text-primary">Career Description</span>
                                        <span className="block ml-40">in Cambodia</span>
                                    </h1>
                                    <p className="mt-3 text-base text-black-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-inter font-regular">
                                        We provide the information about career in cambodia.
                                        Over 100 career around the country. Find your best career
                                        to work in Careerkh.
                                    </p>
                                    <div className="mt-10 sm:mt-12">
                                        <div action="#" className="sm:mx-auto sm:max-w-xl lg:mx-0">
                                            <div className="sm:flex">
                                                <div className="mt-0 sm:mt-0 sm:ml-0">
                                                    <button

                                                        className="block w-full rounded-md bg-primary py-3 px-4 font-medium text-white shadow hover:bg-primary focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 focus:ring-offset-gray-900 font-inter"
                                                    >
                                                        Explore
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="sm:flex justify-between">
                                                <div className="">
                                                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                                                        <span className="block text-primary sm:flex justify-center">30+</span>
                                                    </h1>
                                                    <p className="mt-3 text-base text-black-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-inter">
                                                        Categories
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                                                        <span className="block text-primary ">100+</span>
                                                    </h1>
                                                    <p className="mt-3 text-base text-black-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-inter">
                                                        Carrers
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                                                        <span className="block text-primary">20+</span>
                                                    </h1>
                                                    <p className="mt-3 text-base text-black-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-inter">
                                                        Roadmap
                                                    </p>
                                                </div>
                                            </div>





                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
                                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                                    {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                                    <img
                                        className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-100 lg:max-w-none"
                                        src="src/public/images/hero.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* More main page content here... */}
            </main>
        </div>
    )
}
