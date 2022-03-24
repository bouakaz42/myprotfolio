import {motion} from 'framer-motion'




const Skills = () => {
    const vari = {
        hid :{opacity:0},
        vis :{opacity:1},
    }
    return (
        <div>
               <div className=" flex flex-row gap-20 mt-8">
                    <motion.div 
                    variants={vari}
                    initial='hid'
                    animate='vis'
                    className="skills grid grid-row gap-5 ">
              <motion.div 
              variants={vari}
              transition={{duration:0.5}}
              className='container flex flex-row ring-1 gap-4 ring-zinc-300 rounded-md h-24 p-1 hover:ring-offset-4'>
                  <h1 className='font-bold ml-2 my-auto'>NextJs</h1>
                  <p className='font-light ml-2 my-auto '> I can Build A Nextjs App For You If You Wanna Know more About this technologies Click Here</p>
                 
              </motion.div>
              <motion.div 
              variants={vari}
              transition={{duration:1.5}}
              className='container flex flex-row ring-1 gap-4 ring-zinc-300 rounded-md h-24 p-1 hover:ring-offset-4'>
                    <h1 className='font-bold ml-2 my-auto'>Django</h1>
                    <p className='font-light ml-2 my-auto'> I can Build A Django App For You If You Wanna Know more About this technologies Click Here</p>
              </motion.div>
              <motion.div 
              variants={vari}
              transition={{duration:2.5}}
              className='container flex flex-row ring-1 gap-4 ring-zinc-300 rounded-md h-24 p-1 hover:ring-offset-4'>
                  
                  
                  <h1 className='font-bold ml-2 my-auto'>Desining Better Ux</h1>
                  <p className='font-light ml-2 my-auto'> I can Design Any Page For Any App For You Including a Good Ux If You Wanna Know more About this technologies Click Here</p>

                  
              </motion.div>
              <motion.div 
              variants={vari}
              transition={{duration:3}}
              className='container flex flex-row ring-1 gap-4 ring-zinc-300 rounded-md h-24 p-1 hover:ring-offset-4'>
                  
                  <h1 className='font-bold ml-2 my-auto'>Low Pricing Plans</h1>
                  <p className='font-light ml-2 my-auto'> I can Build A Nextjs App For You If You Wanna Know more About this technologies Click Here</p>

                  
              </motion.div>
              <motion.div 
              variants={vari}
              transition={{duration:3.5}}
              className='container flex flex-row ring-1 gap-4 ring-zinc-300 rounded-md h-24 p-1 hover:ring-offset-4'>
                 
                 <h1 className='font-bold ml-2 my-auto'>Design Database</h1>
                  <p className='font-light ml-2 my-auto'> I can Build A Nextjs App For You If You Wanna Know more About this technologies Click Here</p>

                 
              </motion.div>
              <motion.div 
              variants={vari}
              transition={{duration:4}}
              className='container flex flex-row ring-1 gap-4 ring-zinc-300 rounded-md h-24 p-1 hover:ring-offset-4'>
                 
                 <h1 className='font-bold ml-2 my-auto'>GraphQl</h1>
                  <p className='font-light ml-2 my-auto'> I can Build A Nextjs App For You If You Wanna Know more About this technologies Click Here</p>
                 
              </motion.div>
              <motion.div 
              variants={vari}
              transition={{duration:4.5}}
              className='container flex flex-row ring-1 gap-4 ring-zinc-300 rounded-md h-24 p-1 hover:ring-offset-4'>
                 
                 <h1 className='font-bold ml-2 my-auto'>Deploying Services</h1>
                  <p className='font-light ml-2 my-auto'> I can Build A Nextjs App For You If You Wanna Know more About this technologies Click Here</p>
                 
              </motion.div>
              <motion.div 
              variants={vari}
              transition={{duration:5}}
              className='container flex flex-row ring-1 gap-4 ring-zinc-300 rounded-md h-24 p-1 hover:ring-offset-4'>
                  
                  <h1 className='font-bold ml-2 my-auto'>Web Scraping</h1>
                  <p className='font-light ml-2 my-auto'> I can Build A Nextjs App For You If You Wanna Know more About this technologies Click Here</p>
                  
                
              </motion.div>
              </motion.div>
        </div>
        </div>
    );
}


export default Skills;