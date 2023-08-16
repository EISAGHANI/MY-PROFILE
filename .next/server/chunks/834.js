"use strict";
exports.id = 834;
exports.ids = [834];
exports.modules = {

/***/ 1834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fe": () => (/* binding */ getStaticPaths),
/* harmony export */   "pc": () => (/* binding */ makeStaticProps)
/* harmony export */ });
/* unused harmony exports getI18nPaths, getI18nProps */
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2207);
/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_i18next_config__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const getI18nPaths = () => _next_i18next_config__WEBPACK_IMPORTED_MODULE_1___default().i18n.locales.map(lng => ({
  params: {
    locale: lng
  }
}));
const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths()
});
const getI18nProps = async (ctx, ns = ['common']) => {
  const locale = ctx?.params?.locale;

  const props = _objectSpread({}, await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__.serverSideTranslations)(locale, ns));

  return props;
};
const makeStaticProps = (ns = []) => async ctx => ({
  props: await getI18nProps(ctx, ns)
});

/***/ })

};
;