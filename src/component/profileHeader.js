

const Header = () => {
    return(
        <div class="max-w-7xl mx-auto lg:px-8 sm:px-6 px-2 mb-10">
            <div className='flex justify-center font-botton w-full bg-white'>
                <div class="w-full  border-l border-b">
                    <div className='w-full '>
                        <img src="images/cover.svg" className='w-full object-cover lg:h-auto h-32' />
                    </div>
                    
                    <div class="flex  font-normal">
                        <div class=" inline-block -mt-10 w-32 ml-5">
                            <img class="w-36 h-28 " src="images/profile.svg" />
                        </div>
                        <h3 className='capitalize ml-6 mt-3 text-gray-900 text-2xl'>al noor mosque</h3>
                    </div>
                    <div className='flex mt-6 text-sm  font-normal text-gray-400 ml-4'>
                        <p className=' border-r pb-2 px-8 text-primary'>Overview</p>
                        <p className='border-r pb-2 px-8'>Jobs</p>
                        <p className=' border-r pb-2 px-8'>Photos</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Header;