import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Login from '../components/Login';

const HomePage = () => {
  return (
    <div className='bg-secondary'>
      <div className='card bg-light bg-opacity-75' style={{position: 'absolute', right: '3%', top: '15%', zIndex: '1'}}>
        <Login/>
      </div>
      <Carousel fade style={{zIndex: '0'}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.discordapp.com/attachments/1069920314357727233/1084784847123390485/pngwing.com_7.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.discordapp.com/attachments/1069920314357727233/1084784847123390485/pngwing.com_7.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.discordapp.com/attachments/1069920314357727233/1084784847123390485/pngwing.com_7.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default HomePage
