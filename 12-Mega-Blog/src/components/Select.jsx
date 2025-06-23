import React, { useId } from 'react'

const Select = React.forwardRef(function Select(
    { options, label, className, ...props }, // mostly className ke ander empty string pass karte hai kuki empty string se bi koy differnce nahi ayega.
    ref) {
        const id = useId();
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className='block mb-2 text-sm font-medium text-gray-700'>{label}</label>}
        <select
        id={id}
        ref={ref}
        className={`block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${className || ''}`}
        {...props}
        >
       {options.map((option) => {                       // options is an array of objects with value and label properties. 
        <option key={option} value={option}>     // their always be unique value and array of objects value can accept it.
          {option.label}                                 // MIMP NOTE :- option inside the value was not it so that conditional statement was to check it. 
          </option>                                       // value ko loop karoge to paaka crash hoga so that use the optionaly loop ? or if and else statement
 // if and else solution was the length of the array is zero then it will not render it. syntax option.options && options.length > 0 ? 
//  if (option.options && options.length > 0) {
//    return  true
// } else {
//    return false
// }

       })}                                                  
        </select>
    </div>
  );
});

export default React.forwardRef(Select)
// MIMP NOTE :- useId is used to generate a unique id for the select element and label element. This is useful for accessibility purposes.
// MIMP NOTE :- React.forwardRef is used to forward the ref to the select element. This is useful for accessing the select element in the parent component.