
import './App.css'
import Programers from './component/Programers'
import Companies from './component/Companies.jsx'

function App() {

  return (
    <>
<section className='home'>
<Companies name='Aramco' worker={10293} 
year={1963}
service={{serv:' Oli-Gas', work:'1000$'}}


/>
 

   
<Companies name='Twaq Academy'
 worker={202} 
year={2019}
service={{serv:'BootCamps', work:'0$'}} />

    


    <Companies name='Alibaba Cloud'
 worker={3029} 
year={2018}
service={{serv:'Cloud Server', work:'10-10000$'}} />

 
</section>


    </>
  )
}

export default App
