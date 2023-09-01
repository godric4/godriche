import { becalm, headerBg, spoonFlat } from '../assets';
import Button from './Button';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className='relative flex flex-col h-[100vh] justify-center items-center'>
      <div className='video absolute h-full w-full overflow-hidden'>
        <video
          autoPlay
          loop
          playsInline
          poster={becalm}
          className='min-h-full min-w-full object-cover'
        >
          <source src={headerBg} type='video/mp4' />
        </video>
      </div>
      <div className='content z-10 text-center bg-[rgba(0,0,0,.7)] w-full h-full flex flex-col justify-center items-center'>
        <div className=''>
          <p className='text-center'>
            Chase The Flavor <span className='text-[1.4rem]'>@</span>
          </p>
          <div className='flex'>
            <img src={spoonFlat} alt='spoon' />
            <img src={spoonFlat} alt='spoon' />
            <img src={spoonFlat} alt='spoon' />
            <img src={spoonFlat} alt='spoon' />
            <img src={spoonFlat} alt='spoon' />
            <img src={spoonFlat} alt='spoon' />
          </div>
        </div>
        <div className='mt-4'>
          <h1 className='font-semibold'>G&ouml;drich&eacute;</h1>
          <h1 className=' text-[3rem] font-bold mt-[-1.5rem]'>Bar & Lounge</h1>
          <p className='text-center capitalize text-grey italic'>
            The Key To exquisite fine wining and dining
          </p>
        </div>
        <div className='mt-6'>
          <Button label='Explore Now' iconUrl={<FaArrowRight />} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
