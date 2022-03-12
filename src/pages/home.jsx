import Navbar from "../components/Navbar";
import { Carousel } from 'react-responsive-carousel'
import first from '../assets/first.png'
import second from '../assets/second.png'
import slider1 from '../assets/slider1.jpeg'
import slider2 from '../assets/slider2.jpeg'
import slider3 from '../assets/slider3.png'



import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function Home() {
    return(
        <div>
            <Navbar/>
            <h1 className="p-5">E-shop</h1>
            <CaroselHome/>
            <div className="container mt-5">
                <FirstRow/>
                <SecondRow/>
                <hr />
                <ThirdRow/>
            </div>
            
            <CategoriesPart/>

        </div>
    )
}
            

const FirstRow = ()=>{
    return (
        <div className="row bor first-row mt-4 ml-1 mr-1">
                    <div className="col-lg-6 col-sm-12">
                        <img src={first} alt="" width='100%' height='70%' />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div>
                            <div className="container">
                                <h3>wellcome to E-shop</h3>
                                <br />
                                <button type="button" class="btn btn-outline-warning btn-block mt-2">Shop Page!</button>
                            </div>
                        </div>
                    </div>
        </div>
    )
}


const SecondRow = ()=>{
    return (
        <div className="row bor first-row mt-4 mb-5 ml-1 mr-1">
                    
                    <div className="col-lg-6 col-sm-12">
                        <div>
                            <div className="container">
                                <h3>who wanna check the categories?!</h3>
                                <br />
                                <button type="button" class="btn btn-outline-warning btn-block mt-2">lets move</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <img src={second} alt="" width='100%' height='70%' />
                    </div>
        </div>
    )
}

const ThirdRow = ()=>{
    return(
    <div className="mt5 mb-5 ml-1 mr-1">
        <h1>lets check our offers!</h1>
        <p>test test for ever are good but i need food  test test for ever are good but i need food</p>
        <p>test test for ever are good but i need food</p>
        <p>test test for ever are good but i need food and who care???</p>
        <a href="/about"><p>go forward ...!</p></a>
    </div>
    )
}


const CaroselHome = ()=> {
    return(
        <div id="carouselExampleIndicators" class="carousel slide mt-5 mb-5 pl-5 pr-5" data-ride="carousel">
            <Carousel  swipeable={true} >
                <div>
                    <img style={{borderRadius : '15px'}} src={slider1} width='40%' height='50%' />
                    <p className="legend">item one</p>
                </div>
                <div>
                    <img style={{borderRadius : '15px'}} src={slider1} width='40%' height='50%'  />
                    <p className="legend">item two</p>
                </div>
                <div>
                    <img style={{borderRadius : '15px'}} src={slider1} width='40%' height='50%' />
                    <p className="legend">item three</p>
                </div>
            </Carousel>
</div>
    )
}



const CategoriesPart = ()=> {
    return(
        <div className="container mt-5 ">
            <div className="al-cen bor">
                <h3  className="p-5 text-danger">Categories</h3>
                <hr />
                <div className="p-5">
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <button type="button" class="btn btn-outline-danger btn-block mt-2">lets move</button>

                </div>

            </div>
          
        </div>
    )
}


const Cards = ()=>{
    return(
        <div class="card bor m-5">
            <img class="card-img-top" src={second} alt="Card image cap"/>
            <div class="card-body">
                <h3>one</h3>
            </div>
        </div>
    )
}