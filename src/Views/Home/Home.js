import React,{useEffect,useState} from "react";
import axios from "axios";
import CardList from "../../Components/Cards/CardList"
import Pagination from "../../Components/Pagination/Pagination"
import Footer from "../../Components/Footer/Footer"

const Home=()=>{
    const [data, setData]=useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage,setCurrentPage]= useState(1)
    const [productsPerPage] = useState(16)

    // TODO: SEND DATAFETCHING TO UTILS
    const dataFetching= async ()=>{
        const response=await axios.get("https://ecomerce-master.herokuapp.com/api/v1/item")
        const products=response.data
        setData(products)
        setIsLoading(false)
    }

    useEffect(()=>{
        dataFetching()
    },[])

    // PAGINATION LOGIC
    const indexOfLast=currentPage * productsPerPage;
    const indexOfFirst=indexOfLast - productsPerPage;
    const currentProducts= data.slice(indexOfFirst, indexOfLast)

    // Change Page
    const handlePage=(pageNumber)=>{
        setCurrentPage(pageNumber)
    }

    const handleReturn=(pageNumber,pages)=>{
        if(pageNumber!==pages[0]){
            setCurrentPage(pageNumber-1)
        }
    }

    const handleNext=(pageNumber,pages)=>{
        if(pageNumber!==pages[pages.length -1]){
            setCurrentPage(pageNumber+1)
        }
    }

    return (
        <>
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
            {isLoading?<div className="loader">Loading...</div>:
            <div>
            <CardList data={currentProducts}/>
            {/* TODO: CHECK A BETTER WAY */}
            <Pagination currentPage={currentPage} productsPerPage={productsPerPage} totalProducts={data.length} handlePage={handlePage} handleReturn={handleReturn} handleNext={handleNext}/>
            </div>
            }   
        </section>
        <Footer/>
        </>
    )
}

export default Home;