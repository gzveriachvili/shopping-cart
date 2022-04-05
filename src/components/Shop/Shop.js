import { Link } from 'react-router-dom';
import React from 'react';
import Header from '../Header/Header';
import './styles/style.css';
import AnimatedPage from '../../AnimatedPage';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { ShopCard } from './utils/ShopCard';

import gentleman from '../Home/utils/assets/img/gentleman.jpg';
import khakiField from '../Home/utils/assets/img/khaki_field.jpg';
import flightmaster from '../Home/utils/assets/img/flightmaster.jpg';
import hydroconquest from '../Home/utils/assets/img/hydroconquest.jpg';
import kamasu from '../Home/utils/assets/img/kamasu.jpg';
import navitimer from '../Home/utils/assets/img/navitimer.jpg';
import promaster from '../Home/utils/assets/img/promaster.jpg';
import bearwatch from '../Home/utils/assets/img/bearwatch.jpg';
import intramatic from '../Home/utils/assets/img/intramatic.jpg';
import khakiAviation from '../Home/utils/assets/img/khaki_aviation.jpg';
import panerai from '../Home/utils/assets/img/panerai.jpg';

import bambino from './assets/img/bambino.jpg';
import doxa from './assets/img/doxa.jpg';
import grandSeiko from './assets/img/grand_seiko.jpg';
import seikoFive from './assets/img/seiko_5.jpg';
import timex from './assets/img/timex.jpg';
import seamaster from './assets/img/seamaster.jpg';
import vacheron from './assets/img/vacheron.jpg';
import oris from './assets/img/oris.jpg';

const Shop = () => {
  return (
    <AnimatedPage>
      <Header />
      <div className='shop-wrapper'>
        <div className='shop-top-section'>
          <div className='shop-top-nav'>
            <Link to='/'>
              <p>Home &nbsp;</p>
            </Link>
            <p>/ Watches</p>

            <div className='title-sort'>
              <h4>Watches (18)</h4>

              <DropdownButton
                id='dropdown-item-button'
                title='Sort by Most Popular'
              >
                <Dropdown.ItemText>Most Popular</Dropdown.ItemText>
                <Dropdown.Item as='button'>Best Sellers</Dropdown.Item>
                <Dropdown.Item as='button'>Price Ascending</Dropdown.Item>
                <Dropdown.Item as='button'>Price Descending</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>

          <div className='gender-checkbox'>
            <Form>
              <Form.Check
                type='checkbox'
                id='maleWatch'
                label="Men's watches"
              />
              <Form.Check
                type='checkbox'
                id='ladiesWatch'
                label='Ladies watches'
              />
            </Form>
          </div>
        </div>
        <div className='shop-side'>
          <div className='acc-categories'>
            <Accordion>
              <Accordion.Item eventKey='0'>
                <Accordion.Header>Price</Accordion.Header>
                <Accordion.Body>
                  <Form className='price-form'>
                    <Form.Check
                      type='radio'
                      id='price1'
                      name='price'
                      label='$0 - $100'
                    />
                    <Form.Check
                      type='radio'
                      id='price2'
                      name='price'
                      label='$100 - $300'
                    />
                    <Form.Check
                      type='radio'
                      id='price3'
                      name='price'
                      label='$300 - $500'
                    />
                    <Form.Check
                      type='radio'
                      id='price4'
                      name='price'
                      label='$500 - $1000'
                    />

                    <Form.Check
                      type='radio'
                      id='price6'
                      name='price'
                      label='$1000+'
                    />
                  </Form>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey='1'>
                <Accordion.Header>Brand</Accordion.Header>
                <Accordion.Body>
                  <Form className='price-form'>
                    <Form.Check type='checkbox' id='brand1' label='Casio' />
                    <Form.Check type='checkbox' id='brand2' label='Citizen' />
                    <Form.Check type='checkbox' id='brand3' label='Hamilton' />
                    <Form.Check type='checkbox' id='brand4' label='Seiko' />
                    <Form.Check type='checkbox' id='brand5' label='Oris' />
                    <Form.Check type='checkbox' id='brand6' label='Sinn' />
                  </Form>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey='2'>
                <Accordion.Header>Category</Accordion.Header>
                <Accordion.Body>
                  <Form className='price-form'>
                    <Form.Check type='checkbox' id='cat1' label='Field' />
                    <Form.Check type='checkbox' id='cat2' label='Dress' />
                    <Form.Check type='checkbox' id='cat3' label='Diver' />
                    <Form.Check type='checkbox' id='cat4' label='Sport' />
                  </Form>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey='3'>
                <Accordion.Header>Movement</Accordion.Header>
                <Accordion.Body>
                  <Form className='price-form'>
                    <Form.Check type='checkbox' id='mov1' label='Automatic' />
                    <Form.Check type='checkbox' id='mov2' label='Quartz' />
                    <Form.Check type='checkbox' id='mov3' label='Eco-Drive' />
                    <Form.Check type='checkbox' id='mov4' label='Hand Wind' />
                    <Form.Check type='checkbox' id='mov5' label='Meca-Quartz' />
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className='shop-main'>
          <ShopCard
            imgName={flightmaster}
            cardTitle='SEIKO Flight Master'
            cardPrice='254'
          />

          <ShopCard
            imgName={navitimer}
            cardTitle='BREITLING Navitimer'
            cardPrice='5250'
          />

          <ShopCard
            imgName={panerai}
            cardTitle='PANERAI Luminor Marina'
            cardPrice='6750'
          />

          <ShopCard
            imgName={khakiField}
            cardTitle='HAMILTON Khaki Field'
            cardPrice='399'
          />

          <ShopCard
            imgName={oris}
            cardTitle='ORIS Divers Sixty-Five'
            cardPrice='1350'
          />

          <ShopCard
            imgName={bambino}
            cardTitle='ORIENT Bambino'
            cardPrice='140'
          />

          <ShopCard imgName={doxa} cardTitle='DOXA Sub 300' cardPrice='1950' />

          <ShopCard
            imgName={grandSeiko}
            cardTitle='GRAND SEIKO Heritage'
            cardPrice='6300'
          />

          <ShopCard
            imgName={seikoFive}
            cardTitle='SEIKO 5 Sports'
            cardPrice='239'
          />

          <ShopCard imgName={timex} cardTitle='TIMEX Digital' cardPrice='35' />

          <ShopCard
            imgName={seamaster}
            cardTitle='OMEGA Seamaster'
            cardPrice='6100'
          />

          <ShopCard
            imgName={vacheron}
            cardTitle='VC Patrimony'
            cardPrice='27400'
          />

          <ShopCard
            imgName={promaster}
            cardTitle='CITIZEN Promaster'
            cardPrice='199'
          />

          <ShopCard
            imgName={bearwatch}
            cardTitle='TUDOR Black Bay'
            cardPrice='3805'
          />

          <ShopCard
            imgName={intramatic}
            cardTitle='HAMILTON Jazzmaster'
            cardPrice='825'
          />

          <ShopCard
            imgName={kamasu}
            cardTitle='ORIENT Kamasu'
            cardPrice='180'
          />

          <ShopCard
            imgName={gentleman}
            cardTitle='TISSOT Gentleman'
            cardPrice='425'
          />

          <ShopCard
            imgName={hydroconquest}
            cardTitle='LONGINES HydroConquest'
            cardPrice='899'
          />

          <ShopCard
            imgName={khakiAviation}
            cardTitle='HAMILTON Khaki Aviation'
            cardPrice='1025'
          />
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Shop;
