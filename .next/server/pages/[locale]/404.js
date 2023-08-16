"use strict";
(() => {
var exports = {};
exports.id = 708;
exports.ids = [708];
exports.modules = {

/***/ 1291:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _404),
  "getStaticPaths": () => (/* reexport */ getStatic/* getStaticPaths */.Fe),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./lib/getStatic.js
var getStatic = __webpack_require__(1834);
// EXTERNAL MODULE: ./public/text/brand.js
var brand = __webpack_require__(15);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
;// CONCATENATED MODULE: ./components/Error/error-style.js

const useStyles = (0,mui_.makeStyles)({
  uniqId: 'error'
})(theme => ({
  errorWrap: {
    width: '100%',
    height: '100%',
    minHeight: 800,
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    overflow: 'hidden',
    marginBottom: theme.spacing(-15)
  },
  flex: {
    display: 'flex',
    justifyContent: 'center'
  },
  deco: {
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(5)
    },
    '& h3': {
      fontSize: 106,
      textTransform: 'capitalize',
      fontWeight: 700,
      paddingTop: 40,
      paddingLeft: 20,
      color: theme.palette.common.white,
      fontFamily: 'Times New Roman',
      position: 'relative',
      zIndex: 1
    },
    '&:before': {
      content: '""',
      borderBottom: `290px solid ${theme.palette.primary.main}`,
      borderLeft: '180px solid transparent',
      borderRight: '180px solid transparent',
      position: 'absolute',
      bottom: -20,
      left: -170
    },
    '&:after': {
      content: '""',
      borderBottom: `240px solid ${theme.palette.secondary.main}`,
      borderLeft: '130px solid transparent',
      borderRight: '130px solid transparent',
      position: 'absolute',
      bottom: -20,
      right: -130
    }
  },
  text: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(5),
      borderLeft: `1px solid ${theme.palette.divider}`
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    },
    '& p': {
      fontSize: 22
    },
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(4)
    }
  },
  button: {
    marginTop: theme.spacing(4)
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const error_style = (useStyles);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Error/Error.js










function Error(props) {
  const {
    classes
  } = error_style();
  const {
    errCode,
    text
  } = props;
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.errorWrap,
    children: /*#__PURE__*/jsx_runtime_.jsx((Container_default()), {
      maxWidth: "lg",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        children: [/*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
          item: true,
          md: 6,
          xs: 12,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.flex,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.deco,
              children: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                variant: "h3",
                children: errCode
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
          item: true,
          md: 6,
          xs: 12,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: classes.text,
            children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
              variant: "h4",
              children: text
            }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
              children: t('404_subtitle')
            }), /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
              variant: "contained",
              color: "primary",
              href: "/",
              className: classes.button,
              children: t('back')
            })]
          })
        })]
      })
    })
  });
}

Error.defaultProps = {
  errCode: '404',
  text: ''
};
/* harmony default export */ const Error_Error = (Error);
;// CONCATENATED MODULE: ./components/Error/index.js

;// CONCATENATED MODULE: ./pages/[locale]/404.js



 // Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)






const _404_useStyles = (0,mui_.makeStyles)({
  uniqId: 'error'
})(theme => ({
  dedicatedPage: {
    background: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.background.paper
  }
}));

function ErrorPage(props) {
  const {
    classes
  } = _404_useStyles();
  const {
    errorCode,
    stars
  } = props;
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');

  if (errorCode) {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
        children: /*#__PURE__*/jsx_runtime_.jsx("title", {
          children: brand/* default.femine.name */.Z.femine.name + ' - ' + errorCode
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.dedicatedPage,
        children: /*#__PURE__*/jsx_runtime_.jsx(Error_Error, {
          errorCode: errorCode,
          text: t('404')
        })
      })]
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.dedicatedPage,
    children: [t('description'), "Next stars:\xA0", stars]
  });
}

ErrorPage.defaultProps = {
  errorCode: '400',
  stars: 0
};
/* harmony default export */ const _404 = (ErrorPage); // Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });
// Use this below for Static Site Generation (SSG)

const getStaticProps = (0,getStatic/* makeStaticProps */.pc)(['common']);


/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 4475:
/***/ ((module) => {

module.exports = require("@mui/material/Container");

/***/ }),

/***/ 5612:
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6508:
/***/ ((module) => {

module.exports = require("tss-react/mui");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [293,834], () => (__webpack_exec__(1291)));
module.exports = __webpack_exports__;

})();