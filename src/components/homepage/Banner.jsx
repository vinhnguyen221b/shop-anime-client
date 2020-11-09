import React from "react";
import Slider from "react-slick";
function Banner(props) {
  const settings = {
    arrows: false,
    autoplay: true,
    speed: 2000,
    infinite: true,
  };
  return (
    <div className="bannerslide">
      <Slider {...settings}>
        <div className="bannerslide-content">
          <div className="bannerTextIntro">
            <h1 className="bannerTitle">Your name (2016)</h1>
            <p className="bannerIntro">
              Two strangers find themselves linked in a bizarre way. When a
              connection forms, will distance be the only thing to keep them
              apart?
            </p>
            <div className="bannerReview">
              <div className="imdb">IMDb</div>
              <div className="imdbScore">8.4</div>
            </div>
            <div className="bannerButton">
              <a
                href="https://www.youtube.com/watch?v=xU47nhruN-Q"
                target="_blank"
                className="bannerTrailer"
                rel="noopener noreferrer"
              >
                Trailer <i className="fas fa-play"></i>
              </a>
            </div>
          </div>
          <div className="banner-overlay"></div>
          <img src="./ani1.jpg" alt="Flash" className="bannerImage" />
        </div>
        <div className="bannerslide-content">
          <div className="bannerTextIntro">
            <h1 className="bannerTitle">Grave of the Fireflies (1988)</h1>
            <p className="bannerIntro">
              A young boy and his little sister struggle to survive in Japan
              during World War II.
            </p>
            <div className="bannerReview">
              <div className="imdb">IMDb</div>
              <div className="imdbScore">8.5</div>
            </div>
            <div className="bannerButton">
              <a
                href="https://www.youtube.com/watch?v=4vPeTSRd580"
                target="_blank"
                className="bannerTrailer"
                rel="noopener noreferrer"
              >
                Trailer <i className="fas fa-play"></i>
              </a>
            </div>
          </div>
          <div className="banner-overlay"></div>
          <img src="./ani2.jpg" alt="Batman" className="bannerImage" />
        </div>
        <div className="bannerslide-content">
          <div className="bannerTextIntro">
            <h1 className="bannerTitle">5 Centimeters Per Second (2007)</h1>
            <p className="bannerIntro">
              Told in three interconnected segments, we follow a young man named
              Takaki through his life as cruel winters, cold technology, and
              finally, adult obligations and responsibility converge to test the
              delicate petals of love.
            </p>
            <div className="bannerReview">
              <div className="imdb">IMDb</div>
              <div className="imdbScore">7.6</div>
            </div>
            <div className="bannerButton">
              <a
                href="https://www.youtube.com/watch?v=wdM7athAem0"
                target="_blank"
                className="bannerTrailer"
                rel="noopener noreferrer"
              >
                Trailer <i className="fas fa-play"></i>
              </a>
            </div>
          </div>
          <div className="banner-overlay"></div>
          <img src="./ani3.jpg" alt="DrStrange" className="bannerImage" />
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
