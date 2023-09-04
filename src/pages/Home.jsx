// import { chicken } from '../assets';
import { Link } from 'react-router-dom';
import { campari, chicken } from '../assets';
import { BigTitle, CardOne, Title } from '../components';
import { Hero, Reservation, Specials } from '../sections';
import { menuCardDetails } from '../utils/constants';

const Home = () => {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        <div className='container mt-7 mb-5'>
          <h2 className='text-center font-bold text-[1.7rem] max-sm:text-[1.4rem]'>
            Unleash Your Appetite,
            <br /> <span>Savor Every Sip</span>
          </h2>
          <p className='px-2'>
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
          <Specials />
        </div>
      </section>
      <section>
        <Reservation />
      </section>
      <section className='mt-7' id='menu'>
        <Title label='Culinary masterpiece' />
        <BigTitle label='Our Menus' />
        <div className='container   mt-5'>
          <div className='container grid lg:grid-cols-4 md:grid-cols-3 sm:grid-2 grid-cols-1 sm:gap-4 gap-6'>
            {menuCardDetails.map((item) => {
              const { label, bgImg } = item;
              return (
                <Link to='/' key={label}>
                  <CardOne label={label} bgImg={bgImg} />
                </Link>
              );
            })}
          </div>
        </div>
        <div className='container mt-16'>
          <Title label='You deserve happiness' />
          <BigTitle label='Happy Hours' />
          <p className='mt-3 text-centr'>
            Whether you're a regular or visiting for the first time, we're
            thrilled to have you. Discover the magic of{' '}
            <span className='font-semibold'>G&ouml;drich&eacute;</span>, where
            food, drinks, and good times come together to create memories that
            last a lifetime. Every hour with us is a happy hour. Cheers to the
            good life
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;

{
  /* <img
              src={chicken}
              alt='Chicken cooked'
              className='bordr-8 border-secondary border-tl-2'
              width='200px'
              height='200px'
            /> */
}
