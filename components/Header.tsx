
import {motion} from 'framer-motion'
import Image from 'next/image';
import Link from 'next/link'
import Nadir from '../public/nadir.jpg'

const Header = () => {
    return (
        

                <div className="flex gap-8 m-2 mb-3">
                                
                                <motion.div 
                                animate={{
                                    rotate:[360,360,360],
                                    scale:[1,1],
                                }}
                                
                                className="conatiner w-20 h-20 p-1 mt-4 rounded-full relative ring-1 ring-offset-4 ring-neutral-600 hover:ring-offset-8 z-10 ring-offset-white  ">
                                {/* <h1 className='z-20 text-black text-xl font-bold ml-1 mt-2 fixed' >About   Me</h1> */}
                                
                                <Link href='/about_me' passHref>
                                    <Image layout='fill' alt='Bouakkaz Ahmed Amine Image' className="rounded-full hover:blur-sm z-30 hover:z-10" src={Nadir} />
                                </Link>  
                                </motion.div>
                                
                                <div className='font-semibold text-sm mt-2 text-gray-800'>  
                                <h1>Bouakkaz Ahmed Amine</h1>
                                <h2> Web Developer  </h2>
                                <h3> bouakaz42@gmail.com </h3>
                                <Link href='/contact_me'><button className='text-white mt-4 rounded-md shadow-md ring-1 w-24 h-8 bg-slate-700 hover:ring-offset-2 hover:bg-slate-500'>Hire Me</button></Link>
                                
                                </div>
                                <div className='font-semibold text-sm mt-1 space-y-1 text-gray-800 ml-40 border-2 p-2 rounded-md'>
                                    <h1 className='text-blue-800'>Facebook</h1>
                                    <h1>Discord</h1>
                                    <h1 className='text-gray-700'>Github</h1>
                                    <h1 className='text-blue-500'>Twitter</h1>
                                
                                </div>
                                </div>
    );
}


export default Header;
