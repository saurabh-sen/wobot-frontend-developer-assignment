import React from 'react'
import bg from '../assets/rect.png'
import logo from '../assets/login_logo.png'

const Login = () => {
  return (
    <div className='bg-[#f9f9f9] relative min-w-max mb-12'>

      {/* Background */}
      <img className='absolute top-[10%] z-0' src={bg} alt="background1" />
      <img className='absolute top-[10%] right-0' src={bg} alt="background2" />

      {/* Login container */}
      <div className="login__container bg-white rounded-2xl max-w-fit m-auto relative z-10 sm:mt-6 px-5 py-3 sm:px-14 sm:py-8 flex justify-center items-center flex-col text-center">

        {/* text container */}
        <div className="container__text">
          <img className='m-auto w-10 sm:w-auto' src={logo} alt="login__image" />
          <p className='text__heading font-bold sm:w-3/5 mx-auto my-3 sm:text-lg text-sm'>It's a delight to have you onboard</p>
          <p className="text__desc1 text-[9px] sm:text-sm text-[#545454a0] font-semibold ">Help us know you better</p>
          <p className="text__desc2 text-[9px] sm:text-sm text-[#545454a0] font-semibold mb-3">(This is how we optimize  Wobot as per your business needs)</p>
        </div>

        
        <div className="container__form text-left w-full">

          <div className="form__company__name flex flex-col">
            <span className="company__name__label text-sm text-[#545454] my-2 ">Company name</span>
            <input className='border border-gray-400 p-2 rounded-md outline-none' type="text" placeholder='e.g. Example Inc' />
          </div>

          
          <div className="form__company__industry__drop__down flex flex-col">
            <span className="company__industry__drop__down text-sm text-[#545454] my-2 ">Industry</span>
            <select className='border border-gray-400 p-2 rounded-md outline-none text-[#9ca3bc]' name="industry" id="industry" defaultValue="Select">
              <option disabled className='disabled:cursor-not-allowed' value="Select">Select</option>
              <option value="oil">Oil</option>
              <option value="oil1">Oil1</option>
              <option value="oil2">Oil2</option>
              <option value="oil3">Oil3</option>
            </select>
          </div>
          
          <div className="form__company__size flex flex-col">
            <span className="company__size__container text-sm text-[#545454] my-2 ">Company size</span>
            <div className="company__size__raid flex flex-col sm:flex-row gap-4">
              <label className='relative inline py-2 px-4 rounded-md bg-[#F0F0F0] text-sm text-black hover:bg-[#3766e8d6] cursor-pointer' htmlFor="size1">1-20
                <input className='absolute opacity-0' type="radio" name="size" id="size1" />
              </label>
              
              <label className='relative inline py-2 px-4 rounded-md bg-[#F0F0F0] text-sm text-black hover:bg-[#3766e8d6] cursor-pointer' htmlFor="size1">21-50
                <input className='absolute opacity-0' type="radio" name="size" id="size1" />
              </label>
              
              <label className='relative inline py-2 px-4 rounded-md bg-[#3766e8d6] text-sm text-black hover:bg-[#3766e8d6] cursor-pointer' htmlFor="size1">50-200
                <input className='absolute opacity-0' type="radio" name="size" id="size1" />
              </label>
              
              <label className='relative inline py-2 px-4 rounded-md bg-[#F0F0F0] text-sm text-black hover:bg-[#3766e8d6] cursor-pointer' htmlFor="size1">201-500
                <input className='absolute opacity-0' type="radio" name="size" id="size1" />
              </label>
              
              <label className='relative inline py-2 px-4 rounded-md bg-[#F0F0F0] text-sm text-black hover:bg-[#3766e8d6] cursor-pointer' htmlFor="size1">500+
                <input className='absolute opacity-0' type="radio" name="size" id="size1" />
              </label>
            </div>
          </div>

        </div>        

        <div className="container__button w-full">
          <button className='button text-white bg-[#3766E8] w-full my-3 p-2 rounded-md text-sm font-semibold'>
            Get Started
          </button>
        </div>

      </div>
    </div>
  )
}

export default Login