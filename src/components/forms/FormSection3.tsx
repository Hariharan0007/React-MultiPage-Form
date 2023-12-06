import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addForm3,updateSection } from '../features/multiForm/FormSlices.tsx';
import { BsFillPersonFill } from 'react-icons/bs';

const FormSection3 = () => {

  const nav = useNavigate();
  const dispatch = useDispatch();

  dispatch(updateSection("section-3"));

  const [jobTitle,setJobTitle] = useState<String>('');
  const [empId,setEmpId] = useState<Number>(0);
  const [empSalary,setEmpSalary] = useState<Number>(0);
  const [exp,setExp] = useState<Number>(0);
  const [companyName,setCompanyName] = useState<String>('');
  const [companyLoc,setCompanyLoc] = useState<String>('');

  const handleSubmit = () =>{
    const form3 = {
      JobTitle:jobTitle,
      EmpId:empId,
      EmpSalary:empSalary,
      Experience:exp,
      CompanyName:companyName,
      CompanyLocation:companyLoc
    }
    dispatch(addForm3(form3));
    nav('/section-4');
  }


  return (
    <div className="flex justify-center w-full mt-10">
      <section className="w-1/2 rounded-2xl border">
        <div className="bg-gray-200 font-bold flex rounded-2xl justify-center py-10">
          <p className="text-4xl">Form - Section 3</p>
        </div>

        <div className="px-24 mt-10">

          <div className="flex">
            <div className="flex flex-col w-1/2 mr-3">
              <label className="text-xl font-semibold" htmlFor="job-title">Job Title</label>
              <div className="border-2 h-9 pl-1 rounded-md focus:border-blue-500 mt-2 flex items-center">
                <span className=" text-gray-400 text-2xl"><BsFillPersonFill/></span>
                <input className="px-2 h-full w-full outline-none" name='job-title' required type="text" onChange={(e)=>setJobTitle(e.target.value)} />
              </div>
            </div>
            <div className="flex flex-col w-1/2 ml-3">
              <label className="text-xl font-semibold" htmlFor="emp-id">Employee ID</label>
              <div className="border-2 h-9 pl-1 rounded-md focus:border-blue-500 mt-2 flex items-center">
                <span className=" text-gray-400 text-2xl"><BsFillPersonFill/></span>
                <input className="px-2 h-full w-full outline-none" name='emp-id' required type="number" onChange={(e)=>setEmpId(parseInt(e.target.value,10))} />
              </div>
            </div>
          </div>
          
          <div className="flex mt-2">
            <div className="flex flex-col w-1/2 mr-3">
              <label className="text-xl font-semibold" htmlFor="emp-sal">Salary</label>
              <div className="border-2 h-9 pl-1 rounded-md focus:border-blue-500 mt-2 flex items-center">
                <span className=" text-gray-400 text-2xl"><BsFillPersonFill/></span>
                <input className="px-2 h-full w-full outline-none" name='emp-sal' required type="number" onChange={(e)=>setEmpSalary(parseInt(e.target.value,10))} />
              </div>
            </div>
            <div className="flex flex-col w-1/2 ml-3">
              <label className="text-xl font-semibold" htmlFor="exp">Experience</label>
              <div className="border-2 h-9 pl-1 rounded-md focus:border-blue-500 mt-2 flex items-center">
                <span className=" text-gray-400 text-2xl"><BsFillPersonFill/></span>
                <input className="px-2 h-full w-full outline-none" name='exp' required type="number" onChange={(e)=>setExp(parseInt(e.target.value,10))} />
              </div>
            </div>
          </div>
          
          <div className="flex mt-2">
            <div className="flex flex-col w-1/2 mr-3">
              <label className="text-xl font-semibold" htmlFor="cmp-name">Company Name</label>
              <div className="border-2 h-9 pl-1 rounded-md focus:border-blue-500 mt-2 flex items-center">
                <span className=" text-gray-400 text-2xl"><BsFillPersonFill/></span>
                <input className="px-2 h-full w-full outline-none" name='cmp-name' required type="text" onChange={(e)=>setCompanyName(e.target.value)} />
              </div>
            </div>
            <div className="flex flex-col w-1/2 ml-3">
              <label className="text-xl font-semibold" htmlFor="cmp-loc">Company Location</label>
              <div className="border-2 h-9 pl-1 rounded-md focus:border-blue-500 mt-2 flex items-center">
                <span className=" text-gray-400 text-2xl"><BsFillPersonFill/></span>
                <input className="px-2 h-full w-full outline-none" name='' required type="text" onChange={(e)=>setCompanyLoc(e.target.value)} />
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

export default FormSection3