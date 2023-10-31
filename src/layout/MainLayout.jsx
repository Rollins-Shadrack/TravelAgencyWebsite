import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div className='h-screen w-full'>
        <Navbar/>
        <Outlet className='relative '/>
        <Footer/>
    </div>
  )
}

export default MainLayout