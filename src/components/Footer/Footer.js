import { VscGithub } from 'react-icons/vsc';
import './styles/style.css';

export const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <h6>Made by Gia Zveriachvili</h6>
        <a href='https://github.com/' target='_blank' rel='noreferrer'>
          {' '}
          <VscGithub />
        </a>
      </div>
    </footer>
  );
};
