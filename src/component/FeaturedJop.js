const FeaturedJop = () =>{
    return(
        <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mb-10 mt-4 font-Poppins grid lg:gap-6 md:gap-4 grid-cols-4 '>
            <div data-aos="fade-right" data-aos-duration="1200" className=' lg:col-span-3 col-span-4'>
                <h3 className='my-5 font-bold text-gray-900  capitalize'>featuted  jops</h3>
                <div className=' border font-Poppins rounded-lg px-7 lg:py-10 py-5'>
                    <div className='lg:text-sm text-xs grid grid-flow-row grid-cols-9 gap-x-20 gap-y-5 text-left '>
                        <div className='lg:col-span-5 col-span-5  font-semibold text-gray-900 '>Digital Marketing Speacialist</div>
                        <div className='col-span-1 font-normal text-gray-500'>Location</div>
                        <div className='col-span-1 font-normal text-gray-500'>Level</div>
                        <div className='col-span-1 font-normal text-gray-500'>Department</div>
                        <div className='lg:col-span-5 col-span-5  text-gray-900 '>A cosy, tranquil home situated in a beautiful</div>
                        <div className='col-span-1 text-primary'>Location</div>
                        <div className='col-span-1 text-primary'>Level</div>
                        <div className='col-span-1 text-primary'>Department</div>
                    </div>
                </div>
            </div>
            <div  data-aos="fade-left" data-aos-duration="1200" className=' md:mt-0 mt-2 lg:col-span-1  col-span-4 border font-Poppins rounded-lg px-7 py-5 text-sm '>
            <svg width="35" height="31" viewBox="0 0 18 16" className='text-primary bg-secondary p-1.5 rounded-md' fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 4.11111H2.55556C1.69645 4.11111 1 4.80756 1 5.66667V13.4444C1 14.3036 1.69645 15 2.55556 15H15C15.8591 15 16.5556 14.3036 16.5556 13.4444V5.66667C16.5556 4.80756 15.8591 4.11111 15 4.11111Z" stroke="#0CAA41" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.8892 15V2.55556C11.8892 2.143 11.7253 1.74733 11.4336 1.45561C11.1419 1.16389 10.7462 1 10.3337 1H7.22255C6.80999 1 6.41433 1.16389 6.1226 1.45561C5.83088 1.74733 5.66699 2.143 5.66699 2.55556V15" stroke="#0CAA41" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <h3 className='font-bold font-Poppins my-3 text-gray-900'>Post a job today</h3>
            <p className='font-normal font-Poppins text-gray-500 leading-6 my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed.</p>
            <button className="bg-primary p-1 rounded-md w-full mx-auto  py-3 px-10 mt-3 text-white font-thin font-botton capitalize hover:text-white focus:outline-none ">
                <span className="sr-only">Post a featured job</span>
                Post a featured job
            </button>
            </div>
        </div>
    )
}
export default FeaturedJop;