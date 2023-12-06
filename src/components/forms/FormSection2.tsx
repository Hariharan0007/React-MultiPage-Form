import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addForm2,updateSection } from '../features/multiForm/FormSlices.tsx';
import { BsFillPersonFill } from 'react-icons/bs';

const FormSection2 = () => {

  const dispatch = useDispatch();
  const nav = useNavigate();

  dispatch(updateSection("section-2"));

  const [clgName,setClgName] = useState<String>('');
  const [cgpa,setCGPA] = useState<Number>(0);
  const [hscScl,setHscScl] = useState<String>('');
  const [hscMark,SetHscMark] = useState<Number>(0);
  const [sslcScl,setSslcScl] = useState<String>('');
  const [sslcMark,setSslcMark] = useState<Number>(0);


  const handleSubmit = () =>{
    const form2 = {
      ClgName:clgName,
      CGPA:cgpa,
      HSCSclName:hscScl,
      HSCMark:hscMark,
      SSLCSclName:sslcScl,
      SSLCMark:sslcMark
    }
    dispatch(addForm2(form2));
    nav('/section-3');
  }



  return (
    <div className="flex justify-center w-full mt-10">
      <section className="w-1/2 rounded-2xl border">
        <div className="bg-gray-200 font-bold flex rounded-2xl justify-center py-10">
          <p className="text-4xl">Form - Section 2</p>
        </div>

        <div className="px-24 mt-10">
          <div className="flex">
            <div className="flex flex-col w-1/2 mr-3">
              <label className="text-xl font-semibold" htmlFor="clgName">College Name</label>
              <div className="border-2 h-9 pl-1 rounded-md focus:border-blue-500 mt-2 flex items-center">
                <span className=" text-gray-400 text-2xl"><BsFillPersonFill/></span>
                <input className="outline-none h-full w-full px-2" name='clgName' required type="text" onChange={(e)=>setClgName(e.target.value)} />
              </div>
            </div>
            <div className="flex flex-col w-1/2 ml-3">
              <label className="text-xl font-semibold" htmlFor="cgpa">CGPA</label>
              <div className="border-2 h-9 pl-1 rounded-md focus:border-blue-500 mt-2 flex items-center">
                <span className=" text-gray-400 text-2xl"><BsFillPersonFill/></span>
                <input className="outline-none h-full w-full px-2" name='cgpa' required max={10} min={0} type="number" onChange={(e)=>setCGPA(parseInt(e.target.value,10))} />
              </div>
            </div>
          </div>
          
          <div className="flex mt-2">
            <div className="flex flex-col w-1/2 mr-3">
              <label className="text-xl font-semibold" htmlFor="hscScl">HSC School Name</label>
              <div className="border-2 h-9 pl-1 rounded-md focus:border-blue-500 mt-2 flex items-center">
                <span className=" text-gray-400 text-2xl"><BsFillPersonFill/></span>
                <input className="outline-none h-full w-full px-2" name='hscScl' required type="text" onChange={(e)=>setHscScl(e.target.value)} />
              </div>
            </div>
            <div className="flex flex-col w-1/2 ml-3">
              <label className="text-xl font-semibold" htmlFor="hscMark">HSC Mark</label>
              <div className="border-2 h-9 pl-1 rounded-md focus:border-blue-500 mt-2 flex items-center">
                <span className=" text-gray-400 text-2xl"><BsFillPersonFill/></span>
                <input className="outline-none h-full w-full px-2" name='hscMark' required type="number" onChange={(e)=>SetHscMark(parseInt(e.target.value,10))} />
              </div>
            </div>
          </div>
          
          <div className="flex mt-2">
            <div className="flex flex-col w-1/2 mr-3">
              <label className="text-xl font-semibold" htmlFor="sslcSclName">SSLC School Name</label>
              <div className="border-2 h-9 pl-1 rounded-md focus:border-blue-500 mt-2 flex items-center">
                <span className=" text-gray-400 text-2xl"><BsFillPersonFill/></span>
                <input className="outline-none h-full w-full px-2" name='sslcSclName' required type="text" onChange={(e)=>setSslcScl(e.target.value)} />
              </div>
            </div>
            <div className="flex flex-col w-1/2 ml-3">
              <label className="text-xl font-semibold" htmlFor="sslcMark">SSLC Mark</label>
              <div className="border-2 h-9 pl-1 rounded-md focus:border-blue-500 mt-2 flex items-center">
                <span className=" text-gray-400 text-2xl"><BsFillPersonFill/></span>
                <input className="outline-none h-full w-full px-2" name='sslcMark' required type="number" onChange={(e)=>setSslcMark(parseInt(e.target.value))} />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-5 pb-5">
            <button className="px-5 py-2 hover:bg-gray-400 rounded-full w-full bg-gray-200" onClick={handleSubmit}>
                Next
            </button>
          </div>
         



        </div>
      </section>
    </div>
  )
}

export default FormSection2