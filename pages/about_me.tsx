import Link from 'next/link'
import Head from 'next/head'
import {motion} from 'framer-motion'
function about_me() {
    return (
        <>
        <Head>


        </Head>

        <motion.div
        initial={{opacity:'0'}}
        animate={{opacity:'1'}}
        transition={{duration:'3'}}
        exit={{opacity:0}}
        >
   
        <Link href='/'> Back </Link>

        <div className='mt-72'>
            <h1 className='text-green-500 text-3xl'>Who I am ?</h1>
            <p className=" mt-8" >  My Name Is Ahmed Amine My family Name Is Bouakaz I live In Algeria Im 21 And I really Love Technologies .</p>
            <p className="font-medium mt-8">  Im a Web Developer Who Like To Learn And Try New Web Frameworks , Languages , Also idees .</p>
            <p className="font-semibold mt-8"> Technologies That I can Handle For you :</p>
            {/* <p className="font-bold mt-2">  , , (vanilla/ES6!=ES9)  ,  ,  ,  ,  ,  ,  ,  ,  ,  (Web Scraping) ,  ,  ,  ,  , </p>       */}
            <ol className='space-y-1'>
                <li>Django , flask , Python , BeautifulSoup</li>
                <li>NextJs , React , Javascript/TypeScript</li>
                <li>Tailwind , Bootstrap</li>
                <li>Sql (mysql , postgesql)</li>
                <li>Ui/Ux Desining (Figma), FramerMotion</li>
                <li>Rest_Api , GraphQl</li>
                <li>Databases Desining</li>
                <li>BashScripting</li>
                <li>Docker</li>
                <li>Shopify(App,Themed)Development</li>

            </ol>
        </div>
        <div className='text-xl rounded-md shadow-md ring-1 w-28 h-12 mx-auto mt-12 bg-slate-700 hover:ring-offset-2 hover:bg-slate-500 '>
             <Link href='/contact_me'><button className='text-white mx-4 mt-2 '>Hire Me</button></Link>
            
            </div>
        </motion.div>

        </>
    );
}


export default about_me;