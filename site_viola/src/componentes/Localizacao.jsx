import styles from "../css/Localizacao.module.css"

function Localizacao(){
    return(
         <section className={styles.section}>
        <div className={styles.Imgloja}>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.122705982666!2d-46.69439032478982!3d-23.528088660370514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef87505aee2fb%3A0xcdf6c5070269884e!2sR.%20Tito%2C%2054%20-%20Vila%20Romana%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005051-000!5e0!3m2!1spt-BR!2sbr!4v1777957432794!5m2!1spt-BR!2sbr" 
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
         <div className={styles.loja}> 
        <h2>Nossa loja- Instrumentos Musicais</h2>
        <p>
          Está situada na Rua Tito, 54 - Pompéia, próximo ao Teatro Cacilda Becker, em uma construção do século XX, numa área de 500m2, com uma variada gama de instrumentos, em um ambiente agradável para toda família!
        </p>
        </div>
        </section>
    )
}

export default Localizacao;