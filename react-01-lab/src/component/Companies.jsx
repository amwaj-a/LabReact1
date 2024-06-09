import React from 'react'
import Services from './Services'
import Programers from './Programers'

function Companies(props) {
  return (
<div className='company'>
<h1>Company Name: {props.name} </h1>
<span>worker Number: {props.worker}</span>
<span>year of Founded:  {props.year}</span>
<Services service={props.service.serv} price={props.service.work}/>
 {props.name=='Aramco'? 
 (<section className='programing'>
    <Programers name='Amwaj' lang=' JS-Flutter' company='Aramco'
work={5}/>
 <Programers 
 name='Fahad' lang=' JS-TS-#C'
  company='Aramco'
work={2}/>  <Programers name='Dimah'
lang=' All Languge' company='Aramco'
work={+100}/>
</section> )
 
 : (props.name=='Twaq Academy')?
    <section className='programing'>
    <Programers name='Mohamed'
     lang=' Paython' company='Twaq Academy'
work={6} />
 <Programers 
 name='Abdullah' lang=' Java - C#'
  company='Twaq Academy'
work={10}/>  <Programers name='Ali'
lang='C#' company='Twaq Academy'
work={4}/>
</section> 
 :     <section className='programing'>
    <Programers name='Saad'
     lang=' C++ - C# ' company='Alibaba Cloud'
work={20}/>
 <Programers 
 name='Saleh' lang=' Paythone'
  company='Alibaba Cloud'
work={10}/>  <Programers name='Ahmed'
lang='JS - JAVA' company='Alibaba Cloud'
work={9}/>
</section> }





    </div>
  )
}

export default Companies