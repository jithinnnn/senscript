import React, { useState } from 'react'
import './Quote.css';

function Quote({quote,loading}) {
    

  return (
 <>
       <div>
               {loading?<h1 className='text-white'>loading...</h1>:
                quote.data?.map((i)=>(
                    <h6 style={{textAlign:'center'}} className='text-white container p-2'>"{i.quote}"</h6>
                ))
               }
           
       </div>
 </>
  )
}

export default Quote