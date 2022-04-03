import { Link } from 'react-router-dom';
import { SaleWatchCard } from './SaleWatchCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './sale.css';

import gentleman from './assets/img/gentleman.jpg';
import khakiField from './assets/img/khaki_field.jpg';
import flightmaster from './assets/img/flightmaster.jpg';
import hydroconquest from './assets/img/hydroconquest.jpg';
import kamasu from './assets/img/kamasu.jpg';
import navitimer from './assets/img/navitimer.jpg';
import promaster from './assets/img/promaster.jpg';
import bearwatch from './assets/img/bearwatch.jpg';
import intramatic from './assets/img/intramatic.jpg';
import khakiAviation from './assets/img/khaki_aviation.jpg';
import panerai from './assets/img/panerai.jpg';

export const SaleItems = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className='sale'>
      <div className='sale-title-section'>
        <h2>{props.title}</h2>
        <Link to='/Shop'>
          <button>See all discounts</button>
        </Link>
      </div>

      <div className='carousel'>
        <Carousel responsive={responsive}>
          <SaleWatchCard
            imgName={gentleman}
            watchName='Tissot Gentleman'
            watchPrice='425'
            salePercentage='20'
          />

          <SaleWatchCard
            imgName={khakiField}
            watchName='Hamilton Khaki Field'
            watchPrice='399'
            salePercentage='31'
          />

          <SaleWatchCard
            imgName={flightmaster}
            watchName='Seiko Flight Master'
            watchPrice='254'
            salePercentage='47'
          />

          <SaleWatchCard
            imgName={hydroconquest}
            watchName='Longines HydroConquest'
            watchPrice='899'
            salePercentage='32'
          />

          <SaleWatchCard
            imgName={kamasu}
            watchName='Orient Kamasu'
            watchPrice='180'
            salePercentage='15'
          />

          <SaleWatchCard
            imgName={navitimer}
            watchName='Breitling Navitimer'
            watchPrice='5250'
            salePercentage='22'
          />

          <SaleWatchCard
            imgName={promaster}
            watchName='Citizen Promaster'
            watchPrice='199'
            salePercentage='43'
          />

          <SaleWatchCard
            imgName={bearwatch}
            watchName='Tudor Black Bay'
            watchPrice='3805'
            salePercentage='10'
          />

          <SaleWatchCard
            imgName={intramatic}
            watchName='Hamilton Jazzmaster'
            watchPrice='825'
            salePercentage='35'
          />

          <SaleWatchCard
            imgName={khakiAviation}
            watchName='Hamilton Khaki Aviation'
            watchPrice='1025'
            salePercentage='29'
          />

          <SaleWatchCard
            imgName={panerai}
            watchName='Panerai Luminor Marina'
            watchPrice='6750'
            salePercentage='17'
          />
        </Carousel>
      </div>
    </div>
  );
};
