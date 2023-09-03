import { barTools } from '../assets';
import { BigTitle, Title } from '../components';

const Specials = () => {
  return (
    <section className=' mt-10'>
      <div className='container pt-6'>
        <Title label='Menu that fits your pallete' />
        <BigTitle label="today's special" />
        <div className='flex w-full justify-center mt-7 '>
          <div className='text-center w-full'>
            <p>Drinks & Sips</p>
            <div className=''></div>
          </div>
          <div className=''>
            <img src={barTools} alt='Bar tools' />
          </div>
          <div className='w-full '>Grills & Chops</div>
        </div>
      </div>
    </section>
  );
};

export default Specials;
