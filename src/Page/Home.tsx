import { FaUser, FaCartPlus } from "react-icons/fa"

const Home = () => {
    const navData = ["Order", "Delivery", "About", "Contact"]
    return (
        <div className="">
            <header className="">
                <div className="logo">
                    <img src="/assets/logo.png" alt="logo" />
                </div>
                <nav>
                    <ul>
                        {
                            navData.map((item) => (
                                <li key={item}>{item}</li>
                            ))
                        }
                    </ul>
                </nav>
                <div className="">
                    <button className=""><FaUser /></button>
                    <button className=""><FaCartPlus /></button>
                </div>
            </header>
            <main>
                <div className="">
                    <div className="">
                        <h1>
                            Don't Think 55 Times
                            -just eat!
                        </h1>
                        <p>
                            The most delicious Pizza you have ever tasted! Long-term heritage-from <span>1960</span> to <span>2020s</span>-kept specially for Pizza lovers! Visit us and you will undoubtedly meet us and enjoy the best pizza you have ever tasted!
                        </p>
                        <button>Order now</button>
                        <button>Order now</button>
                    </div>
                    <div className="">        
                            <img src="/assets/" alt="pizza" />
                    </div>
                </div>
            </main>


        </div>
    )
}

export default Home
