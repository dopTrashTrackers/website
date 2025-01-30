import { Outlet } from "react-router-dom"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import NavigationGuide from './components/NavigationGuide.jsx';


function App() {
  return (
    <div className="min-h-fit w-full bg-blue-gray-50">
      <NavigationGuide />
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App;