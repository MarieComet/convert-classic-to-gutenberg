/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils/converter.js":
/*!********************************!*\
  !*** ./src/utils/converter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkIsPostClassic": () => (/* binding */ checkIsPostClassic),
/* harmony export */   "classicToBlocks": () => (/* binding */ classicToBlocks)
/* harmony export */ });
/* harmony import */ var _wordpress_block_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-library */ "@wordpress/block-library");
/* harmony import */ var _wordpress_block_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);


const blocks = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.getBlockTypes)();

if (blocks.length === 0) {
  (0,_wordpress_block_library__WEBPACK_IMPORTED_MODULE_0__.registerCoreBlocks)();
}

function checkIsPostClassic(postContent) {
  if (postContent.includes('<!--')) {
    return false;
  }

  return true;
}
function classicToBlocks(postContent) {
  var blocks = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.rawHandler)({
    HTML: postContent
  });
  return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.serialize)(blocks);
}

/***/ }),

/***/ "@wordpress/block-library":
/*!**************************************!*\
  !*** external ["wp","blockLibrary"] ***!
  \**************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockLibrary"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/html-entities":
/*!**************************************!*\
  !*** external ["wp","htmlEntities"] ***!
  \**************************************/
/***/ ((module) => {

module.exports = window["wp"]["htmlEntities"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ ((module) => {

module.exports = window["wp"]["url"];

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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_converter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/converter */ "./src/utils/converter.js");










function ConvertToClassic() {
  const [inputSearch, setInputSearch] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [searchTerm, setSearchTerm] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [pagesToConvert, setPageToConvert] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [currentPage, setCurrentPage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const [postsPerPages, setPostsPerPages] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(15);
  const [postType, setPostType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('page');
  const [editor, setEditor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('classic');
  const [pagesConverting, setPagesConverting] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [allChecked, setAllChecked] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    pages,
    hasResolved
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const query = {
      per_page: postsPerPages,
      page: currentPage
    };

    if (searchTerm) {
      query.search = searchTerm; //query.page = 1;
    }

    const selectorArgs = ['postType', postType, query];
    return {
      pages: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store).getEntityRecords(...selectorArgs),
      hasResolved: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store).hasFinishedResolution('getEntityRecords', selectorArgs)
    };
  }, [searchTerm, currentPage, postsPerPages, postType, editor]);
  const excludedPostTypes = ['attachment', 'wp_navigation', 'wp_block'];
  const {
    types
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    var _select$getPostTypes;

    const query = {
      per_page: -1,
      viewable: true
    };
    return {
      types: (_select$getPostTypes = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store).getPostTypes(query)) === null || _select$getPostTypes === void 0 ? void 0 : _select$getPostTypes.filter(_ref => {
        let {
          visibility,
          slug
        } = _ref;
        return visibility.show_ui && !excludedPostTypes.includes(slug);
      })
    };
  }, [postType]);
  const {
    getEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store);
  const {
    saveEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store);

  const convertPages = classic => {
    var pagesConverted = [...pagesToConvert];
    pagesToConvert.forEach(function (pageId) {
      const objectPost = getEntityRecord('postType', postType, pageId);
      let postContent = objectPost.content.raw;

      if (classic) {
        const isClassic = (0,_utils_converter__WEBPACK_IMPORTED_MODULE_7__.checkIsPostClassic)(objectPost.content.raw);

        if (isClassic) {
          postContent = (0,_utils_converter__WEBPACK_IMPORTED_MODULE_7__.classicToBlocks)(objectPost.content.raw);
        }
      } else {
        postContent = objectPost.content.rendered;
      }

      if (postContent) {
        // Update post                    
        return saveEntityRecord('postType', objectPost.type, {
          id: pageId,
          content: postContent
        }).then(response => {
          // Set this post is converting
          setPagesConverting(oldPagesConverting => [...oldPagesConverting, pageId]); // Remove this post from post to convert

          const index = pagesConverted.findIndex(id => id === pageId);

          if (index > -1) {
            pagesConverted = [...pagesConverted.slice(0, index), ...pagesConverted.slice(index + 1)];
          }

          setAllChecked(false);
          return response;
        }).catch(err => {
          console.log(err);
        });
      }
    }); // Empty the pages which are converted

    setPageToConvert(pagesConverted);
  };

  const changePage = event => {
    setAllChecked(false);
    setPageToConvert([]);

    if (event.target.name === 'prev') {
      if (currentPage >= 2) {
        setCurrentPage(parseInt(currentPage) - 1);
      }
    }

    if (event.target.name === 'next') {
      setCurrentPage(parseInt(currentPage) + 1);
    }
  };

  const handleSearch = () => {
    if (inputSearch) {
      setSearchTerm(inputSearch);
    } else {
      setSearchTerm('');
    }
  };

  const emptySearch = () => {
    setInputSearch('');
    setSearchTerm('');
    setCurrentPage(1);
  };

  const handleSetPostsPerPage = event => {
    setPostsPerPages(event.target.value);
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cctg-header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TypesList, {
    types,
    postType,
    setPostType,
    setCurrentPage,
    setPagesConverting,
    setPageToConvert,
    setAllChecked
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(EditorList, {
    editor,
    setEditor,
    setCurrentPage,
    setPagesConverting,
    setPageToConvert,
    setAllChecked
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Search', 'classic-to-gutenberg'),
    value: inputSearch,
    onChange: setInputSearch,
    type: "search"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "secondary",
    onClick: () => handleSearch(),
    icon: "search",
    className: "search-submit",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Search', 'classic-to-gutenberg')
  }), searchTerm && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "secondary",
    onClick: () => emptySearch(),
    icon: "no",
    className: "search-clear",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Clear search', 'classic-to-gutenberg')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cctg-pagination"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "components-base-control-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "cctg-perpage"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Posts per page', 'classic-to-gutenberg')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    name: "cctg-perpage",
    id: "cctg-perpage",
    value: postsPerPages,
    onChange: handleSetPostsPerPage
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "15"
  }, "15"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "25"
  }, "25"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "50"
  }, "50"))), currentPage > 2 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "secondary",
    onClick: () => setCurrentPage(1)
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('First page', 'classic-to-gutenberg')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "secondary",
    onClick: changePage,
    name: "prev",
    icon: "arrow-left-alt",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Prev Page', 'classic-to-gutenberg')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    hideLabelFromVision: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Current page', 'classic-to-gutenberg'),
    value: currentPage,
    onChange: setCurrentPage,
    type: "number"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "secondary",
    onClick: changePage,
    name: "next",
    icon: "arrow-right-alt",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Next Page', 'classic-to-gutenberg')
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PagesList, {
    editor,
    hasResolved,
    pages,
    pagesToConvert,
    setPageToConvert,
    pagesConverting,
    allChecked,
    setAllChecked
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cctg-footer"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    onClick: () => convertPages(true)
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Convert selected pages to Gutenberg', 'classic-to-gutenberg')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "secondary",
    onClick: () => convertPages(false)
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Revert selected pages to Classic', 'classic-to-gutenberg'))));
}

function TypesList(_ref2) {
  let {
    types,
    postType,
    setPostType,
    setCurrentPage,
    setPagesConverting,
    setPageToConvert,
    setAllChecked
  } = _ref2;

  if (!(types !== null && types !== void 0 && types.length)) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No types', 'classic-to-gutenberg'));
  }

  const handleChangePostType = event => {
    setCurrentPage(1);
    setAllChecked(false);
    setPageToConvert([]);
    setPagesConverting([]);
    setPostType(event.target.value);
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "components-base-control-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "cctg-types"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Post type', 'classic-to-gutenberg')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    name: "cctg-types",
    id: "cctg-types",
    value: postType,
    onChange: handleChangePostType
  }, types === null || types === void 0 ? void 0 : types.map(type => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      value: type.slug,
      key: type.slug
    }, type.name);
  })));
}

function EditorList(_ref3) {
  let {
    editor,
    setEditor,
    setCurrentPage,
    setPagesConverting,
    setPageToConvert,
    setAllChecked
  } = _ref3;

  const handleChangeEditor = event => {
    setCurrentPage(1);
    setAllChecked(false);
    setPageToConvert([]);
    setPagesConverting([]);
    setEditor(event.target.value);
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "components-base-control-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "cctg-editor"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Editor', 'classic-to-gutenberg')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    name: "cctg-editor",
    id: "cctg-editor",
    value: editor,
    onChange: handleChangeEditor
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "classic"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Classic', 'classic-to-gutenberg')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "gutenberg"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Gutenberg', 'classic-to-gutenberg')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: ""
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Both', 'classic-to-gutenberg'))));
}

function PagesList(_ref4) {
  let {
    editor,
    hasResolved,
    pages,
    pagesToConvert,
    setPageToConvert,
    pagesConverting,
    allChecked,
    setAllChecked
  } = _ref4;

  if (!hasResolved && !(pages !== null && pages !== void 0 && pages.length)) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, null);
  }

  if (!(pages !== null && pages !== void 0 && pages.length)) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No posts', 'classic-to-gutenberg'));
  }

  const addPageToConvert = event => {
    var pagesArr = [...pagesToConvert];
    const value = parseInt(event.target.value);
    const index = pagesArr.findIndex(id => id === value);

    if (index > -1) {
      pagesArr = [...pagesArr.slice(0, index), ...pagesArr.slice(index + 1)];
    } else {
      pagesArr.push(value);
    }

    setPageToConvert(pagesArr);
  };

  const checkAll = event => {
    let checked = event.target.checked;
    setAllChecked(checked);
    var pagesID = [];

    if (!allChecked) {
      // ¯\_(ツ)_/¯
      {
        pages === null || pages === void 0 ? void 0 : pages.map(page => {
          pagesID.push(page.id);
        });
      }
    }

    setPageToConvert(pagesID);
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "wp-list-table widefat striped table-view-list"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "check-column"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "checkAll",
    className: "screen-reader-text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select/Unselect all', 'classic-to-gutenberg')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    name: "checkAll",
    onChange: checkAll,
    checked: allChecked
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title', 'classic-to-gutenberg')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Editor', 'classic-to-gutenberg')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Link', 'classic-to-gutenberg')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Edit link', 'classic-to-gutenberg')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, pages === null || pages === void 0 ? void 0 : pages.map(page => {
    const isClassic = (0,_utils_converter__WEBPACK_IMPORTED_MODULE_7__.checkIsPostClassic)(page.content.raw);

    if (editor && isClassic && 'classic' !== editor) {
      return;
    }

    if (editor && !isClassic && 'gutenberg' !== editor) {
      return;
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      key: page.id,
      "data-converting": pagesConverting.includes(page.id)
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      className: "check-column",
      scope: "row"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "checkbox",
      name: page.id,
      value: page.id,
      onChange: addPageToConvert,
      checked: pagesToConvert.includes(page.id)
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__.decodeEntities)(page.title.rendered)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "cctg-editor"
    }, isClassic ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Classic', 'classic-to-gutenberg') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Gutenberg', 'classic-to-gutenberg')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: page.link
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('View', 'classic-to-gutenberg'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_6__.addQueryArgs)('post.php', {
        post: page.id,
        action: 'edit'
      })
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Edit', 'classic-to-gutenberg'))));
  }))));
}

window.addEventListener('load', function () {
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ConvertToClassic, null), document.querySelector('#classic-to-gutenberg'));
}, false);
})();

/******/ })()
;
//# sourceMappingURL=index.js.map