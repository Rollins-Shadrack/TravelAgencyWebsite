import camp from '../assets/camp.svg'
import star from '../assets/star.svg'
import play from '../assets/play.svg'
import close from '../assets/close.svg'
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container overflow-x-hidden  padding-container flex flex-col gap-10 py-10  pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map"/>

    {/* left side */}
    <div className="relative-20 px-5 flex flex-1 flex-col lg:w-1/2">
      <img src={camp} width={50} height={50} alt=""  />
      <h1 className='bold-40 lg:bold-70 px-12'>Putuk Truna Camp Area</h1>
      <p className="regular-16  mt-6 text-gray-30 xl:max-w-[500px]">We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app</p>

      <div className="my-11 flex flex-wrap gap-5">
        <div className="flex items-center gap-2">
          {Array(5).fill(1).map((_, index) =>(
            <img src={star} alt="start" key={index} width={24} height={24} />
          ))}
        </div>
        <p className="bold-16 lg:bold-20 text-blue-70">200k <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span></p>
      </div>

      <div className="flex w-full flex-col gap-3 sm:flex-row">
        <Button type="button" title='Download app' className="bg-brandPrimary text-white py-2 px-6 transition-all duration-300 rounded-full hover:bg-black"/>
        <Button type="button" title='How we work?' icon={play} className="border-white bg-white px-8 py-3 text-gray-90 transition-all duration-300 rounded-full hover:bg-black hover:text-white"/>
      </div>
    </div>

    <div className="relative flex flex-1 items-start ">
      <div className="relative z-20 flex flex-col w-[268px] gap-8 rounded-3xl bg-green-90 px-7 py-8">
        <div className="flex flex-col">
          <div className="flexBetween">
            <p className="regular-16 text-gray-20">Location</p>
            <img src={close} alt="close" width={24} height={24} />
          </div>
          <p className="bold-20 text-white">Aguas Calientes</p>
          <div className="flexBetween">
          <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">189.36 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Hero