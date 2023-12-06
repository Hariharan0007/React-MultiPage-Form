import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addForm4,updateSection } from '../features/multiForm/FormSlices.tsx';
import { BsFillPersonFill } from 'react-icons/bs';

const FormSection4= () => {

  const nav = useNavigate();
  const dispatch = useDispatch();

  dispatch(updateSection("section-4"));

  const [hobbies,setHobbies] = useState<String>('');
  const [interest,setInterest] = useState<String>('');
  const [mostInterested,setMostInterested] = useState<String>('');
  const [personalAdd,setPersonalAdd] = useState<String>('');
  const [commAdd,setCommAdd] = useState<String>('');
  const [addContact,setAddContact] = useState<Number>(0);

  const handleSubmit = () => {
    const form4 = {
      Hobbies:hobbies,
      Interest:interest,
      MostInterested:mostInterested,
      PersonalAdd:personalAdd,
      CommAdd:commAdd,
      AdditionalContact:addContact
    }

    dispatch(addForm4(form4));
    nav('/final-preview');
  }


  return (
    <div className="flex justify-center w-full mt-10">
      <section className="w-1/2 rounded-2xl border">

        <div className="flex bg-gray-200 font-bold rounded-2xl justify-center py-10">
          <p className="text-4xl">Form - Section 4</p>
        </div>

        <div className="px-24 mt-10">
          <div className="flex flex-col">
            <label className="text-xl font-semibold" htmlFor="hobbies">Hobbies</label>
            <div className="border-2 h-9 pl-1 rounded-md focus:border-blue-500 mt-2 flex items-center">
              <span className=" text-gray-400 text-2xl"><BsFillPersonFill/></span>
              <input className="h-full w-full px-2 outline-none" name='hobbies' required type="text" onChange={(e)=>setHobbies(e.target.value)} />
            </div>
          </div>

          <div className="flex mt-2">
            <div className="flex flex-col w-1/2 mr-3">
              <label className="text-xl font-semibold" htmlFor="">Interest</label>
              <div className="border-2 h-9 pl-1 rounded-md focus:border-blue-500 mt-2 flex items-center">
                <span className=" text-gray-400 text-2xl"><BsFillPersonFill/></span>
                <input className="h-full w-full px-2 outline-none" name='' required type="text" onChange={(e)=>setInterest(e.target.value)} />
              </div>
            </div>
            <div className="flex flex-col w-1/2 ml-3">
              <label className="text-xl font-semibold" htmlFor="">Most Interested</label>
              <div className="border-2 h-9 pl-1 rounded-md focus:border-blue-500 mt-2 flex items-center">
                <span className=" text-gray-400 text-2xl"><BsFillPersonFill/></span>
                <input className="h-full w-full px-2 outline-none" name='' required type="text" onChange={(e)=>setMostInterested(e.target.value)} />
              </div>
            </div>
          </div>

          <div className="flex mt-2">
            <div className="flex flex-col w-1/2 mr-3">
              <label className="text-xl font-semibold" htmlFor="">Personal Address</label>
              <div className="border-2 h-9 pl-1 rounded-md focus:border-blue-500 mt-2 flex items-center">
                <span className=" text-gray-400 text-2xl"><BsFillPersonFill/></span>
                <input className="h-full w-full px-2 outline-none" name='' required type="text" onChange={(e)=>setPersonalAdd(e.target.value)} />
              </div>
            </div>
            <div className="flex flex-col w-1/2 ml-3">
              <label className="text-xl font-semibold" htmlFor="">Communication Address</label>
              <div className="border-2 h-9 pl-1 rounded-md focus:border-blue-500 mt-2 flex items-center">
                <span className=" text-gray-400 text-2xl"><BsFillPersonFill/></span>
                <input className="h-full w-full px-2 outline-none" name='' required type="text" onChange={(e)=>setCommAdd(e.target.value)} />
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-2">
            <label className="text-xl font-semibold" htmlFor="">Additional Contact</label>
            <div className="border-2 h-9 pl-1 rounded-md focus:border-blue-500 mt-2 flex items-center">
              <span className=" text-gray-400 text-2xl"><BsFillPersonFill/></span>
              <input className="h-full w-full px-2 outline-none" name='' required type="text" onChange={(e)=>setAddContact(parseInt(e.target.value,10))} />
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

export default FormSection4