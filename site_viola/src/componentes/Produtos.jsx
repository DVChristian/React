import styles from '../css/Produtos.module.css'
import Violao from "../assets/guitarrinha.jpg";

function Sobreloja(){
    return(
        <section className={styles.section}>
        <div className={styles.produtos}> 
             <img src={Violao}></img>
             <h4>Violão Yamaha C70 II Clássico
                Nylon Acústico Natural
                Brilhante<br/>
               <span><h3>R$ 989,50</h3></span>
             </h4>
        </div>
        <div className={styles.produtos}> 
             <img src={Violao}></img>
             <h4>Violão Yamaha C70 II Clássico
                Nylon Acústico Natural Brilhante<br/>
                <span><h3>R$ 989,50</h3></span>
             </h4>
        </div>
        <div className={styles.produtos}> 
             <img src={Violao}></img>
             <h4>Violão Yamaha C70 II Clássico
                Nylon Acústico Natural
                Brilhante<br/>
              <span><h3>R$ 989,50</h3></span>
             </h4>
        </div>
        <div className={styles.produtos}> 
             <img src={Violao}></img>
             <h4>Violão Yamaha C70 II Clássico
                Nylon Acústico Natural
                Brilhante <br/>
               <span><h3>R$ 989,50</h3></span>
             </h4>
        </div>
        </section>
    )
}

export default Sobreloja;