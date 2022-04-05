import { VscGithub } from 'react-icons/vsc';
import './styles/style.css';

export const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <h6>Copyright © 2022 gzveriachvili</h6>
        <a href='https://github.com/' target='_blank' rel='noreferrer'>
          {' '}
          <VscGithub />
        </a>
      </div>
    </footer>
  );
};
