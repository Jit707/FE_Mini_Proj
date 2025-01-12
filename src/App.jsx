
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
import blueCircle from './assets/image/Element.png'
import whiteQuote from './assets/image/quote-left.png'
import photo1 from './assets/image/Photo.png'
import photo2 from './assets/image/Photo01.png'
import slideVector from './assets/image/Group 5732.png'
import dropVector from './assets/image/Frame02.png'
import checkMark from './assets/image/Checkmark-15.png'

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


    <div className='bg-white'>
      <div>

        <div className='mt-32'>
          <img className='absolute h-24' src={blueCircle} alt="Blue Circle" />
          <img className='relative h-8 top-5 left-4' src={whiteQuote} alt="White Quote" />
          <div className='relative top-8 left-10 text-4xl text-primary font-bold flex flex-col'>
          <div>What Our Customer</div>
          <div>are Saying</div>
          </div>
        </div>
        <div className='mt-20 ml-4'>

          <div className='text-xl text-primary font-semibold'>
          <div>Great Services with Good Quality</div>
          <div>Photographers PhotoScape</div>
          </div>
          <div className='text-md pt-4  text-gray flex flex-col'>
            <span>I truly have nothing but the highest praise and </span>
            <span>appreciation for all that you did for us. Saving me on</span>
            <span>the video montage projection was huge, and even</span>
            <span>more important the amazing pictures. </span>
          </div>
          <div className='flex flew-row items-center gap-4 mt-6'>
            <div><img className='h-16' src={photo1} alt="Woman Photo" /></div>
            <div>
            <div className='text-primary font-bold '>Pricillia Makalew</div>
            <div className='text-gray'>EhyaScape Client</div>
            </div>           
          </div>
          <div className='h-px w-80 bg-gray mt-8'></div>

          <div className='text-xl text-primary font-semibold mt-12'>
          <div>Really love the Fast Delivery Photos</div>
          <div>File Service. Just 48 Hours. It’s Crazy!</div>
          </div>
          <div className='text-md pt-4  text-gray flex flex-col'>
            <span>I truly have nothing but the highest praise and </span>
            <span>appreciation for all that you did for us. Saving me on</span>
            <span>the video montage projection was huge, and even</span>
            <span>more important the amazing pictures. </span>
          </div>
          <div className='flex flew-row items-center gap-4 mt-6'>
            <div><img className='h-16' src={photo2} alt="Woman Photo" /></div>
            <div>
            <div className='text-primary font-bold '>Dany Olmo</div>
            <div className='text-gray'>EhyaScape Client</div>
            </div>           
          </div>
        </div>
      </div>
    </div>

    <div className='bg-gradient-to-b from-background to-white mt-36'>

      <div className='flex flex-col items-center'>
        <div className='mt-10 text-2xl text-primary font-bold'>Expand your options with a</div>
        <div className='text-2xl text-primary font-bold'>subscription</div>
        <div className='flex flex-col items-center mt-8 text-gray'>
          <span>Graphs displaying your performance</span>
          <span> for metrics like follower evolution,</span>
          <span>average rate per post and reach and</span>
          <span> impressions to give you the insights.</span>
        </div>
        <div className='flex flex-row justify-around gap-4 mt-10 text-gray'>
          <span>Bill Montly</span>
          <img className='h-6' src={slideVector} alt="Slide button" />
          <span>Bill Anually</span>
        </div>
      </div>

      <div className='flex flex-col mt-8 mx-2 bg-white rounded-xl hover:shadow-2xl'>
        <div className='ml-12 mt-8'>
        <div className='flex flex-row items-center text-3xl text-primary font-bold'>
          <div>Standard</div>
          <img className='h-10' src={dropVector} alt="Drop Down" />
        </div>
        <div className='text-gray'>For a small company that</div>
        <div className='text-gray'> wants to show what it's worth.</div>
        <div className='flex flex-row gap-2 items-center mt-4'>
          <div className='text-3xl text-primary font-bold'>$300</div>
          <div className='text-gray'>Per User / Per Year</div>
        </div>
        <div className='flex flex-row items-center gap-2 mt-12 text-gray'>
          <img className='h-4' src={checkMark} alt="Check Mark" />
          <span>Access to editing all blocks</span>
        </div>
        <div className='flex flex-row items-center gap-2 text-gray'>
          <img className='h-4' src={checkMark} alt="Check Mark" />
          <span>Editing blocks together</span>
        </div>
        <div className='flex flex-row items-center gap-2 text-gray'>
          <img className='h-4' src={checkMark} alt="Check Mark" />
          <span>Access to all premium icons</span>
        </div>
        <div className='flex flex-row items-center gap-2 text-gray'>
          <img className='h-4' src={checkMark} alt="Check Mark" />
          <span>A dedicated domain</span>
        </div>
        <div className='flex flex-row items-center gap-2 text-gray'>
          <img className='h-4' src={checkMark} alt="Check Mark" />
          <span>Ability to integrate with CMS</span>
        </div>
        <button className='bg-purple mt-10 w-64 h-12 text-white font-bold rounded-md mb-12 '>
          Start 14 Days Free Trial
          </button>
        </div>
      </div>
    </div>

    <div>
      
    </div>
      
    </>
  )
}

export default App
