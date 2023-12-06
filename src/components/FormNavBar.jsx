import React from 'react';
import { useSelector } from 'react-redux';

const FormNavBar = () => {

  const section = useSelector((store)=>store.formeasy.section);

  return (
    <div>
      <section className="w-full bg-gray-300 p-2">
        <button className="rounded-full bg-gray-400 px-3 py-2 hover:bg-gray-600 hover:text-white  ">New Form</button>
        <button className="rounded-full bg-gray-400 px-3 py-2 hover:bg-gray-600 hover:text-white ml-3 ">View Form</button>
      </section>
      <section className="flex justify-evenly items-center text-xl bg-gray-400">
        <p className={section==='section-1'?"hover:cursor-pointer hover:font-semibold delay-100 bg-black text-white font-bold w-full h-full flex justify-center border border-white":"hover:cursor-pointer hover:font-semibold delay-100 w-full h-full flex justify-center border border-white"} >section 1</p>
        <p className={section==='section-2'?"hover:cursor-pointer hover:font-semibold delay-100 bg-black text-white font-bold w-full h-full flex justify-center border border-white":"hover:cursor-pointer hover:font-semibold delay-100 w-full h-full flex justify-center border border-white"}>section 2</p>
        <p className={section==='section-3'?"hover:cursor-pointer hover:font-semibold delay-100 bg-black text-white font-bold w-full h-full flex justify-center border border-white":"hover:cursor-pointer hover:font-semibold delay-100 w-full h-full flex justify-center border border-white"}>section 3</p>
        <p className={section==='section-4'?"hover:cursor-pointer hover:font-semibold delay-100 bg-black text-white font-bold w-full h-full flex justify-center border border-white":"hover:cursor-pointer hover:font-semibold delay-100 w-full h-full flex justify-center border border-white"}>section 4</p>
        <p className={section==='final-preview'?"hover:cursor-pointer hover:font-semibold delay-100 bg-black text-white font-bold w-full h-full flex justify-center border border-white":"hover:cursor-pointer hover:font-semibold delay-100 w-full h-full flex justify-center border border-white"}>final preview</p>
      </section>
    </div>
  )
}

export default FormNavBar