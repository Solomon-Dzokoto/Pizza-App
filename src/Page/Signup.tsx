
const Signup = () => {
  return (
    <article className="border max-w-[40vw] min-w-[30vw] p-4">
      <form action="" className="grid gap-1.5" >
        <h1 className="font-semibold text-center text-2xl text-[#BB3E00] ">Create an Account! ✍🏻</h1>
        <label htmlFor="name" className="font-semibold text-sm px-2  mb-2">Name</label>
        <input type="text" placeholder="your fullname" className="border p-2 border-gray-400  w-full rounded-md " />
        <label htmlFor="email" className="font-semibold text-sm  mb-2">Email</label>
        <input type="email" placeholder="example@company.com" className="border border-gray-400  p-2 w-full rounded-md " />
        <label htmlFor="password" className="font-semibold text-sm  mb-2">Password</label>
        <input type="password" placeholder="password" className="border p-2 border-gray-400  w-full rounded-md " />
        <label htmlFor="role" className="font-semibold text-sm  mb-2">Role</label>
        <select id="role" name="role" className="border inline-block text-[.9rem]  border-gray-400 p-2 w-fit rounded-md mt-2">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit" className="bg-[#BB3E00] cursor-pointer text-white block font-semibold py-2 px-4 rounded-md mt-4">Create Account</button>
      </form>
    </article>
  )
}

export default Signup
