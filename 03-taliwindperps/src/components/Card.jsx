import React from 'react'

// function Card(props) {
// function Card({UserName}){
function Card({UserName,btnText = "new things"}){
  //  console.log(props.UserName);
    // console.log(UserName);
  return (
    <>
      <div className="max-w-sm mx-auto bg-amber-100 rounded-xl shadow-lg overflow-hidden">
        <div className="relative">
          <img
            src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
            alt="Giphy"
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h1  className='text-white font-bold text-2xl'>{UserName}</h1>
            <h2 className="text-white font-bold text-xl">Available soon</h2>
          </div>
        </div>
        <div className="p-5">
          <p className="text-gray-600">This new feature will be coming to your dashboard in the near future. Stay tuned for updates!</p>
          <button className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition-colors duration-300">
           {/* {btnText || "new things"} !         */}
           {btnText} !        
             </button>
        </div>
    </div>
    </>
  )}
export default Card;
