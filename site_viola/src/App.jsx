import './App.css'
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Sobreloja from './componentes/Sobreloja';
import Produtos from './componentes/Produtos';
import Localizacao from './componentes/Localizacao'
import Forms from './componentes/Forms'

function App() {
    return(
        <main>
        <Header/>
        <Sobreloja/>
        <Produtos/>
        <Localizacao/>
        <Forms/>
        <Footer/>
        </main>
    )
  
}

export default App