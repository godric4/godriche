import { brandysing, roastedPork } from '../assets';
import { BigTitle, Title } from '../components';
import { todayDrinks, todayGrills } from '../utils/constants';

const Specials = () => {
  return (
    <section className=' mt-10'>
      <div className='container pt-6'>
        <Title label='Menu that fits your pallete' />
        <BigTitle label="today's special" />
      </div>
      <div className='container flex max-sm:flex-col items-center justify-center gap-6 mt-5'>
        {/*  */}
        <div
          className='w-[22rem] relat'
          style={{
            backgroundImage: `url(${roastedPork})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className='bg-[rgba(0,0,0,.8)] p-3'>
            <h2 className='text-center font-semibold text-grey text-[1.5rem]'>
              Grills & Chops{' '}
            </h2>
            <ol type='1' className='p-4 list-decimal'>
              {todayGrills.map((grill) => {
                const { name, desc, price } = grill;
                return (
                  <li key={name}>
                    <div className='flex'>
                      <p className=''>{name}</p>
                      <div className='flex justify-center items-center ml-2'>
                        <div className='h-[0.06rem] mx-2 w-[4.6rem] bg-white'></div>
                        <p className=''>&#8358; {price}</p>
                      </div>
                    </div>
                    <p className='text-grey text-[.8rem] -top-2'>{desc}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
        {/*  */}
        <div
          className='w-[22rem]'
          style={{
            backgroundImage: `url(${brandysing})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className='bg-[rgba(0,0,0,.7)] p-3'>
            <h2 className='text-center font-semibold text-grey text-[1.5rem]'>
              Drinks & Sips
            </h2>
            <ol type='1' start='1' className='p-4 list-decimal'>
              {todayDrinks.map((drink) => {
                const { name, price, desc } = drink;

                return (
                  <li key={name}>
                    <div className='flex'>
                      <p className=''>{name}</p>
                      <div className='flex justify-center items-center ml-2'>
                        <div className='h-[0.06rem] mx-2 w-[4.6rem] bg-white'></div>
                        <p className=''>&#8358; {price}</p>
                      </div>
                    </div>
                    <p className='text-grey text-[.8rem] -top-2'>{desc}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
        {/*  */}
      </div>
    </section>
  );
};

export default Specials;
