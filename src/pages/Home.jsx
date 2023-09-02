import { Hero, Reservation, Specials } from '../sections';

const Home = () => {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        <Reservation />
        <Specials />
      </section>
    </>
  );
};

export default Home;
