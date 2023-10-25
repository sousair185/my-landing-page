import "./Home.css";
import Carousel from "nuka-carousel";
import { easeCubic, easeLinear } from 'd3-ease';
import Bloco from "./Bloco"

function Home() {
   
    return (
        <>
        <div className="banner-main">
            <Carousel 
            withoutControls={true}
            adaptiveHeight={true}
            adaptiveHeightAnimation={true}
            autoplay={true}
            wrapAround={true}
            cellAlign="center"
            speed={5000}
            autoplayInterval={7000}
            zoomScale={0.25}
            easing={easeCubic} 
            edgeEasing={easeLinear}
             >
                <div className="bloco1"></div>
                <div className="bloco2"></div>
            </Carousel>
        </div>
        <div className="main">
        <h1>Bem vindo!</h1>
        <h2>Lema da empresa</h2>
        </div>
        <Bloco img="" titulo="Titulo" sub="Sub título" conteudo="Conteúdo de texto" />
        </>
    )
}

export default Home;