import { CiHeart } from "react-icons/ci";

export default function HomePage(){
    return(
        <div className='px-32'>
            {/* Section: Headers */}
            <div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn rounded-sm border border-black m-1">Category</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-sm w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn rounded-sm border border-black m-1">Price</div>
                    <div tabIndex={0} className="flex flex-col gap-3 dropdown-content z-[1] p-2 shadow bg-base-100 rounded-sm">
                        <div className="flex items-center gap-10 ">
                            <input type="text" placeholder="Minimum" className="input rounded-none border border-black" />
                            -
                            <input type="text" placeholder="Maximum" className="input rounded-none border border-black" />
                        </div>
                        <button
                            className="btn bg-black text-white w-full rounded-none"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
            {/* Section: Product List */}
            <div
                className="grid grid-cols-12 gap-10 py-10 px-1"
            >
                <div className="col-span-3">
                    <div>
                        <div className="relative">
                            <img 
                                src="https://down-id.img.susercontent.com/file/d89ddcbb6a83cab4bf486a9ccc9fdcbd"
                                width={'100%'}
                                height={'100%'}
                            />
                            <CiHeart 
                                color='white'
                                size={50}
                                className="absolute bottom-0 right-0"
                            />
                        </div>
                        <h1
                            className="font-bold text-xl"
                        >
                            Rp. 10.000
                        </h1>
                        <h1
                            className="text-xl"
                        >
                            S
                        </h1>
                        <h1
                            className="text-xl"
                        >
                            Vans
                        </h1>
                    </div>
                </div>
                <div className="col-span-3">
                    <div>
                        <img 
                            src="https://down-id.img.susercontent.com/file/d89ddcbb6a83cab4bf486a9ccc9fdcbd"
                            width={'100%'}
                            height={'100%'}
                        />
                    </div>
                </div>
                <div className="col-span-3">
                    <div>
                        <img 
                            src="https://down-id.img.susercontent.com/file/d89ddcbb6a83cab4bf486a9ccc9fdcbd"
                            width={'100%'}
                            height={'100%'}
                        />
                    </div>
                </div>
                <div className="col-span-3">
                    <div>
                        <img 
                            src="https://down-id.img.susercontent.com/file/d89ddcbb6a83cab4bf486a9ccc9fdcbd"
                            width={'100%'}
                            height={'100%'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}