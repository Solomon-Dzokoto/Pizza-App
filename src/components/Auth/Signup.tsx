import {Link} from "react-router-dom"
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import {signupWithEmailAndPassword ,signInWithGoogle} from "../../redux/reducers/AuthReducer"
import { useForm } from "react-hook-form";
import { AppDispatch } from "../../redux/store/store";
// import { useNavigate } from "react-router-dom";


// interface SignupForm {
//   name: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
//   role: "user" | "admin";
// }
const Signup = () => {
  const dispatch = useDispatch<AppDispatch>()

  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Please enter a valid email").required("Email is required"),
    password: yup.string().min(6).required("Password is required"),
    confirmPassword: yup.string().min(6).required("Confirm Password is required").oneOf([yup.ref("password")],"Password don't match!"),
    role: yup.string().required("Role is required"),
  })

  const {register,handleSubmit,formState:{errors}} = useForm({
    resolver : yupResolver(schema)
  })

  const onSubmit = (data:any) => {
    dispatch(signupWithEmailAndPassword( data))
  }
  
  return (
    <article className="border-2 fixed left-1/2 top-1/2 -translate-1/2 animate__animated animate_fadeInTopLeft shadow-lg rounded-md max-w-[30vw] min-w-[35vw] border-[#BB3E00] p-8">
      <form onSubmit={handleSubmit(onSubmit)} className=" gap-1.5" >
        <h1 className="font-semibold mb-8 text-center text-2xl text-[#BB3E00] ">Create an Account! ✍🏻</h1>
        <label htmlFor="name" className="font-semibold text-sm px-2  mb-2">Name</label>
        <input {...register("name")} type="text" placeholder="your fullname"  className="border p-2 outline-[#BB3E00] border-gray-400  w-full rounded-md " />
        {errors.name && <small className="text-red-500 block">{errors.name.message}</small>}
        <label htmlFor="email" className="font-semibold  px-2 text-sm  mb-2">Email</label>
        <input  {...register("email")} type="email" placeholder="example@company.com" className="border border-gray-400 outline-[#BB3E00]  p-2 w-full rounded-md " />
        {errors.email && <small className="text-red-500 block">{errors.email.message}</small>}
        <label htmlFor="password" className="font-semibold text-sm  px-2 mb-2">Password</label>
        <input {...register("password")}  type="password" placeholder="password" className="border p-2 outline-[#BB3E00]  border-gray-400  w-full rounded-md " />
        {errors.password && <small className="text-red-500 block">{errors.password.message}</small>}
        <label htmlFor="confirmPassword" className="font-semibold text-sm  px-2 mb-2">Confirm Password</label>
        <input {...register("confirmPassword")}  type="password" placeholder="confirm password" className="border p-2 outline-[#BB3E00]  border-gray-400  w-full rounded-md " />
        {errors.confirmPassword && <small className="text-red-500 block">{errors.confirmPassword.message}</small>}
        <label htmlFor="role" className="font-semibold  px-2 text-sm  ">Role</label>
        <select {...register("role")}  id="role" name="role" className="border  text-[.7rem] outline-[#BB3E00]  border-gray-400 p-2 w-fit rounded-md mt-2">
          <option  value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        {errors.role && <small className="text-red-500">{errors.role.message}</small>}
        <button type="submit" className="bg-[#BB3E00] w-full cursor-pointer text-white block font-semibold py-2 px-4 rounded-md mt-4">Create Account</button>
        <button onClick={()=> dispatch(signInWithGoogle())} type="button" className="border-2 flex items-center justify-center gap-2 border-[#BB3E00] w-full text-[#BB3E00] cursor-pointer  font-semibold py-2 px-4 rounded-md mt-4">SignUp with Google <FcGoogle/> </button>
        <small>Already have an account?<Link to="/login" className="text-blue-500 hover:text-blue-700">Signin</Link></small>
      </form>
    </article>
  )
}

export default Signup
