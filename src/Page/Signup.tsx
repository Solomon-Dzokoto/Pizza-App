import {Link} from "react-router-dom"
import { FcGoogle } from "react-icons/fc";
const Signup = () => {
  return (
    <article className="border-2 shadow-lg rounded-md max-w-[30vw] min-w-[35vw] border-[#BB3E00] p-8">
      <form action="" className="grid gap-1.5" >
        <h1 className="font-semibold text-center text-2xl text-[#BB3E00] ">Create an Account! ✍🏻</h1>
        <label htmlFor="name" className="font-semibold text-sm px-2  mb-2">Name</label>
        <input type="text" placeholder="your fullname"  className="border p-2 outline-[#BB3E00] border-gray-400  w-full rounded-md " />
        <label htmlFor="email" className="font-semibold  px-2 text-sm  mb-2">Email</label>
        <input type="email" placeholder="example@company.com" className="border border-gray-400 outline-[#BB3E00]  p-2 w-full rounded-md " />
        <label htmlFor="password" className="font-semibold text-sm  px-2 mb-2">Password</label>
        <input type="password" placeholder="password" className="border p-2 outline-[#BB3E00]  border-gray-400  w-full rounded-md " />
        <label htmlFor="role" className="font-semibold  px-2 text-sm  ">Role</label>
        <select id="role" name="role" className="border  text-[.7rem] outline-[#BB3E00]  border-gray-400 p-2 w-fit rounded-md mt-2">
          <option  value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit" className="bg-[#BB3E00] cursor-pointer text-white block font-semibold py-2 px-4 rounded-md mt-4">Create Account</button>
        <button type="submit" className="border-2 flex items-center justify-center gap-2 border-[#BB3E00] text-[#BB3E00] cursor-pointer  font-semibold py-2 px-4 rounded-md mt-4">SignUp with Google <FcGoogle/> </button>
        <small>Already have an account? <Link to="/login" className="text-blue-500 hover:text-blue-700">Signin</Link></small>
      </form>
    </article>
  )
}

export default Signup
