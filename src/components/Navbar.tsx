import {Fragment} from 'react'
import {Disclosure, Menu, Transition} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {Link} from "react-router-dom";

const navigation = [
    {name: 'AI Gift Ideas', href: '#', current: true},
    {name: 'Lists', href: '#', current: false},
    {name: 'Gifts Exchange', href: '#', current: false},
    {name: 'Shop', href: '#', current: false},
    {name: 'Occasions', href: '#', current: false},
    {name: 'Ecards', href: '#', current: false},
    {name: 'Blogs', href: '#', current: false},
    {name: 'FAQ', href: '#', current: false},
]

function classNames(...classes:string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        <Disclosure as="nav" className="bg-[#F9F9F9] border-solid border-[#E8ECF1] border-[1px]">
            {({open}) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                                <Disclosure.Button
                                    className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-lightBlue hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5"/>
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <Link to={'/'}>
                                        <img
                                        className="h-[24px] w-[125px]"
                                        src="/images/headerLogo.svg"
                                        alt="logo"
                                        />
                                        </Link>

                                </div>
                                <div className="hidden lg:ml-20 lg:block">
                                    <div className="flex space-x-4 ">
                                        {navigation.map((item) => (
                                            <>
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current ? 'bg-gradient-to-r from-[#50BCD9] to-[#F14DFF]  text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'rounded-md px-3 font-semibold text-primary py-2 flex items-center text-sm'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.current && (

                                                        <img src="/images/shine.svg" alt="header"
                                                             className="h-[18px] w-[18px]"/>
                                                    )}
                                                    {item.name}
                                                </a>


                                            </>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div
                                className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
                               <p className='text-primary sm:block hidden font-semibold text-sm'>Jane Smith</p>

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button
                                            className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute -inset-1.5"/>
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src={'/images/user.png'}
                                                alt=""
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
                                        <Menu.Items
                                            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({active}) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Your Profile
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({active}) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Settings
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({active}) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Sign out
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="lg:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-lightBlue text-white' : 'text-gray-300 hover:bg-sky-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
