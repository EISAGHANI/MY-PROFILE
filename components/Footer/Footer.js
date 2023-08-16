import React from 'react';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import { useTranslation } from 'next-i18next';
import logo from '~/public/images/femine-logo.svg';
import brand from '~/public/text/brand';
import { useText } from '~/theme/common';
import useStyles from './footer-style';
import ContactForm from '../Contact/Form';

function Footer() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleSocialMediaClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" component="footer">
        <Grid container spacing={6} direction={isMobile ? 'column-reverse' : 'row'}>
          <Grid item xs={12} md={5}>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInLeftShort"
              offset={-200}
              delay={200}
              duration={0.3}
            >
              <div>
                <div className={classes.logo}>
                  <img src={logo} alt="logo" />
                  <Typography variant="h3" className={text.title}>
                    {brand.femine.name}
                  </Typography>
                  <Typography variant="h4" className={text.subtitle}>
                    {brand.femine.title}
                  </Typography>
                </div>
                <div className={classes.socmed}>
                  <IconButton aria-label="Delete" className={classes.margin} size="small" onClick={() => handleSocialMediaClick('https://www.facebook.com/eisabacha/')}>
                    <i className={cx('ion-logo-facebook', classes.fb)} />
                  </IconButton>
                  <IconButton aria-label="Delete" className={classes.margin} size="small" onClick={() => handleSocialMediaClick('https://www.instagram.com/eisaghani/')}>
                    <i className={cx('ion-logo-instagram', classes.ig)} />
                  </IconButton>
                  <IconButton aria-label="Delete" className={classes.margin} size="small" onClick={() => handleSocialMediaClick('https://twitter.com/EISABACHA')}>
                    <i className={cx('ion-logo-twitter', classes.tw)} />
                  </IconButton>
                  <IconButton aria-label="Delete" className={classes.margin} size="small" onClick={() => handleSocialMediaClick('https://www.linkedin.com/in/eisabacha/')}>
                    <i className={cx('ion-logo-linkedin', classes.in)} />
                  </IconButton>
                </div>
                {/* <Button variant="outlined" color="primary" className={classes.download} component="a">Download CV</Button> */}
                <div className={classes.contact}>
                  <Typography className={text.paragraph}>
                    {t('femine-landing.footer_contact')}
                    <br />
                    +49 162 7037290
                  </Typography>
                  <Divider className={classes.divider} />
                  <Typography className={text.paragraph}>
                    {t('femine-landing.footer_hello')}
                    <br />
                    info@eisabacha.com
                  </Typography>
                </div>
              </div>
            </ScrollAnimation>
          </Grid>
          <Grid item xs={12} md={7}>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInRightShort"
              offset={-200}
              delay={200}
              duration={0.3}
            >
              <div>
                <ContactForm />
              </div>
            </ScrollAnimation>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
