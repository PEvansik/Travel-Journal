import loction from './asset/loction.svg'
import pic1 from './asset/pic1.png'
import pic2 from './asset/pic2.png'
import pic3 from './asset/pic3.png'

import './styles/Cards.css'

export const Cards = () => {
    return (
        <main>

            <section className="one">
                <figure className='main-img'>
                    <img src={pic1} alt="japan" />
                </figure>
        
                <article className='main-content'>
                    <section className="loc-map">
                        <section className="loc-country">
                            <p className="loc-logo-holder">
                                <img src={loction} alt="location-logo" className="loc-logo" />
                            </p>
                            <p className="country">japan</p>
                        </section>
        
                        <a href="" className="map-link">View on Google Maps</a>
        
                    </section>
        
                    <h2>Mount Fuji</h2>
                    <span className='tour-date'>12 Jan, 2021 - 24 Jan 2021</span>
                    <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                </article>

            </section>
            <section className="two">
                <figure className='main-img'>
                    <img src={pic2} alt="japan" />
                </figure>

                <article className='main-content'>
                    <section className="loc-map">
                        <section className="loc-country">
                            <p className="loc-logo-holder">
                                <img src={loction} alt="location-logo" className="loc-logo" />
                            </p>
                            <p className="country">Australia</p>
                        </section>

                        <a href="" className="map-link">View on Google Maps</a>

                    </section>

                    <h2>Sydney Opera House</h2>
                    <span className='tour-date'>27 May, 2021 - 8 June 2021</span>
                    <p>The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings.</p>
                </article>

            </section>
            <section className="three">
                <figure className='main-img'>
                    <img src={pic3} alt="japan" />
                </figure>

                <article className='main-content'>
                    <section className="loc-map">
                        <section className="loc-country">
                            <p className="loc-logo-holder">
                                <img src={loction} alt="location-logo" className="loc-logo" />
                            </p>
                            <p className="country">NORWAY</p>
                        </section>

                        <a href="" className="map-link">View on Google Maps</a>

                    </section>

                    <h2>Geirangerfjord</h2>
                    <span className='tour-date'>01 Oct, 2021 - 18 Nov, 2021</span>
                    <p>The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.</p>
                </article>

            </section>


        </main>
    )
}