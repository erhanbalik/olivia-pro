import {Carousel } from 'react-bootstrap'

function Hero () {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.eea.europa.eu/themes/biodiversity/state-of-nature-in-the-eu/state-of-nature-2020-subtopic/image_print"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Select Your Best</h3>
                    <p>Many items waiting for you</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.unenvironment.org/2022-03/field-ge4d2466da_1920.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Best Shop Site</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Don't waste your time</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default Hero;