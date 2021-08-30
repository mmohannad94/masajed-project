import React from "react";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { CountryDropdown } from 'react-country-region-selector';
import countries from "./contries";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

class Navbar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
       active: false,
       
        };
   
  }

  componentDidMount(){
    this.showSearch =(e)=>{
      let search= document.getElementById('search')
      let show = document.getElementById('show')
      let hidden = document.getElementById('hidden')
      show.classList.add('animate__fadeOutLeft', 'hidden');
      show.classList.remove('inline-block', 'animate__fadeInRight')
      search.classList.remove('animate__fadeOutLeft', 'hidden');
      search.classList.add('animate__fadeInRight', 'inline-block');
      hidden.classList.add('animate__fadeInRight', 'inline-block');
      hidden.classList.remove('animate__fadeOutLeft','hidden');
    }
    this.hiddenSearch=()=>{
      let search= document.getElementById('search')
      let show = document.getElementById('show')
      let hidden = document.getElementById('hidden')

      hidden.classList.remove('animate__fadeInRight');
      hidden.classList.add('animate__fadeOutLeft', 'hidden');
      search.classList.remove('animate__fadeInRight');
      search.classList.add('animate__fadeOutLeft', 'hidden');
      show.classList.remove('hidden','animate__fadeOutLeft')
      show.classList.add('animate__fadeInRight', 'inline-block');
       
       
       
    }
  }
  onSubmit=(values) =>{
    console.log(values)
  }

  render(){
    const { country, region } = this.state;

    return (
      <Disclosure as="nav" className=" border-b">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 lg:py-1 pt-1">
              <div className="relative flex items-center justify-between h-14 ">
                
                <div className=" flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                      <div className='block lg:hidden'>
                          <img
                          className=" h-5 w-auto inline-block"
                          src="images/logo.svg"
                          alt="Workflow"
                          />
                          <h2 className='uppercase inline-block font-semibold font-sans tracking-wider pl-2 align-middle text-lg pt-1'>jamdoor</h2>
                      </div>
                      <div className='hidden lg:block'>
                          <img
                          className=" h-5 w-auto inline-block"
                          src="images/logo.svg"
                          alt="Workflow"
                          />
                          <h2 className='uppercase inline-block font-semibold font-sans tracking-widest pl-2 align-middle text-lg pt-1'>jamdoor</h2>
                      </div>
                  </div>
                
                </div>
                
                <div className='lg:grid grid-cols-12  hidden text-xs items-center w-1/2 font-sans '>
                    <div className=' text-gray-500 col-span-10 border-gray-300 rounded-md overflow-hidden'>
                      <Formik
                        initialValues={{countrys:'choose country', masjedName:''}}
                        onSubmit={this.onSubmit}
                        validationSchema={Yup.object({
                          masjedName: Yup.string()
                          .max(25, 'Must be 15 characters or less')
                          .required('**Required'),
                          countrys: Yup.string()
                            .oneOf(
                              [...countries],
                              'Invalid country Name'
                            )
                            .required('*Required'),
                        })}
                      >
                        <Form className=' grid grid-cols-12 '>
                          <div className='border grid grid-cols-12 col-span-10 border-gray-300 rounded-md overflow-hidden'>
                            <svg xmlns="http://www.w3.org/2000/svg"  class="h-6 col-span-1 inline-block m-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                          
                            <Field name='masjedName' type='text' className=' h-10 col-span-7 text-xs font-sans border-r focus:outline-none ' placeholder='Search for masjed around you' />
                            
                            <Field name="countrys" as="select" className='inline-block col-span-4 max-w-full py-3'>
                            {
                              countries.map(country =>{
                                  if(country === 'choose the country'){
                                    return <option value='' key={countries.indexOf(country)}>{country}</option>
                                  } else {
                                    return <option value={country} key={countries.indexOf(country)}>{country}</option>
                                  }
                              })
                            }
                            </Field>
                          </div>
                          
                          <button type='submit' className="col-span-2 text-base bg-primary hover:bg-secondary hover:text-primary rounded-md ml-3 h-full py-1 px-3 text-white font-thin font-botton capitalize  focus:outline-none ">
                            <span className="sr-only">search</span>
                            search
                          </button>
                          <div className='text-red-500 text-xxs filter drop-shadow-xl -mt-1'>
                          <ErrorMessage name="masjedName"  />
                          </div>
                        </Form>
                      </Formik>
                    </div>
                </div>
                <div className=" absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button className="bg-secondary hover:bg-primary p-1 rounded-md md:py-3 py-2 md:px-4 px-2 text-primary font-thin font-botton capitalize hover:text-white focus:outline-none ">
                    <span className="sr-only">get start</span>
                    get started
                  </button>
                  <button className="bg-primary hover:bg-secondary hover:text-primary  rounded-md ml-3 md:py-3 py-2 md:px-3 px-2 text-white font-thin font-botton capitalize  focus:outline-none ">
                    <span className="sr-only">sign in</span>
                    sign in
                  </button>
                </div>
              </div>
              <div className='lg:hidden text-gray-500 text-xxs  flex pb-3 relative '>
                  
                  <svg xmlns="http://www.w3.org/2000/svg" id='show' onClick={this.showSearch} className='animate__animated animate__fadeInRight h-6 col-span-1 inline-block m-3 ml-0 text-gray-500'  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" id='hidden' onClick={this.hiddenSearch} className='animate__animated h-6 col-span-1  m-3 ml-0 text-gray-500 hidden'  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  
                  <div className='animate__animated animate__fadeInRight mr-2  items-center md:w-8/12 w-full  text-xxs font-sans hidden' id='search'>
                  <Formik
                    initialValues={{countrys:'choose country', masjedName:''}}
                    onSubmit={this.onSubmit}
                    validationSchema={Yup.object({
                      masjedName: Yup.string()
                      .max(25, 'Must be 15 characters or less')
                      .required('**Required'),
                      countrys: Yup.string()
                        .oneOf(
                          [...countries],
                          'Invalid country Name'
                        )
                        .required('*Required'),
                    })}
                  >
                    <Form className=' grid grid-cols-12 md:h-10 h-9 mt-2'>
                    <div className='border grid grid-cols-12 md:col-span-10 col-span-9 md:h-10 h-9 border-gray-300 md:text-sm text-xxs rounded-md overflow-hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 col-span-1 inline-block mx-1 mt-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <Field type='text' name='masjedName' className=' md:col-span-6 col-span-7 rounded-sm  font-sans border-r focus:outline-none ' placeholder='Search for masjed' />
                        <Field name="countrys" as="select" className='inline-block md:col-span-5 col-span-4 max-w-full'>
                          {
                            countries.map(country =>{
                                if(country === 'choose the country'){
                                  return <option value='' key={countries.indexOf(country)}>{country}</option>
                                } else {
                                  return <option value={country} key={countries.indexOf(country)}>{country}</option>
                                }
                            })
                          }
                        </Field>
                    </div>
                    <button type='submit' className="md:text-base text-sm md:col-span-2 col-span-3 bg-primary hover:bg-secondary hover:text-primary rounded-md ml-3 h-full py-1 md:px-2 text-white font-thin font-botton capitalize  focus:outline-none ">
                      <span className="sr-only">search</span>
                      search
                    </button>
                    <div className='text-red-500 text-xxs md:-mt-1'>
                    <ErrorMessage name="masjedName"  />
                    </div>
                    </Form>
                  </Formik>
                  </div>
              </div> 
              
            </div>
          </>
        )}
      </Disclosure>
    )
  }
  
}

export default Navbar;