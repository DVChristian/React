import styles from '../css/China.module.css'
import ComponentesProps from './ComponentesProps'        
import Bandeira_china from '../assets/imagens/bandeira_china.jpeg'
import PropsForm from "./PropsForm"

    
    function China(){
        return(
            <section className={styles.fundo_china}>
               <h1>Venha conhecer a China!</h1>
                 <ComponentesProps 
               lugar="China"
               texto="Um destino milenar que mistura tradição e modernidade! Da imponente Muralha da China às luzes vibrantes de Xangai, prepare-se para uma jornada única entre templos ancestrais, culinária exótica e paisagens de tirar o fôlego!"
               bandeira={Bandeira_china}
               />
                 <PropsForm />
               </section>

         

            
        )
    }
    export default China