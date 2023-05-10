/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/review-item/attributes.js":
/*!**********************************************!*\
  !*** ./src/blocks/review-item/attributes.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/blocks/review-item/constants/index.js");
/* harmony import */ var _generators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../generators */ "./src/generators/index.js");


const {
  generateResRangleControlAttributes
} = _generators__WEBPACK_IMPORTED_MODULE_1__;
const {
  GRID_COLUMNS
} = _constants__WEBPACK_IMPORTED_MODULE_0__;
const attributes = {
  uniqueId: {
    type: 'string'
  },
  blockStyle: {
    type: 'object'
  },
  title: {
    type: 'string'
  },
  titleColor: {
    type: 'string'
  },
  description: {
    type: 'string'
  },
  descriptionColor: {
    type: 'string'
  },
  photo: {
    type: 'object'
  },
  clientName: {
    type: 'string'
  },
  clientDesg: {
    type: 'string'
  },
  clientComment: {
    type: 'string'
  },
  ...generateResRangleControlAttributes({
    controlName: GRID_COLUMNS,
    defaults: {
      [`${GRID_COLUMNS}DeskRange`]: 3,
      [`${GRID_COLUMNS}TabRange`]: 2,
      [`${GRID_COLUMNS}MobRange`]: 1
    }
  })
};
/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/blocks/review-item/constants/index.js":
/*!***************************************************!*\
  !*** ./src/blocks/review-item/constants/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GRID_COLUMNS": function() { return /* binding */ GRID_COLUMNS; }
/* harmony export */ });
const GRID_COLUMNS = 'gridColumns';

/***/ }),

/***/ "./src/blocks/review-item/edit.js":
/*!****************************************!*\
  !*** ./src/blocks/review-item/edit.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/review-item/editor.scss");
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inspector */ "./src/blocks/review-item/inspector.js");
/* harmony import */ var _helper_softminify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helper/softminify */ "./src/helper/softminify.js");


/* eslint-disable no-console */



const {
  Fragment,
  useEffect
} = wp.element; // editor style


/**
 * Internal dependencies
 */



function Edit(_ref) {
  let {
    attributes,
    setAttributes,
    clientId
  } = _ref;
  const {
    uniqueId,
    blockStyle,
    title,
    titleColor,
    description,
    descriptionColor,
    photo,
    clientComment,
    clientDesg,
    clientName
  } = attributes;
  useEffect(() => {
    if (!uniqueId) {
      setAttributes({
        uniqueId: `bdt-blocks-${clientId.slice(0, 8)}`
      });
    }
  }, []);
  const deskStyles = `
		.${uniqueId} .bdt-title {
			color: ${titleColor};
		}
		.${uniqueId} .bdt-description {
			color: ${descriptionColor};
		}
	`;
  const tabStyles = ``;
  const mobStyles = ``;
  /**
   * Block All Styles
   */

  const blockStyleCss = `
		${deskStyles}
		@media (max-width: 1024px) and (min-width: 768px) {
			${tabStyles}
		}
		@media (max-width: 767px) {
			${mobStyles}
		}
	`;
  useEffect(() => {
    if (JSON.stringify(blockStyle) !== JSON.stringify(blockStyleCss)) {
      setAttributes({
        blockStyle: blockStyleCss
      });
    }
  }, [attributes]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `${(0,_helper_softminify__WEBPACK_IMPORTED_MODULE_6__.softMinifyCssStrings)(blockStyleCss)}`), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_5__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: uniqueId
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bdt-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bdt-review-grid-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bdt-item"
  }, photo ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bdt-image-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "bdt-image",
    src: photo.url,
    alt: photo.alt ? photo.alt : clientName
  })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => setAttributes({
      photo: media
    }),
    allowedTypes: ['image'],
    value: photo && photo.id,
    render: _ref2 => {
      let {
        open
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: open,
        variant: "secondary",
        icon: 'cloud-upload'
      }, "Upload Client Image");
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bdt-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "h4",
    className: 'bdt-name',
    value: clientName,
    onChange: value => setAttributes({
      clientName: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Write client name', 'clr')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "span",
    className: 'bdt-designation',
    value: clientDesg,
    onChange: value => setAttributes({
      clientDesg: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Write your designation', 'clr')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    className: 'bdt-desc',
    value: clientComment,
    onChange: value => setAttributes({
      clientComment: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Write client comment', 'clr')
  })))))));
}

/***/ }),

/***/ "./src/blocks/review-item/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/review-item/index.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/review-item/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/review-item/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/blocks/review-item/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/blocks/review-item/save.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes */ "./src/blocks/review-item/attributes.js");




/**
 * Internal dependencies
 */


 // import attributes


/**
 * Block Registration
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__, {
  icon: {
    src: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      version: "1.1",
      width: "512",
      height: "512",
      x: "0",
      y: "0",
      viewBox: "0 0 512.002 512.002"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M151.57 208.93c-1.86-1.86-4.44-2.93-7.07-2.93s-5.209 1.069-7.07 2.93c-1.86 1.86-2.93 4.44-2.93 7.07s1.07 5.21 2.93 7.069c1.86 1.86 4.44 2.931 7.07 2.931s5.21-1.07 7.07-2.931c1.86-1.859 2.93-4.439 2.93-7.069s-1.07-5.21-2.93-7.07z",
      fill: "#000000"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M482 0H84C67.458 0 54 13.458 54 30v166c0 16.542 13.458 30 30 30h18c5.523 0 10-4.478 10-10s-4.477-10-10-10H84c-5.514 0-10-4.486-10-10V30c0-5.514 4.486-10 10-10h398c5.514 0 10 4.486 10 10v166c0 5.514-4.486 10-10 10h-66.887a10.001 10.001 0 0 0-7.071 2.929l-32.929 32.929-32.929-32.929a10.001 10.001 0 0 0-7.071-2.929h-77.985a58.724 58.724 0 0 0-2.507-5.579c-7.16-13.911-19.348-24.078-34.316-28.629l-14.458-4.396c-5.09-1.55-10.502 1.162-12.312 6.165l-22.718 62.789a75.664 75.664 0 0 1-34.993 40.74l-21.326 11.612c-5.241-6.362-13.176-10.425-22.043-10.425h-63.9c-15.744 0-28.552 12.809-28.552 28.553v176.616C.001 499.191 12.81 512 28.554 512h63.9c9.954 0 18.729-5.123 23.841-12.868l10.204 4.002a127.9 127.9 0 0 0 46.898 8.868h134.928c20.245 0 36.715-16.47 36.715-36.715a36.47 36.47 0 0 0-4.962-18.396c14.894-4.681 25.729-18.615 25.729-35.034a36.489 36.489 0 0 0-5.2-18.81c14.26-5.044 24.506-18.655 24.506-34.621 0-16.63-11.118-30.705-26.308-35.203a36.475 36.475 0 0 0 4.865-18.229c0-20.244-16.47-36.715-36.715-36.715h-80.188l11.214-33.294a57.464 57.464 0 0 0 3.02-18.984h69.97l37.071 37.071c1.953 1.952 4.512 2.929 7.071 2.929s5.119-.977 7.071-2.929L419.256 226H482c16.542 0 30-13.458 30-30V30c0-16.542-13.458-30-30-30zM101.007 483.447c-.001 4.716-3.837 8.553-8.553 8.553h-63.9c-4.716 0-8.552-3.837-8.552-8.553V306.831c0-4.716 3.836-8.553 8.552-8.553h21.95v123.121c0 5.522 4.477 10 10 10s10-4.478 10-10V298.278h21.95c3.735 0 6.91 2.411 8.073 5.755.083.484.203.964.361 1.439.071.444.119.895.119 1.359v176.616zm225.949-185.17v.001c9.217 0 16.715 7.498 16.715 16.715 0 9.217-7.498 16.716-16.715 16.716h-54.251c-5.523 0-10 4.478-10 10s4.477 10 10 10l75.694.002c9.217 0 16.715 7.498 16.715 16.715 0 9.217-7.498 16.716-16.715 16.716h-75.694c-5.523 0-10 4.478-10 10s4.477 10 10 10h56.388c9.217 0 16.715 7.498 16.715 16.715 0 9.217-7.498 16.715-16.715 16.715h-56.388c-5.523 0-10 4.478-10 10s4.477 10 10 10h35.621c9.217 0 16.715 7.499 16.715 16.716 0 9.217-7.498 16.715-16.715 16.715H173.397c-13.607 0-26.929-2.52-39.596-7.487l-12.795-5.018V307.931l24.381-13.276a95.638 95.638 0 0 0 44.235-51.5l19.489-53.862 5.376 1.634c9.75 2.965 17.688 9.587 22.352 18.647s5.441 19.369 2.188 29.026l-15.657 46.485a10 10 0 0 0 9.477 13.192h94.109z",
      fill: "#000000"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M466.201 96.976c-1.894-5.824-6.836-9.989-12.898-10.868l-17.688-2.565-7.915-16.025c-2.712-5.491-8.199-8.901-14.323-8.901h-.004c-6.125.002-11.613 3.415-14.322 8.908l-7.906 16.03-17.688 2.575c-6.061.883-11.001 5.05-12.892 10.876-1.891 5.825-.341 12.1 4.047 16.375l12.802 12.472-3.017 17.617c-1.034 6.038 1.402 12.023 6.359 15.623a15.918 15.918 0 0 0 9.372 3.065c2.54 0 5.094-.613 7.453-1.854l15.819-8.322 15.823 8.313c5.422 2.848 11.868 2.381 16.823-1.221 4.954-3.602 7.387-9.589 6.35-15.626l-3.026-17.615 12.797-12.48c4.381-4.278 5.928-10.553 4.034-16.377zm-32.313 16.017a15.971 15.971 0 0 0-4.59 14.141l2.003 11.662-10.479-5.506a15.977 15.977 0 0 0-14.864.006l-10.473 5.51 1.997-11.663a15.97 15.97 0 0 0-4.598-14.14l-8.477-8.258 11.711-1.705a15.965 15.965 0 0 0 12.025-8.741l5.235-10.613 5.24 10.61a15.973 15.973 0 0 0 12.03 8.735l11.711 1.698-8.471 8.264zM338.988 96.976c-1.895-5.824-6.836-9.988-12.898-10.868l-17.688-2.565-7.915-16.025c-2.712-5.491-8.199-8.901-14.323-8.901h-.004c-6.125.002-11.614 3.415-14.323 8.909l-7.905 16.029-17.688 2.575c-6.061.883-11.001 5.05-12.892 10.876-1.891 5.825-.341 12.1 4.047 16.375l12.802 12.472-3.017 17.617c-1.034 6.038 1.403 12.024 6.359 15.623a15.915 15.915 0 0 0 9.371 3.065c2.54 0 5.093-.613 7.452-1.854l15.819-8.322 15.824 8.313c5.423 2.848 11.867 2.381 16.823-1.221 4.954-3.602 7.387-9.589 6.35-15.626l-3.026-17.615 12.797-12.48c4.383-4.278 5.93-10.552 4.035-16.377zm-32.313 16.017a15.971 15.971 0 0 0-4.59 14.141l2.003 11.662-10.479-5.505a15.974 15.974 0 0 0-14.865.005l-10.473 5.51 1.997-11.663a15.97 15.97 0 0 0-4.598-14.14l-8.477-8.258 11.71-1.705a15.972 15.972 0 0 0 12.027-8.742l5.234-10.613 5.239 10.609a15.971 15.971 0 0 0 12.031 8.737l11.711 1.698-8.47 8.264zM211.776 96.976c-1.895-5.824-6.837-9.989-12.898-10.868l-17.688-2.565-7.915-16.025c-2.712-5.491-8.199-8.901-14.323-8.901h-.004c-6.125.002-11.614 3.415-14.323 8.909l-7.905 16.029-17.688 2.575c-6.062.883-11.001 5.051-12.893 10.877-1.891 5.825-.34 12.1 4.047 16.374l12.802 12.472-3.017 17.617c-1.034 6.038 1.403 12.024 6.359 15.623a15.915 15.915 0 0 0 9.371 3.065c2.54 0 5.093-.613 7.452-1.854l15.819-8.322 15.823 8.313c5.422 2.848 11.868 2.381 16.823-1.221 4.954-3.602 7.387-9.589 6.35-15.626l-3.026-17.615 12.797-12.48c4.385-4.278 5.931-10.552 4.037-16.377zm-32.313 16.017a15.971 15.971 0 0 0-4.59 14.141l2.003 11.662-10.479-5.505a15.974 15.974 0 0 0-14.865.005l-10.473 5.51 1.998-11.666a15.977 15.977 0 0 0-4.599-14.137l-8.477-8.258 11.71-1.705a15.972 15.972 0 0 0 12.027-8.742l5.234-10.613 5.239 10.609a15.971 15.971 0 0 0 12.031 8.737l11.712 1.698-8.471 8.264zM60.504 447.359c-5.523 0-10 4.478-10 10v.156c0 5.522 4.477 10 10 10s10-4.478 10-10v-.156c0-5.522-4.477-10-10-10z",
      fill: "#000000"
    })))
  },
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_6__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/blocks/review-item/inspector.js":
/*!*********************************************!*\
  !*** ./src/blocks/review-item/inspector.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/blocks/review-item/constants/index.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../controls */ "./src/controls/index.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes */ "./src/blocks/review-item/attributes.js");


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



const {
  ResRangleControl
} = _controls__WEBPACK_IMPORTED_MODULE_5__;
const {
  GRID_COLUMNS
} = _constants__WEBPACK_IMPORTED_MODULE_4__;


const Inspector = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  const {
    titleColor,
    descriptionColor,
    photo
  } = attributes;
  const objAttrs = {
    attributes,
    setAttributes,
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_6__["default"]
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bdt-inspector-controls"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Column Settings', 'bdt-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResRangleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Grid Columns', 'bdt-blocks'),
    controlName: GRID_COLUMNS,
    objAttrs: objAttrs,
    noUnits: false,
    min: 1,
    max: 4
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color Settings', 'bdt-blocks'),
    initialOpen: false,
    colorSettings: [{
      value: titleColor,
      onChange: value => setAttributes({
        titleColor: value
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title Color', 'bdt-blocks')
    }, {
      value: descriptionColor,
      onChange: value => setAttributes({
        descriptionColor: value
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Description Color', 'bdt-blocks')
    }]
  }), photo && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => setAttributes({
      photo: media
    }),
    allowedTypes: ['image'],
    value: photo && photo.id,
    render: _ref2 => {
      let {
        open
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
        onClick: open,
        label: "Edit",
        icon: "edit"
      });
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/blocks/review-item/save.js":
/*!****************************************!*\
  !*** ./src/blocks/review-item/save.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function save(_ref) {
  let {
    attributes
  } = _ref;
  const {
    uniqueId,
    title,
    description
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: `${uniqueId}`
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "h2",
    value: title,
    className: "bdt-title"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    className: "bdt-description",
    value: description
  }));
}

/***/ }),

/***/ "./src/controls/index.js":
/*!*******************************!*\
  !*** ./src/controls/index.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResRangleControl": function() { return /* reexport safe */ _res_rangle_control__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _res_rangle_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./res-rangle-control */ "./src/controls/res-rangle-control/index.js");


/***/ }),

/***/ "./src/controls/res-btn/index.js":
/*!***************************************!*\
  !*** ./src/controls/res-btn/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);




const ResBtn = _ref => {
  let {
    resMode,
    setAttributes
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "res-btn"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: resMode === 'Desktop' ? 'primary' : 'secondary',
    onClick: () => {
      setAttributes({
        resMode: 'Desktop'
      });

      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)('core/edit-post').__experimentalSetPreviewDeviceType('Desktop');
    },
    icon: "desktop",
    title: "Desktop"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: resMode === 'Tablet' ? 'primary' : 'secondary',
    onClick: () => {
      setAttributes({
        resMode: 'Tablet'
      });

      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)('core/edit-post').__experimentalSetPreviewDeviceType('Tablet');
    },
    icon: "tablet",
    title: "Tablet"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: resMode === 'Mobile' ? 'primary' : 'secondary',
    onClick: () => {
      setAttributes({
        resMode: 'Mobile'
      });

      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)('core/edit-post').__experimentalSetPreviewDeviceType('Mobile');
    },
    icon: "smartphone",
    title: "Mobile"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ResBtn);

/***/ }),

/***/ "./src/controls/res-rangle-control/index.js":
/*!**************************************************!*\
  !*** ./src/controls/res-rangle-control/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _res_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../res-btn */ "./src/controls/res-btn/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/controls/res-rangle-control/style.scss");





const ResRangleControl = _ref => {
  let {
    label,
    controlName,
    objAttrs,
    noUnits,
    units,
    min,
    max
  } = _ref;
  const {
    attributes,
    setAttributes
  } = objAttrs;
  const {
    resMode
  } = attributes;
  const {
    [`${controlName}DeskRange`]: deskRange,
    [`${controlName}TabRange`]: tabRange,
    [`${controlName}MobRange`]: mobRange
  } = attributes;
  if (!units) units = units || ['px', '%'];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bdt-res-rangle-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    align: "flex-start"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    id: "res-label",
    label: label
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_res_btn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    resMode: resMode,
    setAttributes: setAttributes
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, null, !noUnits && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "units-wrapper"
  }, units && units.map((unit, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "single-unit",
      key: index
    }, unit);
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "res-controls"
  }, resMode === 'Desktop' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-rangle"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    value: deskRange,
    onChange: value => setAttributes({
      [`${controlName}DeskRange`]: value
    }),
    min: min,
    max: max
  })), resMode === 'Tablet' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-rangle"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    value: tabRange,
    onChange: value => setAttributes({
      [`${controlName}TabRange`]: value
    }),
    min: min,
    max: max
  })), resMode === 'Mobile' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-rangle"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    value: mobRange,
    onChange: value => setAttributes({
      [`${controlName}MobRange`]: value
    }),
    min: min,
    max: max
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ResRangleControl);

/***/ }),

/***/ "./src/generators/index.js":
/*!*********************************!*\
  !*** ./src/generators/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateResRangleControlAttributes": function() { return /* binding */ generateResRangleControlAttributes; }
/* harmony export */ });
const generateResRangleControlAttributes = _ref => {
  let {
    controlName,
    defaults = {}
  } = _ref;
  const {
    [`${controlName}DeskRange`]: deskRange,
    [`${controlName}TabRange`]: tabRange,
    [`${controlName}MobRange`]: mobRange
  } = defaults;
  return {
    [`${controlName}DeskRange`]: {
      type: 'number',
      default: deskRange
    },
    [`${controlName}TabRange`]: {
      type: 'number',
      default: tabRange
    },
    [`${controlName}MobRange`]: {
      type: 'number',
      default: mobRange
    }
  };
};

/***/ }),

/***/ "./src/helper/softminify.js":
/*!**********************************!*\
  !*** ./src/helper/softminify.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "softMinifyCssStrings": function() { return /* binding */ softMinifyCssStrings; }
/* harmony export */ });
// softMinifyCssStrings is for minifying the css which is in the style tag as a string  for view.js
const softMinifyCssStrings = function () {
  let cssString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ' ';
  return cssString.replace(/\s+/g, ' ').replace(/\.zb\-[\w\-\s\.\,\:\>\(\)\d\+\[\]\#\>]+\{[\s]+\}/g, '');
};

/***/ }),

/***/ "./src/blocks/review-item/editor.scss":
/*!********************************************!*\
  !*** ./src/blocks/review-item/editor.scss ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/review-item/style.scss":
/*!*******************************************!*\
  !*** ./src/blocks/review-item/style.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/controls/res-rangle-control/style.scss":
/*!****************************************************!*\
  !*** ./src/controls/res-rangle-control/style.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/blocks/review-item/block.json":
/*!*******************************************!*\
  !*** ./src/blocks/review-item/block.json ***!
  \*******************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"apiVersion":2,"name":"bdt/review-item","version":"0.1.0","title":"Review Item","category":"bdt-blocks","description":"Simple bootstrap block description.","supports":{"html":false,"anchor":true},"textdomain":"bdt-review-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/review-item/index": 0,
/******/ 			"blocks/review/style-index": 0,
/******/ 			"blocks/review-item/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgutenberg_boilerplate"] = self["webpackChunkgutenberg_boilerplate"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/review/style-index","blocks/review-item/style-index"], function() { return __webpack_require__("./src/blocks/review-item/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map