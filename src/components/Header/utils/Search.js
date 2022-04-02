import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { AiOutlineSearch } from 'react-icons/ai';
import './search.css';

function Search() {
  const [show, setShow] = useState(false);

  return (
    <>
      <AiOutlineSearch onClick={() => setShow(true)} />

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName='modal-90w'
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
        className='search-modal-out'
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-custom-modal-styling-title'>
            Search for products
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body'>
          <div className='search-input'>
            <input type='text' placeholder='Search...' />
            <AiOutlineSearch />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Search;
