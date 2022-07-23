import { useState } from 'react';
import MenuBar from '../assets/MenuBar';
import images from '../constants/images';
import { AuthContext, ThemeContext } from "../utils/theme/ThemeContext";

import { Link } from "react-router-dom";

const DashboardHeader = ({ themeToggling, setThemeToggling, menuToggling, setMenuToggling }) => {

    return (
        <ThemeContext.Consumer>
            {({ isToggle, toggleTheme }) => (
                <AuthContext.Consumer>
                    {({ isAuthStatus, setLogin, setLouout }) => (
                        <header className='px-4 lg:px-8 py-6 flex items-center justify-end flex-wrap  dark:bg-bg-header-dark text-gray-700 dark:text-gray-200 z-40'>

                            <div className='hidden lg:block h-8 z-50'></div>

                            {/* 🟨🟨🟨 UI For ==> Theme Toggling */}
                            <div className='flex items-center gap-4 ml-auto mr-9'>

                                <div className='bg-gray-300 rounded-2xl w-14 h-8 relative p-1 cursor-pointer dark:bg-[#4D398A]'
                                    onClick={toggleTheme}>
                                    <i className={`fas ${isToggle ? 'fa-sun right-1 rotate-[360deg] text-white bg-gray-400' : 'fa-moon bg-black text-white'} rounded-full px-1 text-base absolute transform ease-out duration-1000`}>
                                    </i>
                                </div>

                                <div className='block lg:hidden dark:brightness-200 w-4 mr-1 z-50'
                                    onClick={() => setMenuToggling(pre => !pre)}
                                >
                                    {
                                        !menuToggling
                                            ? themeToggling
                                                ? <MenuBar color='#fff' />
                                                : <MenuBar color='#000' />
                                            : <i className="fa-solid fa-xmark pl-1 text-2xl"></i>
                                    }
                                </div>

                                <div className='hidden lg:block border-[5px] border-gray-200 dark:border-[#4B3982] rounded-full'>
                                    <img src={images.USA_Logo} alt="" className='w-8 ' />
                                </div>
                            </div>

                            <div className='hidden lg:block border-r border-gray-500 h-8 z-50'></div>

                            {
                                !isAuthStatus ? (
                                    <div className='hidden lg:flex items-center gap-4 cursor-pointer ml-9 mr-0'>
                                        <i className='fas fa-user-alt'></i>
                                        <Link to={"/auth/login"}><button onClick={setLogin}>Login</button></Link>
                                        <span>/</span>
                                        <Link to={"/auth/register"}>Signup</Link>
                                    </div>
                                ) : (
                                    <div className='hidden lg:flex items-center gap-4 cursor-pointer ml-9 mr-0'>
                                        <img src={images.LoginedAvatar} alt="Avatar" className='inline-block h-12 w-12 rounded-full' />
                                        <span>Khalid Saied</span>
                                    </div>
                                )
                            }

                            {
                                menuToggling &&
                                <nav className='bg-gray-300 dark:bg-[#1e0a5f] dark:text-gray-200 absolute top-0 left-0 right-0 flex flex-col gap-4 items-center justify-center p-4 z-50 duration-200 ease-in' >
                                    <a href="/#" onClick={() => setMenuToggling(false)} >Home</a>
                                    <a href="/#" onClick={() => setMenuToggling(false)}>Exchange</a>
                                    <a href="/#" onClick={() => setMenuToggling(false)}>Market</a>
                                    <a href="/#" onClick={() => setMenuToggling(false)}>NFT</a>
                                    <a href="/#" onClick={() => setMenuToggling(false)}>Downloads</a>
                                </nav>
                            }
                        </header>
                    )}
                </AuthContext.Consumer>
            )}
        </ThemeContext.Consumer>
    )
}

export default DashboardHeader