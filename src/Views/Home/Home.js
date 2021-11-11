import React from "react";
import Pagination from "../../Components/Pagination/Pagination"
import Footer from "../../Components/Footer/Footer"
import Buttons from "../../Components/Buttons/Buttons"
import {ProductsProvider} from "../../Context/ProductsContext"
import {CarProvider} from "../../Context/CarContext"


const Home=()=>{
    return (
        <>
        <ProductsProvider>
        <section className="hero">
            <div className="main-message">
                <h1>FIND EXACTLY WHAT YOU <br/>ARE LOOKING FOR</h1>
            </div>
            <ul className="top-cards">
                <li>
                    <div id="games" className="card">
                    <div className="top-card-title">
                            <h3>Games</h3>
                        </div>
                        <div className="top-card-image">
                            <img src="https://cdn.pixabay.com/photo/2020/06/21/20/43/playstation-5326719_1280.png" alt="" />
                        </div>
                    </div>
                </li>
                <li>
                <div id="clothing" className="card">
                        <div className="top-card-title">
                            <h3>Clothing</h3>
                        </div>  
                        <div className="top-card-image">
                            <img src="https://freepngimg.com/thumb/tshirt/36652-7-grey-t-shirt.png" alt="" />
                        </div>
                    </div>
                </li>
                <li>
                <div id="cars" className="card">
                        <div className="top-card-title">
                            <h3>Cars</h3>
                        </div>
                        <div className="top-card-image">
                            <img src="https://purepng.com/public/uploads/large/51506279686tvesuugs2moxeanjcln8onwm7mpore19t2hqbekzlra1npuklmpvsiz5bqqgbikblfpnygdkjyhmmdn6jekbzbyb2dkzjcycy9z2.png" alt="" />
                        </div>
                </div>
                </li>
            </ul>
        </section>
        <section className="products">
            <h2 className="products-title">Products</h2>
            <Pagination/>
        </section>
        </ProductsProvider>
        <Footer/>
        <CarProvider>
        <Buttons/>
        </CarProvider>
        </>
    )
}

export default Home;