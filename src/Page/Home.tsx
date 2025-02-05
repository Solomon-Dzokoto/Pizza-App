import { FaUser, FaCartPlus } from "react-icons/fa"
import { RiHeartsLine } from "react-icons/ri";
import { data } from "../utils/data.tsx"
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { useDispatch } from "react-redux";
import { isOpen } from "../redux/reducers/AuthReducer.tsx";


const Home = () => {
    const navData = ["Order", "Delivery", "About", "Contact"]
    const { name, photoURL,open } = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch()

    const access = () => {  
        console.log("clicked")
        console.log(open)
        dispatch(isOpen((prev)=>!open))
        if(name)return;
    }

    return (
        <div className="container py-4 mx-auto px-[clamp(2rem,5vw,4rem)] bg-[#FFF1D7] min-h-screen">
            <header className="flex justify-between items-center">
                <div className="rounded-full overflow-hidden w-[3rem] ">
                    <img className="" src="/assets/logo.jpeg" alt="logo" />
                </div>
                <nav>
                    <ul className="flex gap-2 font-semibold text-[#BB3E00]  " >
                        {
                            navData.map((item) => (
                                <li key={item}>{item}</li>
                            ))
                        }
                    </ul>
                </nav>
                <div className="text-white relative z-50 flex gap-2">
                    <button disabled={name?true:false} onClick={access} className="cursor-pointer ">{
                        name ? <img className="size-[2rem] rounded-full " src={photoURL || "/assets/WhatsApp Image 2025-02-03 at 20.15.13.jpeg"} alt={name} /> : <FaUser />
                    }</button>
                    <button className=""><FaCartPlus /></button>
                </div>
            </header>
            <main>
                <div className="grid grid-cols-2">
                    <div className="py-[4rem]">
                        <h1 className=" font-extrabold mb-4 text-[3.5rem]/15 text-[#5F8D37] ">
                            Don't Think <span className="text-[#BB3E00] ">55</span> Times -just eat!
                        </h1>
                        <p className="text-[#5F8D37]">
                            The most delicious Pizza you have ever tasted! Long-term heritage-from <span className="text-[#BB3E00]">1960</span> to <span className="text-[#BB3E00]">2020s</span>-kept specially for Pizza lovers! Visit us and you will undoubtedly meet us and enjoy the best pizza you have ever tasted!
                        </p>
                        <button className="bg-[#BB3E00] inline-block border-[#BB3E00] border-2 hover:bg-[#bb3e00f1] cursor-pointer text-white font-semibold py-2 px-4 rounded-[2rem] mt-4">Order now</button>
                        <button className="border-2 items-center ml-2 inline-block hover:border-[#bb3e00f1] hover:text-[#bb3e00f1] justify-center gap-2 border-[#BB3E00] text-[#BB3E00] cursor-pointer  font-semibold py-2 px-4 rounded-[2rem] mt-2">Book a place</button>
                    </div>
                    <div className="relative  after:rounded-tl-[45rem] after:rounded-bl-[40rem] after:absolute after:w-90 after:h-120 after:-top-[5rem]  after:-right-[5.5rem] after:bg-[#BB3E00] ">
                        <img className="absolute z-50 top-0 w-90 -right-[5rem]" src="/assets/freshly-baked-pizza-with-cut-slice-isolated-transparent-background_191095-9041-removebg-preview.png" alt="pizza" />
                    </div>
                </div>
                <section>
                    <h3 className="text-[#5F8D37] font-extrabold">Pizza menu</h3>
                    <ul className="flex mt-[8rem] gap-4">
                        {
                            data.map(pizza => (
                                <li key={pizza.id} className="relative pt-[4rem] bg-[#F7AD45] grid  text-[#568032] text-center p-4 rounded-[2rem] ">
                                    <img className="size-[8rem]  object-fit absolute -top-[5rem] left-1/2 -translate-x-1/2" src={pizza.image} alt={pizza.name} />
                                    <p>{pizza.name}</p>
                                    <p className="text-[.7rem] ">{pizza.desc}</p>
                                    <p className="text-[#5F8D37]"> ${pizza.price}</p>
                                    <div className="flex text-[.8rem] justify-center items-center gap-1  text-[#bb3e00f1] "> <span className=""><RiHeartsLine /> </span>{pizza.likes}K
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </section>

            </main>
        </div>
    )
}

export default Home
