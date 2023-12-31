import React, { useRef, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Carousel from 'react-slick';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import Title from '../Title';
import IconTextCard from '../Cards/IconText';
import useStyle from './services-style';

const services = [
  {
    icon: 'ion-ios-globe',
    name: 'Web  Development',
    desc: 'Develope professional web applications.'
  },
  {
    icon: 'ion-logo-windows',
    name: 'Software  Development',
    desc: 'Develope professional softwares.'
  },
  {
    icon: 'ion-logo-buffer',
    name: 'Database  Management',
    desc: 'Manage your database with us.'
  },
  {
    icon: 'ion-ios-chatbubbles',
    name: 'Mobile  App  Development',
    desc: 'Develope mobile apps of your own choice.'
  },
  {
    icon: 'ion-ios-construct',
    name: 'Machine Learning',
    desc: 'Optimize your product for marketing.'
  }
];

function Services() {
  const { classes, cx } = useStyle();
  const { classes: text } = useText();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const { t } = useTranslation('common');

  const slider = useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 3,
    arrows: false,
    variableWidth: true,
    pauseOnHover: true,
    responsive: [{
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };

  useEffect(() => {
    if (theme.direction === 'rtl') {
      const lastSlide = Math.floor(services.length - 2);
      slider.current.slickGoTo(lastSlide);
    }
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.floatingTitle}>
        <Title>
          <strong>
            {t('femine-landing.services_title')}
          </strong>
        </Title>
        <Typography className={text.paragraph}>
          {t('femine-landing.services_desc')}
        </Typography>
      </div>
      <div className={classes.sliderWrap}>
        <div className={classes.carousel}>
          <IconButton
            className={cx(classes.nav, classes.prev)}
            onClick={() => slider.current.slickPrev()}
            size="large"
          >
            <i className="ion-ios-arrow-back" />
          </IconButton>
          <Carousel ref={slider} {...settings}>
            {isDesktop && (
              <div className={cx(classes.item, classes.itemPropsFirst)}>
                <div />
              </div>
            )}
            {services.map((item, index) => (
              <div key={index.toString()} className={classes.item}>
                <IconTextCard
                  icon={item.icon}
                  text={item.name}
                  desc={item.desc}
                />
              </div>
            ))}
            {isDesktop && (
              <div className={cx(classes.item, classes.itemPropsLast)}>
                <div />
              </div>
            )}
          </Carousel>
          <IconButton
            className={cx(classes.nav, classes.next)}
            onClick={() => slider.current.slickNext()}
            size="large"
          >
            <i className="ion-ios-arrow-forward" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Services;
