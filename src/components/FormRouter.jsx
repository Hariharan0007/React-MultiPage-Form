import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import FormHeader from './FormHeader';
import FormNavBar from './FormNavBar';


// Importing Forms
import FormSection1 from './forms/FormSection1.tsx'
import FormSection2 from './forms/FormSection2.tsx'
import FormSection3 from './forms/FormSection3.tsx'
import FormSection4 from './forms/FormSection4.tsx'
import FormFinalPreview from './forms/FormFinalPreview.tsx';

const FormRouter = () => {
  return (
    <Router>
        <div className="h-1/3">
          <FormHeader/>
          <FormNavBar/>
        </div>
        <div className="flex h-2/3">
            <Routes>
                <Route path='/' element={<FormSection1/>}></Route>
                <Route path='/section-2' element={<FormSection2/>}/>
                <Route path='/section-3' element={<FormSection3/>}/>
                <Route path='/section-4' element={<FormSection4/>}/>
                <Route path='/final-preview' element={<FormFinalPreview/>}/>
            </Routes>
        </div>
    </Router>
    
  )
}

export default FormRouter