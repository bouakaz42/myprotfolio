


export default function Layout({ children }) {
    return (
      <>
        
        <div className=" bg-gray-200 py-4  ">
            <div className='container mx-auto py-4 px-8 h-[1200px] w-[650px] bg-white shadow-xl ring-1 ring-gray-900/5 relative'>

            
            {children}
            </div>
        </div>
      </>
    )
  }