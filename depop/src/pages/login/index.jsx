export default function LoginPage(){
    return(
        <div className="flex justify-center">
            <div className="w-[30%]">
                <div className="w-full">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-bold">Username or Email</span>
                        </div>
                        <input type="text" placeholder="Type Your Username or Email" className="input input-bordered w-full rounded-none" />
                    </label>
                </div>
                <div className="w-full">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-bold">Password</span>
                        </div>
                        <input type="text" placeholder="Type Your Password" className="input input-bordered w-full rounded-none" />
                    </label>
                </div>
            </div>
        </div>
    )
}