import React from 'react';
import type { RootState } from '../app/Store.js';
import { useSelector,useDispatch } from 'react-redux';
import { addFinalForm,updateSection } from '../features/multiForm/FormSlices.tsx';


const FormFinalPreview = () => {

  const dispatch = useDispatch();

  dispatch(updateSection("final-preview"));

  const form1 = useSelector((store:RootState)=>store.formeasy.form1).formList1;
  const form2 = useSelector((store:RootState)=>store.formeasy.form2).formList2;
  const form3 = useSelector((store:RootState)=>store.formeasy.form3).formList3;
  const form4 = useSelector((store:RootState)=>store.formeasy.form4).formList4;

  console.log(form1,form2,form3,form4);

  
  

  return (
    <div>
            <section>
              <div>
                <p>First Name</p>
                <p>{form1?.FirstName}</p>
              </div>
              <div>
                <p>Last Name</p>
                <p>{form1?.LastName}</p>
              </div>
              <div>
                <p>Age</p>
                <p>{form1?.Age}</p>
              </div>
              <div>
                <p>Contact</p>
                <p>{form1?.Contact}</p>
              </div>
              <div>
                <p>Mail Id</p>
                <p>{form1?.Mail}</p>
              </div>
            </section>
      
    

        <section>
          <div>
            <p>College Name</p>
            <p>{form2?.ClgName}</p>
          </div>
          <div>
            <p>CGPA</p>
            <p>{form2?.CGPA}</p>
          </div>
          <div>
            <p>HSC School Name</p>
            <p>{form2?.SSLCSclName}</p>
          </div>
          <div>
            <p>HSC Mark</p>
            <p>{form2?.HSCMark}</p>
          </div>
          <div>
            <p>SSLC School Name</p>
            <p>{form2?.SSLCSclName}</p>
          </div>
          <div>
            <p>SSLC Mark</p>
            <p>{form2?.SSLCMark}</p>
          </div>
        </section>


        <section>
          <div>
            <p >Job Title</p>
            <p>{form3?.JobTitle}</p>
          </div>
          <div>
            <p>Employee ID</p>
            <p>{form3?.EmpId}</p>
          </div>
          <div>
            <p>Salary</p>
            <p>{form3?.EmpSalary}</p>
          </div>
          <div>
            <p>Experience</p>
            <p>{form3?.Experience}</p>
          </div>
          <div>
            <p>Company Name</p>
            <p>{form3?.CompanyName}</p>
          </div>
          <div>
            <p>Company Location</p>
            <p>{form3?.CompanyLocation}</p>
          </div>

        </section>

        <section>
          <div>
            <p>Hobbies</p>
            <p>{form4?.Hobbies}</p>
          </div>
          <div>
            <p >Interest</p>
            <p>{form4?.Interest}</p>
          </div>
          <div>
            <p>Most Interested</p>
            <p>{form4?.MostInterested}</p>
          </div>
          <div>
            <p>Personal Address</p>
            <p>{form4?.PersonalAdd}</p>
          </div>
          <div>
            <p>Communication Address</p>
            <p>{form4?.CommAdd}</p>
          </div>
          <div>
            <p>Additional Contact</p>
            <p>{form4?.AdditionalContact}</p>
          </div>
      </section>

        <div>
          <button className="p-5 bg-gray-500" onClick={()=>dispatch(addFinalForm())}>Submit</button>
        </div>


    </div>
  )
}

export default FormFinalPreview