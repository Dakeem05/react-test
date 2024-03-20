import { useState } from 'react'
import {BxReceipt} from './Icons/Receipt.jsx'
import {Dollar} from './Icons/Dollar.jsx'
import {Home} from './Icons/Home.jsx'
import {Location} from './Icons/Location.jsx'
import {Zoom} from './Icons/Zoom.jsx'
import {Bath} from './Icons/Bath.jsx'
import {Room} from './Icons/Room.jsx'
import MyDoughnutChart from './Charts/Doughnut.jsx'
import face from './assets/Images/face.jpg'
import house from './assets/Images/house.webp'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='bg-[#fefefe] text-start py-[1rem] px-[1rem] md:px-[2rem] absolute top-0 left-0 right-0 bottom-0'>
        <h1 className='font-bold text-4xl'>Overview</h1>

        <section className='flex lg:flex-row flex-col my-[2rem] gap-[2rem]'>
          <div className='lg:w-[50%] relative bg-white border-[2px] border-solid border-[#ebebeb] rounded-md p-[1rem]'>
            <h1 className='font-semibold text-2xl'>Property management</h1>
            <div className='text-[#5C63BF] lg:absolute left-0 right-0 lg:mx-[1rem] lg:top-[50%] lg:-translate-y-[50%] flex sm:flex-row flex-col gap-[1rem] justify-between items-center my-[2rem] lg:my-auto'>
              <span className='bg-[#F4F4FE] sm:w-fit w-full p-[1rem] text-center '>
                <p className='w-fit mx-auto text-2xl'><BxReceipt/> </p>
                <h1 className='text-black font-medium text-xl mt-2'>Issue receipt</h1>
              </span>
              <span className='bg-[#F4F4FE] sm:w-fit w-full p-[1rem] text-center '>
                <p className='w-fit mx-auto text-2xl'><Dollar/> </p>
                <h1 className='text-black font-medium text-xl mt-2'>Utility bill</h1>
              </span>
              <span className='bg-[#F4F4FE] sm:w-fit w-full p-[1rem] text-center '>
                <p className='w-fit mx-auto text-2xl'><Home/> </p>
                <h1 className='text-black font-medium text-xl mt-2'>Verify tenant</h1>
              </span>
            </div>
          </div>

          <div className='lg:w-[50%] bg-white border-[2px] border-solid border-[#ebebeb] rounded-md p-[1rem]'>

            <span className='flex '>
              <h1 className='font-semibold text-2xl'>Properties</h1>
              <h1 className='font-semibold text-[#6D71D6] pt-1 ml-auto text-xl'>View properties</h1>
            </span>
            
            <div className='text-black h-[20rem] mx-auto w-fit'>
              <MyDoughnutChart/>
            </div>
            {/* <div className='text-[#5C63BF] flex justify-between items-center my-[1rem]'>
              <span className='bg-[#F4F4FE] p-[1rem] text-center '>
                <p className='w-fit mx-auto text-2xl'><BxReceipt/> </p>
                <h1 className='text-black font-medium text-xl mt-2'>Issue receipt</h1>
              </span>
              <span className='bg-[#F4F4FE] p-[1rem] text-center '>
                <p className='w-fit mx-auto text-2xl'><Dollar/> </p>
                <h1 className='text-black font-medium text-xl mt-2'>Utility bill</h1>
              </span>
              <span className='bg-[#F4F4FE] p-[1rem] text-center '>
                <p className='w-fit mx-auto text-2xl'><Home/> </p>
                <h1 className='text-black font-medium text-xl mt-2'>Verify tenant</h1>
              </span>
            </div> */}
          </div>
        </section>

        <section className='bg-white border-[2px] border-solid border-[#ebebeb] rounded-md p-[2rem]'>
            <div className='flex '>
              <span>
                <h1 className='font-bold text-2xl'>Tenants</h1>
                <h1 className='font-medium text-xl mt-3'>List your tenants</h1>
              </span>
              <span className='ml-auto'>
                <select name="list" id="list" className='border-[2px] border-solid border-[#D2D2D2] rounded-md px-[0.5rem] py-[1rem] w-[10rem] focus:outline-0'>
                  <option value="Olu Enterprises" className='focus:bg-slate-300 p-[1rem]'>Olu Enterprises</option>
                  <option value="Olu Enterprises" className='focus:bg-slate-300'>Elsa Enterprises</option>
                </select>
              </span>
            </div>

            <div className="relative overflow-x-auto mt-[3rem]">
                <table className="w-full text-sm text-left rtl:text-right">
                    <thead className="text-xl text-[#888888] ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date created
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Phone number
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <th scope="row" className="px-6 py-4 font-medium flex ">
                                <div className='w-[2.5rem] h-[2.5rem] rounded-full object-cover '><img className='w-[2.5rem] h-[2.5rem] rounded-full object-cover top' src={face}/></div>
                                <h3 className='text-lg pt-1 text-[#4C4C4C] ml-5 font-medium'>Nkechi Ogbonna</h3>
                            </th>
                            <td className="px-6 py-4">
                              <h3 className='text-lg text-[#4C4C4C] font-medium'>22/04/2022</h3>
                            </td>
                            <td className="px-6 py-4">
                              <h3 className='text-lg text-[#4C4C4C] font-medium'>nkechiogbonna@gmail.com</h3>
                            </td>
                            <td className="px-6 py-4">
                              <h3 className='text-lg text-[#4C4C4C] font-medium'>0816787456</h3>
                            </td>
                        </tr>
                        <tr className="bg-white">
                            <th scope="row" className="px-6 py-4 font-medium flex ">
                                <div className='w-[2.5rem] h-[2.5rem] rounded-full object-cover '><img className='w-[2.5rem] h-[2.5rem] rounded-full object-cover top' src={face}/></div>
                                <h3 className='text-lg pt-1 text-[#4C4C4C] ml-5 font-medium'>Nkechi Ogbonna</h3>
                            </th>
                            <td className="px-6 py-4">
                              <h3 className='text-lg text-[#4C4C4C] font-medium'>22/04/2022</h3>
                            </td>
                            <td className="px-6 py-4">
                              <h3 className='text-lg text-[#4C4C4C] font-medium'>nkechiogbonna@gmail.com</h3>
                            </td>
                            <td className="px-6 py-4">
                              <h3 className='text-lg text-[#4C4C4C] font-medium'>0816787456</h3>
                            </td>
                        </tr>
                        <tr className="bg-white">
                            <th scope="row" className="px-6 py-4 font-medium flex ">
                                <div className='w-[2.5rem] h-[2.5rem] rounded-full object-cover '><img className='w-[2.5rem] h-[2.5rem] rounded-full object-cover top' src={face}/></div>
                                <h3 className='text-lg pt-1 text-[#4C4C4C] ml-5 font-medium'>Nkechi Ogbonna</h3>
                            </th>
                            <td className="px-6 py-4">
                              <h3 className='text-lg text-[#4C4C4C] font-medium'>22/04/2022</h3>
                            </td>
                            <td className="px-6 py-4">
                              <h3 className='text-lg text-[#4C4C4C] font-medium'>nkechiogbonna@gmail.com</h3>
                            </td>
                            <td className="px-6 py-4">
                              <h3 className='text-lg text-[#4C4C4C] font-medium'>0816787456</h3>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

          </section>

        <section className='bg-white border-[2px] shadow-2xl mt-[2rem] border-solid border-[#ebebeb] rounded-md p-[2rem]'>
            <div className=''>
                <h1 className='font-bold text-2xl'>My units</h1>
            </div>

            <div className='flex lg:flex-row flex-col  gap-[2rem] my-[1rem]'>
              <div className='lg:w-[33.33%] p-3 border-2 rounded-lg border-solid border-[#ebebeb]'>
                <picture className='h-[10rem] relative'>
                  <img className='object-cover h-[10rem] w-full rounded-lg' src={house} alt="House" />
                </picture>
                <h1 className='text-[#3641F0] text-xl font-bold mt-[1rem]'>N350,000</h1>
                <h1 className='text-xl text-[#6A6A6A] my-[0.6rem] font-bold'>Green house Estate</h1>
                <span className='flex gap-[0.5rem]'>
                  <p className='text-3xl text-[#3641F0]'><Location/></p>
                  <h1 className='text-xl text-[#6A6A6A] font-bold'>Abakpa Enugu</h1>
                </span>
                <div className='flex min-[428px]:flex-row flex-col justify-between min-[428px]:items-center min-[428px]:gap-[0.5rem]'>
                  <span className='flex gap-[0.5rem] my-[1rem]'>
                    <p className='text-[#3641F0] text-xl'><Zoom/></p>
                    <p className='text-sm text-[#333333] font-bold'>334m</p>
                  </span>
                  <span className='flex gap-[0.5rem] my-[1rem]'>
                    <p className='text-[#3641F0] text-xl'><Bath/></p>
                    <p className='text-sm text-[#333333] font-bold'>4 bathrooms</p>
                  </span>
                  <span className='flex gap-[0.5rem] my-[1rem]'>
                    <p className='text-[#3641F0] text-xl'><Room/></p>
                    <p className='text-sm text-[#333333] font-bold'>4 Bedrooms</p>
                  </span>
                </div>
              </div>
              <div className='lg:w-[33.33%] p-3 border-2 rounded-lg border-solid border-[#ebebeb]'>
                <picture className='h-[10rem] relative'>
                  <img className='object-cover h-[10rem] w-full rounded-lg' src={house} alt="House" />
                </picture>
                <h1 className='text-[#3641F0] text-xl font-bold mt-[1rem]'>N350,000</h1>
                <h1 className='text-xl text-[#6A6A6A] my-[0.6rem] font-bold'>Green house Estate</h1>
                <span className='flex gap-[0.5rem]'>
                  <p className='text-3xl text-[#3641F0]'><Location/></p>
                  <h1 className='text-xl text-[#6A6A6A] font-bold'>Abakpa Enugu</h1>
                </span>
                <div className='flex min-[428px]:flex-row flex-col justify-between min-[428px]:items-center min-[428px]:gap-[0.5rem]'>
                  <span className='flex gap-[0.5rem] my-[1rem]'>
                    <p className='text-[#3641F0] text-xl'><Zoom/></p>
                    <p className='text-sm text-[#333333] font-bold'>334m</p>
                  </span>
                  <span className='flex gap-[0.5rem] my-[1rem]'>
                    <p className='text-[#3641F0] text-xl'><Bath/></p>
                    <p className='text-sm text-[#333333] font-bold'>4 bathrooms</p>
                  </span>
                  <span className='flex gap-[0.5rem] my-[1rem]'>
                    <p className='text-[#3641F0] text-xl'><Room/></p>
                    <p className='text-sm text-[#333333] font-bold'>4 Bedrooms</p>
                  </span>
                </div>
              </div>
            </div>

          </section>
      </main>
      
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
