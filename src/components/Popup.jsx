const Popup = () => {
  return (
    <div className="bg-indigo-600 text-white rounded-lg quicksand p-4">
        <h1 className="xl:text-5xl text-3xl">Subscribe to our newsletter</h1>
        <input type="text" style={{width:"75%"}}className="border-white border-2 rounded-sm xl:text-2xl mt-4 outline-none placeholder:text-white p-2 text-lg" placeholder="Your E-mail..."/>
        <button className="bg-white text-gray-800 cursor-pointer p-2 pl-4 pr-4 xl:text-xl m-1 ml-2 rounded-3xl text-lg">Send</button>
    </div>
  )
}

export default Popup
