// import Link from "./Link";
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

import images from "../constants/images";
import { ThemeContext } from '../utils/theme/ThemeContext';
import './sidebar.scss';
const SidebarComponent = () => {
    const {isToggle, toggleTheme } = useContext(ThemeContext);
    const location = useLocation();
    const activedPage = location.pathname;
    
    return (
        <div id="sidebar">
            <div className="relative z-40 lg:hidden " role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-700 bg-opacity-75"></div>

                <div className="fixed inset-0 flex z-40 ">
                    <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                            <button type="button" className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="sr-only">Close sidebar</span>
                                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto dark:bg-bg-sidebar-dark dark: text-white">
                            <div className="flex items-center flex-shrink-0 px-4 space-x-2">
                                <img className="h-8 w-auto" src={images.Logo} alt="logo" />
                                <div>
                                    <h1 className='text-xl md:text-lg font-bold'>SLIDEGER</h1>
                                    <p className='text-[0.6rem] md:text-[0.6rem] '>Decentralized Payment Network</p>
                                </div>
                            </div>
                            <nav className="mt-5 flex-1 px-2 bg-white space-y-1 dark:bg-bg-sidebar-dark dark: text-white">
                                {/* <Link info="/home" classset={"mt-5 flex-1 px-2 bg-white space-y-1 dark:bg-bg-sidebar-dark dark: text-white"} url="home_icon_sidebar" value="Home" /> */}

                                <Link to="/home" className="text-gray-900 dark:text-gray-100 group flex items-center px-2 py-2 text-sm font-medium rounded-md  pl-5">
                                    <div className={'home menu ' + (activedPage == "/home" ? 'active': '')}>Home</div>
                                </Link>

                                <Link to="/receive" className="text-gray-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md  pl-5">
                                    <div className={'receive menu ' + (activedPage == "/receive" ? 'active': '')}>Receive</div>
                                </Link>

                                <Link to="/send" className="text-gray-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md  pl-5">
                                    <div className={'send menu ' + (activedPage == "/send" ? 'active': '')}>Send</div>
                                </Link>

                                <Link to="/buy-license" className="text-gray-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md  pl-5">
                                    <div className={'buy menu ' + (activedPage == "/buy-license" ? 'active': '')}>Buy Licenses</div>
                                </Link>

                                <Link to="/trade" className="text-gray-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md  pl-5">
                                    <div className={'trade menu ' + (activedPage == "/trade" ? 'active': '')}>Trade</div>
                                </Link>

                                <Link to="/transactions" className="text-gray-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md  pl-5">
                                    <div className={'transactions menu ' + (activedPage == "/transactions" ? 'active': '')}>Transactions</div>
                                </Link>

                                <Link to="/access-history" className="text-gray-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md  pl-5">
                                    <div className={'access menu ' + (activedPage == "/access-history" ? 'active': '')}>Access History</div>
                                </Link>

                                <Link to="/contacts" className="text-gray-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md  pl-5">
                                    <div className={'contacts menu ' + (activedPage == "/contacts" ? 'active': '')}>Contacts</div>
                                </Link>

                                <Link to="/setting" className="text-gray-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md  pl-5">
                                    <div className={'setting menu ' + (activedPage == "/setting" ? 'active': '')}>User Manage</div>
                                </Link>
                            </nav>
                        </div>
                        <div className="flex-shrink-0 flex p-4 pb-7 dark:bg-bg-sidebar-dark dark: text-white">
                            <a href="#" className="text-gray-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md  pl-5">
                                <div className={'logout menu'}>Log out</div>
                            </a>
                        </div>
                    </div>

                    <div className="flex-shrink-0 w-14">
                    </div>
                </div>
            </div>

            <div className="hidden lg:flex lg:w-[330px] lg:flex-col lg:fixed lg:inset-y-0 z-30 ">
                <div className="flex-1 flex flex-col min-h-0 bg-white">

                    <div className="flex-1 flex flex-col pt-6 pb-4 overflow-y-auto dark:bg-bg-sidebar-dark dark: text-white">
                        <div className="flex items-center flex-shrink-0 px-4 space-x-2 text-black dark:text-white">
                            <img className="h-8 w-auto" src={images.Logo} alt="logo" />
                            <div>
                                <h1 className='text-xl md:text-xl font-bold'>SLIDEGER</h1>
                                <p className='text-[0.6rem] md:text-[0.6rem] '>Decentralized Payment Network</p>
                            </div>
                        </div>
                        <nav className="mt-5 flex-1 px-2 bg-white space-y-1 dark:bg-bg-sidebar-dark text-white font-light">
                                <Link to="/home" className="text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md  pl-5">
                                    <div className={'home menu ' + (activedPage == "/home" ? 'active': '')}>Home</div>
                                </Link>

                                <Link to="/receive" className="text-gray-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md  pl-5">
                                    <div className={'receive menu ' + (activedPage == "/receive" ? 'active': '')}>Receive</div>
                                </Link>

                                <Link to="/send" className="text-gray-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md  pl-5">
                                    <div className={'send menu ' + (activedPage == "/send" ? 'active': '')}>Send</div>
                                </Link>

                                <Link to="/buy-license" className="text-gray-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md  pl-5">
                                    <div className={'buy menu ' + (activedPage == "/buy-license" ? 'active': '')}>Buy Licenses</div>
                                </Link>

                                <Link to="/trade" className="text-gray-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md  pl-5">
                                    <div className={'trade menu ' + (activedPage == "/trade" ? 'active': '')}>Trade</div>
                                </Link>

                                <Link to="/transactions" className="text-gray-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md  pl-5">
                                    <div className={'transactions menu ' + (activedPage == "/transactions" ? 'active': '')}>Transactions</div>
                                </Link>

                                <Link to="/access-history" className="text-gray-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md  pl-5">
                                    <div className={'access menu ' + (activedPage == "/access-history" ? 'active': '')}>Access History</div>
                                </Link>

                                <Link to="/contacts" className="text-gray-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md  pl-5">
                                    <div className={'contacts menu ' + (activedPage == "/contacts" ? 'active': '')}>Contacts</div>
                                </Link>

                                <Link to="/setting" className="text-gray-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md  pl-5">
                                    <div className={'setting menu ' + (activedPage == "/setting" ? 'active': '')}>User Manage</div>
                                </Link>
                        </nav>
                    </div>
                    <div className="flex-shrink-0 flex p-4 pb-7 dark:bg-bg-sidebar-dark">
                        <a href="#" className="text-gray-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md  pl-5">
                            <div className={'logout menu'}>Log out</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarComponent;