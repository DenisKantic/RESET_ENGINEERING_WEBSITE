import React from 'react'
import './style.css';

const AboutUs = () => {
  return ( 
    <div className='w-full  bg-[#f1f5f9] 
                    mdd:h-full lg:min-h-[60vh]' id="aboutUs">
        <div className='mx-auto w-[80%] h-full flex items-center flex-row justify-center overflow-hidden 
                        xss:w-[95%] md:w-[90%]'>
      
        {/* left side */}
        <div className='w-[40%] h-[35vh] mt-20
                        xss:hidden xl:block' id='people'>
         
        </div>


        {/* right side */}
        <div className='w-[50%] h-full cursor-default
                        xss:w-full md:w-full xl:w-[50%] '>
        <h1 className='text-5xl mb-10 mt-[80px] text-center 
                        xss:text-4xl'>O nama</h1>

        {/* blocks of text */}
        <div className='pt-10 
                        xss:grid grid-cols-2 md:grid align-start cursor-default '>
         
          <div className='w-[80%] p-3 
                          xss:w-full'>
            <h1 className='xss:text-2xl lg:text-3xl'>Ko smo mi?</h1>
            <p className='mt-3 text-left 
                          xss:text-md font-[300]'>"RESET INŽINJERING" je kompanija koja zapošljava isključivo osobe sa invaliditetom. Osnivač kompanije je nevladino udruženje "RE-SET"
                          koja okuplja mlade invalidne osobe na području TK. </p>
          </div>
          <div className='w-[80%] p-3 
                          xss:w-full'>
            <h1 className='xss:text-2xl lg:text-3xl'>Naša misija?</h1>
            <p className='mt-3 text-left 
                          xss:text-md font-[300]'>Pružiti priliku mladim osobama sa invaliditetom da pridonose zajednici i da se osjećaju korisnim. Njihovim aktivnim uključenjem u zajednicu, omogućavamo
                          da pokažu svoj potencijal.</p>
          </div>
        
          <div className='w-[80%] p-3 
                          xss:w-full'>
            <h1 className='xss:text-2xl lg:text-3xl'>Naše usluge?</h1>
            <p className='mt-3 text-left 
                          xss:text-md font-[300]'>Nudimo razne usluge kao što su: grafički dizajn, izrade vizit kartica, privjesaka, printa na majice, šolje, personalizirane čestitke i mnoštvo toga.</p>
          </div>
          <div className='w-[80%] p-3 
                          xss:w-full '>
            <h1 className='xss:text-2xl lg:text-3xl'>Zašto nas izabrati?</h1>
            <p className='mt-3 text-left 
                          xss:text-md font-[300]'>Zato što nudimo najbolji odnos cijene i kvalitete proizvoda na tržištu. Kupovinom naših proizvoda, direktno podržavate udruženje
                          "RE-SET" i omogućavate više prilika za mlade invalidne osobe.</p>
          </div>
        </div>
        
        </div>

        </div>
    </div>
  )
}

export default AboutUs