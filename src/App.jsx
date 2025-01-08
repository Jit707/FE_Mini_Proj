
import './App.css'
import logoa1 from './assets/image/logoa 1.png'
import vector from './assets/image/Vector.png'
import headerPic from './assets/image/Objects.png'
import viewDemo from './assets/image/Group 111.png'

function App() {
  

  return (
    <>
      <div className='bg-background w-screen py-8 flex flex-row justify-evenly gap-64 border-b-2 border-gray'>
        <div>
          <img className='w-36'src={logoa1} alt="Logoa1" />
        </div>
        <div>
          <img className='w-5' src={vector} alt="vector" />
          </div>
          
      </div>
      <div className='bg-background'>
        <img src={headerPic} alt="A man waring purple shirt" />
      </div>

      <div className='bg-background flex flex-col items-center '>
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
          <img className='w-28 pt-7' src={viewDemo} alt="Click to view Demo" />
        </div>

      </div>
    </>
  )
}

export default App
