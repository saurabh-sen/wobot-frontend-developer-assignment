import Navbar from './components/Navbar'
import Login from './components/Login'

function App() {

  return (
    <div className="App bg-[#f9f9f9]">
      <Navbar />
      <Login />
      <p className='text-center m-4 pb-16 z-10 relative'>Terms of use | Privacy policy</p>
    </div>
  )
}

export default App
