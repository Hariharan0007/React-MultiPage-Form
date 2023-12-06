import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BsFillPersonFill } from 'react-icons/bs';
import { addForm1, updateSection } from '../features/multiForm/FormSlices.tsx';


const FormSection1 = () => {

  const dispatch = useDispatch();
  const nav = useNavigate();

  dispatch(updateSection("section-1"));

  const [fname,setFName] = useState<String>('');
  const [lname,setLName] = useState<String>('');
  const [age,setAge] = useState<Number>(0);
  const [contact,setContact] = useState<Number>(0);
  const [mail,setMail] = useState<String>('');

  const handleSubmit = () => {
    const form1 = {
      FirstName:fname,
      LastName:lname,
      Age:age,
      Contact:contact,
      Mail:mail
    };
    dispatch(addForm1(form1));
    nav('/section-2');
  }
  


  return (
    <div className="flex justify-center w-full mt-10">
      <section className="w-1/2 rounded-2xl border">
        <div className="bg-gray-200 font-bold flex rounded-2xl justify-center py-10">
          <p className="text-4xl">Form - Section 1 </p>
        </div>

        <div className="px-24 mt-10">

          <div className="flex">
            <div className="flex flex-col w-1/2 mr-3">
              <label className="text-xl font-semibold" htmlFor="firstName">First Name</label>
              <div className="border-2 h-9 pl-1 rounded-md focus:border-blue-500 mt-2 flex items-center">
                <span className=" text-gray-400 text-2xl"><BsFillPersonFill/></span>
                <input className="h-full w-full px-2 outline-none" name='firstName' required type="text" onChange={(e)=>setFName(e.target.value)} />
              </div>
            </div>
            <div className="flex flex-col w-1/2 ml-3">
              <label className="text-xl font-semibold"  htmlFor="lastName">Last Name</label>
              <div className="border-2 h-9 pl-1 rounded-md focus:border-blue-500 mt-2 flex items-center">
                <span className=" text-gray-400 text-2xl"><BsFillPersonFill/></span>
                <input className="outline-none h-full w-full px-2" name='lastName' required type="text" onChange={(e)=>setLName(e.target.value)} />
              </div>
            </div>
          </div>
          
          <div className="flex mt-2">
            <div className="flex flex-col w-1/2 mr-2">
              <label className="text-xl font-semibold"  htmlFor="age">Age</label>
              <div className="border-2 h-9 pl-1 rounded-md focus:border-blue-500 mt-2 flex items-center">
                <span className=" text-gray-400 text-2xl"><BsFillPersonFill/></span>
                <input className="outline-none h-full w-full px-2" name='age' required type="Number" min={0} max={100} onChange={(e)=>setAge(parseInt(e.target.value,10))} />
              </div>
            </div>
            <div className="flex flex-col w-1/2 ml-3">
              <label className="text-xl font-semibold"  htmlFor="contact">Contact</label>
              <div className="border-2 h-9 pl-1 rounded-md focus:border-blue-500 mt-2 flex items-center">
                <span className=" text-gray-400 text-2xl"><BsFillPersonFill/></span>
                <input className=" outline-none h-full w-full px-2" name='contact' required type="phone" onChange={(e)=>setContact(parseInt(e.target.value,10))} />
              </div>
            </div>
          </div>
          

          <div className="flex flex-col mt-2">
            <label className="text-xl font-semibold"  htmlFor="mail">Mail Id</label>
            <div className="border-2 h-9 pl-1 rounded-md focus:border-blue-500 mt-2 flex items-center">
              <span className=" text-gray-400 text-2xl"><BsFillPersonFill/></span>
              <input className="outline-none h-full w-full px-2" name='mail' required type="mail" onChange={(e)=>setMail(e.target.value)} />
            </div>
          </div>
          <div className="flex justify-center mt-5 pb-5">
            <button className="px-5 py-2 hover:bg-gray-400 rounded-full w-full bg-gray-200" onClick={handleSubmit}>
              Next
            </button>
          </div>

        </div>
        {/* BsFillPersonFill */}
      </section>
    </div>
  )
}

export default FormSection1