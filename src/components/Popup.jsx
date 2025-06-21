const Popup = () => {
  return (
    <div className="bg-indigo-600 text-white rounded-lg quicksand p-4">
        <h1 className="text-5xl">Subscribe to our newsletter</h1>
        <input type="text" style={{width:"84%"}}className="border-white border-2 rounded-sm text-2xl mt-4 outline-none placeholder:text-white p-2" placeholder="Your E-mail..."/>
        <button className="bg-white text-gray-800 cursor-pointer p-2 pl-4 pr-4 text-xl m-1 ml-2 rounded-3xl">Send</button>
    </div>
  )
}

export default Popup
