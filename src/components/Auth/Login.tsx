import { Link } from "react-router-dom"
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux"
import { RootState, AppDispatch } from "../../redux/store/store";
import { loginWithEmailAndPassword, signInWithGoogle } from "../../redux/reducers/AuthReducer";
import loader from '/assets/loading.png'

const Login = () => {

  const dispatch = useDispatch<AppDispatch>()
  const { loading,error,open } = useSelector((state: RootState) => state.auth)


  const schema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Email is required"),
    password: yup.string().min(6).required("Password is required")
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: any) => {
    dispatch(loginWithEmailAndPassword(data))
  }

  return (
    <>
      {
        open && (
          <div className="animate__animated left-1/2 top-1/2 -translate-1/2 animate__fadeInDown">
            <article className="border-2 shadow-lg rounded-md max-w-[30vw] min-w-[35vw] border-[#BB3E00] p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="grid gap-1.5" >
              {error && <div className="text-red-500 text-center">{error}</div>}
                <h1 className="font-semibold text-center text-2xl text-[#BB3E00] ">Login ! ✍🏻</h1>
                <label htmlFor="email" className="font-semibold  px-2 text-sm  mb-2">Email</label>
                <input {...register("email")} type="email" placeholder="example@company.com" className="border border-gray-400 outline-[#BB3E00]  p-2 w-full rounded-md " />
                {errors.email && <small className="text-red-500">{errors.email.message}</small>}
                <label htmlFor="password" className="font-semibold text-sm  px-2 mb-2">Password</label>
                <input {...register("password")} type="password" placeholder="password" className="border p-2 outline-[#BB3E00]  border-gray-400  w-full rounded-md " />
                {errors.password && <small className="text-red-500">{errors.password.message}</small>}
                <small>You forgot your password? <Link to="/forgot" className="text-blue-500 transition-all  hover:underline">Reset Password</Link> </small>
                <button type="submit" disabled={loading} className="bg-[#BB3E00] hover:bg-[#bb3e00f1] cursor-pointer text-white block font-semibold py-2 px-4 rounded-md mt-4"> {loading ? <img className="text-center ani animate-spin" src={loader} alt="loader" /> : "SignIn"} </button>
                <button type="button" onClick={() => dispatch(signInWithGoogle())} className="border-2 flex items-center hover:border-[#bb3e00f1] hover:text-[#bb3e00f1] justify-center gap-2 border-[#BB3E00] text-[#BB3E00] cursor-pointer  font-semibold py-2 px-4 rounded-md mt-2">SignIn with Google <FcGoogle /> </button>
                <small>You don't have an account? <Link to="/signup" className="text-blue-500 hover:text-blue-700">Signin</Link></small>
              </form>
            </article>
          </div>
        )
      }

    </>

  )
}

export default Login
