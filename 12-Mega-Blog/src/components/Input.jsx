import React from 'react'
 import { useId } from 'react'

// function Input({
    
// }) {
//     const id = useId()
//   return (
//     <div id={id} className="input-component">
//       Input
//     </div>
//   )
// }
   const Input = React.forwardRef(function Input({
    label,
    type = 'text',
    className = '',
    ...props 
   }, ref)
   {
    const id = useId();
return (
  <div className="w-full transition-all duration-300 ease-in-out animate-fadeIn">
     {label && (
        <label
          className="inline-block mb-1 pl-1 text-gray-700 font-medium transition-colors duration-300"
          htmlFor={id}
        >
          {label}
        </label>
     )}
     <input
        
        type={type}
        className={`block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${className}`}
        ref={ref}
        id={id}
        {...props}
     />
  </div>
)
})
export default Input;
