import { spoonFlat } from '../assets';

const Title = ({ label }) => {
  return (
    <div className='text-center text-grey flex flex-col justify-center items-center'>
      <h2 className='  text-[.9rem]'>{label}</h2>
      <div className=''>
        <img src={spoonFlat} alt='spoon icon' />
      </div>
    </div>
  );
};

export default Title;
