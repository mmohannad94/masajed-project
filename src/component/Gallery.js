import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

import { Gallery, Item } from 'react-photoswipe-gallery'
 
 const GalleryA = ()=>{
   
     return(
         <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-7 font-Poppins'>
                <h2 className='animate__animated animate__fadeInLeft text-2xl'>Alsalam Masjed & commnnity center</h2>
                <p className='animate__animated animate__fadeInLeft text-gray-500'>Gaza, Palestine</p>
                <div className='grid grid-rows-2 grid-flow-col lg:gap-5 gap-3 my-4'>
                    <Gallery >
                        <Item
                        
                        original="images/Rectangle1.svg"
                        thumbnail="images/Rectangle1.svg"
                        width="1024"
                        height="768"
                        >
                        {({ ref, open }) => (
                            <img ref={ref} onClick={open} className='animate__animated animate__fadeInLeft row-span-2 w-full rounded-l-lg  h-full object-cover' src="images/Rectangle1.svg" />
                        )}
                        </Item>
                        <Item
                        
                        original="images/Rectangle2.svg"
                        thumbnail="images/Rectangle2.svg"
                        width="1024"
                        height="768"
                        >
                        {({ ref, open }) => (
                            <img ref={ref} onClick={open} className='animate__animated animate__fadeInRight row-span-1 w-full h-full' src="images/Rectangle2.svg" />
                        )}
                        </Item>
                        <Item
                        
                        original="images/Rectangle4.svg"
                        thumbnail="images/Rectangle4.svg"
                        width="1024"
                        height="768"
                        >
                        {({ ref, open }) => (
                            <img ref={ref} onClick={open} className='animate__animated animate__fadeInRight row-span-1 w-full h-full' src="images/Rectangle4.svg" />
                        )}
                        </Item>
                        <Item
                        
                        original="images/Rectangle3.svg"
                        thumbnail="images/Rectangle3.svg"
                        width="1024"
                        height="768"
                        >
                        {({ ref, open }) => (
                            <img ref={ref} onClick={open} className='animate__animated animate__fadeInRightBig row-span-1 w-full h-full' src="images/Rectangle3.svg" />
                        )}
                        </Item>
                        <Item
                        
                        original="images/Rectangle5.svg"
                        thumbnail="images/Rectangle5.svg"
                        width="1024"
                        height="768"
                        >
                        {({ ref, open }) => (
                            <img ref={ref} onClick={open} className='animate__animated animate__fadeInRightBig row-span-1 w-full h-full ' src="images/Rectangle5.svg" />
                        )}
                        </Item>
                    </Gallery>
                </div>
         </div>
     )
 }
export default GalleryA;