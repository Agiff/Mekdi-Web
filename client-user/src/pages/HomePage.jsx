import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import InfoCard from '../components/InfoCard';
import Login from '../components/Login';

const HomePage = () => {
  const carouselImages = [
    'https://www.mcdelivery.co.id/id/static/1677662128341/assets/62/banners/landing_28857_WOS_GopayMaret_1140x475px.jpg',
    'https://www.mcdelivery.co.id/id/static/1677662128341/assets/62/banners/landing_28717_1140x475pixel-Feb-INA.jpg',
    'https://www.mcdelivery.co.id/id/static/1677662128341/assets/62/banners/landing_28729_WOS_KoreanSG_1140x475px.jpg',
    'https://www.mcdelivery.co.id/id/static/1677662128341/assets/62/banners/landing_28324_1140x475pixel-INA.jpg',
    'https://www.mcdelivery.co.id/id/static/1677662128341/assets/62/banners/landing_28723_1140x475pixel-INA.jpg',
    'https://www.mcdelivery.co.id/id/static/1677662128341/assets/62/banners/landing_28836_WOS_BNIDelivPromo_1140x475px.jpg'
  ]

  return (
    <div className='container pb-5 text-start'>
      <Carousel fade style={{zIndex: '0'}}>
        {
          carouselImages.map(image => {
            return <Carousel.Item>
              <img
                className="d-block w-100"
                src={image}
                alt="Promo Image"
              />
            </Carousel.Item>
          })
        }
        <div className='card bg-light bg-opacity-75 text-center' style={{position: 'absolute', right: '2%', top: '5%', zIndex: '1', height: '90%'}}>
          <Login/>
        </div>
      </Carousel>
      <div className='d-flex justify-content-between mt-3 mb-5'>
        <InfoCard imageUrl={'https://www.mcdelivery.co.id/id/static/1677662128341/assets/62/banners/home_promo_10623_Cashless_IN.jpg'}/>
        <InfoCard imageUrl={'https://www.mcdelivery.co.id/id/static/1677662128341/assets/62/banners/home_promo_6552_360x240PXL.jpg'}/>
        <InfoCard imageUrl={'https://www.mcdelivery.co.id/id/static/1677662128341/assets/62/banners/home_promo_25906_WOS_ina.jpg'}/>
      </div>
      <hr />
      <h2>Cara pesan melalui McDelivery™</h2>
      <img src="https://www.mcdelivery.co.id/id/static/1677662128341/assets/62/img/how_mcdelivery_works_in.png" alt=""
      style={{ cursor: 'pointer' }}/>
    </div>
  )
}

export default HomePage
