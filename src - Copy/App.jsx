// import './App.css'
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Footer from "./components/Footer"

function App() {
  return (
    <>
    <div className="h-[100%] w-[100%] bg-[#D0D4D5] rounded-xl shadow-xl p-2">
    <NavBar/>
    <Home/>
    {/* <Footer/> */}
    </div>
    </>
  )
}

export default App
