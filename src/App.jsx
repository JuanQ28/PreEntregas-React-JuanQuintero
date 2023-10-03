import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import { Layout } from './components/Layout'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Layout>
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>}/>
        <Route exact path="/category/:categoryName" element={<ItemListContainer/>}/>
        <Route exact path="/product/:productId" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<h1>Rute not found</h1>}/>
      </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
