const ModalWrapper = ({ children }) => {
  return (
    <div className="h-screen absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center transparent-background ">
      { children }
    </div>
  )
}

export default ModalWrapper
