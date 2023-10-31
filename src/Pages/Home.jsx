import Hero from "../components/Hero"
import Guide from "../components/Guide"
import Features from "../components/Features"
import GetApp from "../components/GetApp"


const Home = () => {
  return (
    <div className='overflow-x-hidden'>
    <Hero/>
    <Guide/>
    <Features/>
    <GetApp/>
    </div>
  )
}

export default Home