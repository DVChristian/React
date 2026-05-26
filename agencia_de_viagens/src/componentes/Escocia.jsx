import styles from '../css/Escocia.module.css'
import ComponentesProps from './ComponentesProps'        
import Bandeira_escocia from '../assets/imagens/bandeira_escocia.jpeg'
import PropsForm from "./PropsForm"
   
    function Escocia(){
        return(
            <section className={styles.fundo_escocia}>
               <h1>Venha conhecer a Escocia!</h1>
               <ComponentesProps 
               lugar="Escócia"
               texto="Esse país fantástico, com seus encantos e seus castelos medievais, te aguardam para um roteiro inesquecível, com boa comida, boas instalações e um clima agradável!"
               bandeira={Bandeira_escocia}
               />
                 <PropsForm />
               </section>

         

            
        )
    }
    export default Escocia