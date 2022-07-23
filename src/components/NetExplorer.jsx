const NetExplorer = () => {
    return (
        <>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <div className="flex items-center space-x-10">
                    <div>
                        <h5>Bitcoin | BTC</h5>
                        <p>center.io</p>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-5 lg:ml-auto">
                    <div className="">
                        <button className="bg-transparent border-2 border-gray-300 border-opacity-20 flex p-4 rounded-lg text-black gap-5 dark:text-white">
                            <p className="text-xs lg:text-sm">
                                View on Network Explorer
                            </p>
                        </button>
                    </div> className="w-3 lg:w-4"
                    <div>
                        <button className="bg-secondary flex p-4 rounded-lg text-white gap-3">
                            <svg id="plus" xmlns="http://www.w3.org/2000/svg" width="20.646" height="20.646" viewBox="0 0 20.646 20.646">
                                <path id="Path_37871" data-name="Path 37871" d="M23.355,13.033H15.613V5.29a1.29,1.29,0,1,0-2.581,0v7.742H5.29a1.29,1.29,0,0,0,0,2.581h7.742v7.742a1.29,1.29,0,0,0,2.581,0V15.613h7.742a1.29,1.29,0,1,0,0-2.581Z" transform="translate(-4 -4)" fill="#fff" />
                            </svg>
                            <span className="text-sm">
                                Add Asset
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NetExplorer;