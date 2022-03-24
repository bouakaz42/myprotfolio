import {useState} from 'react'


const Form = () => {
    const [done ,setDone]=useState(false)
    const registerUser = async event => {
        event.preventDefault() // don't redirect the page
        // where we'll add our form logic
        // const res = await fetch(
        //     'https://hooks.zapier.com/hooks/catch/123456/abcde',
        //     {
        //       body: JSON.stringify({
        //         name: event.target.name.value
        //       }),
        //       headers: {
        //         'Content-Type': 'application/json'
        //       },
        //       method: 'POST'
        //     }
        //   )
      
        //   const result = await res.json()
        setDone(true)
      }
    return (
        <div className='mt-16'>
                <form onSubmit={registerUser} className='p-4 bg-green-200 flex flex-col gap-4 '>
                <label htmlFor="Message" className='mx-auto'>Write Your Message Below :</label>
                <input id="message" name='message' type="text" required className='h-28 rounded-md shadow-sm p-2'/>
                <button type="submit" className=' rounded-md border-2 w-24 h-12 mx-auto bg-gray-600 text-white hover:bg-gray-400'>Send</button>
                </form>     
        {done !=false && <h1>Your message gotten</h1>}
        </div>
    );
}

export default Form;