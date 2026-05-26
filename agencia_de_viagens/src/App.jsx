import './App.css'
import Header from './componentes/Header'
import Home from './componentes/Home'
import Footer from './componentes/Footer'
import Escocia from './componentes/Escocia'
import Aruba from './componentes/Aruba'
import China from './componentes/China'

function App() {
    return (
    <main>
      <Header/>
      <Home/>
      <Escocia/>
      <Aruba/>
      <China/>
      <Footer />
    </main>
  )
}

export default App