 import React,{useState} from 'react';
 import {tabCasino} from '../../data/data'
 

 function Page() {
  const [activeTab, setActiveTab] = useState(0);




   return (
  <div
    style={{
      boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
    }}
    className='bg-gray-200 dark:bg-custom-bg-color rounded-lg my-3 p-4'
  >
     <div className=" ">
                    {/* Tab Headers */}
                    <div className="flex justify-left space-x-1  text-white">
                        {tabCasino.map((tab, index) => (
                            <button
                                key={index}
                                className={` py-2 bg-gradient-to-r from-[#0b0b0b] via-[#0d0d0d] to-[#0c0c0c] shadow-2xl rounded-lg  w-20 text-[13px] text-center   ${index === 0 ? " " : "border-2 border-custom-background-color"}  font-montserrat font-[600] ${activeTab === index ? 'border  border-custom-text-type' : ''}`}
                                onClick={() => setActiveTab(index)}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </div>
                    {/* Tab Content */}
                    <div className="grid grid-cols-4 gap-2  py-2 mt-4">
                    {/* <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4"> */}
  {tabCasino[activeTab].content.map((item) => (
    <div className="col-span-1" key={item.id}>
        <div className="h-32   ">
          <img
            src={item.image}
            alt="Hover Image"
            className="w-full rounded-lg h-full  object-cover "
          />
          
        </div>
        <p>ajsdhsajkhd</p>
        <p>ajsdhsajkhd</p>
    </div>
  ))}
{/* </div> */}

</div>

                </div>
  </div>
   )
 }

 export default Page
