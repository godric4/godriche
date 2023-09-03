import { BigTitle, Title, Button } from '../components';

const Reservation = () => {
  return (
    <section className=' pt-12 bg-black pb-12'>
      <div className='container'>
        <Title label='Reservations' />
        <BigTitle label=' Book A Table' />
        <form action='' className='mt-3'>
          <div action='' className='flex justify-center items-center container'>
            <select
              className='ml-2 w-full border-2  border-secondary bg-primary  h-7 px-0'
              type='number'
              name=''
              id=''
            >
              <option value=''>1 Person</option>
              <option value=''>2 Persons</option>
              <option value=''>3 Persons</option>
              <option value=''>4 Persons</option>
              <option value=''>5 Persons</option>
              <option value=''>6 Persons</option>
            </select>
            <input
              className='ml-2 w-full border-2 border-secondary bg-primary h-7 px-2'
              type='date'
              name=''
              id=''
            />
            <select
              className='ml-2 w-full border-2 border-secondary bg-primary px-2 h-7  '
              type='time'
              name=''
              id=''
            >
              {' '}
              <option value=''>10:00 AM</option>
              <option value=''>11:00 AM</option>
              <option value=''>12:00 AM</option>
              <option value=''>1:00 PM</option>
              <option value=''>6:00 PM</option>
              <option value=''>7:00 PM</option>
              <option value=''>8:00 PM</option>
              <option value=''>9:00 PM</option>
            </select>
          </div>
          <div className='mt-4 container text-center'>
            <Button label='book now' />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Reservation;
