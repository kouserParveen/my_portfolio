import React from "react";

// images ko import karo
import app1 from "../img/portfolio/app-1.jpg";
import app2 from "../img/portfolio/app-2.jpg";
import app3 from "../img/portfolio/app-3.jpg";
import product1 from "../img/portfolio/product-1.jpg";
import product2 from "../img/portfolio/product-2.jpg";
import product3 from "../img/portfolio/product-3.jpg";
import branding1 from "../img/portfolio/branding-1.jpg";
import branding2 from "../img/portfolio/branding-2.jpg";
import branding3 from "../img/portfolio/branding-3.jpg";
import books1 from "../img/portfolio/books-1.jpg";
import books2 from "../img/portfolio/books-2.jpg";
import books3 from "../img/portfolio/books-3.jpg";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-product">Product</li>
            <li data-filter=".filter-branding">Branding</li>
            <li data-filter=".filter-books">Books</li>
          </ul>

          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            
            {/* App Items */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <img src={app1} className="img-fluid" alt="App 1"/>
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href={app1} title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="/portfolio-details" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <img src={app2} className="img-fluid" alt="App 2"/>
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href={app2} title="App 2" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="/portfolio-details" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <img src={app3} className="img-fluid" alt="App 3"/>
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href={app3} title="App 3" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="/portfolio-details" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>

            {/* Product Items */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <img src={product1} className="img-fluid" alt="Product 1"/>
              <div className="portfolio-info">
                <h4>Product 1</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href={product1} title="Product 1" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="/portfolio-details" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <img src={product2} className="img-fluid" alt="Product 2"/>
              <div className="portfolio-info">
                <h4>Product 2</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href={product2} title="Product 2" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="/portfolio-details" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <img src={product3} className="img-fluid" alt="Product 3"/>
              <div className="portfolio-info">
                <h4>Product 3</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href={product3} title="Product 3" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="/portfolio-details" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>

            {/* Branding Items */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <img src={branding1} className="img-fluid" alt="Branding 1"/>
              <div className="portfolio-info">
                <h4>Branding 1</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href={branding1} title="Branding 1" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="/portfolio-details" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <img src={branding2} className="img-fluid" alt="Branding 2"/>
              <div className="portfolio-info">
                <h4>Branding 2</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href={branding2} title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="/portfolio-details" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <img src={branding3} className="img-fluid" alt="Branding 3"/>
              <div className="portfolio-info">
                <h4>Branding 3</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href={branding3} title="Branding 3" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="/portfolio-details" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>

            {/* Books Items */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
              <img src={books1} className="img-fluid" alt="Books 1"/>
              <div className="portfolio-info">
                <h4>Books 1</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href={books1} title="Books 1" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="/portfolio-details" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
              <img src={books2} className="img-fluid" alt="Books 2"/>
              <div className="portfolio-info">
                <h4>Books 2</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href={books2} title="Books 2" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="/portfolio-details" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
              <img src={books3} className="img-fluid" alt="Books 3"/>
              <div className="portfolio-info">
                <h4>Books 3</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href={books3} title="Books 3" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="/portfolio-details" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Portfolio;

