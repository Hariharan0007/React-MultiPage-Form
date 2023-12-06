import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface form1Type{
    FirstName:String,
    LastName:String,
    Age:Number,
    Contact:Number,
    Mail:String
}

export interface form2Type{
    ClgName:String,
    CGPA:Number,
    HSCSclName:String,
    HSCMark:Number,
    SSLCSclName:String,
    SSLCMark:Number
}

export interface form3Type{
    JobTitle:String,
    EmpId:Number,
    EmpSalary:Number,
    Experience:Number,
    CompanyName:String,
    CompanyLocation:String
}

export interface form4Type{
    Hobbies:String,
    Interest:String,
    MostInterested:String,
    PersonalAdd:String,
    CommAdd:String,
    AdditionalContact:Number
}

export interface FormType1{
    formList1:form1Type | null;
}

export interface FormType2{
    formList2:form2Type | null;
}

export interface FormType3{
    formList3:form3Type | null;
}

export interface FormType4{
    formList4:form4Type | null;
}


interface FormState {
    form1: FormType1;
    form2: FormType2;
    form3: FormType3;
    form4: FormType4;
    finalList: ( FormType1 | FormType2 | FormType3 | FormType4 )[][];
    section:String;
}

const initialFormType1: FormType1 = {
    formList1: null
};

const initialFormType2: FormType2 = {
    formList2: null
};

const initialFormType3: FormType3 = {
    formList3: null
};

const initialFormType4: FormType4 = {
    formList4: null
};



const initialState : FormState ={
    form1: initialFormType1,
    form2: initialFormType2,
    form3: initialFormType3,
    form4: initialFormType4,
    finalList: [],
    section:"section-1"
}

export const FormSlices = createSlice({
    name:'FormEasy',
    initialState,
    reducers:{
        addForm1:(state,action:PayloadAction<form1Type>)=>{
            console.log(action.payload);
            state.form1.formList1 = action.payload
        },
        addForm2:(state,action:PayloadAction<form2Type>)=>{
            console.log(action.payload);
            state.form2.formList2 = action.payload
        },
        addForm3:(state,action:PayloadAction<form3Type>)=>{
            console.log(action.payload);
            state.form3.formList3 = action.payload
        },
        addForm4:(state,action:PayloadAction<form4Type>)=>{
            console.log(action.payload);
            state.form4.formList4 = action.payload
        },
        addFinalForm:(state)=>{
            state.finalList = [...state.finalList,[state.form1,state.form2,state.form3,state.form4]]
            console.log(state.finalList);
        },
        updateSection:(state,action:PayloadAction<String>)=>{
            state.section = action.payload
        }
    }
})

export const { addForm1, addForm2, addForm3, addForm4, addFinalForm, updateSection} = FormSlices.actions;

export default FormSlices.reducer;