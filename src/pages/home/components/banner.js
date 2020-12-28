import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import classes from "./style.module.scss";
import Media from "react-media";
import classNames from "classnames";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const SLIDE_TO_SHOW = 1;
const ASPECT_RATIO = 630 / 190;

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [promoCount, setPromoCount] = useState(0);
  const [result, setResult] = useState([
    {
      id: 1,
      image_url:
        "https://www.digitalprinting.co.uk/media/images/products/slides/31/vinyl-pvc-banners-1.jpg",
    },
    {
      id: 2,
      image_url:
        "https://www.digitalprinting.co.uk/media/images/products/slides/31/vinyl-pvc-banners-1.jpg",
    },
    {
      id: 3,
      image_url:
        "https://www.digitalprinting.co.uk/media/images/products/slides/31/vinyl-pvc-banners-1.jpg",
    },
  ]);
  const slider = useRef(null);

  useEffect(() => {}, []);

  const getActiveIndex = index => {
    if (promoCount <= SLIDE_TO_SHOW) {
      return currentIndex % promoCount === index;
    } else {
      return currentIndex === index;
    }
  };

  const Dots = props => {
    return (
      <div className={classes.dots_container}>
        {result.map((promo, index) => {
          if (index < promoCount) {
            return (
              <div className={classes.dot_container} key={promo.id}>
                <div
                  className={classNames(classes.dot, {
                    [classes.active]: getActiveIndex(index),
                  })}
                  onClick={() => slider.current.slickGoTo(index)}
                />
              </div>
            );
          }
        })}
      </div>
    );
  };

  return (
    <Media
      queries={{
        xsmall: "(max-width: 480px)",
        small: "(min-width: 480.0001px) and (max-width: 720px)",
        medium: "(min-width: 720.0001px) and (max-width: 960px)",
        large: "(min-width: 960.0001px) and (max-width: 1200px)",
        xlarge: "(min-width: 1200.0001px)",
      }}
    >
      {matches => {
        let height;
        let padding = 15;
        let promoWidth;
        let containerWidth;

        const getContainerWidth = (width, padding, num) =>
          width * num + padding * (num - 1);
        const getPromoWidth = height => ASPECT_RATIO * height;

        if (matches.xlarge) {
          height = 190;
          promoWidth = getPromoWidth(height);
          containerWidth = getContainerWidth(335, padding, SLIDE_TO_SHOW);
          promoWidth += "px";
          height += "px";
        } else if (matches.large) {
          height = 190;
          promoWidth = getPromoWidth(height);
          containerWidth = getContainerWidth(335, padding, SLIDE_TO_SHOW);
          promoWidth += "px";
          height += "px";
        } else if (matches.medium) {
          height = 190;
          promoWidth = getPromoWidth(height);
          containerWidth = getContainerWidth(335, padding, SLIDE_TO_SHOW);
          promoWidth += "px";
          height += "px";
        } else if (matches.small) {
          height = 190;
          promoWidth = getPromoWidth(height);
          containerWidth = getContainerWidth(335, padding, SLIDE_TO_SHOW);
          promoWidth += "px";
          height += "px";
        } else {
          promoWidth = 335;
          height = 190;
          containerWidth = "100%";
        }

        if (result) {
          return (
            <div className={classes.banner}>
              <div className={classes.wrapper}>
                <div
                  className={classes.container}
                  style={{
                    width: containerWidth + "px",
                  }}
                >
                  <Slider
                    speed={500}
                    autoplay={promoCount !== 1}
                    slidesToShow={SLIDE_TO_SHOW}
                    ref={slider}
                    arrows={false}
                    beforeChange={(current, next) => {
                      if (next >= 0) {
                        setCurrentIndex(next);
                      }
                    }}
                  >
                    {result.map(promo => (
                      <div key={promo.id}>
                        <Link to={"/promo/" + promo.id}>
                          <div
                            className={classes.promotion_image}
                            style={{
                              backgroundImage: 'url("' + promo.image_url + '")',
                              width: promoWidth,
                              paddingBottom: height,
                            }}
                            alt={"promo"}
                          />
                        </Link>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
              <Dots />
            </div>
          );
        } else {
          return null;
        }
      }}
    </Media>
  );
}
