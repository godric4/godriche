import { Link } from 'react-router-dom';
import { barSpace, spoonFlat } from '../assets';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='mt-10  bg-black '>
      <div className='w-full h-60 '>
        <img src={barSpace} alt='restaurant setting ' className='h-60 w-full' />
      </div>
      <div className='container flex flex-col xl:flex-row justify-around items-center px-4'>
        {/*  main wrapper*/}

        <div className='flex flex-col justify-center items-center w-[21.6rem] text-center  mt-9'>
          <h2 className='font-semibold italic text-[1.5rem] '>
            G&ouml;drich&eacute;
          </h2>
          <p>
            "The best way to find yourself is to lose yourself in the service of
            others"
          </p>
          <img src={spoonFlat} alt='flat spoon icon' className='mt-2' />
          <div className='flex gap-2 mt-1'>
            <Link to='twitter.com'>
              <FaTwitter />
            </Link>
            <Link to='instagram.com'>
              <FaInstagram />
            </Link>
            <Link to='facebook.com'>
              <FaFacebook />
            </Link>
          </div>
        </div>
        {/*  */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <h3 className='font-semibold mt-2 text-[1.2rem]'>Working Hours</h3>
          <p className='pt-1 text-center'>
            Monday - Friday <br /> <span>08:00am -12:00am</span>
          </p>
          <p>
            Saturday - Sunday <br />
            <span>07:00am - 11:00pm</span>
          </p>
        </div>
        {/*  */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <h3 className='font-semibold mt-2 text-[1.2rem]'>Contact Us</h3>
          <p className='pt-1'>Block 4, Kilimanjaro Plaza, Ojo- Alaba, Lagos</p>
          <p>
            +234 9160 932 244 <br />
            <span>+234 9160 932 234</span>
          </p>
        </div>
      </div>
      <div className='text-center mt-5 pb-3'>
        <p>
          &copy; 2021 <span> G&ouml;drich&eacute;</span>. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
