import React from 'react'

const Form = ({labelName,type,name,placeholder,value,handleChange,handleSurprise,isSurprise}) => {
  return (
    <div>
      <div className='flex items-cnter gap-2 mb-2'>
         <label htmlFor={name} 
          className='block text-sm font-medium text-gray-900'>
            {labelName}
          </label>
          {isSurprise && (
            <button type="button" onClick={handleSurprise}
            className="font-semibold text-xs  bg-[#9899] py-1 px-2 rounded-[5px] text-black"
            >Surprise Me</button>
          )}
      </div>
      <input type={type} id={name} name={name} placeholder={placeholder}  value={value} 
      onChange={handleChange} 
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#20228a] 
      focus:border-[#9238be] outline-none block w-full p-3"
      />
    </div>
  )
}

export default Form