import { chicken } from '../assets';
import { BigTitle, Title } from '../components';
import { Hero, Reservation, Specials } from '../sections';

const Home = () => {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        <div className='container mt-7 mb-5'>
          <h2 className='text-center font-bold text-[1.7rem] max-sm:text-[1.4rem]'>
            Unleash Your Appetite, Savor Every Sip
          </h2>
          <p className='px-4'>
            Welcome to{' '}
            <span className='font-semibold'>G&ouml;drich&eacute;</span> where
            sizzling flavors meet unforgettable nights. Step into our world of
            culinary delight and indulge in mouthwatering dishes expertly
            crafted to tantalize your taste buds. From flame-kissed steaks to
            zesty cocktails, we promise an experience that ignites your senses
            and leaves you craving for more. Join us for an unforgettable
            journey of great food, lively ambiance, and endless fun. Cheers to
            delicious memories and good times at{' '}
            <span className='font-semibold'>G&ouml;drich&eacute;</span>
          </p>
        </div>
      </section>
      <section>
        <Reservation />
        <Specials />
      </section>
      <section className='mt-7'>
        <Title label='Culinary masterpiece' />
        <BigTitle label='Our Menus' />
        <div className='container flex'>
          {/* image */}
          <img src={chicken} alt='Chicken cooked' className='' />
          {/* Text */}
          <div className=''>hello</div>
        </div>
      </section>
    </>
  );
};

export default Home;
