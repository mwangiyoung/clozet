import { FcGoogle } from "react-icons/fc";
function Signup(){
    return(
<div className="flex  gap-6 mt-14 text-center">
    <div className="flex flex-col gap-10">
        <div className="flex gap-14 items-center" >
            <input type="text" placeholder="First Name" className="text-1xl border border-gray-400 py-4 px-30  rounded-full"/>
            <input type="text" placeholder="Last name"className="text-1xl border border-gray-400 py-4 px-30  rounded-full"/>
        </div>
        <div>
        <input type="email" placeholder="Email Address"className="text-1xl border border-gray-400 py-4 px-30  rounded-full w-[600px]"/>
        </div>
        <div>
        <input type="number" placeholder="Mobile Number"className="text-1xl border border-gray-400 py-4 px-30  rounded-full w-[600px]"/>
        </div>
        <div>
        <input type="password" placeholder="Password"className="text-1xl border border-gray-400 py-4 px-30  rounded-full w-[600px]"/>
        </div>
        <div>
        <input type="password" placeholder="Confirm Password"className="text-1xl border border-gray-400 py-4 px-30  rounded-full w-[600px]"/>
        </div>
        <div className="text-1xl border border-gray-400 py-4 px-10  rounded-full">Create Account</div>
        <div className="flex gap-3 items-center">
                <div className="border-b-2 border-gray-700 w-[200px]"></div>
<div>or</div>
<div className="border-b-2 border-gray-700 w-[700px]"></div>
            </div>
    <div className="text-2xl border border-gray-400 py-4 px-20  rounded-full flex items-center gap-6 text-blue-800 justify-center">
    <FcGoogle size={40}/>
        <p>Sign Up With Google</p>
    </div>
    <div className="flex items-center justify-center">Already have An Account? <span className="text-green-600">Login</span></div>
    </div>
    <div>
    <img src="src/assets/images/signup.png" className="w-[900px] h-[85vh]" />
    </div>
</div>
    )
}
export default Signup;