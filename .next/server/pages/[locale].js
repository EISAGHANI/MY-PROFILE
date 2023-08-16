"use strict";
(() => {
var exports = {};
exports.id = 513;
exports.ids = [513];
exports.modules = {

/***/ 3180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ About_About)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1168);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./public/text/brand.js
var brand = __webpack_require__(15);
// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__(4618);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/About/about-style.js

const gold = '#D6BD96';
const aboutStyles = (0,mui_.makeStyles)({
  uniqId: 'about'
})(theme => ({
  root: {
    position: 'relative',
    [theme.breakpoints.up('lg')]: {
      '& .MuiContainer-root': {
        maxWidth: 1280,
        padding: 0
      }
    },
    '& > div': {
      [theme.breakpoints.down('sm')]: {
        padding: 0
      }
    }
  },
  about: {
    display: 'flex',
    flexDirection: 'column-reverse',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      '& > h5': {
        fontSize: 18,
        lineHeight: '28px',
        padding: theme.spacing(0, 2)
      }
    }
  },
  reward: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(0.5)
    },
    [theme.breakpoints.down('sm')]: {
      overflow: 'auto'
    }
  },
  item: {
    textAlign: 'center',
    color: gold,
    margin: theme.spacing(),
    borderRadius: '50%',
    position: 'relative',
    width: 160,
    height: 160,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      background: `linear-gradient(120deg, ${theme.palette.secondary.light}, ${theme.palette.primary.main})`,
      '&:before': {
        background: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
        content: '""',
        borderRadius: '50%',
        position: 'absolute',
        width: 'calc(100% - 4px)',
        height: 'calc(100% - 4px)',
        left: 2,
        top: 2
      }
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    },
    '& > div': {
      position: 'relative',
      zIndex: 1
    },
    '& figure': {
      height: 40,
      margin: theme.spacing(0, 0, 2),
      [theme.breakpoints.down('md')]: {
        height: 50
      },
      '& img': {
        height: '100%'
      }
    },
    '& p': {
      fontFamily: 'Times New Roman',
      [theme.breakpoints.down('md')]: {
        fontSize: 16
      }
    },
    '& h5': {
      fontSize: 18,
      fontWeight: theme.typography.fontWeightMedium,
      textTransform: 'uppercase',
      [theme.breakpoints.down('md')]: {
        fontSize: 16
      }
    }
  },
  photo: {
    position: 'relative',
    marginTop: -140,
    background: 'none',
    zIndex: 1,
    width: 350,
    height: 350,
    borderRadius: '50%',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      width: 200,
      height: 200,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: theme.spacing(2)
    },
    '& figure': {
      margin: 0,
      borderRadius: theme.rounded.big,
      overflow: 'hidden',
      marginLeft: -1,
      marginTop: -1,
      width: '101%',
      height: '101%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& img': {
        transform: 'scale(1.02)',
        width: '100%',
        minHeight: '100%'
      }
    }
  },
  socmed: {
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: `${theme.spacing(4)} auto`,
    maxWidth: 600,
    '& button': {
      margin: theme.spacing(1, 2),
      width: 36,
      height: 36,
      '& i': {
        color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
      }
    },
    '& i': {
      fontSize: 22
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const about_style = (aboutStyles);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/About/About.js















function About() {
  const theme = (0,styles_.useTheme)();
  const {
    classes
  } = about_style();
  const {
    classes: text
  } = (0,common/* useText */.XK)();
  const isMobile = useMediaQuery_default()(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery_default()(theme.breakpoints.up('md'));
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/jsx_runtime_.jsx((Container_default()), {
      maxWidth: isMobile ? 'sm' : 'lg',
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        spacing: 0,
        children: [/*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
          item: true,
          lg: 2,
          xs: 12
        }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
          item: true,
          lg: 9,
          xs: 12,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: classes.about,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.reward,
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.item,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("figure", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: "/images/femine/reward1.svg",
                      alt: "badge"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                    component: "p",
                    className: text.paragraph,
                    children: "Special Mention"
                  }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                    variant: "h5",
                    children: " Education "
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.item,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("figure", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: "/images/femine/reward2.svg",
                      alt: "badge"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                    component: "p",
                    className: text.paragraph,
                    children: "20 plus"
                  }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                    variant: "h5",
                    children: "Certificates"
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.item,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("figure", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: "/images/femine/reward3.svg",
                      alt: "badge"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                    component: "p",
                    className: text.paragraph,
                    children: "Entrepreneurship"
                  }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                    variant: "h5",
                    children: "Stratups"
                  })]
                })
              })]
            }), !isTablet && /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: classes.socmed,
                children: [/*#__PURE__*/jsx_runtime_.jsx((IconButton_default()), {
                  "aria-label": "Delete",
                  className: classes.margin,
                  size: "small",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "ion-logo-facebook"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx((IconButton_default()), {
                  "aria-label": "Delete",
                  className: classes.margin,
                  size: "small",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "ion-logo-twitter"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx((IconButton_default()), {
                  "aria-label": "Delete",
                  className: classes.margin,
                  size: "small",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "ion-logo-google"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx((IconButton_default()), {
                  "aria-label": "Delete",
                  className: classes.margin,
                  size: "small",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "ion-logo-linkedin"
                  })
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                variant: "h5",
                children: t('femine-landing.banner_desc')
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx((Paper_default()), {
              className: classes.photo,
              children: /*#__PURE__*/jsx_runtime_.jsx("figure", {
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: brand/* default.femine.avatar */.Z.femine.avatar,
                  alt: "avatar"
                })
              })
            })]
          })
        })]
      })
    })
  });
}

/* harmony default export */ const About_About = (About);
;// CONCATENATED MODULE: ./components/About/index.js


/***/ }),

/***/ 2409:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15);
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4618);
/* harmony import */ var _theme_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4142);
/* harmony import */ var _SideNavigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1509);
/* harmony import */ var _SideNavigation_SideNavigationIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2233);
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(357);
/* harmony import */ var _Hero_Animation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7592);
/* harmony import */ var _Hero_AnimationSlideshow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4487);
/* harmony import */ var _Hero_Slideshow__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1638);
/* harmony import */ var _Hero_Video__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7191);
/* harmony import */ var _banner_style__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6136);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Settings__WEBPACK_IMPORTED_MODULE_12__]);
_Settings__WEBPACK_IMPORTED_MODULE_12__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





















function BannerNav(props) {
  const {
    classes: text
  } = (0,_theme_common__WEBPACK_IMPORTED_MODULE_8__/* .useText */ .XK)();
  const {
    classes
  } = (0,_banner_style__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)();
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)('common');
  const isTablet = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default()(theme => theme.breakpoints.down('lg'));
  const {
    0: bannerHero
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('video');
  const {
    onToggleDark,
    onToggleDir
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_1___default()), {
      container: true,
      spacing: 0,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_1___default()), {
        item: true,
        lg: _theme_config__WEBPACK_IMPORTED_MODULE_9__/* ["default"].navigation */ .Z.navigation === 'icon' ? 1 : 2,
        xs: 12,
        children: !isTablet && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [_theme_config__WEBPACK_IMPORTED_MODULE_9__/* ["default"].navigation */ .Z.navigation === 'icon' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_SideNavigation_SideNavigationIcon__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}), _theme_config__WEBPACK_IMPORTED_MODULE_9__/* ["default"].navigation */ .Z.navigation === 'text' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_SideNavigation__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_1___default()), {
        item: true,
        lg: _theme_config__WEBPACK_IMPORTED_MODULE_9__/* ["default"].navigation */ .Z.navigation === 'icon' ? 11 : 10,
        xs: 12,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
          className: classes.banner,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
            className: classes.cover,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
              className: classes.figure,
              children: [bannerHero === 'image' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
                className: classes.img,
                style: {
                  backgroundImage: `url(${_public_text_brand__WEBPACK_IMPORTED_MODULE_7__/* ["default"].femine.cover */ .Z.femine.cover})`
                }
              }), bannerHero === 'video' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Hero_Video__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {}), bannerHero === 'animation' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Hero_Animation__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}), bannerHero === 'animation-slide' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Hero_AnimationSlideshow__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {}), bannerHero === 'slideshow' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Hero_Slideshow__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
                className: classes.overlay
              })]
            })
          }), !isTablet && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
            className: classes.settingIcon,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Settings__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
              toggleDark: onToggleDark,
              toggleDir: onToggleDir
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
            className: classes.text,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
              variant: "h4",
              className: text.title2,
              children: [t('femine-landing.banner_greeting'), ","]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
              variant: "h2",
              className: text.title,
              children: [t('femine-landing.banner_me'), "\xA0Eisa, Software Engineer"]
            }), !isTablet && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                variant: "h5",
                className: text.subtitle2,
                children: t('femine-landing.banner_desc')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                className: classes.socmed,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
                  variant: "outlined",
                  className: classes.download,
                  component: "a",
                  children: "Download CV"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3___default()), {
                  "aria-label": "Delete",
                  className: classes.margin,
                  size: "small",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("i", {
                    className: "ion-logo-facebook"
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3___default()), {
                  "aria-label": "Delete",
                  className: classes.margin,
                  size: "small",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("i", {
                    className: "ion-logo-twitter"
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3___default()), {
                  "aria-label": "Delete",
                  className: classes.margin,
                  size: "small",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("i", {
                    className: "ion-logo-instagram"
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3___default()), {
                  "aria-label": "Delete",
                  className: classes.margin,
                  size: "small",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("i", {
                    className: "ion-logo-linkedin"
                  })
                })]
              })]
            })]
          })]
        })
      })]
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerNav);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hero_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8961);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function Animation() {
  const {
    classes
  } = (0,_hero_style__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (window.VANTA !== undefined) {
      window.VANTA.BIRDS({
        el: '#vanta_art',
        mouseControls: false,
        touchControls: true,
        gyroControls: false,
        minHeight: 500,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1
      });
    }
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    className: classes.illustration,
    id: "vanta_art"
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Animation);

/***/ }),

/***/ 4487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4882);
/* harmony import */ var _hero_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8961);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function AnimationSlideshow() {
  const {
    classes
  } = (0,_hero_style__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
  const images = [_public_images_imgAPI__WEBPACK_IMPORTED_MODULE_2__/* ["default"].femine[1] */ .Z.femine[1], _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_2__/* ["default"].femine[2] */ .Z.femine[2], _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_2__/* ["default"].femine[3] */ .Z.femine[3], _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_2__/* ["default"].femine[4] */ .Z.femine[4], _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_2__/* ["default"].femine[5] */ .Z.femine[5]];
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    autoplaySpeed: 5000,
    autoplay: true,
    slidesToShow: 1,
    arrows: false,
    fade: true
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (window.particlesJS !== 'undefined') {
      window.particlesJS('particles_background', {
        background: {
          color: '#333'
        },
        particles: {
          number: {
            value: 400,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: '#fff'
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000'
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: 'img/github.svg',
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 10,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: false,
            distance: 500,
            color: '#ffffff',
            opacity: 0.4,
            width: 2
          },
          move: {
            enable: true,
            speed: 3,
            direction: 'bottom',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'bubble'
            },
            onclick: {
              enable: true,
              mode: 'repulse'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 0.5
              }
            },
            bubble: {
              distance: 400,
              size: 4,
              duration: 0.3,
              opacity: 1,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      });
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: classes.animationSlider,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: classes.slideshow,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_1___default()), _objectSpread(_objectSpread({}, settings), {}, {
        children: images.map((item, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: classes.slideItem,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: classes.img,
            style: {
              backgroundImage: `url(${item})`
            }
          })
        }, index.toString()))
      }))
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: classes.particleBackground,
      id: "particles_background"
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimationSlideshow);

/***/ }),

/***/ 1638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4882);
/* harmony import */ var _hero_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8961);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function Slideshow() {
  const {
    classes
  } = (0,_hero_style__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
  const images = [_public_images_imgAPI__WEBPACK_IMPORTED_MODULE_2__/* ["default"].femine[1] */ .Z.femine[1], _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_2__/* ["default"].femine[2] */ .Z.femine[2], _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_2__/* ["default"].femine[3] */ .Z.femine[3], _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_2__/* ["default"].femine[4] */ .Z.femine[4], _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_2__/* ["default"].femine[5] */ .Z.femine[5]];
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    autoplaySpeed: 5000,
    autoplay: true,
    slidesToShow: 1,
    arrows: false,
    fade: true
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
    className: classes.slideshow,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_1___default()), _objectSpread(_objectSpread({}, settings), {}, {
      children: images.map((item, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: classes.slideItem,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: classes.img,
          style: {
            backgroundImage: `url(${item})`
          }
        })
      }, index.toString()))
    }))
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slideshow);

/***/ }),

/***/ 7191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Hero_Video)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-youtube"
const external_react_youtube_namespaceObject = require("react-youtube");
var external_react_youtube_default = /*#__PURE__*/__webpack_require__.n(external_react_youtube_namespaceObject);
// EXTERNAL MODULE: ./components/BannerNav/Hero/hero-style.js
var hero_style = __webpack_require__(8961);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/BannerNav/Hero/Video.js





function Video() {
  const {
    0: player,
    1: setPlayer
  } = (0,external_react_.useState)([]);
  const {
    classes
  } = (0,hero_style/* default */.Z)();
  const opts = {
    height: '720',
    width: '1080',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      origin: 'http://localhost:3001'
    }
  };

  const _onEnd = event => {
    event.target.playVideo();
  };

  const _onReady = event => {
    player.push(event.target);
    setPlayer(player);
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.video,
    children: /*#__PURE__*/jsx_runtime_.jsx((external_react_youtube_default()), {
      videoId: "Yjgh6keboFw",
      opts: opts,
      onReady: _onReady,
      onEnd: _onEnd
    })
  });
}

/* harmony default export */ const Hero_Video = (Video);

/***/ }),

/***/ 8961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6508);
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tss_react_mui__WEBPACK_IMPORTED_MODULE_0__);

const heroStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_0__.makeStyles)({
  uniqId: 'hero'
})(theme => ({
  video: {
    position: 'relative',
    zIndex: 10,
    overflow: 'hidden',
    height: 500,
    width: '120%',
    '& iframe': {
      width: '100%',
      marginTop: -60,
      marginLeft: '-10%'
    },
    [theme.breakpoints.up('md')]: {
      height: 650
    },
    background: theme.palette.common.black
  },
  illustration: {
    width: '100%',
    height: 500
  },
  particleBackground: {
    position: 'absolute',
    width: '100%',
    height: 500,
    top: 0,
    left: 0
  },
  slideshow: {
    height: '100%',
    width: '100%',
    '& > div': {
      height: '100%',
      width: '100%'
    }
  },
  slideItem: {
    height: 500,
    width: '100%'
  },
  img: {
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (heroStyles);

/***/ }),

/***/ 6136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6508);
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tss_react_mui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);


const bannerStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_0__.makeStyles)({
  uniqId: 'banner'
})((theme, _params, classes) => ({
  root: {
    display: 'block',
    [theme.breakpoints.down('lg')]: {
      paddingTop: theme.spacing(10),
      '& > div': {
        padding: 0
      }
    }
  },
  cover: {
    position: 'absolute',
    clip: 'rect(auto,auto, auto, auto)',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    zIndex: 1
  },
  figure: {
    display: 'block',
    width: '100%',
    height: '100%'
  },
  img: {
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0
  },
  overlay: {
    backgroundImage: theme.palette.mode === 'dark' ? `linear-gradient(120deg, ${theme.palette.primary.main}, ${theme.palette.secondary.dark})` : `linear-gradient(120deg, ${theme.palette.primary.main}, ${theme.palette.secondary.light})`,
    opacity: 0.85,
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 20
  },
  banner: {
    position: 'relative',
    padding: theme.spacing(10, 3, 0),
    color: theme.palette.common.white,
    borderRadius: theme.rounded.medium,
    height: 490,
    overflow: 'hidden',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      height: 420
    },
    [theme.breakpoints.down('sm')]: {
      height: 400
    },
    [theme.breakpoints.up('sm')]: {
      borderRadius: theme.rounded.big,
      alignItems: 'center',
      borderTopRightRadius: 0,
      padding: theme.spacing(10, 15)
    }
  },
  text: {
    position: 'relative',
    maxWidth: 720,
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      margin: '0 auto'
    },
    '& h4, & h2, & h5': {
      marginBottom: theme.spacing(3)
    }
  },
  socmed: {
    marginBottom: theme.spacing(3),
    '& button': {
      margin: theme.spacing(),
      color: theme.palette.primary.dark,
      width: 36,
      height: 36,
      '& i': {
        color: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.common.white, 0.75)
      }
    },
    '& i': {
      fontSize: 24
    }
  },
  bar: {},
  settingIcon: {
    position: 'absolute',
    top: theme.spacing(10),
    right: theme.spacing(10),
    zIndex: 1,
    '& svg': {
      fill: theme.palette.common.white
    }
  },
  mobileMenu: {
    marginRight: theme.spacing(),
    [`& .${classes.bar}`]: {
      backgroundColor: theme.palette.text.secondary,
      '&:after, &:before': {
        backgroundColor: theme.palette.text.secondary
      }
    }
  },
  mobileNav: {
    width: 240,
    background: theme.palette.background.default,
    padding: theme.spacing(10, 2, 4)
  },
  menuList: {
    textTransform: 'capitalize'
  },
  download: {
    color: theme.palette.common.white,
    borderColor: theme.palette.common.white,
    fontSize: 16,
    padding: theme.spacing(1, 4),
    marginRight: theme.spacing(3)
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bannerStyles);

/***/ }),

/***/ 2366:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _BannerNav__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _BannerNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2409);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_BannerNav__WEBPACK_IMPORTED_MODULE_0__]);
_BannerNav__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Blog_Blog)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__(4618);
// EXTERNAL MODULE: ./components/Title/index.js + 2 modules
var Title = __webpack_require__(6628);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1168);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
// EXTERNAL MODULE: ./components/Cards/cards-style.js
var cards_style = __webpack_require__(4918);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Cards/BlogPost.js










function BlogPost(props) {
  const {
    classes
  } = (0,cards_style/* default */.Z)();
  const {
    classes: text
  } = (0,common/* useText */.XK)();
  const {
    img,
    title,
    desc
  } = props;
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((Paper_default()), {
    className: classes.post,
    children: [/*#__PURE__*/jsx_runtime_.jsx("figure", {
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: img,
        alt: "thumb"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.text,
      children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
        variant: "h5",
        className: text.subtitle2,
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
        display: "block",
        component: "p",
        className: text.paragraph,
        children: desc
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
      href: "#",
      color: "primary",
      className: classes.readmore,
      classes: {
        root: classes.rootReadmore,
        text: classes.textReadmore
      },
      children: t('femine-landing.read_more')
    })]
  });
}

/* harmony default export */ const Cards_BlogPost = (BlogPost);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/Blog/blog-style.js

const blogStyles = (0,mui_.makeStyles)({
  uniqId: 'blog'
})(theme => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
    '& > div': {
      [theme.breakpoints.down('lg')]: {
        padding: 0
      }
    }
  },
  props: {
    width: 240,
    height: 240,
    '&:focus': {
      outline: 'none'
    }
  },
  floatingTitle: {
    textAlign: 'center',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      left: theme.spacing(8),
      top: theme.spacing(12),
      width: 240
    }
  },
  carousel: {
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(3)
    }
  },
  item: {
    padding: theme.spacing(0, 1),
    margin: theme.spacing(1, 0),
    direction: 'ltr',
    '&:focus': {
      outline: 'none'
    }
  },
  link: {
    padding: 0,
    '& span': {
      textTransform: 'none',
      fontWeight: theme.typography.fontWeightRegular
    }
  },
  nav: {
    position: 'absolute',
    top: '42%',
    width: 36,
    height: 36,
    padding: 0,
    minWidth: 0,
    zIndex: 3,
    background: theme.palette.background.paper,
    border: 'none',
    boxShadow: 'none',
    transform: `scale(2.5) ${theme.direction === 'rtl' ? 'rotate(180deg)' : 'rotate(0deg)'}`,
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    '& i': {
      transform: 'scale(1.2)',
      color: theme.palette.text.primary
    }
  },
  prev: {
    left: 6
  },
  next: {
    right: 6
  },
  itemPropsFirst: {
    '& div': {
      width: theme.direction === 'rtl' ? 400 : 350,
      [theme.breakpoints.down(1500)]: {
        width: theme.direction === 'rtl' ? 500 : 300
      }
    },
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  itemPropsLast: {
    width: theme.direction === 'rtl' ? 350 : 400,
    '& div': {
      [theme.breakpoints.down(1500)]: {
        width: theme.direction === 'rtl' ? 300 : 500
      }
    },
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const blog_style = (blogStyles);
// EXTERNAL MODULE: ./public/images/imgAPI.js
var imgAPI = __webpack_require__(4882);
;// CONCATENATED MODULE: ./components/Blog/Blog.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const blogData = [{
  img: imgAPI/* default.photo.0 */.Z.photo[0],
  title: 'Vivamus sit amet interdum elit',
  desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
}, {
  img: imgAPI/* default.photo.1 */.Z.photo[1],
  title: 'Vivamus sit amet interdum elit',
  desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
}, {
  img: imgAPI/* default.photo.2 */.Z.photo[2],
  title: 'Vivamus sit amet interdum elit',
  desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
}, {
  img: imgAPI/* default.photo.3 */.Z.photo[3],
  title: 'Vivamus sit amet interdum elit',
  desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
}, {
  img: imgAPI/* default.photo.4 */.Z.photo[4],
  title: 'Vivamus sit amet interdum elit',
  desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
}, {
  img: imgAPI/* default.photo.5 */.Z.photo[5],
  title: 'Vivamus sit amet interdum elit',
  desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
}];

function Blog() {
  const slider = (0,external_react_.useRef)(null);
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const theme = (0,styles_.useTheme)();
  const {
    classes: text
  } = (0,common/* useText */.XK)();
  const isDesktop = useMediaQuery_default()(theme.breakpoints.up('md'));
  const {
    classes,
    cx
  } = blog_style();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 4,
    arrows: false,
    pauseOnHover: true,
    variableWidth: true,
    responsive: [{
      breakpoint: 1080,
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
  (0,external_react_.useEffect)(() => {
    if (theme.direction === 'rtl') {
      const lastSlide = Math.floor(blogData.length - 2);
      slider.current.slickGoTo(lastSlide);
    }
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.floatingTitle,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Title/* default */.Z, {
        children: [t('femine-landing.blog_title'), "\xA0", /*#__PURE__*/jsx_runtime_.jsx("strong", {
          children: t('femine-landing.blog_titlebold')
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
        gutterBottom: true,
        className: text.paragraph,
        children: t('femine-landing.blog_desc')
      }), /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
        className: classes.link,
        color: "primary",
        href: "#",
        children: "luxi-theme.blog.com"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.sliderWrap,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.carousel,
        children: [/*#__PURE__*/jsx_runtime_.jsx((IconButton_default()), {
          className: cx(classes.nav, classes.prev),
          onClick: () => slider.current.slickPrev(),
          size: "large",
          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "ion-ios-arrow-back"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), _objectSpread(_objectSpread({
          ref: slider
        }, settings), {}, {
          children: [isDesktop && /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: cx(classes.item, classes.itemPropsFirst),
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {})
          }), blogData.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.item,
            children: /*#__PURE__*/jsx_runtime_.jsx(Cards_BlogPost, {
              img: item.img,
              title: item.title,
              desc: item.desc
            })
          }, index.toString())), isDesktop && /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: cx(classes.item, classes.itemPropsLast),
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {})
          })]
        })), /*#__PURE__*/jsx_runtime_.jsx((IconButton_default()), {
          className: cx(classes.nav, classes.next),
          onClick: () => slider.current.slickNext(),
          size: "large",
          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "ion-ios-arrow-forward"
          })
        })]
      })
    })]
  });
}

/* harmony default export */ const Blog_Blog = (Blog);
;// CONCATENATED MODULE: ./components/Blog/index.js


/***/ }),

/***/ 4918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6508);
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tss_react_mui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);


const cardsStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_0__.makeStyles)({
  uniqId: 'card'
})((theme, _params, classes) => ({
  iconText: {
    position: 'relative',
    textAlign: 'center',
    padding: theme.spacing(2),
    borderRadius: 70,
    background: theme.palette.background.default,
    width: 240,
    height: 200,
    transition: 'all 0.3s ease-out',
    overflow: 'hidden',
    [theme.breakpoints.down(1500)]: {
      width: 200
    },
    '&:hover': {
      background: theme.palette.common.black,
      color: theme.palette.common.white,
      [`& .${classes.more}`]: {
        bottom: 0
      },
      [`& .${classes.name}`]: {
        color: theme.palette.secondary.main,
        top: 0,
        '&:after': {
          width: 30
        }
      },
      [`& .${classes.desc}`]: {
        top: 0,
        opacity: 1
      },
      [`& .${classes.icon}`]: {
        transform: 'scale(0.5)',
        opacity: 0
      }
    }
  },
  icon: {
    marginBottom: theme.spacing(2),
    transition: 'all 0.3s ease-out',
    '& span': {
      '&:before': {
        fontSize: 130,
        background: `linear-gradient(120deg, ${theme.palette.primary.main}, ${theme.palette.secondary.light})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }
    }
  },
  more: {
    position: 'absolute',
    bottom: -76,
    width: '100%',
    padding: theme.spacing(3),
    left: 0,
    height: 200,
    transition: 'all 0.3s ease-out',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  name: {
    fontWeight: theme.typography.fontWeightBold,
    transition: 'all 0.3s ease-out',
    marginBottom: theme.spacing(4),
    top: 30,
    fontSize: 16,
    position: 'relative',
    '&:after': {
      content: '""',
      width: 0,
      transition: 'all 0.5s ease-out',
      display: 'block',
      position: 'relative',
      margin: '0 auto',
      top: theme.spacing(1),
      borderTop: `2px solid ${theme.palette.primary.main}`
    }
  },
  desc: {
    top: 60,
    position: 'relative',
    opacity: 0,
    transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  },
  figure: {},
  img: {},
  imgThumb: {
    border: `8px solid ${theme.palette.background.paper}`,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: theme.rounded.medium,
    [theme.breakpoints.up('sm')]: {
      borderRadius: theme.rounded.big
    },
    '& button': {
      textAlign: 'left',
      width: '100%',
      height: '100%'
    },
    [`& .${classes.figure}`]: {
      height: '100%',
      width: '100%',
      position: 'relative',
      margin: 0,
      overflow: 'hidden',
      borderRadius: theme.rounded.medium,
      [theme.breakpoints.up('sm')]: {
        borderRadius: 70
      }
    },
    [`& .${classes.img}`]: {
      display: 'block',
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      transform: 'scale(1.1)',
      transition: 'transform 0.2s ease-out'
    },
    '&:hover': {
      [`& .${classes.img}`]: {
        transform: 'scale(1)'
      },
      [`& .${classes.detail}`]: {
        opacity: 0.95,
        backgroundPosition: '60% 0',
        '&:before': {
          bottom: 0
        },
        '& h6, & a': {
          transform: 'translate(0, 20px)'
        }
      }
    }
  },
  detail: {
    position: 'absolute',
    transition: 'all 0.3s ease-out',
    width: '100%',
    bottom: 0,
    opacity: 0,
    background: `linear-gradient(120deg, ${theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light}, ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light, 0.55)})`,
    backgroundSize: '300%',
    backgroundPosition: '0% 0',
    padding: theme.spacing(3, 4),
    borderRadius: 70,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& > *': {
      transition: 'all 0.4s ease-out'
    },
    '& h6': {
      position: 'relative',
      transform: 'translate(0, 60px)',
      marginBottom: theme.spacing(3),
      lineHeight: '36px'
    },
    '& a': {
      fontSize: 18,
      textDecoration: 'underline',
      position: 'relative',
      transform: 'translate(0, 60px)'
    }
  },
  short: {
    height: 240,
    [theme.breakpoints.down('lg')]: {
      height: 210
    },
    [`& .${classes.img}`]: {
      width: '100%'
    },
    '&:before': {
      width: 80,
      height: 80
    },
    [`& .${classes.detail}`]: {
      height: '100%'
    }
  },
  medium: {
    height: 320,
    [theme.breakpoints.down('sm')]: {
      height: 210
    },
    [`& .${classes.img}`]: {
      width: '100%'
    },
    [`& .${classes.detail}`]: {
      height: '100%'
    }
  },
  long: {
    height: 480,
    [theme.breakpoints.down('sm')]: {
      height: 210
    },
    [`& .${classes.img}`]: {
      height: '100%'
    },
    '&:before': {
      width: 190,
      height: 260
    },
    [`& .${classes.figure}`]: {
      '&:after': {
        width: 300,
        height: 300,
        left: -200,
        bottom: -120
      }
    },
    [`& .${classes.detail}`]: {
      height: '80%'
    }
  },
  post: {
    height: 380,
    width: 256,
    position: 'relative',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      marginBottom: 12
    },
    '& figure': {
      margin: 0,
      width: '100%',
      height: 140,
      overflow: 'hidden',
      '& img': {
        width: '100%',
        minHeight: '100%'
      }
    }
  },
  text: {
    height: 180,
    padding: theme.spacing(3),
    '& h5': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing()
    },
    '& p': {
      color: theme.palette.text.secondary,
      display: '-webkit-box',
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical'
    }
  },
  readmore: {
    '& span': {
      fontWeight: theme.typography.fontWeightRegular
    },
    margin: theme.spacing(0, 3),
    lineHeight: '16px !important'
  },
  textReadmore: {
    padding: '0px!important'
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cardsStyles);

/***/ }),

/***/ 4270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Counter_Counter)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-countup"
const external_react_countup_namespaceObject = require("react-countup");
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_namespaceObject);
// EXTERNAL MODULE: external "react-scroll-animation-wrapper"
var external_react_scroll_animation_wrapper_ = __webpack_require__(5902);
var external_react_scroll_animation_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_react_scroll_animation_wrapper_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__(4618);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/Counter/counter-style.js

const counterStyles = (0,mui_.makeStyles)({
  uniqId: 'counter'
})(theme => ({
  counterWrap: {
    overflow: 'hidden',
    position: 'relative',
    background: theme.palette.mode === 'dark' ? `linear-gradient(120deg, ${theme.palette.secondary.dark}, ${theme.palette.primary.dark})` : `linear-gradient(120deg, ${theme.palette.secondary.light}, ${theme.palette.primary.light})`,
    padding: theme.spacing(5, 0),
    borderRadius: theme.rounded.medium,
    [theme.breakpoints.up('sm')]: {
      borderRadius: 140
    }
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    }
  },
  counterItem: {
    position: 'relative',
    zIndex: 1,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(5)
    },
    '& i': {
      fontWeight: theme.typography.fontWeightBold,
      marginRight: theme.spacing(2),
      fontSize: 64,
      lineHeight: '40px'
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const counter_style = (counterStyles);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Counter/Counter.js












function Counter() {
  const {
    classes
  } = counter_style();
  const {
    classes: text
  } = (0,common/* useText */.XK)();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    0: play,
    1: setPlay
  } = (0,external_react_.useState)(false);

  const countup = (val, isPlay) => /*#__PURE__*/jsx_runtime_.jsx("span", {
    children: isPlay ? /*#__PURE__*/jsx_runtime_.jsx((external_react_countup_default()), {
      end: val
    }) : 0
  });

  const handlePlay = visible => {
    if (visible.inViewport) {
      setTimeout(() => {
        setPlay(true);
      }, 500);
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx((Container_default()), {
    maxWidth: "lg",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.counterWrap,
      children: /*#__PURE__*/jsx_runtime_.jsx((Container_default()), {
        maxWidth: "md",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
          container: true,
          justifyContent: "center",
          alignItems: "center",
          className: classes.root,
          spacing: 6,
          children: [/*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
            md: 4,
            item: true,
            children: /*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
              animateOnce: true,
              animateIn: "fadeIn",
              offset: -300,
              afterAnimatedIn: handlePlay,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: classes.counterItem,
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: classes.text,
                  children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "ion-ios-briefcase-outline"
                  }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                    variant: "h4",
                    className: text.title,
                    children: countup(123, play)
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                  variant: "h6",
                  className: text.subtitle2,
                  children: t('femine-landing.counter_completed')
                })]
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
            md: 4,
            item: true,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.counterItem,
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: classes.text,
                children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "ion-ios-time-outline"
                }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                  variant: "h4",
                  className: text.title,
                  children: countup(4567, play)
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                variant: "h6",
                className: text.subtitle2,
                children: t('femine-landing.counter_hour')
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
            md: 4,
            item: true,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.counterItem,
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: classes.text,
                children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "ion-ios-heart-outline"
                }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                  variant: "h4",
                  className: text.title,
                  children: countup(89, play)
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                variant: "h6",
                className: text.subtitle2,
                children: t('femine-landing.counter_happy')
              })]
            })
          })]
        })
      })
    })
  });
}

/* harmony default export */ const Counter_Counter = (Counter);
;// CONCATENATED MODULE: ./components/Counter/index.js


/***/ }),

/***/ 447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Footer_Footer)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-scroll-animation-wrapper"
var external_react_scroll_animation_wrapper_ = __webpack_require__(5902);
var external_react_scroll_animation_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_react_scroll_animation_wrapper_);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(3646);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./public/images/femine-logo.svg
var femine_logo = __webpack_require__(1619);
var femine_logo_default = /*#__PURE__*/__webpack_require__.n(femine_logo);
// EXTERNAL MODULE: ./public/text/brand.js
var brand = __webpack_require__(15);
// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__(4618);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/Footer/footer-style.js

const footerStyles = (0,mui_.makeStyles)({
  uniqId: 'footer'
})(theme => ({
  root: {
    textAlign: 'center',
    paddingBottom: theme.spacing(5)
  },
  decoration: {},
  logo: {
    color: theme.palette.text.secondary,
    [theme.breakpoints.down('lg')]: {
      marginTop: theme.spacing(5)
    },
    '& img': {
      filter: 'grayscale(1) contrast(0.5) brightness(1.5)',
      width: 80,
      marginBottom: theme.spacing(2)
    },
    '& h4': {
      textTransform: 'uppercase'
    }
  },
  margin: {
    margin: theme.spacing(2)
  },
  socmed: {
    margin: theme.spacing(3, 0),
    '& button': {
      margin: theme.spacing(),
      width: 36,
      height: 36
    },
    '& i': {
      fontSize: 24
    }
  },
  tw: {
    color: '#20B1D1'
  },
  fb: {
    color: '#193CCC'
  },
  in: {
    color: '#0050FF'
  },
  ig: {
    color: '#A418E6'
  },
  contact: {
    color: theme.palette.text.secondary
  },
  divider: {
    margin: theme.spacing(1.5),
    border: 'none',
    background: 'none'
  },
  download: {
    marginBottom: theme.spacing(4)
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const footer_style = (footerStyles);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1168);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
// EXTERNAL MODULE: external "@mui/material/Snackbar"
var Snackbar_ = __webpack_require__(9174);
var Snackbar_default = /*#__PURE__*/__webpack_require__.n(Snackbar_);
;// CONCATENATED MODULE: external "react-material-ui-form-validator"
const external_react_material_ui_form_validator_namespaceObject = require("react-material-ui-form-validator");
;// CONCATENATED MODULE: ./components/Contact/contact-style.js

const contactStyles = (0,mui_.makeStyles)({
  uniqId: 'contact'
})(theme => ({
  formWrap: {
    position: 'relative'
  },
  formBox: {
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(7)
    }
  },
  title: {
    textAlign: 'left',
    '& span': {
      display: 'block',
      color: theme.palette.primary.main
    },
    [theme.breakpoints.down('sm')]: {
      top: theme.spacing(3),
      position: 'relative'
    }
  },
  input: {
    width: '100%',
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3)
    }
  },
  form: {
    textAlign: 'left',
    position: 'relative'
  },
  btnArea: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing(0, 0, 3),
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(3, 0, 0)
    },
    '& button': {
      [theme.breakpoints.down('md')]: {
        width: '100%'
      }
    },
    '& span': {
      '& a': {
        textDecoration: 'none !important',
        color: theme.palette.secondary.main
      }
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const contact_style = (contactStyles);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Contact/Form.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














function Form() {
  const {
    classes,
    cx
  } = contact_style();
  const {
    classes: text
  } = (0,common/* useText */.XK)();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    0: values,
    1: setValues
  } = (0,external_react_.useState)({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const {
    0: openNotif,
    1: setNotif
  } = (0,external_react_.useState)(false);

  const handleChange = name => event => {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      [name]: event.target.value
    }));
  };

  const handleSubmit = () => {
    setNotif(true);
  };

  const handleClose = () => {
    setNotif(false);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.formWrap,
    children: [/*#__PURE__*/jsx_runtime_.jsx((Snackbar_default()), {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      open: openNotif,
      autoHideDuration: 4000,
      onClose: handleClose,
      ContentProps: {
        'aria-describedby': 'message-id'
      },
      message: /*#__PURE__*/jsx_runtime_.jsx("span", {
        id: "message-id",
        children: "Message Sent"
      })
    }, "top right"), /*#__PURE__*/jsx_runtime_.jsx((Paper_default()), {
      className: classes.formBox,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        spacing: 6,
        children: [/*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
          item: true,
          lg: 5,
          xs: 12,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Typography_default()), {
            className: cx(classes.title, text.title),
            variant: "h3",
            children: ["Contact\xA0", /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "Me."
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
          item: true,
          lg: 7,
          xs: 12,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.form,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_material_ui_form_validator_namespaceObject.ValidatorForm, {
              onSubmit: handleSubmit,
              onError: errors => console.log(errors),
              children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_material_ui_form_validator_namespaceObject.TextValidator, {
                className: classes.input,
                label: t('femine-landing.form_name'),
                onChange: handleChange('name'),
                name: "Name",
                variant: "standard",
                value: values.name,
                validators: ['required'],
                errorMessages: ['this field is required']
              }), /*#__PURE__*/jsx_runtime_.jsx(external_react_material_ui_form_validator_namespaceObject.TextValidator, {
                className: classes.input,
                label: t('femine-landing.form_email'),
                onChange: handleChange('email'),
                name: "Email",
                variant: "standard",
                value: values.email,
                validators: ['required', 'isEmail'],
                errorMessages: ['this field is required', 'email is not valid']
              }), /*#__PURE__*/jsx_runtime_.jsx(external_react_material_ui_form_validator_namespaceObject.TextValidator, {
                multiline: true,
                rows: "6",
                variant: "standard",
                className: classes.input,
                label: t('femine-landing.form_message'),
                onChange: handleChange('message'),
                name: "Message",
                value: values.message
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.btnArea,
                children: /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
                  variant: "contained",
                  type: "submit",
                  color: "primary",
                  size: "large",
                  children: t('femine-landing.form_send')
                })
              })]
            })
          })
        })]
      })
    })]
  });
}

/* harmony default export */ const Contact_Form = (Form);
;// CONCATENATED MODULE: ./components/Footer/Footer.js



















function Footer() {
  const {
    classes,
    cx
  } = footer_style();
  const {
    classes: text
  } = (0,common/* useText */.XK)();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const theme = (0,styles_.useTheme)();
  const isMobile = useMediaQuery_default()(theme.breakpoints.down('md'));
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/jsx_runtime_.jsx((Container_default()), {
      maxWidth: "lg",
      component: "footer",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        spacing: 6,
        direction: isMobile ? 'column-reverse' : 'row',
        children: [/*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
          item: true,
          xs: 12,
          md: 5,
          children: /*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
            animateOnce: true,
            animateIn: "fadeInLeftShort",
            offset: -200,
            delay: 200,
            duration: 0.3,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: classes.logo,
                children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: (femine_logo_default()),
                  alt: "logo"
                }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                  variant: "h3",
                  className: text.title,
                  children: brand/* default.femine.name */.Z.femine.name
                }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                  variant: "h4",
                  className: text.subtitle,
                  children: brand/* default.femine.title */.Z.femine.title
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: classes.socmed,
                children: [/*#__PURE__*/jsx_runtime_.jsx((IconButton_default()), {
                  "aria-label": "Delete",
                  className: classes.margin,
                  size: "small",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: cx('ion-logo-facebook', classes.fb)
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx((IconButton_default()), {
                  "aria-label": "Delete",
                  className: classes.margin,
                  size: "small",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: cx('ion-logo-instagram', classes.ig)
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx((IconButton_default()), {
                  "aria-label": "Delete",
                  className: classes.margin,
                  size: "small",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: cx('ion-logo-twitter', classes.tw)
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx((IconButton_default()), {
                  "aria-label": "Delete",
                  className: classes.margin,
                  size: "small",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: cx('ion-logo-linkedin', classes.in)
                  })
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
                variant: "outlined",
                color: "primary",
                className: classes.download,
                component: "a",
                children: "Download CV"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: classes.contact,
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((Typography_default()), {
                  className: text.paragraph,
                  children: [t('femine-landing.footer_contact'), /*#__PURE__*/jsx_runtime_.jsx("br", {}), "+49 162 7037290"]
                }), /*#__PURE__*/jsx_runtime_.jsx((Divider_default()), {
                  className: classes.divider
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Typography_default()), {
                  className: text.paragraph,
                  children: [t('femine-landing.footer_hello'), /*#__PURE__*/jsx_runtime_.jsx("br", {}), "info@eisabacha.com"]
                })]
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
          item: true,
          xs: 12,
          md: 7,
          children: /*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
            animateOnce: true,
            animateIn: "fadeInRightShort",
            offset: -200,
            delay: 200,
            duration: 0.3,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: /*#__PURE__*/jsx_runtime_.jsx(Contact_Form, {})
            })
          })
        })]
      })
    })
  });
}

/* harmony default export */ const Footer_Footer = (Footer);
;// CONCATENATED MODULE: ./components/Footer/index.js


/***/ }),

/***/ 3954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Gallery_Gallery)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-18-image-lightbox"
const external_react_18_image_lightbox_namespaceObject = require("react-18-image-lightbox");
var external_react_18_image_lightbox_default = /*#__PURE__*/__webpack_require__.n(external_react_18_image_lightbox_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "react-scroll-animation-wrapper"
var external_react_scroll_animation_wrapper_ = __webpack_require__(5902);
var external_react_scroll_animation_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_react_scroll_animation_wrapper_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./public/images/imgAPI.js
var imgAPI = __webpack_require__(4882);
;// CONCATENATED MODULE: external "@mui/material/ButtonBase"
const ButtonBase_namespaceObject = require("@mui/material/ButtonBase");
var ButtonBase_default = /*#__PURE__*/__webpack_require__.n(ButtonBase_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Link"
const Link_namespaceObject = require("@mui/material/Link");
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1168);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__(4618);
// EXTERNAL MODULE: ./components/Cards/cards-style.js
var cards_style = __webpack_require__(4918);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Cards/ImageThumb.js









function ImageThumb(props) {
  const {
    classes,
    cx
  } = (0,cards_style/* default */.Z)();
  const {
    classes: text
  } = (0,common/* useText */.XK)();
  const {
    img,
    title,
    link,
    size,
    openPopup
  } = props;

  const setSize = sizePaper => {
    switch (sizePaper) {
      case 'short':
        return classes.short;

      case 'long':
        return classes.long;

      default:
        return classes.medium;
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx((Paper_default()), {
    className: cx(classes.imgThumb, setSize(size)),
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((ButtonBase_default()), {
      onClick: openPopup,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.figure,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.img,
          style: {
            backgroundImage: `url(${img})`
          }
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.detail,
        children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
          variant: "h6",
          className: text.subtitle,
          children: title
        }), /*#__PURE__*/jsx_runtime_.jsx((Link_default()), {
          href: "#",
          children: link
        })]
      })]
    })
  });
}
ImageThumb.defaultProps = {
  openPopup: () => {}
};
// EXTERNAL MODULE: ./components/Title/index.js + 2 modules
var Title = __webpack_require__(6628);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/Gallery/gallery-style.js

const galleryStyles = (0,mui_.makeStyles)({
  uniqId: 'gallery'
})((theme, _params, classes) => ({
  root: {
    position: 'relative'
  },
  loaded: {},
  selected: {},
  filter: {
    position: 'relative',
    zIndex: 20,
    display: 'flex',
    overflow: 'auto',
    width: '100%',
    padding: theme.spacing(3, 0),
    '& > button': {
      background: 'transparent',
      borderRadius: 40,
      marginRight: theme.spacing(),
      border: '1px solid rgba(0, 0, 0, 0.87)',
      color: theme.palette.text.primary,
      whiteSpace: 'nowrap',
      minWidth: 100,
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(1, 4),
        marginRight: theme.spacing(3)
      },
      [`&.${classes.selected}`]: {
        background: theme.palette.common.black,
        color: theme.palette.common.white
      }
    }
  },
  massonry: {
    columns: `${3} 300px`,
    columnGap: theme.spacing(4)
  },
  item: {
    marginBottom: theme.spacing(4),
    breakInside: 'avoid',
    opacity: 1,
    position: 'relative',
    paddingTop: 0
  },
  itemCarousel: {
    position: 'relative'
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const gallery_style = (galleryStyles);
;// CONCATENATED MODULE: ./components/Gallery/Gallery.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const portfolio = [{
  img: imgAPI/* default.femine.6 */.Z.femine[6],
  title: 'Aenean facilisis vitae purus',
  link: 'linkofthisitem.com',
  size: 'short',
  category: 'cat1'
}, {
  img: imgAPI/* default.femine.7 */.Z.femine[7],
  title: 'Aenean facilisis vitae purus',
  link: 'linkofthisitem.com',
  size: 'long',
  category: 'cat2'
}, {
  img: imgAPI/* default.femine.8 */.Z.femine[8],
  title: 'Aenean facilisis vitae purus',
  link: 'linkofthisitem.com',
  size: 'short',
  category: 'cat3'
}, {
  img: imgAPI/* default.femine.9 */.Z.femine[9],
  title: 'Aenean facilisis vitae purus',
  link: 'linkofthisitem.com',
  size: 'long',
  category: 'cat1'
}, {
  img: imgAPI/* default.femine.10 */.Z.femine[10],
  title: 'Aenean facilisis vitae purus',
  link: 'linkofthisitem.com',
  size: 'short',
  category: 'cat2'
}, {
  img: imgAPI/* default.femine.11 */.Z.femine[11],
  title: 'Aenean facilisis vitae purus',
  link: 'linkofthisitem.com',
  size: 'short',
  category: 'cat3'
}, {
  img: imgAPI/* default.femine.12 */.Z.femine[12],
  title: 'Aenean facilisis vitae purus',
  link: 'linkofthisitem.com',
  size: 'short',
  category: 'cat1'
}, {
  img: imgAPI/* default.femine.14 */.Z.femine[14],
  title: 'Aenean facilisis vitae purus',
  link: 'linkofthisitem.com',
  size: 'short',
  category: 'cat2'
}, {
  img: imgAPI/* default.femine.13 */.Z.femine[13],
  title: 'Aenean facilisis vitae purus',
  link: 'linkofthisitem.com',
  size: 'long',
  category: 'cat2'
}];

function Gallery() {
  const theme = (0,styles_.useTheme)();
  const isDesktop = useMediaQuery_default()(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery_default()(theme.breakpoints.down('sm'));
  const {
    classes
  } = gallery_style();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    0: data,
    1: setData
  } = (0,external_react_.useState)([]);
  const {
    0: filter,
    1: setFilter
  } = (0,external_react_.useState)('all'); // Image Gallery

  const {
    0: photoIndex,
    1: setPhotoIndex
  } = (0,external_react_.useState)(0);
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    setData(portfolio);
  }, []);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    arrows: false
  };

  const filterChildren = name => {
    if (isDesktop) {
      setData([]);
    }

    setTimeout(() => {
      if (name !== 'all') {
        const filteredData = portfolio.filter(item => item.category === name);
        setData(filteredData);
        setFilter(name);
      } else {
        setData(portfolio);
        setFilter('all');
      }
    }, 1);
  };

  function onMovePrevRequest() {
    setPhotoIndex((photoIndex + data.length - 1) % data.length);
  }

  function onMoveNextRequest() {
    setPhotoIndex((photoIndex + data.length + 1) % data.length);
  }

  function showPopup(index) {
    setOpen(true);
    setPhotoIndex(index);
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.root,
    children: [open && /*#__PURE__*/jsx_runtime_.jsx((external_react_18_image_lightbox_default()), {
      mainSrc: data[photoIndex].img,
      nextSrc: data[(photoIndex + 1) % data.length].bg || data[(photoIndex + 1) % data.length].logo,
      prevSrc: data[(photoIndex + 1) % data.length].logo || null,
      onCloseRequest: () => setOpen(false),
      onMovePrevRequest: onMovePrevRequest,
      onMoveNextRequest: onMoveNextRequest
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Container_default()), {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Title/* default */.Z, {
        children: [t('femine-landing.gallery_title'), /*#__PURE__*/jsx_runtime_.jsx("strong", {
          children: t('femine-landing.gallery_titleBold')
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.filter,
        children: [/*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
          onClick: () => filterChildren('all'),
          className: filter === 'all' ? classes.selected : '',
          children: "All"
        }), /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
          onClick: () => filterChildren('cat1'),
          className: filter === 'cat1' ? classes.selected : '',
          children: "Category 1"
        }), /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
          onClick: () => filterChildren('cat2'),
          className: filter === 'cat2' ? classes.selected : '',
          children: "Category 2"
        }), /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
          onClick: () => filterChildren('cat3'),
          className: filter === 'cat3' ? classes.selected : '',
          children: "Category 3"
        }), /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
          onClick: () => filterChildren('cat4'),
          className: filter === 'cat4' ? classes.selected : '',
          children: "Category 4"
        }), /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
          onClick: () => filterChildren('cat5'),
          className: filter === 'cat5' ? classes.selected : '',
          children: "Category 5"
        })]
      }), !isMobile ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.massonry,
          children: data.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.item,
            id: index.toString(),
            children: /*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
              animateOnce: true,
              animateIn: "fadeInUpShort",
              offset: -50,
              delay: 200 + 100 * index,
              duration: 0.3,
              children: /*#__PURE__*/jsx_runtime_.jsx(ImageThumb, {
                img: item.img,
                title: item.title,
                link: item.link,
                size: item.size,
                openPopup: () => showPopup(index)
              })
            })
          }, index.toString()))
        }), data.length < 1 && /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
          variant: "button",
          component: "p",
          align: "center",
          children: t('femine-landing.gallery_nodata')
        })]
      }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [data.length < 1 && /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
          variant: "button",
          component: "p",
          align: "center",
          children: t('femine-landing.gallery_nodata')
        }), data.length > 0 && /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), _objectSpread(_objectSpread({}, settings), {}, {
          children: data.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.itemCarousel,
            children: /*#__PURE__*/jsx_runtime_.jsx(ImageThumb, {
              img: item.img,
              title: item.title,
              link: item.link,
              size: item.size,
              openPopup: () => showPopup(index)
            })
          }, index.toString()))
        }))]
      })]
    })]
  });
}

/* harmony default export */ const Gallery_Gallery = (Gallery);
;// CONCATENATED MODULE: ./components/Gallery/index.js


/***/ }),

/***/ 4316:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ PageNav_PageNav)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-anchor-link-smooth-scroll"
var external_react_anchor_link_smooth_scroll_ = __webpack_require__(2217);
var external_react_anchor_link_smooth_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_anchor_link_smooth_scroll_);
// EXTERNAL MODULE: external "react-scrollspy"
var external_react_scrollspy_ = __webpack_require__(6578);
var external_react_scrollspy_default = /*#__PURE__*/__webpack_require__.n(external_react_scrollspy_);
;// CONCATENATED MODULE: external "@mui/material/Fab"
const Fab_namespaceObject = require("@mui/material/Fab");
var Fab_default = /*#__PURE__*/__webpack_require__.n(Fab_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/ArrowUpward"
const ArrowUpward_namespaceObject = require("@mui/icons-material/ArrowUpward");
var ArrowUpward_default = /*#__PURE__*/__webpack_require__.n(ArrowUpward_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Tooltip"
const Tooltip_namespaceObject = require("@mui/material/Tooltip");
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_namespaceObject);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./components/SideNavigation/menu.js
var menu = __webpack_require__(5993);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/PageNav/pagenav-style.js

const pagenav = (0,mui_.makeStyles)({
  uniqId: 'pagenav'
})((theme, _params, classes) => ({
  show: {},
  fab: {
    transform: 'scale(0.5)',
    transition: 'all 0.5s ease',
    opacity: 0,
    background: '#212121',
    fontWeight: theme.typography.fontWeightBold,
    '& svg': {
      fill: '#FFF',
      width: 40,
      height: 40
    },
    '&:hover': {
      '& svg': {
        fill: theme.palette.primary.light
      }
    }
  },
  pageNav: {
    zIndex: 200,
    position: 'fixed',
    bottom: 40,
    right: 40,
    '& nav': {
      transition: 'height 0.5s ease',
      transitionDelay: '0.5s',
      height: 0,
      overflow: 'hidden'
    },
    [`&.${classes.show}`]: {
      [`& .${classes.fab}`]: {
        opacity: 1,
        transform: 'scale(1)'
      }
    },
    '& ul': {
      margin: '0 0 16px 22px',
      padding: 0,
      position: 'relative'
    },
    '& li': {
      marginBottom: theme.spacing(3),
      listStyle: 'none',
      opacity: 0,
      position: 'relative',
      transition: 'all 0.4s ease',
      '& a': {
        width: 12,
        height: 12,
        boxShadow: theme.shadows[1],
        background: theme.palette.background.paper,
        borderRadius: '50%',
        border: `1px solid ${theme.palette.text.secondary}`,
        display: 'block',
        transition: 'all 0.4s ease'
      },
      '&[class="active"] a': {
        background: theme.palette.common.black,
        border: `1px solid ${theme.palette.primary.light}`
      }
    },
    '&:hover': {
      '& li': {
        opacity: 1,
        top: '0 !important'
      },
      '& nav': {
        transitionDelay: '0s',
        height: '100%'
      }
    }
  },
  tooltip: {
    textTransform: 'capitalize',
    background: '#212121',
    color: theme.palette.common.white,
    fontSize: 14
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const pagenav_style = (pagenav);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/PageNav/PageNav.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function createData(id, name, url) {
  return {
    id,
    name,
    url
  };
}

const LinkBtn = /*#__PURE__*/external_react_default().forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return /*#__PURE__*/jsx_runtime_.jsx((external_react_anchor_link_smooth_scroll_default()), _objectSpread({
    to: props.to
  }, props)); // eslint-disable-line
});

function PageNav() {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    0: show,
    1: setShow
  } = (0,external_react_.useState)(false);
  let flagShow = false;

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagShow = scroll > 500;

    if (flagShow !== newFlagShow) {
      setShow(newFlagShow);
      flagShow = newFlagShow;
    }
  };

  (0,external_react_.useEffect)(() => {
    window.addEventListener('scroll', handleScroll);
    console.log();
  }, []);
  const {
    classes,
    cx
  } = pagenav_style();
  const {
    0: menuList
  } = (0,external_react_.useState)([createData(1, menu/* default.0 */.Z[0], '#' + menu/* default.0.replace */.Z[0].replace(/ /g, '_')), createData(2, menu/* default.1 */.Z[1], '#' + menu/* default.1.replace */.Z[1].replace(/ /g, '_')), createData(3, menu/* default.2 */.Z[2], '#' + menu/* default.2.replace */.Z[2].replace(/ /g, '_')), createData(4, menu/* default.3 */.Z[3], '#' + menu/* default.3.replace */.Z[3].replace(/ /g, '_')), createData(4, menu/* default.4 */.Z[4], '#' + menu/* default.4.replace */.Z[4].replace(/ /g, '_')), createData(4, menu/* default.5 */.Z[5], '#' + menu/* default.5.replace */.Z[5].replace(/ /g, '_'))]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: cx(classes.pageNav, show && classes.show),
    children: [/*#__PURE__*/jsx_runtime_.jsx("nav", {
      className: classes.sectionNav,
      children: /*#__PURE__*/jsx_runtime_.jsx((external_react_scrollspy_default()), {
        items: menu/* default */.Z,
        currentClassName: "active",
        children: menuList.map(item => /*#__PURE__*/jsx_runtime_.jsx("li", {
          style: {
            top: 30 * (menu/* default.length */.Z.length - item.id)
          },
          "data-id": item.id,
          children: /*#__PURE__*/jsx_runtime_.jsx((Tooltip_default()) // eslint-disable-next-line
          , {
            title: t('femine-landing.header_' + item.name),
            placement: "left",
            classes: {
              tooltip: classes.tooltip
            },
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: /*#__PURE__*/jsx_runtime_.jsx(LinkBtn, {
                href: item.url
              })
            })
          })
        }, item.id.toString()))
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((Tooltip_default()), {
      title: "To Top",
      placement: "left",
      classes: {
        tooltip: classes.tooltip
      },
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: /*#__PURE__*/jsx_runtime_.jsx((Fab_default()), {
          color: "secondary",
          "aria-label": "To top",
          component: LinkBtn,
          href: "#home",
          className: classes.fab,
          children: /*#__PURE__*/jsx_runtime_.jsx((ArrowUpward_default()), {})
        })
      })
    })]
  });
}

/* harmony default export */ const PageNav_PageNav = (PageNav);
;// CONCATENATED MODULE: ./components/PageNav/index.js


/***/ }),

/***/ 9100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ParallaxDeco)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-scroll-parallax"
const external_react_scroll_parallax_namespaceObject = require("react-scroll-parallax");
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/Parallax/parallax-style.js

const featureStyles = (0,mui_.makeStyles)({
  uniqId: 'feature'
})(theme => ({
  parallaxWrap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    top: 0,
    left: 0,
    zIndex: 0,
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    },
    '& [class="figure"]': {
      height: 1000,
      width: '100%',
      position: 'relative',
      top: 500
    }
  },
  bannerParallaxWrap: {
    height: 800,
    width: '100%',
    position: 'absolute',
    display: 'block',
    '& [class="figure"]': {
      height: 800,
      width: '100%',
      display: 'block',
      position: 'absolute',
      '& > div': {
        height: 800,
        width: '100%',
        display: 'block',
        position: 'absolute',
        top: 0
      }
    }
  },
  parallaxVertical: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    [theme.breakpoints.up('lg')]: {
      transform: 'scale(0.5)'
    },
    [theme.breakpoints.up('xl')]: {
      display: 'none'
    }
  },
  parallaxDot: {
    top: -20,
    fill: theme.palette.text.disabled,
    width: 845,
    height: 1099,
    opacity: 0.2,
    left: 200
  },
  parallaxTriangle: {
    top: 300,
    outline: theme.palette.text.disabled,
    opacity: 0.1,
    width: 902,
    height: 1042,
    stroke: theme.palette.text.disabled,
    fill: 'transparent',
    strokeWidth: 50,
    right: -100
  },
  parallaxCircle: {
    top: 250,
    width: 600,
    height: 570,
    opacity: 0.1,
    stroke: theme.palette.text.disabled,
    fill: 'transparent',
    strokeWidth: 40,
    right: 40
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const parallax_style = (featureStyles);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Parallax/Decoration.js





function ParallaxDeco() {
  const {
    classes,
    cx
  } = parallax_style();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.parallaxWrap,
    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_parallax_namespaceObject.ParallaxProvider, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.bannerParallaxWrap,
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_parallax_namespaceObject.Parallax, {
          translateY: [-40, 40],
          className: "figure",
          children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
            fill: "#cccccc",
            width: 845,
            height: 1099,
            className: cx(classes.parallaxVertical, classes.parallaxDot),
            children: /*#__PURE__*/jsx_runtime_.jsx("use", {
              xlinkHref: "/images/decoration/dot-deco.svg#dot"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_parallax_namespaceObject.Parallax, {
          translateY: [-50, 50],
          className: "figure",
          children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
            fill: "#cccccc",
            width: 902,
            height: 1042,
            className: cx(classes.parallaxVertical, classes.parallaxTriangle),
            children: /*#__PURE__*/jsx_runtime_.jsx("use", {
              xlinkHref: "/images/decoration/triangle-deco.svg#triangle"
            })
          })
        })]
      })
    })
  });
}

/***/ }),

/***/ 304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Services_Services)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__(4618);
// EXTERNAL MODULE: ./components/Title/index.js + 2 modules
var Title = __webpack_require__(6628);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1168);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
// EXTERNAL MODULE: ./components/Cards/cards-style.js
var cards_style = __webpack_require__(4918);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Cards/IconText.js







function Testimonial(props) {
  const {
    classes,
    cx
  } = (0,cards_style/* default */.Z)();
  const textStyle = (0,common/* useText */.XK)();
  const {
    icon,
    text,
    desc
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((Paper_default()), {
    className: classes.iconText,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.icon,
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: icon
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.more,
      children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
        className: cx(classes.name, textStyle.paragraph),
        variant: "h6",
        display: "block",
        children: text
      }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
        className: cx(classes.desc, textStyle.paragraph),
        display: "block",
        children: desc
      })]
    })]
  });
}
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/Services/services-style.js

const testiStyles = (0,mui_.makeStyles)({
  uniqId: 'testi'
})(theme => ({
  root: {
    paddingBottom: theme.spacing(2),
    position: 'relative',
    overflow: 'hidden',
    '& > div': {
      [theme.breakpoints.down('lg')]: {
        padding: 0
      }
    }
  },
  props: {
    width: 240,
    height: 240,
    '&:focus': {
      outline: 'none'
    }
  },
  floatingTitle: {
    textAlign: 'center',
    padding: theme.spacing(0, 2),
    '& > div': {
      marginBottom: theme.spacing(4)
    },
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      left: theme.spacing(8),
      top: theme.spacing(2),
      width: 240
    }
  },
  carousel: {
    position: 'relative',
    slickSlide: {
      marginTop: theme.spacing()
    },
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(3)
    }
  },
  item: {
    padding: theme.spacing(0, 1),
    margin: theme.spacing(1, 0),
    marginBottom: theme.spacing(),
    '&:focus': {
      outline: 'none'
    }
  },
  nav: {
    position: 'absolute',
    top: '45%',
    width: 36,
    height: 36,
    padding: 0,
    minWidth: 0,
    background: theme.palette.background.default,
    border: 'none',
    boxShadow: 'none',
    zIndex: 3,
    transform: `scale(2.5) ${theme.direction === 'rtl' ? 'rotate(180deg)' : 'rotate(0deg)'}`,
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    '& i': {
      transform: 'scale(1.2)',
      color: theme.palette.mode === 'dark' ? theme.palette.divider : theme.palette.text.primary
    }
  },
  prev: {
    left: 6
  },
  next: {
    right: 6
  },
  itemPropsFirst: {
    '& div': {
      width: theme.direction === 'rtl' ? 400 : 350,
      [theme.breakpoints.down(1500)]: {
        width: theme.direction === 'rtl' ? 500 : 300
      }
    },
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  itemPropsLast: {
    width: theme.direction === 'rtl' ? 350 : 400,
    '& div': {
      [theme.breakpoints.down(1500)]: {
        width: theme.direction === 'rtl' ? 300 : 500
      }
    },
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const services_style = (testiStyles);
;// CONCATENATED MODULE: ./components/Services/Services.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const services = [{
  icon: 'ion-ios-globe',
  name: 'Web  Development',
  desc: 'Develope professional web applications.'
}, {
  icon: 'ion-logo-windows',
  name: 'Software  Development',
  desc: 'Develope professional softwares.'
}, {
  icon: 'ion-logo-buffer',
  name: 'Database  Management',
  desc: 'Manage your database with us.'
}, {
  icon: 'ion-ios-chatbubbles',
  name: 'Mobile  App  Development',
  desc: 'Develope mobile apps of your own choice.'
}, {
  icon: 'ion-ios-construct',
  name: 'Search  Engine  Optimization',
  desc: 'Optimize your product for marketing.'
}];

function Services() {
  const {
    classes,
    cx
  } = services_style();
  const {
    classes: text
  } = (0,common/* useText */.XK)();
  const theme = (0,styles_.useTheme)();
  const isDesktop = useMediaQuery_default()(theme.breakpoints.up('md'));
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const slider = (0,external_react_.useRef)(null);
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
  (0,external_react_.useEffect)(() => {
    if (theme.direction === 'rtl') {
      const lastSlide = Math.floor(services.length - 2);
      slider.current.slickGoTo(lastSlide);
    }
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.floatingTitle,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Title/* default */.Z, {
        children: /*#__PURE__*/jsx_runtime_.jsx("strong", {
          children: t('femine-landing.services_title')
        })
      }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
        className: text.paragraph,
        children: t('femine-landing.services_desc')
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.sliderWrap,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.carousel,
        children: [/*#__PURE__*/jsx_runtime_.jsx((IconButton_default()), {
          className: cx(classes.nav, classes.prev),
          onClick: () => slider.current.slickPrev(),
          size: "large",
          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "ion-ios-arrow-back"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), _objectSpread(_objectSpread({
          ref: slider
        }, settings), {}, {
          children: [isDesktop && /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: cx(classes.item, classes.itemPropsFirst),
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {})
          }), services.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.item,
            children: /*#__PURE__*/jsx_runtime_.jsx(Testimonial, {
              icon: item.icon,
              text: item.name,
              desc: item.desc
            })
          }, index.toString())), isDesktop && /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: cx(classes.item, classes.itemPropsLast),
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {})
          })]
        })), /*#__PURE__*/jsx_runtime_.jsx((IconButton_default()), {
          className: cx(classes.nav, classes.next),
          onClick: () => slider.current.slickNext(),
          size: "large",
          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "ion-ios-arrow-forward"
          })
        })]
      })
    })]
  });
}

/* harmony default export */ const Services_Services = (Services);
;// CONCATENATED MODULE: ./components/Services/index.js


/***/ }),

/***/ 2233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SideNavigationIcon)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@mui/material/List"
var List_ = __webpack_require__(4192);
var List_default = /*#__PURE__*/__webpack_require__.n(List_);
// EXTERNAL MODULE: external "@mui/material/ListItem"
var ListItem_ = __webpack_require__(834);
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);
// EXTERNAL MODULE: external "@mui/material/ListItemText"
var ListItemText_ = __webpack_require__(8315);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);
// EXTERNAL MODULE: external "@mui/material/ListItemIcon"
var ListItemIcon_ = __webpack_require__(3787);
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_);
// EXTERNAL MODULE: external "react-anchor-link-smooth-scroll"
var external_react_anchor_link_smooth_scroll_ = __webpack_require__(2217);
var external_react_anchor_link_smooth_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_anchor_link_smooth_scroll_);
// EXTERNAL MODULE: external "react-scrollspy"
var external_react_scrollspy_ = __webpack_require__(6578);
var external_react_scrollspy_default = /*#__PURE__*/__webpack_require__.n(external_react_scrollspy_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./public/images/femine-logo.svg
var femine_logo = __webpack_require__(1619);
var femine_logo_default = /*#__PURE__*/__webpack_require__.n(femine_logo);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/SideNavigation/sidenav-icon-style.js

const sideNavIconStyles = (0,mui_.makeStyles)({
  uniqId: 'sidenav'
})((theme, _params, classes) => ({
  logo: {
    display: 'block',
    margin: theme.spacing(1.5, 0),
    position: 'relative',
    textAlign: 'center',
    '& img': {
      width: '100%',
      maxWidth: 64
    }
  },
  menu: {
    margin: '0 auto',
    background: theme.palette.common.black,
    borderRadius: theme.rounded.big,
    width: 80,
    '& ul': {
      padding: 0,
      margin: 0
    }
  },
  icon: {
    display: 'block',
    minWidth: 0,
    margin: '0 auto',
    marginLeft: 0,
    borderRadius: '50%',
    width: 48,
    height: 48,
    lineHeight: '48px',
    '& span': {
      fontSize: 36,
      zIndex: 2,
      position: 'relative',
      color: theme.palette.common.white
    }
  },
  text: {
    transition: 'all 0.3s cubic-bezier(0, 1.73, 1, 1.02)',
    visibility: 'hidden',
    position: 'absolute',
    left: 40,
    background: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
    textTransform: 'capitalize',
    borderRadius: theme.rounded.medium,
    padding: theme.spacing(1, 2),
    zIndex: 2,
    whiteSpace: 'nowrap',
    opacity: 0,
    '& span': {
      fontSize: 18,
      fontWeight: theme.typography.fontWeightBold
    }
  },
  deco: {
    '&:after': {
      opacity: 0,
      content: '""',
      background: theme.palette.common.black,
      position: 'absolute',
      bottom: -32,
      left: -8,
      width: '100%',
      height: 32,
      transition: 'border-radius 0.5s ease',
      borderTopRightRadius: 0
    },
    '&:before': {
      opacity: 0,
      content: '""',
      background: theme.palette.background.paper,
      position: 'absolute',
      bottom: -32,
      left: -8,
      width: '100%',
      height: 32
    }
  },
  link: {
    textAlign: 'center',
    background: 'transparent',
    transition: 'border-radius 0.5s ease',
    borderTopLeftRadius: theme.rounded.small,
    borderBottomLeftRadius: theme.rounded.small,
    marginLeft: theme.spacing(1),
    padding: theme.spacing(1),
    position: 'relative',
    '&:last-child': {
      [`& .${classes.deco}`]: {
        display: 'none'
      }
    },
    '&:first-of-type': {
      '&:after, &:before': {
        display: 'none'
      }
    },
    '&:after': {
      opacity: 0,
      content: '""',
      background: theme.palette.common.black,
      position: 'absolute',
      top: -32,
      left: -8,
      width: '100%',
      height: 32,
      transition: 'border-radius 0.5s ease',
      borderBottomRightRadius: 0
    },
    '&:before': {
      opacity: 0,
      content: '""',
      background: theme.palette.background.paper,
      position: 'absolute',
      top: -32,
      left: -8,
      width: '100%',
      height: 32
    },
    '&:hover': {
      borderTopLeftRadius: theme.rounded.medium,
      borderBottomLeftRadius: theme.rounded.medium,
      background: theme.palette.background.paper,
      '&:before': {
        opacity: 1
      },
      '&:after': {
        opacity: 1,
        borderBottomRightRadius: theme.rounded.big
      },
      [`& .${classes.deco}`]: {
        '&:before': {
          opacity: 1
        },
        '&:after': {
          opacity: 1,
          borderTopRightRadius: theme.rounded.big
        }
      },
      [`& .${classes.icon}`]: {
        zIndex: 3,
        background: `linear-gradient(320deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        '& span': {
          color: theme.palette.common.white
        }
      },
      [`& .${classes.text}`]: {
        visibility: 'visible',
        opacity: 1,
        left: 70
      }
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const sidenav_icon_style = (sideNavIconStyles);
// EXTERNAL MODULE: ./components/SideNavigation/menu.js
var menu = __webpack_require__(5993);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/SideNavigation/SideNavigationIcon.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














let counter = 0;

function createData(name, url, icon, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
    icon,
    offset
  };
}

const LinkBtn = /*#__PURE__*/external_react_default().forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return /*#__PURE__*/jsx_runtime_.jsx((external_react_anchor_link_smooth_scroll_default()), _objectSpread({
    to: props.to
  }, props)); // eslint-disable-line
});

function SideNavigation() {
  const {
    classes
  } = sidenav_icon_style();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    0: menuList
  } = (0,external_react_.useState)([createData(menu/* default.0 */.Z[0], '#' + menu/* default.0 */.Z[0], 'ion-ios-contact-outline', 160), createData(menu/* default.1 */.Z[1], '#' + menu/* default.1 */.Z[1], 'ion-ios-add-circle-outline'), createData(menu/* default.2 */.Z[2], '#' + menu/* default.2 */.Z[2], 'ion-ios-keypad-outline'), createData(menu/* default.3 */.Z[3], '#' + menu/* default.3 */.Z[3], 'ion-ios-chatboxes-outline', -40), createData(menu/* default.4 */.Z[4], '#' + menu/* default.4 */.Z[4], 'ion-ios-copy-outline'), createData(menu/* default.5 */.Z[5], '#' + menu/* default.5 */.Z[5], 'ion-ios-mail-outline')]);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.navigation,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
      className: classes.navMenu,
      children: [/*#__PURE__*/jsx_runtime_.jsx((external_react_anchor_link_smooth_scroll_default()), {
        href: "#home",
        className: classes.logo,
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: (femine_logo_default()),
          alt: "logo"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx((List_default()), {
        component: "nav",
        className: classes.menu,
        children: /*#__PURE__*/jsx_runtime_.jsx((external_react_scrollspy_default()), {
          items: menu/* default */.Z,
          currentClassName: "active",
          children: menuList.map(item => /*#__PURE__*/(0,jsx_runtime_.jsxs)((ListItem_default()), {
            button: true,
            component: LinkBtn,
            offset: item.offset || 0,
            href: item.url,
            classes: {
              root: classes.link
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: classes.deco
            }), /*#__PURE__*/jsx_runtime_.jsx((ListItemIcon_default()), {
              className: classes.icon,
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: item.icon
              })
            }), /*#__PURE__*/jsx_runtime_.jsx((ListItemText_default()), {
              classes: {
                root: classes.text
              },
              primary: t('femine-landing.header_' + item.name)
            })]
          }, item.id.toString()))
        })
      })]
    })
  });
}

/* harmony default export */ const SideNavigationIcon = (SideNavigation);

/***/ }),

/***/ 1509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ SideNavigation_SideNavigation)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@mui/material/List"
var List_ = __webpack_require__(4192);
var List_default = /*#__PURE__*/__webpack_require__.n(List_);
// EXTERNAL MODULE: external "@mui/material/ListItem"
var ListItem_ = __webpack_require__(834);
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);
// EXTERNAL MODULE: external "@mui/material/ListItemText"
var ListItemText_ = __webpack_require__(8315);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "react-anchor-link-smooth-scroll"
var external_react_anchor_link_smooth_scroll_ = __webpack_require__(2217);
var external_react_anchor_link_smooth_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_anchor_link_smooth_scroll_);
// EXTERNAL MODULE: external "react-scrollspy"
var external_react_scrollspy_ = __webpack_require__(6578);
var external_react_scrollspy_default = /*#__PURE__*/__webpack_require__.n(external_react_scrollspy_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./public/images/femine-logo.svg
var femine_logo = __webpack_require__(1619);
var femine_logo_default = /*#__PURE__*/__webpack_require__.n(femine_logo);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/SideNavigation/sidenav-style.js

const sideNavStyles = (0,mui_.makeStyles)({
  uniqId: 'testi'
})((theme, _params, classes) => ({
  navigation: {},
  fixed: {},
  navMenu: {},
  bar: {},
  mobileMenu: {
    marginRight: theme.spacing(),
    [`& .${classes.bar}`]: {
      backgroundColor: theme.palette.text.secondary,
      '&:after, &:before': {
        backgroundColor: theme.palette.text.secondary
      }
    }
  },
  mobileNav: {
    width: 240,
    background: theme.palette.background.default,
    padding: theme.spacing(10, 2, 4)
  },
  logo: {
    display: 'block',
    margin: theme.spacing(3, 0, 1),
    position: 'relative',
    padding: theme.spacing(0, 2),
    '& img': {
      height: theme.spacing(10)
    }
  },
  text: {
    '& span': {
      fontSize: 18,
      textTransform: 'Capitalize',
      fontWeight: theme.typography.fontWeightBold
    }
  },
  link: {},
  active: {},
  menu: {
    '& ul': {
      padding: 0,
      margin: 0
    },
    [`& .${classes.link}`]: {
      margin: theme.spacing(2, 0),
      paddingTop: 0,
      paddingBottom: 0,
      background: 'none !important',
      '&:before': {
        opacity: 0.5,
        content: '""',
        position: 'absolute',
        borderRadius: theme.rounded.big,
        left: theme.spacing(-2),
        top: 0,
        background: theme.palette.mode === 'dark' ? `linear-gradient(120deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})` : `linear-gradient(120deg, ${theme.palette.secondary.light}, ${theme.palette.primary.light})`,
        height: '100%',
        width: 0,
        transition: 'all 0.2s cubic-bezier(0, 0, 0.14, 0.97)'
      },
      '&:hover': {
        '&:before': {
          width: '110%'
        },
        [`& .${classes.text}`]: {
          color: theme.palette.primary.main
        }
      }
    },
    [`& .${classes.text}`]: {
      transition: 'all 0.3s ease-in',
      position: 'relative'
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const sidenav_style = (sideNavStyles);
// EXTERNAL MODULE: ./components/SideNavigation/menu.js
var menu = __webpack_require__(5993);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/SideNavigation/SideNavigation.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














let counter = 0;

function createData(name, url, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
    offset
  };
}

const LinkBtn = /*#__PURE__*/external_react_default().forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return /*#__PURE__*/jsx_runtime_.jsx((external_react_anchor_link_smooth_scroll_default()), _objectSpread({
    to: props.to
  }, props)); // eslint-disable-line
});

function SideNavigation() {
  const {
    classes
  } = sidenav_style();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    0: menuList
  } = (0,external_react_.useState)([createData(menu/* default.0 */.Z[0], '#' + menu/* default.0 */.Z[0], 160), createData(menu/* default.1 */.Z[1], '#' + menu/* default.1 */.Z[1]), createData(menu/* default.2 */.Z[2], '#' + menu/* default.2 */.Z[2]), createData(menu/* default.3 */.Z[3], '#' + menu/* default.3 */.Z[3], -40), createData(menu/* default.4 */.Z[4], '#' + menu/* default.4 */.Z[4]), createData(menu/* default.5 */.Z[5], '#' + menu/* default.5 */.Z[5])]);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.navigation,
    children: /*#__PURE__*/jsx_runtime_.jsx((Container_default()), {
      fixed: true,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
        className: classes.navMenu,
        children: [/*#__PURE__*/jsx_runtime_.jsx((external_react_anchor_link_smooth_scroll_default()), {
          href: "#home",
          className: classes.logo,
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: (femine_logo_default()),
            alt: "logo"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((List_default()), {
          component: "nav",
          className: classes.menu,
          children: /*#__PURE__*/jsx_runtime_.jsx((external_react_scrollspy_default()), {
            items: menu/* default */.Z,
            currentClassName: "active",
            children: menuList.map(item => /*#__PURE__*/jsx_runtime_.jsx((ListItem_default()), {
              button: true,
              component: LinkBtn,
              offset: item.offset || 0,
              href: item.url,
              classes: {
                root: classes.link
              },
              children: /*#__PURE__*/jsx_runtime_.jsx((ListItemText_default()), {
                classes: {
                  root: classes.text
                },
                primary: t('femine-landing.header_' + item.name)
              })
            }, item.id.toString()))
          })
        })]
      })
    })
  });
}

/* harmony default export */ const SideNavigation_SideNavigation = (SideNavigation);
;// CONCATENATED MODULE: ./components/SideNavigation/index.js


/***/ }),

/***/ 1208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Testimonials_Testimonials)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-scroll-animation-wrapper"
var external_react_scroll_animation_wrapper_ = __webpack_require__(5902);
var external_react_scroll_animation_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_react_scroll_animation_wrapper_);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1168);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Popover"
var Popover_ = __webpack_require__(5768);
var Popover_default = /*#__PURE__*/__webpack_require__.n(Popover_);
;// CONCATENATED MODULE: external "@mui/material/Avatar"
const Avatar_namespaceObject = require("@mui/material/Avatar");
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__(4618);
// EXTERNAL MODULE: ./public/images/imgAPI.js
var imgAPI = __webpack_require__(4882);
;// CONCATENATED MODULE: ./components/Testimonials/testimonialsData.js

const testimonialsData = [{
  avatar: imgAPI/* default.avatar.0 */.Z.avatar[0],
  name: 'John Doe',
  title: 'Company Dot Com',
  text: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula.',
  x: 100,
  y: 150
}, {
  name: 'John Doe',
  title: 'Company Dot Com',
  text: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula.',
  x: 120,
  y: 100
}, {
  name: 'John Doe',
  title: 'Company Dot Com',
  text: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula.',
  x: 400,
  y: 40
}, {
  avatar: imgAPI/* default.avatar.3 */.Z.avatar[3],
  name: 'John Doe',
  title: 'Company Dot Com',
  text: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula.',
  x: 500,
  y: 300
}, {
  avatar: imgAPI/* default.avatar.4 */.Z.avatar[4],
  name: 'John Doe',
  title: 'Company Dot Com',
  text: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula.',
  x: 270,
  y: 220
}, {
  name: 'John Doe',
  title: 'Company Dot Com',
  text: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula.',
  x: 100,
  y: 200
}, {
  avatar: imgAPI/* default.avatar.6 */.Z.avatar[6],
  name: 'John Doe',
  title: 'Company Dot Com',
  text: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula.',
  x: 100,
  y: 40
}, {
  name: 'John Doe',
  title: 'Company Dot Com',
  text: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula.',
  x: 330,
  y: 100
}, {
  avatar: imgAPI/* default.avatar.1 */.Z.avatar[1],
  name: 'John Doe',
  title: 'Company Dot Com',
  text: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula.',
  x: 30,
  y: 50
}, {
  avatar: imgAPI/* default.avatar.9 */.Z.avatar[9],
  name: 'John Doe',
  title: 'Company Dot Com',
  text: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula.',
  x: 400,
  y: 150
}, {
  name: 'John Doe',
  title: 'Company Dot Com',
  text: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula.',
  x: 480,
  y: 100
}, {
  name: 'John Doe',
  title: 'Company Dot Com',
  text: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula.',
  x: 250,
  y: 100
}, {
  avatar: imgAPI/* default.avatar.2 */.Z.avatar[2],
  name: 'John Doe',
  title: 'Company Dot Com',
  text: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula.',
  x: 150,
  y: 300
}, {
  avatar: imgAPI/* default.avatar.7 */.Z.avatar[7],
  name: 'John Doe',
  title: 'Company Dot Com',
  text: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula.',
  x: 300,
  y: 140
}, {
  name: 'John Doe',
  title: 'Company Dot Com',
  text: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula.',
  x: 480,
  y: 280
}, {
  avatar: imgAPI/* default.avatar.5 */.Z.avatar[5],
  name: 'John Doe',
  title: 'Company Dot Com',
  text: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula.',
  x: 300,
  y: 300
}];
/* harmony default export */ const Testimonials_testimonialsData = (testimonialsData);
// EXTERNAL MODULE: ./components/Title/index.js + 2 modules
var Title = __webpack_require__(6628);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/Testimonials/testi-style.js

const testiStyles = (0,mui_.makeStyles)({
  uniqId: 'testi'
})((theme, _params, classes) => ({
  root: {
    backgroundImage: `linear-gradient(120deg, ${theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main}, ${theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main})`,
    boxShadow: `0px 1px 10px 3px ${theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light}, 0px 1px 1px 0px ${theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main}, 0px 2px 1px -1px ${theme.palette.primary.dark}`,
    color: theme.palette.common.white,
    position: 'relative',
    zIndex: 8,
    borderRadius: 100,
    padding: theme.spacing(5, 0),
    [theme.breakpoints.down('lg')]: {
      borderRadius: theme.rounded.medium,
      padding: theme.spacing(5, 2)
    }
  },
  button: {},
  avatarWrap: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  text: {
    paddingTop: theme.spacing(5),
    '& h3': {
      marginBottom: theme.spacing(3)
    },
    '& p': {
      marginBottom: theme.spacing(3),
      fontSize: 18,
      lineHeight: '32px'
    },
    [`& .${classes.button}`]: {
      minWidth: 160
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    }
  },
  worldMap: {
    background: 'url(/images/femine/worldMap.svg) no-repeat center center',
    backgroundSize: '100%',
    position: 'relative',
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      height: 360,
      width: 580
    }
  },
  person: {
    position: 'absolute'
  },
  avatar: {
    transition: 'all 0.3s ease-out',
    '&:hover': {
      transform: 'scale(1.2)'
    }
  },
  dot: {
    borderRadius: '50%',
    display: 'block',
    width: 12,
    height: 12,
    background: theme.palette.secondary.main,
    border: '2px solid #FFF',
    boxShadow: '0 1.5px 24.5px 4.5px rgba(0, 0, 0, 0.06)',
    transition: 'all 0.3s ease-out',
    '&:hover': {
      transform: 'scale(1.2)'
    }
  },
  title: {
    color: theme.palette.text.secondary
  },
  popover: {
    pointerEvents: 'none'
  },
  paper: {
    width: 300,
    background: 'none',
    boxShadow: 'none'
  },
  paperBlock: {
    background: theme.palette.common.black,
    borderRadius: theme.rounded.medium,
    color: theme.palette.common.white,
    padding: theme.spacing(3),
    marginBottom: 30,
    boxShadow: '0 1.5px 24.5px 4.5px rgba(0, 0, 0, 0.06)',
    '& h6': {
      marginTop: theme.spacing(2),
      fontSize: 14
    },
    [`& .${classes.title}`]: {
      fontStyle: 'italic',
      fontSize: 12
    },
    '&:before': {
      content: '""',
      borderTop: `15px solid ${theme.palette.common.black}`,
      borderLeft: '25px solid transparent',
      borderRight: '25px solid transparent',
      color: theme.palette.common.white,
      position: 'absolute',
      left: 'calc(50% - 25px)',
      bottom: 15
    }
  },
  itemCarousel: {
    padding: theme.spacing(2)
  },
  card: {
    padding: theme.spacing(3),
    '& avatar': {
      width: 30,
      height: 30
    }
  },
  name: {
    display: 'flex',
    marginTop: theme.spacing(),
    alignItems: 'center',
    '& span': {
      display: 'inline-block',
      marginLeft: theme.spacing()
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const testi_style = (testiStyles);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Testimonials/Testimonials.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















function AvatarBuble(props) {
  const {
    classes
  } = testi_style();
  const {
    avatar,
    name,
    x,
    y,
    openPopover,
    closePopover
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.person,
    style: {
      left: x,
      top: y
    },
    children: avatar ? /*#__PURE__*/jsx_runtime_.jsx((Avatar_default()), {
      alt: name,
      src: avatar,
      className: classes.avatar,
      onMouseEnter: e => openPopover(e),
      onMouseLeave: closePopover
    }) : /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: classes.dot,
      onMouseEnter: e => openPopover(e),
      onMouseLeave: closePopover
    })
  });
}

AvatarBuble.defaultProps = {
  avatar: ''
};

function Testimonials() {
  const {
    0: anchorEl,
    1: setAnchorEl
  } = (0,external_react_.useState)(null);
  const {
    0: popupData,
    1: setPopupData
  } = (0,external_react_.useState)({});
  const isTablet = useMediaQuery_default()(theme => theme.breakpoints.down('md'));
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    classes
  } = testi_style();
  const {
    classes: text
  } = (0,common/* useText */.XK)();
  const open = Boolean(anchorEl);

  const firsthChar = txt => txt.charAt(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    arrows: false
  };

  function handlePopoverOpen(event, item) {
    setAnchorEl(event.currentTarget);
    setPopupData(item);
  }

  function handlePopoverClose() {
    setAnchorEl(null);
  }

  return /*#__PURE__*/jsx_runtime_.jsx((Container_default()), {
    children: /*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
      animateOnce: true,
      animateIn: "fadeInUpShort",
      offset: 100,
      delay: 200,
      duration: 0.3,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.root,
        children: [/*#__PURE__*/jsx_runtime_.jsx((Popover_default()), {
          id: "mouse-over-popover",
          className: classes.popover,
          classes: {
            paper: classes.paper
          },
          open: open,
          anchorEl: anchorEl,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'center'
          },
          transformOrigin: {
            vertical: 'bottom',
            horizontal: 'center'
          },
          onClose: handlePopoverClose,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: classes.paperBlock,
            children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
              gutterBottom: true,
              display: "block",
              children: popupData.text
            }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
              variant: "h6",
              children: popupData.name
            }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
              className: classes.title,
              children: popupData.title
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Title/* default */.Z, {
          dark: true,
          children: [t('femine-landing.testi_title'), "\xA0", /*#__PURE__*/jsx_runtime_.jsx("strong", {
            children: t('femine-landing.testi_titleBold')
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
          container: true,
          children: [/*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
            item: true,
            md: 7,
            xs: 12,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.worldMap,
              children: !isTablet ? /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.avatarWrap,
                children: Testimonials_testimonialsData.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx(AvatarBuble, {
                  avatar: item.avatar,
                  name: item.name,
                  x: item.x,
                  y: item.y,
                  openPopover: e => handlePopoverOpen(e, item),
                  closePopover: handlePopoverClose
                }, index.toString()))
              }) : /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), _objectSpread(_objectSpread({}, settings), {}, {
                children: Testimonials_testimonialsData.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: classes.itemCarousel,
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Paper_default()), {
                    className: classes.card,
                    children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                      variant: "body1",
                      display: "block",
                      children: item.text
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: classes.name,
                      children: [item.avatar ? /*#__PURE__*/jsx_runtime_.jsx((Avatar_default()), {
                        alt: item.name,
                        src: item.avatar,
                        className: classes.avatar
                      }) : /*#__PURE__*/jsx_runtime_.jsx((Avatar_default()), {
                        alt: item.name,
                        className: classes.avatar,
                        children: firsthChar(item.name)
                      }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                        variant: "caption",
                        children: item.name
                      })]
                    })]
                  })
                }, index.toString()))
              }))
            })
          }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
            item: true,
            md: 5,
            xs: 12,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.text,
              children: [/*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
                animateOnce: true,
                animateIn: "fadeInUpShort",
                offset: -200,
                delay: 200,
                duration: 0.3,
                children: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                  variant: "h3",
                  className: text.title2,
                  children: t('femine-landing.testi_title2')
                })
              }), /*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
                animateOnce: true,
                animateIn: "fadeInUpShort",
                offset: -200,
                delay: 300,
                duration: 0.3,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                    component: "p",
                    className: text.paragraph,
                    children: t('femine-landing.testi_desc')
                  }), /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
                    color: "primary",
                    href: "#contact",
                    size: "large",
                    className: classes.button,
                    variant: "contained",
                    children: t('femine-landing.testi_button')
                  })]
                })
              })]
            })
          })]
        })]
      })
    })
  });
}

/* harmony default export */ const Testimonials_Testimonials = (Testimonials);
;// CONCATENATED MODULE: ./components/Testimonials/index.js


/***/ }),

/***/ 2222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Timeline_Timeline)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "react-scroll-animation-wrapper"
var external_react_scroll_animation_wrapper_ = __webpack_require__(5902);
var external_react_scroll_animation_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_react_scroll_animation_wrapper_);
;// CONCATENATED MODULE: external "@mui/material/LinearProgress"
const LinearProgress_namespaceObject = require("@mui/material/LinearProgress");
var LinearProgress_default = /*#__PURE__*/__webpack_require__.n(LinearProgress_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__(4618);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/Timeline/timeline-style.js

const timelineStyles = (0,mui_.makeStyles)({
  uniqId: 'timeline'
})((theme, _params, classes) => ({
  root: {
    position: 'relative',
    '& .MuiContainer-root': {
      [theme.breakpoints.up('lg')]: {
        maxWidth: 1280,
        padding: 0
      }
    },
    [theme.breakpoints.down('lg')]: {
      paddingTop: theme.spacing(5)
    }
  },
  nameDeco: {
    margin: 0,
    padding: 0,
    transform: 'rotate(-90deg)',
    transformOrigin: 'top center',
    letterSpacing: -10,
    position: 'absolute',
    fontWeight: theme.typography.fontWeightRegular,
    textTransform: 'uppercase',
    color: theme.palette.common.black,
    top: theme.spacing(30),
    left: theme.spacing(-5),
    fontSize: 72,
    opacity: 0.1,
    zIndex: 20
  },
  title: {
    textTransform: 'uppercase',
    marginBottom: theme.spacing(3)
  },
  time: {},
  history: {
    position: 'relative',
    padding: theme.spacing(5, 4, 10),
    borderTop: 0,
    borderBottom: 0,
    [theme.breakpoints.down('lg')]: {
      border: 'none'
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 0, 5)
    },
    '& h3': {
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down('sm')]: {
        width: '100%'
      }
    },
    '& p': {
      [theme.breakpoints.down('sm')]: {
        display: 'inline-block',
        marginRight: theme.spacing(2)
      }
    },
    '& ul': {
      margin: 0,
      padding: 0,
      '& li': {
        listStyle: 'none',
        marginBottom: theme.spacing(5),
        position: 'relative',
        [theme.breakpoints.down('md')]: {
          paddingLeft: 45
        },
        '&:last-child': {
          marginBottom: 0
        },
        '&:before': {
          content: '""',
          borderRadius: '50%',
          width: 24,
          height: 24,
          background: theme.palette.primary.main,
          border: `4px solid ${theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.background.paper}`,
          position: 'absolute',
          left: -45,
          top: 4,
          [theme.breakpoints.down('md')]: {
            left: 0
          }
        },
        [`& .${classes.time}`]: {
          color: theme.palette.text.secondary
        }
      }
    },
    '&:before': {
      content: '""',
      width: 5,
      height: '90%',
      background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      borderRadius: 5,
      position: 'absolute',
      left: -3,
      top: 0,
      [theme.breakpoints.down('md')]: {
        display: 'none'
      }
    }
  },
  progress: {
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5, 0, 10)
    },
    '& ul': {
      margin: 0,
      padding: 0,
      '& li': {
        listStyle: 'none',
        marginBottom: theme.spacing(5),
        '&:last-child': {
          marginBottom: 0
        },
        '& h6': {
          fontWeight: theme.typography.fontWeightBold
        }
      }
    }
  },
  textIcon: {
    marginBottom: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    '& i': {
      color: theme.palette.text.secondary,
      fontSize: 28
    },
    '& h6': {
      marginLeft: theme.spacing()
    }
  },
  progressBg: {
    borderRadius: 10,
    background: theme.palette.divider,
    height: 10
  },
  bar: {
    borderRadius: 10,
    background: theme.palette.secondary.main
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const timeline_style = (timelineStyles);
// EXTERNAL MODULE: ./public/text/brand.js
var brand = __webpack_require__(15);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Timeline/Timeline.js















function Timeline() {
  const {
    classes,
    cx
  } = timeline_style();
  const {
    classes: text
  } = (0,common/* useText */.XK)();
  const theme = (0,styles_.useTheme)();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const isDesktop = useMediaQuery_default()(theme.breakpoints.up('md'));
  const isTablet = useMediaQuery_default()(theme.breakpoints.down('lg'));
  const {
    0: play,
    1: setPlay
  } = (0,external_react_.useState)(false);

  const handlePlay = visible => {
    if (visible.inViewport) {
      setTimeout(() => {
        setPlay(true);
      }, 500);
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/jsx_runtime_.jsx((Container_default()), {
      fixed: isDesktop,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        spacing: 0,
        children: [/*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
          item: true,
          lg: 2,
          xs: 12,
          children: !isTablet && /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
            variant: "h2",
            className: classes.nameDeco,
            children: brand/* default.femine.name */.Z.femine.name
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
          item: true,
          container: true,
          spacing: 3,
          md: 12,
          lg: 10,
          children: [/*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
            item: true,
            md: 5,
            sm: 6,
            xs: 12,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.history,
              children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                variant: "h5",
                className: cx(classes.title, text.subtitle),
                children: t('femine-landing.timeline_experience')
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
                    animateOnce: true,
                    animateIn: "fadeInLeftShort",
                    delay: 200,
                    duration: 0.3,
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                        variant: "h3",
                        gutterBottom: true,
                        className: text.subtitle2,
                        children: "Software Developer"
                      }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                        gutterBottom: true,
                        children: "at Upwork"
                      }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                        className: classes.time,
                        children: "2019 - Present"
                      })]
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
                    animateOnce: true,
                    animateIn: "fadeInLeftShort",
                    offset: 100,
                    delay: 300,
                    duration: 0.3,
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                        variant: "h3",
                        gutterBottom: true,
                        className: text.subtitle2,
                        children: "Web Developer"
                      }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                        gutterBottom: true,
                        children: "at ButFirstMe"
                      }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                        className: classes.time,
                        children: "2023 - Recent"
                      })]
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
                    animateOnce: true,
                    animateIn: "fadeInLeftShort",
                    offset: 200,
                    delay: 400,
                    duration: 0.3,
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                        variant: "h3",
                        gutterBottom: true,
                        className: text.subtitle2,
                        children: "Web Developer"
                      }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                        gutterBottom: true,
                        children: "at UIV Shop"
                      }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                        className: classes.time,
                        children: "2022 - 2022"
                      })]
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
                    animateOnce: true,
                    animateIn: "fadeInLeftShort",
                    offset: 300,
                    delay: 500,
                    duration: 0.3,
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                        variant: "h3",
                        gutterBottom: true,
                        className: text.subtitle2,
                        children: "Chief Technology Officer"
                      }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                        gutterBottom: true,
                        children: "at Traboon Travels"
                      }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                        className: classes.time,
                        children: "2019 - 2022"
                      })]
                    })
                  })
                })]
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
            item: true,
            sm: 6,
            xs: 12,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.progress,
              children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                variant: "h5",
                className: cx(classes.title, text.subtitle),
                children: t('femine-landing.timeline_skill')
              }), /*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
                animateOnce: true,
                animateIn: "fadeIn",
                delay: 400,
                duration: 0.3,
                afterAnimatedIn: handlePlay,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: classes.textIcon,
                      children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "ion-ios-globe"
                      }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                        variant: "h6",
                        className: text.subtitle2,
                        children: "Web  Development"
                      })]
                    }), /*#__PURE__*/jsx_runtime_.jsx((LinearProgress_default()), {
                      variant: "determinate",
                      value: play ? 80 : 0,
                      classes: {
                        root: classes.progressBg,
                        bar: classes.bar
                      }
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: classes.textIcon,
                      children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "ion-logo-windows"
                      }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                        variant: "h6",
                        className: text.subtitle2,
                        children: "Software  Development"
                      })]
                    }), /*#__PURE__*/jsx_runtime_.jsx((LinearProgress_default()), {
                      variant: "determinate",
                      value: play ? 70 : 0,
                      classes: {
                        root: classes.progressBg,
                        bar: classes.bar
                      }
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: classes.textIcon,
                      children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "ion-logo-buffer"
                      }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                        variant: "h6",
                        className: text.subtitle2,
                        children: "Database  Management"
                      })]
                    }), /*#__PURE__*/jsx_runtime_.jsx((LinearProgress_default()), {
                      variant: "determinate",
                      value: play ? 60 : 0,
                      classes: {
                        root: classes.progressBg,
                        bar: classes.bar
                      }
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: classes.textIcon,
                      children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "ion-ios-chatbubbles"
                      }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                        variant: "h6",
                        className: text.subtitle2,
                        children: "Mobile  App  Development"
                      })]
                    }), /*#__PURE__*/jsx_runtime_.jsx((LinearProgress_default()), {
                      variant: "determinate",
                      value: play ? 90 : 0,
                      classes: {
                        root: classes.progressBg,
                        bar: classes.bar
                      }
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: classes.textIcon,
                      children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "ion-ios-construct"
                      }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                        variant: "h6",
                        className: text.subtitle2,
                        children: "Search  Engine  Optimization"
                      })]
                    }), /*#__PURE__*/jsx_runtime_.jsx((LinearProgress_default()), {
                      variant: "determinate",
                      value: play ? 80 : 0,
                      classes: {
                        root: classes.progressBg,
                        bar: classes.bar
                      }
                    })]
                  })]
                })
              })]
            })
          })]
        })]
      })
    })
  });
}

/* harmony default export */ const Timeline_Timeline = (Timeline);
;// CONCATENATED MODULE: ./components/Timeline/index.js


/***/ }),

/***/ 6628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Title)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/Title/title-style.js

const titleStyles = (0,mui_.makeStyles)({
  uniqId: 'title'
})((theme, _params, classes) => ({
  dark: {},
  title: {
    display: 'block',
    position: 'relative',
    marginBottom: theme.spacing(3),
    textAlign: 'center',
    height: theme.spacing(8),
    backgroundSize: 72,
    padding: theme.spacing(2, 0),
    '& h4': {
      color: theme.palette.text.primary,
      verticalAlign: 'middle',
      fontWeight: theme.typography.fontWeightRegular,
      textTransform: 'capitalize',
      fontSize: 36,
      lineHeight: '56px',
      [theme.breakpoints.down('lg')]: {
        fontSize: 32,
        lineHeight: '48px'
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 24,
        lineHeight: '36px'
      },
      '& strong': {
        fontWeight: theme.typography.fontWeightBold
      }
    },
    '&:after': {
      content: '""',
      width: 12,
      height: 12,
      bottom: -16,
      borderRadius: 12,
      background: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
      position: 'absolute',
      left: '50%',
      marginLeft: -6
    },
    [`&.${classes.dark}`]: {
      '& h4': {
        color: theme.palette.common.white
      },
      '&:after': {
        background: theme.palette.primary.light
      }
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const title_style = (titleStyles);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Title/Title.js




function Title(props) {
  const {
    classes,
    cx
  } = title_style();
  const {
    children,
    dark
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: cx(classes.title, dark && classes.dark),
    children: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
      variant: "h4",
      children: children
    })
  });
}
Title.defaultProps = {
  dark: false
};
;// CONCATENATED MODULE: ./components/Title/index.js


/***/ }),

/***/ 9315:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* reexport safe */ _lib_getStatic__WEBPACK_IMPORTED_MODULE_5__.Fe),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6508);
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tss_react_mui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4960);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_getStatic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1834);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3413);
/* harmony import */ var _components_BannerNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2366);
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3180);
/* harmony import */ var _components_Timeline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2222);
/* harmony import */ var _components_Counter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4270);
/* harmony import */ var _components_Services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(304);
/* harmony import */ var _components_Gallery__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3954);
/* harmony import */ var _components_Testimonials__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1208);
/* harmony import */ var _components_Blog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5041);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(447);
/* harmony import */ var _components_PageNav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4316);
/* harmony import */ var _components_Parallax_Decoration__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9100);
/* harmony import */ var _components_Notification__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(8647);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header__WEBPACK_IMPORTED_MODULE_7__, _components_BannerNav__WEBPACK_IMPORTED_MODULE_8__]);
([_components_Header__WEBPACK_IMPORTED_MODULE_7__, _components_BannerNav__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




 // Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)



















const sectionMargin = margin => margin * 20;

const useStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_2__.makeStyles)({
  uniqId: 'home'
})(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.background.paper
  },
  greyBg: {
    paddingTop: theme.spacing(10)
  },
  spaceBottom: {
    marginBottom: sectionMargin(6),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(10)
    }
  },
  spaceBottomShort: {
    marginBottom: theme.spacing(10)
  },
  spaceTop: {
    marginTop: sectionMargin(6),
    [theme.breakpoints.down('md')]: {
      marginTop: sectionMargin(3)
    }
  },
  spaceTopShort: {
    marginTop: theme.spacing(10)
  },
  containerWrap: {
    marginTop: -40,
    '& > section': {
      position: 'relative'
    }
  },
  parallaxWrap: {
    position: 'relative'
  },
  bottomDeco: {
    top: -200,
    position: 'absolute',
    width: '100%',
    height: 'calc(100% + 200px)'
  }
}));

function Landing(props) {
  const {
    classes,
    cx
  } = useStyles();
  const {
    onToggleDark,
    onToggleDir
  } = props;
  const isTablet = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default()(theme => theme.breakpoints.down('lg'));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("title", {
        children: _public_text_brand__WEBPACK_IMPORTED_MODULE_6__/* ["default"].femine.name */ .Z.femine.name + ' - Profile'
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default()), {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
      className: classes.mainWrap,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        onToggleDark: onToggleDark,
        onToggleDir: onToggleDir
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("section", {
        id: "home",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_BannerNav__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          onToggleDark: onToggleDark,
          onToggleDir: onToggleDir
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("section", {
        id: "about",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_About__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_Timeline__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_Counter__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
        className: classes.greyBg,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
          className: classes.parallaxWrap,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_Parallax_Decoration__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("section", {
            id: "services",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_Services__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("section", {
            id: "my-work",
            className: cx(classes.spaceTopShort, classes.spaceBottomShort),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_Gallery__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {})
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("section", {
          id: "testimonials",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_Testimonials__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
          className: classes.parallaxWrap,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("div", {
            className: classes.bottomDeco,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_Parallax_Decoration__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {})
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("section", {
            id: "blog",
            className: classes.spaceTopShort,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_Blog__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("section", {
            id: "contact",
            className: classes.spaceTop,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {})
          })]
        })]
      }), !isTablet && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_Notification__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_PageNav__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {})]
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Landing); // Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });
// Use this below for Static Site Generation (SSG)

const getStaticProps = (0,_lib_getStatic__WEBPACK_IMPORTED_MODULE_5__/* .makeStaticProps */ .pc)(['common']);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const uiState = {
  navigation: 'icon',

  /* available: icon, text */
  bannerHero: 'image'
  /* available: image, animation, slideshow, animation-slideshow, video */

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uiState);

/***/ }),

/***/ 6959:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Check");

/***/ }),

/***/ 32:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Settings");

/***/ }),

/***/ 3882:
/***/ ((module) => {

module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 4475:
/***/ ((module) => {

module.exports = require("@mui/material/Container");

/***/ }),

/***/ 4960:
/***/ ((module) => {

module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ 3646:
/***/ ((module) => {

module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 5634:
/***/ ((module) => {

module.exports = require("@mui/material/Fade");

/***/ }),

/***/ 5612:
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 4192:
/***/ ((module) => {

module.exports = require("@mui/material/List");

/***/ }),

/***/ 834:
/***/ ((module) => {

module.exports = require("@mui/material/ListItem");

/***/ }),

/***/ 3787:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemIcon");

/***/ }),

/***/ 1211:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemSecondaryAction");

/***/ }),

/***/ 8315:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemText");

/***/ }),

/***/ 9685:
/***/ ((module) => {

module.exports = require("@mui/material/ListSubheader");

/***/ }),

/***/ 1168:
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ 5768:
/***/ ((module) => {

module.exports = require("@mui/material/Popover");

/***/ }),

/***/ 6080:
/***/ ((module) => {

module.exports = require("@mui/material/Slide");

/***/ }),

/***/ 9174:
/***/ ((module) => {

module.exports = require("@mui/material/Snackbar");

/***/ }),

/***/ 9829:
/***/ ((module) => {

module.exports = require("@mui/material/SnackbarContent");

/***/ }),

/***/ 3191:
/***/ ((module) => {

module.exports = require("@mui/material/Switch");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 9868:
/***/ ((module) => {

module.exports = require("@mui/material/useMediaQuery");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2217:
/***/ ((module) => {

module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 5902:
/***/ ((module) => {

module.exports = require("react-scroll-animation-wrapper");

/***/ }),

/***/ 6578:
/***/ ((module) => {

module.exports = require("react-scrollspy");

/***/ }),

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6508:
/***/ ((module) => {

module.exports = require("tss-react/mui");

/***/ }),

/***/ 3707:
/***/ ((module) => {

module.exports = import("next-language-detector");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,932,676,63,293,834,467], () => (__webpack_exec__(9315)));
module.exports = __webpack_exports__;

})();