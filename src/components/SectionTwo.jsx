import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { TwitterSvg } from '../assets/TwitterSvg';
import { Github } from '../assets/Github';
import { Link } from 'react-router-dom';
export const SectionTwo = () => {
  return (
   <section className='text-white'>
      <h1 className='text-[1.4rem]'>The Full Stack Maestro</h1>
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
           
           <footer>

        <div className='mt-10 text-center flex justify-center flex-col'>
            <p className='text-[1.2rem]'>Send Me hi 👋</p>
            <nav className=''>
            <div className='centered'>

           <Link>

           <Github className='' />
           </Link>
           <Link to="/">
            <TwitterSvg className='down_cl'/>
           </Link> 

            </div>
            </nav>
        </div>
       

           </footer>
   </section>
  );
};
