import React, { useState, useEffect } from "react";


class UpDates extends React.Component {

state = {
    item1: 
            {   addres: 'item1',
                name: 'likes',
                desc: 'isLike',
                likes: 0,
                isLike: true,
            },
    item2:   
            {   
                addres: 'item2',
                name: 'likes',
                desc: 'isLike',
                likes: 0,
                isLike: true
            }
    
    
    
}



componentDidUpdate(){
    let likesNumber1 = document.getElementById('likesNumber1');
    let likesNumber2 = document.getElementById('likesNumber2');
    likesNumber1.innerHTML= this.state.item1.likes;
    likesNumber2.innerHTML= this.state.item2.likes;
}
handleLike =(item) => {
    let addres = item.addres;
    let likes = item.name;
    let isLike = item.desc;
    this.setState((state)=>({
        [addres]:{
            addres,
            name: likes,
            desc: isLike,
            [likes]: 0,
            [isLike]: !this.state[addres][isLike],
        }
    }))
    if(this.state[addres][isLike]) {
        this.setState({
            [addres]:{
                addres,
                name: likes,
                desc: isLike,
                [likes]: this.state[addres][likes]+1,
                [isLike]: !this.state[addres][isLike],
            }
        })
    } else {
        this.setState({
            [addres]:{
                addres,
                name: likes,
                desc: isLike,
                [likes]: this.state[addres][likes]-1,
                [isLike]: !this.state[addres][isLike],
            }
        })
    }
}
// handleLike1 =(like) => {
//     let {isLike1} = this.state;
//     this.setState((state)=>({
//        isLike1: !state.isLike1,
    
//     }))
//     if(isLike1) {
//         this.setState((state)=>({
//             likes1: state.likes1+1
//         }))
//         console.log(this.state.likes1)
//     } else {
//         this.setState((state)=>({
//             likes1: state.likes1-1
//         }))
//         console.log(this.state.likes1)
//     }
// }
// handleLike2 =() => {
//     let {isLike2} = this.state;
//     this.setState((state)=>({
//        isLike2: !state.isLike2,
//     }))
//     if(isLike2) {
//         this.setState((state)=>({
//             likes2: state.likes2+1
//         }))
//         console.log(this.state.likes2)
//     } else {
//         this.setState((state)=>({
//             likes2: state.likes2-1
//         }))
//         console.log(this.state.likes2)
//     }
// }
render(){
    return(
        <div className='max-w-7xl mx-auto lg:px-8 sm:px-6 px-2 mb-10 font-normal font-botton'>
            
            <div className=' bg-white border shadow overflow-hidden rounded-sm px-5'>
                 <h2 className='capitalize text-gray-800 pt-6 text-xl'>masajed Updates</h2>
                 <div className='my-5 text-gray-500'>
                    <div className='border mb-5 '>
                        <div className='grid grid-cols-2 gap-y-6  py-5 px-7'>
                            <div className='text-base'>26 April 2021</div>
                            <button className='md:col-span-1 col-span-2 md:place-self-end place-self-start uppercase p-1 px-2 md:text-md text-sm rounded-md bg-green-200'>Diversity and Inclusion</button>
                            <p className='col-span-2 text-sm'>Target’s New Scholarship Program Will Open Doors for the Next Generation of Black Talent</p>
                        </div>
                        <img src='images/masj1.svg' className='w-full' />
                        <div className='py-5 px-7 bg-green-50 md:text-base text-sm'>
                            <p>Target's New Scholarship Program Will Open Doors for the Next Generation of Black Talent</p>
                            <a href='#' className='text-sm leading-10'>corporate.target.com</a>
                        </div>
                    </div>
                    <div className='pb-6 border-b border-gray-300'>
                        <button className='bg-green-50 rounded-full p-2' onClick={()=>this.handleLike(this.state.item1)}>
                            <svg width="23" height="19" viewBox="0 0 23 19" fill="none" >
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.18525 8.375H2.1245V17.375H5.18525V8.375ZM12.2053 2.66375C12.3553 2.48075 12.578 2.375 12.818 2.375C13.2515 2.375 13.6033 2.72 13.6033 3.1445V7.625C13.6033 8.039 13.946 8.375 14.3683 8.375H18.962C19.976 8.375 20.7095 9.32675 20.4305 10.2875L18.5255 16.8312C18.478 16.9889 18.3809 17.127 18.2486 17.2249C18.1163 17.3229 17.9559 17.3755 17.7913 17.375H8.4785L6.716 16.2238V9.38825L12.2045 2.66375H12.2053ZM1.35875 18.875H5.951C6.36575 18.875 6.716 18.5893 6.716 18.026L7.82225 18.749C7.9475 18.8315 8.09525 18.875 8.24675 18.875H17.7913C18.8105 18.875 19.7173 18.2038 19.9978 17.243L21.9028 10.6993C22.4608 8.78075 20.9953 6.875 18.962 6.875H15.134V3.1445C15.134 1.89275 14.0953 0.875 12.818 0.875C12.1115 0.875 11.4523 1.1855 11.0098 1.727L6.554 7.18475C6.48458 7.0897 6.3939 7.0122 6.28921 6.95842C6.18451 6.90464 6.0687 6.87607 5.951 6.875H1.35875C1.25927 6.87401 1.16057 6.89263 1.06829 6.92978C0.976008 6.96694 0.891947 7.02191 0.82091 7.09155C0.749872 7.1612 0.693248 7.24415 0.654271 7.33568C0.615295 7.42721 0.59473 7.52552 0.59375 7.625V18.125C0.59375 18.539 0.93575 18.875 1.35875 18.875Z" fill="#505863"/>
                            </svg>
                        </button>
                        <span id='likesNumber1'>0</span>
                    </div>
                 </div>
                 <div className=' text-gray-500'>
                    <div className='border mb-5'>
                        <div className='grid grid-cols-2 gap-y-6  py-5 px-7'>
                            <div className='text-base'>13 March 2018</div>
                           
                            <p className='col-span-2 text-sm'>http://glassdoor.com/slink.htm?key=vQjrf</p>
                        </div>
                        <img src='images/masj2.svg' className='w-full' />
                        <div className='py-5 px-7 bg-green-50  text-base'>
                            <p className='md:text-base text-sm'>Target Pulse Blog</p>
                            <a href='#' className='text-sm leading-10'>glassdoor.com</a>
                        </div>
                    </div>
                    <div className='pb-6 '>
                        <button className='bg-green-50 rounded-full p-2' onClick={()=>this.handleLike(this.state.item2)}>
                            <svg className='focus:text-blue-500' width="23" height="19" viewBox="0 0 23 19" fill="none" >
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.18525 8.375H2.1245V17.375H5.18525V8.375ZM12.2053 2.66375C12.3553 2.48075 12.578 2.375 12.818 2.375C13.2515 2.375 13.6033 2.72 13.6033 3.1445V7.625C13.6033 8.039 13.946 8.375 14.3683 8.375H18.962C19.976 8.375 20.7095 9.32675 20.4305 10.2875L18.5255 16.8312C18.478 16.9889 18.3809 17.127 18.2486 17.2249C18.1163 17.3229 17.9559 17.3755 17.7913 17.375H8.4785L6.716 16.2238V9.38825L12.2045 2.66375H12.2053ZM1.35875 18.875H5.951C6.36575 18.875 6.716 18.5893 6.716 18.026L7.82225 18.749C7.9475 18.8315 8.09525 18.875 8.24675 18.875H17.7913C18.8105 18.875 19.7173 18.2038 19.9978 17.243L21.9028 10.6993C22.4608 8.78075 20.9953 6.875 18.962 6.875H15.134V3.1445C15.134 1.89275 14.0953 0.875 12.818 0.875C12.1115 0.875 11.4523 1.1855 11.0098 1.727L6.554 7.18475C6.48458 7.0897 6.3939 7.0122 6.28921 6.95842C6.18451 6.90464 6.0687 6.87607 5.951 6.875H1.35875C1.25927 6.87401 1.16057 6.89263 1.06829 6.92978C0.976008 6.96694 0.891947 7.02191 0.82091 7.09155C0.749872 7.1612 0.693248 7.24415 0.654271 7.33568C0.615295 7.42721 0.59473 7.52552 0.59375 7.625V18.125C0.59375 18.539 0.93575 18.875 1.35875 18.875Z" fill="#505863"/>
                            </svg>
                        </button>
                        <span id='likesNumber2'>0</span>
                    </div>
                 </div>
                 <div className='flex items-center pb-5 text-gray-500'>
                    <p>see all company updates</p>
                    <a href='#'>
                        <svg className='ml-3 ' width="8" height="18" viewBox="0 0 8 18" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.43903 8.28998L-0.090971 0.899979C-0.334415 0.658765 -0.663262 0.523438 -1.00597 0.523438C-1.34868 0.523438 -1.67753 0.658765 -1.92097 0.899979C-2.15668 1.1362 -2.28906 1.45627 -2.28906 1.78998C-2.28906 2.12368 -2.15668 2.44376 -1.92097 2.67998L4.49903 8.99998L-1.92097 15.3C-2.15668 15.5362 -2.28906 15.8563 -2.28906 16.19C-2.28906 16.5237 -2.15668 16.8438 -1.92097 17.08C-1.67753 17.3212 -1.34868 17.4565 -1.00597 17.4565C-0.663262 17.4565 -0.334415 17.3212 -0.090971 17.08L7.43903 9.68998C7.62226 9.50305 7.72489 9.25173 7.72489 8.98998C7.72489 8.72823 7.62226 8.47691 7.43903 8.28998Z" fill="black"/>
                        </svg>
                    </a>
                 </div>
            </div>
        </div>
    )
}
    
}
export default UpDates;