import React from "react";
import images from "../../constants/images";
import { Link } from "react-router-dom";

const Account = () => {
    return (
        <main className="relative bg-zinc-400 w-screen h-screen flex justify-center align-middle">
            <span className="absolute top-20 right-20 text-white"><Link to="/dashboard">Skip to Homepage</Link></span>
            <div className="bg-white mt-auto mb-auto py-20 px-10 rounded-3xl shadow-inner">
                <div className="block space-y-12">
                    <div className="block justify-center space-y-4">
                        <h2 className="text-center mt-auto mb-auto font-semibold text-2xl">Stellar Account</h2>
                        <p className="text-center font-light text-gray-400">Create a new Steller wallet or connect the wallet you already have</p>
                    </div>
                    <div className="flex ml-auto mr-auto justify-center space-x-10">
                        <Link to={"/wallet/connect"}>
                            <div className=" block space-y-5">
                                <img src={images.Link_perspective_matte_s} className="mr-auto ml-auto" alt="link" />
                                <p className="text-center">Connect Steller Wallet</p>
                            </div>
                        </Link>
                        <Link to={"/"}>
                            <div className=" block space-y-5">
                                <img src={images.Wallet_perspective_matte_s} className="mr-auto ml-auto" alt="wallet" />
                                <p className="text-center">Connect Steller Wallet</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default Account;