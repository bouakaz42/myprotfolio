import {motion ,AnimatePresence} from 'framer-motion'


export default function Layout({ children }) {
    return (
      <>
        
        <div className=" bg-gray-200 py-4  ">
           <AnimatePresence exitBeforeEnter>
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:2}}
            exit={{opacity:0}}
            className='container mx-auto py-4 px-8 h-[1200px] w-[650px] bg-white shadow-xl ring-1 ring-gray-900/5 relative'>

            
            {children}
            </motion.div>
            </AnimatePresence>

        </div>
      </>
    )
  }