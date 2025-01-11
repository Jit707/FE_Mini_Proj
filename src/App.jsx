
import './App.css'
import logoa1 from './assets/image/logoa 1.png'
import vector from './assets/image/Vector.png'
import headerPic from './assets/image/Objects.png'
import viewDemo from './assets/image/Group 111.png'
import logo1 from './assets/image/brand-01.png'
import logo2 from './assets/image/brand-04.png'
import logo3 from './assets/image/brand-06.png'
import purpleRegtangle from './assets/image/Rectangle 122.png'
import purplewallet from './assets/image/Frame.png'
import arrow1 from './assets/image/Group 875.png'
import yellowRegtangle from './assets/image/Rectangle 124.png'
import yellowPeople from './assets/image/Frame01.png'
import orangeRegtangle from './assets/image/Rectangle 123.png'
import orangeBand from './assets/image/Vector01.png'
import discoverPicture from './assets/image/Group 5771.png'

function App() {
  

  return (
    <>
    <div className='bg-gradient-to-b from-background to-white w-screen '>
      <div className=' py-8 flex flex-row justify-around gap-36 border-b-2 border-gray'>
        <div>
          <img className='w-36'src={logoa1} alt="Logoa1" />
        </div>
        <div>
          <img className='w-5' src={vector} alt="vector" />
          </div>
          
      </div>
      <div>
        <img src={headerPic} alt="A man waring purple shirt" />
      </div>

      <div className=' flex flex-col items-center '>
        <div className='bg-white text-l p-3 rounded-md text-purple font-bold'>Welcome QuickSpace</div>
        <div className='text-4xl text-primary font-bold py-2 pt-7 '>Satisfied Customer</div>
        <div className='text-4xl text-primary font-bold py-2'>Is the Best Business</div>
        <div className='text-4xl text-primary font-bold py-2'>Strategy</div>
        <div className='text-lg py-4 w-2/3 text-gray'>Backed with vast experience and fully up to date skills set, at Enuke Software offer the best in class E-Prescription solution
        </div>
        <button 
        className='bg-button text-white py-4 px-20 font-semibold rounded-md'>Try Free
        </button>
        <div>
          <img className='w-28 py-7' src={viewDemo} alt="Click to view Demo" />
        </div>

      </div>
      </div>

      <div className='flex flex-row justify-around py-8 bg-white'>
        <img className='h-8'src={logo1} alt="Logo1" />
        <img className='h-8' src={logo2} alt="Logo2" />
        <img className='h-8' src={logo3} alt="Logo3" />
      </div>



      <div>
        <div>
          <div className=' flex flex-col items-center '>
          <div className='text-4xl text-primary font-bold py-2 pt-7 '>Perfect Solution </div>
          <div className='text-4xl text-primary font-bold py-2'>For Your Business</div>
          <div className='text-lg py-4  text-gray flex flex-col items-center'>
          <span>Graphs displaying your performance for</span> 
          <span>metrics like follower evolution, average</span>
          <span> rate per post and reach and impressions</span>
          <span>to give you the insights.</span> 
          </div>
          </div>

          <div className='flex flex-col'>

            <div className='flex flex-col rounded-lg mx-4 hover:shadow-2xl '>
              
              <div className='ml-6'>

              <div className='mt-12'>
                <img className='h-28 absolute' src={purpleRegtangle} alt="Purple Regtangle" />
                <img className='h-10 relative top-9 left-9' src={purplewallet} alt="Wallet Vector" />
              </div>

              <div className='mt-20'>
            <div className='text-2xl text-primary font-bold'>Drive More Sales</div>
            <div className='flex flex-col pt-5  text-gray'>
              <span>Take us wherever you go so that you </span>
              <span>know what’s going on with your </span>
              <span>money at all times.</span>
              </div>      
              <div className='flex flex-row py-8'>
                <span className=' text-gray font-bold'>Get Started</span>
                <img src={arrow1} alt="Arrow Sign" />
              </div>
              </div>

              </div>

            </div>

            <div>
            <div className='flex flex-col rounded-lg mx-4 hover:shadow-2xl '>
              
              <div className='ml-6'>

              <div className='mt-12'>
                <img className='h-28 absolute' src={orangeRegtangle} alt="Orange Regtangle" />
                <img className='h-10 relative top-9 left-9' src={orangeBand} alt="Orange Vector" />
              </div>

              <div className='mt-20'>
            <div className='text-2xl text-primary font-bold'>Grow Your Business</div>
            <div className='flex flex-col pt-5  text-gray'>
              <span>Take us wherever you go so that you </span>
              <span>know what’s going on with your </span>
              <span>money at all times.</span>
              </div>      
              <div className='flex flex-row py-8'>
                <span className=' text-gray font-bold'>Get Started</span>
                <img src={arrow1} alt="Arrow Sign" />
              </div>
              </div>
              </div>

           </div>
            </div>

            <div>
            <div className='flex flex-col rounded-lg mx-4 hover:shadow-2xl '>
              
              <div className='ml-6'>

              <div className='mt-12'>
                <img className='h-28 absolute' src={yellowRegtangle} alt="Yellow Regtangle" />
                <img className='h-10 relative top-9 left-9' src={yellowPeople} alt="Yellow Vector" />
              </div>

              <div className='mt-20'>
            <div className='text-2xl text-primary font-bold'>Handled By Expert</div>
            <div className='flex flex-col pt-5  text-gray'>
              <span>Take us wherever you go so that you </span>
              <span>know what’s going on with your </span>
              <span>money at all times.</span>
              </div>      
              <div className='flex flex-row py-8'>
                <span className=' text-gray font-bold'>Get Started</span>
                <img src={arrow1} alt="Arrow Sign" />
              </div>
              </div>
              </div>
           </div>
            </div>            
            </div>                          
        </div>
      </div>


    <div className='bg-gradient-to-t from-background to-white mt-36'>
      <div className=' flex flex-col items-center '>

        <div className='bg-background text-l p-3 rounded-md text-purple font-bold'>
        Discover & Explore
        </div>
        <div className='text-3xl text-primary font-bold flex flex-col items-center my-4'>
          <div>Join An Attractive &</div>
          <div>Personaliozed</div>
        </div>
        <div className='text-lg pt-4  text-gray flex flex-col items-center'>
        <div>Graphs displaying your performance for </div>
        <div>metrics like follower evolution, average </div>
        <div>rate per post and reach and impressions </div>
        <div>to give you the insights.  </div>
        </div>
        <div className='mt-4'>
          <img src={discoverPicture} alt="Investment Graph" />
        </div>     

      </div>     
    </div>
      
    </>
  )
}

export default App
