import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='font-medium sm:text-xl text-center rounded-lg bg-black-500 text-white py-4 px-8 mx-5'>
        Здраствуйте, Меня зовут 
        <span className='font-semibold mx-2 text-green-400'>Муслим Метаев</span>
        🦾👽👋
        <br />
        Я крупный разроботчик ипо и ит технологи. Я работаю с <br /> Three.js <br /> React <br /> 
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='font-medium sm:text-xl text-center rounded-lg bg-black-500 text-white py-4 px-8 mx-5'>
        <p className='font-medium sm:text-xl text-center'>
          Ny i Front end <br /> og koder mye i fritiden min
        </p>

        <Link to='/about' className='font-semibold mx-2 text-green-400'>
          Les mer
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='font-medium sm:text-xl text-center rounded-lg bg-black-500 text-white py-4 px-8 mx-5'>
      <p className='font-medium sm:text-xl text-center'>
        Kommende Prosjekter ----<br/>
      </p>

      <Link to='/contact' className='font-semibold mx-2 text-green-400'>
        Les mer!
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='font-medium sm:text-xl text-center rounded-lg bg-black-500 text-white py-4 px-8 mx-5'>
      <p className='font-medium sm:text-xl text-center'>
      Trenger du en interaktiv nettside? <br/> <br/>  Jeg er bare et tastetrykk unna!
      </p>

      <Link to='/contact' className='font-semibold mx-2 text-green-400'>
        Kontakt meg!
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
