import styles from '../css/Aruba.module.css'
import ComponentesProps from './ComponentesProps'        
import Bandeira_aruba from '../assets/imagens/aw (1).jpeg'
import PropsForm from "./PropsForm"

    
    function Aruba(){
        return(
            <section className={styles.fundo_aruba}>
               <h1>Venha conhecer a Aruba!</h1>
                <ComponentesProps 
               lugar="Aruba"
               texto="Uma ilha paradisíaca no coração do Caribe! Com suas praias de areia branca, águas cristalinas e um sol que brilha o ano inteiro, Aruba é o destino perfeito para quem busca relaxamento, aventura e momentos inesquecíveis!"
               bandeira={Bandeira_aruba}
               />
               <PropsForm />
               </section>
         

            
        )
    }
    export default Aruba