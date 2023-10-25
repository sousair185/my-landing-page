import "./Bloco.css"

function Bloco({img, titulo, sub, conteudo}) {
    return (
        <div>
            <div className="bloco-content">
                <img src={img} alt="imagem do bloco" />
                <div className="bloco-titulo">
                    <h2>{titulo}</h2>
                </div>
                <div className="bloco-subtitulo">
                    <h3>{sub}</h3>
                </div>
                <div className="bloco-conteudo">
                    <p>{conteudo}</p>
                </div>
            </div>
        </div>
    )
}

export default Bloco;