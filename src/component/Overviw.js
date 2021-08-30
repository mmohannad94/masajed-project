import { useEffect } from "react";
import Aos from "aos";


function Overviw(){
    

    return(
        <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 my-5 grid lg:gap-6 md:gap-4 lg:grid-cols-4 grid-cols-5'>
            <div  data-aos="fade-right" data-aos-duration="1200" className=' md:col-span-3 col-span-5 border font-Poppins rounded-lg px-7 py-10'>
                <h3 className='pb-4 font-bold text-gray-900 filter drop-shadow-xl'>Overviw</h3>
                <p className='text-gray-700 font-normal text-sm'>
                A cosy, tranquil home situated in a beautiful quiet village in the center of Israel. 
                The space includes 2 comfortable bedrooms, each with a double bed and an exit to a balcony.
                 another room with a sofa, TV and toys for kids. (the sofa can be converted to 2 beds) Bathroom
                  with a shower and toilet together. A fully equipped kitchen, wi-fi. The beautiful big garden,
                 which is shared, has a barbecue grill lots of fruit trees and a Jacuzzi for 6 people.
                </p>
            </div>
            <div data-aos="fade-left" data-aos-duration="1200" className='md:mt-0 mt-2 lg:col-span-1 md:col-span-2 col-span-5 border font-Poppins rounded-lg px-7 py-10 '>
                <div className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 m-3 font-light inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className='inline-block font-normal text-sm text-gray-800 align-middle'>Hello@massjed.com</p>
                </div>
                <div className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 m-3 font-light inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p className='inline-block font-normal text-sm text-gray-800 align-middle'>+1 123456890</p>
                </div>
                <div className=''>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 m-3 font-light inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>

                    <p className='inline-block font-normal text-sm text-gray-800 align-middle'>www.masjed.com</p>
                </div>

            </div>



        </div>
    )
}
export default Overviw;