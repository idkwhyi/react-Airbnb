// import Picture from '../images/picture.png';

export default function Hero() {
  return (
    <div className='w-screen flex flex-col justify-start items-center'>
      <div className='w-3/4 flex justify-center items-center m-8'>
        <img className='bg-cover w-2/5' src={require('./images/picture.png')} alt="pictures"></img>
      </div>
      <div className='w-full h-full flex justify-center items-center'>

        <div className='w-auto h-full flex flex-col justify-center items-start mt-10 '>
          <div className='font-bold text-3xl'>Online Experiences</div>
          <div className='w-80 text-lg'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</div>
        </div>
      </div>
    </div>
  )
}