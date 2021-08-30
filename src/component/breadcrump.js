import { Breadcrumb } from 'react-dynamic-breadcrumb';
 
 
 const MyBreadcrumb = ()=>{
     return(
        <div className='border-b'>
            <nav class="mx-auto px-2 sm:px-6 lg:px-8 p-3 text-xs rounded font-sans font-medium max-w-7xl ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary inline-block mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <div className='inline-block '>

                <Breadcrumb  containerClassName="dynamic-bread-crumb" separator="<strong>/</strong>" />

                    
                </div>
            </nav>
        </div>
     )
 }
 export default MyBreadcrumb;


 {/* <ol class="list-reset flex">
                    
    <li><Link to='/' class="text-gray-500 capitalize">home</Link></li>
    <li><span class="mx-2 text-gray-500">/</span></li>
    <li><Link to='/Masajed' class="text-gray-500 capitalize">masajed</Link></li>
    <li><span class="mx-2">/</span></li>
    <li className='capitalize'>alsalam masged</li>
    </ol> */}