import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { TwitterSvg } from '../assets/TwitterSvg';
import { Github } from '../assets/Github';
import { LinkedIn } from '../assets/LinkedIn';
import { Link } from 'react-router-dom';
export const SectionTwo = () => {
  return (
   <section className='text-white mt-2 border-b-[1px]  border-gray-50 pb-4 border-opacity-50'>
      <h1 className='text-[1.4rem] '>The Full Stack Maestro</h1>
      <ul className='mt-2 text-left text-[1rem] leading-10'>
        <li>
          <p><ArrowRightOutlinedIcon sx={{marginLeft:'-5px'}} /> Nothing to everything in the stack.</p>
        </li>
        <li>
          <p><ArrowRightOutlinedIcon sx={{marginLeft:'-5px'}} /> Adore collaborating with others.</p>
        </li>
        <li>
          <p><ArrowRightOutlinedIcon sx={{marginLeft:'-5px'}} /> An intense desire to learn and apply.</p>
        </li>
      </ul>
           
          
   </section>
  );
};
