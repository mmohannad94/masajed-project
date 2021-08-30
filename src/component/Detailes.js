

const detailes = [
    {
        name: 'website',
        Description: 'www.aqmerr.com'
    },
    {
        name: 'Size',
        Description: '10000+ Employees'
    },
    {
        name: 'Type',
        Description: 'Mosque  - Public (TGT)'
    },
    {
        name: 'Revenue',
        Description: '$10+ billion (USD)'
    },
    {
        name: 'Headquarters',
        Description: 'Minneapolis, MN'
    },
    {
        name: 'Founded',
        Description: 1962
    },
    {
        name: 'Industry',
        Description: 'General Merchandise & Superstore'
    },
]



const Detailes = () => {

    return(
        <div className=' max-w-7xl mx-auto lg:px-8 sm:px-6 px-2 mb-10 font-normal font-botton text-base text-gray-600'>
            <div className="grid md:grid-rows-4 grid-rows-8 md:grid-flow-col gap-3 md:gap-x-10 pt-16 pb-24 px-5 bg-white border shadow overflow-hidden rounded-sm">

                {
                    detailes.map(item => {
                        if(item.name === 'website'){
                            return(
                                <div className='grid grid-cols-4 '>
                                    <div className='lg:col-span-1 col-span-2 capitalize'>{item.name}:</div>
                                    <a href='#' className='col-span-2 underline text-primary'>{item.Description}</a>
                                </div>
                            )
                        } else {
                            return(
                                <div className='grid grid-cols-4 '>
                                    <div className='lg:col-span-1 col-span-2 capitalize'>{item.name}:</div>
                                    <div className='col-span-2 capitalize '>{item.Description}</div>
                                </div>
                        )
                        }
                    })
                }
                    
            

            </div>
        </div>
    )
}

export default Detailes;