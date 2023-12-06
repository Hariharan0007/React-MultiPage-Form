import React from 'react'

const FormHeader = () => {
  return (
    <div>
      <header className="flex justify-center items-center">
        <div>
          <p className="text-9xl font-bold">Form - <span className="italic">Easy</span></p>
          <div className="flex w-full mt-3 italic">
            <span className="flex justify-start w-1/2">Easy to access</span>
            <span className="flex justify-end w-1/2">Easy way to manage all your forms</span>
          </div>
        </div>
      </header>
    </div>
  )
}

export default FormHeader