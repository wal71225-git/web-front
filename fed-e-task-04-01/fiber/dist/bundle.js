/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react */ "./src/react/index.js");

var root = document.getElementById("root");
var jsx = /*#__PURE__*/_react__WEBPACK_IMPORTED_MODULE_0__.default.createElement("div", null, /*#__PURE__*/_react__WEBPACK_IMPORTED_MODULE_0__.default.createElement("p", null, "Hello React"), /*#__PURE__*/_react__WEBPACK_IMPORTED_MODULE_0__.default.createElement("p", null, "Hi Fiber"));
(0,_react__WEBPACK_IMPORTED_MODULE_0__.render)(jsx, root);

/***/ }),

/***/ "./src/react/CreateElement/index.js":
/*!******************************************!*\
  !*** ./src/react/CreateElement/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ createElement
/* harmony export */ });
function createElement(type, props) {
  var _ref;

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  var childElements = (_ref = []).concat.apply(_ref, children).reduce(function (result, child) {
    if (child !== false && child !== true && child !== null) {
      if (child instanceof Object) {
        result.push(child);
      } else {
        result.push(createElement("text", {
          textContent: child
        }));
      }
    }

    return result;
  }, []);

  return {
    type: type,
    props: Object.assign({
      children: childElements
    }, props)
  };
}

/***/ }),

/***/ "./src/react/dom/createDOMElement.js":
/*!*******************************************!*\
  !*** ./src/react/dom/createDOMElement.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _updateElementNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateElementNode */ "./src/react/dom/updateElementNode.js");

/**
 * 此方法主要用来根据虚拟dom创建dom节点
 */

var createDOMElement = function createDOMElement(virtualDOM) {
  var newElement = null; // 判断是文本节点还是元素节点

  if (virtualDOM.type === 'text') {
    // 如果是文本节点就创建一个文本节点
    newElement = document.createTextNode(virtualDOM.props.textContent);
  } else {
    // 否则创建一个元素节点
    newElement = document.createElement(virtualDOM.type);
    (0,_updateElementNode__WEBPACK_IMPORTED_MODULE_0__.default)(newElement, virtualDOM); // 为元素设置属性
  }

  return newElement;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDOMElement);

/***/ }),

/***/ "./src/react/dom/index.js":
/*!********************************!*\
  !*** ./src/react/dom/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDOMElement": () => /* reexport safe */ _createDOMElement__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _createDOMElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDOMElement */ "./src/react/dom/createDOMElement.js");



/***/ }),

/***/ "./src/react/dom/updateElementNode.js":
/*!********************************************!*\
  !*** ./src/react/dom/updateElementNode.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/**
 * 此方法主要是为元素设置属性
 * @param {*} element 元素
 * @param {*} virtualDOM 虚拟dom
 */
var updateElementNode = function updateElementNode(element, virtualDOM) {
  var oldVirtualDOM = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  // 获取节点属性对象
  var newProps = virtualDOM.props;
  var oldProps = oldVirtualDOM.props || {};
  Object.keys(newProps).forEach(function (propName) {
    var newPropsValue = newProps[propName];
    var oldPropsValue = oldProps[propName];

    if (newPropsValue !== oldPropsValue) {
      // 判断是否是事件属性 类似onClick -> click
      if (propName.slice(0, 2) === 'on') {
        // 获取事件名称
        var eventName = propName.slice(2).toLowerCase();
        element.addEventListener(eventName, newPropsValue); // 移除旧的事件

        if (oldPropsValue) {
          element.removeEventListener(eventName, oldPropsValue);
        }
      } else if (propName === "value" || propName === "checked") {
        // 判断是否是value checked
        element[propName] = newPropsValue;
      } else if (propName !== "children") {
        // 判断是否是children属性，如果不是分别处理className和一般属性
        if (propName === 'className') {
          element.setAttribute('class', newPropsValue);
        } else {
          element.setAttribute(propName, newPropsValue);
        }
      }
    }
  });
  Object.keys(oldProps).forEach(function (propName) {
    var newPropsValue = newProps[propName];
    var oldPropsValue = oldProps[propName];

    if (!newPropsValue) {
      // 如果在新节点中没有，表明该属性被删除
      // 如果是事件属性
      if (propName.slice(0, 2) === 'on') {
        var eventName = propName.toLowerCase().slice(2);
        element.removeEventListener(eventName, oldPropsValue);
      } else if (propName !== 'children') {
        element.removeAttribute(propName);
      }
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateElementNode);

/***/ }),

/***/ "./src/react/index.js":
/*!****************************!*\
  !*** ./src/react/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _reconciliation__WEBPACK_IMPORTED_MODULE_1__.render,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _CreateElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateElement */ "./src/react/CreateElement/index.js");
/* harmony import */ var _reconciliation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reconciliation */ "./src/react/reconciliation/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  createElement: _CreateElement__WEBPACK_IMPORTED_MODULE_0__.default
});

/***/ }),

/***/ "./src/react/misc/arrified.js":
/*!************************************!*\
  !*** ./src/react/misc/arrified.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var arrified = function arrified(arg) {
  return Array.isArray(arg) ? arg : [arg];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrified);

/***/ }),

/***/ "./src/react/misc/createStateNode.js":
/*!*******************************************!*\
  !*** ./src/react/misc/createStateNode.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _dom_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/index */ "./src/react/dom/index.js");


var createStateNode = function createStateNode(fiber) {
  // 如果是普通元素节点，创建dom
  if (fiber.tag === 'host_component') {
    return (0,_dom_index__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)(fiber);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createStateNode);

/***/ }),

/***/ "./src/react/misc/createTaskQueue.js":
/*!*******************************************!*\
  !*** ./src/react/misc/createTaskQueue.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var createTaskQueue = function createTaskQueue() {
  var taskQueue = [];
  return {
    /**
     * 向任务队列中添加任务
     */
    push: function push(item) {
      return taskQueue.push(item);
    },

    /**
     * 从任务队列中获取任务
     */
    pop: function pop() {
      return taskQueue.shift();
    },

    /**
     * 判断任务队列中是否还有任务
     */
    isEmpty: function isEmpty() {
      return taskQueue.length === 0;
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTaskQueue);

/***/ }),

/***/ "./src/react/misc/getTag.js":
/*!**********************************!*\
  !*** ./src/react/misc/getTag.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
// 获取节点tag类型
var getTag = function getTag(vdom) {
  // 普通节点
  if (typeof vdom.type === 'string') {
    return "host_component";
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTag);

/***/ }),

/***/ "./src/react/misc/index.js":
/*!*********************************!*\
  !*** ./src/react/misc/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTaskQueue": () => /* reexport safe */ _createTaskQueue__WEBPACK_IMPORTED_MODULE_0__.default,
/* harmony export */   "arrified": () => /* reexport safe */ _arrified__WEBPACK_IMPORTED_MODULE_1__.default,
/* harmony export */   "createStateNode": () => /* reexport safe */ _createStateNode__WEBPACK_IMPORTED_MODULE_2__.default,
/* harmony export */   "getTag": () => /* reexport safe */ _getTag__WEBPACK_IMPORTED_MODULE_3__.default
/* harmony export */ });
/* harmony import */ var _createTaskQueue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTaskQueue */ "./src/react/misc/createTaskQueue.js");
/* harmony import */ var _arrified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrified */ "./src/react/misc/arrified.js");
/* harmony import */ var _createStateNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createStateNode */ "./src/react/misc/createStateNode.js");
/* harmony import */ var _getTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getTag */ "./src/react/misc/getTag.js");






/***/ }),

/***/ "./src/react/reconciliation/index.js":
/*!*******************************************!*\
  !*** ./src/react/reconciliation/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var _misc_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../misc/index */ "./src/react/misc/index.js");

var subTask = null; // 要执行的子任务

var taskQueue = (0,_misc_index__WEBPACK_IMPORTED_MODULE_0__.createTaskQueue)();

var getFirstTask = function getFirstTask() {
  // 从队列中获取任务
  var task = taskQueue.pop(); // 返回最外层节点的fiber对象

  return {
    props: task.props,
    stateNode: task.dom,
    tag: 'host_root',
    effects: [],
    child: null
  };
}; // 构建子节点fiber


var reconcileChildren = function reconcileChildren(fiber, children) {
  // 因为子元素可能是对象, 也可能是数组，统一转换成数组处理
  var arrifiedChildren = (0,_misc_index__WEBPACK_IMPORTED_MODULE_0__.arrified)(children);
  var index = 0;
  var element = null;
  var newFiber = null;
  var prevFiber = null;

  while (index < arrifiedChildren.length) {
    element = arrifiedChildren[index];
    newFiber = {
      type: element.type,
      props: element.props,
      tag: (0,_misc_index__WEBPACK_IMPORTED_MODULE_0__.getTag)(element),
      effects: [],
      effectTag: 'placement',
      stateNode: null,
      parent: fiber
    }; // 如果newFiber是普通元素节点stateNode存储的是dom对象，如果是组件对象存储的是实例对象

    newFiber.stateNode = (0,_misc_index__WEBPACK_IMPORTED_MODULE_0__.createStateNode)(newFiber);

    if (index == 0) {
      fiber.child = newFiber;
    } else {
      prevFiber.sibling = newFiber;
    }

    prevFiber = newFiber;
    index++;
  }
}; // 接收任务，执行任务


var executeTask = function executeTask(fiber) {
  // 获取子节点fiber对象
  reconcileChildren(fiber, fiber.props.children); // 如果fiber有子节点，就把子元素返回给调用此方法的对象，接着生成子元素fiber，这样就完成了左侧节点树（注意不包括同级节点）

  if (fiber.child) {
    return fiber.child;
  }

  console.log(fiber);
};

var workLoop = function workLoop(deadline) {
  /** 
   * 如果子任务不存在，就去获取子任务
  */
  if (!subTask) {
    subTask = getFirstTask();
  }
  /**
   * 如果任务存在并且浏览器有空余时间就调用
   * executeTask 方法执行任务 接受任务 返回新的任务
   * 如果subTask如果一直有任务就会一直执行
   */


  while (subTask && deadline.timeRemaining() > 1) {
    subTask = executeTask(subTask);
  }
};

var performTask = function performTask(deadline) {
  /**
   * 执行任务
   */
  workLoop(deadline);
  /**
   * 判断任务是否存在
   * 判断任务队列中是否还有任务没有执行
   * 再一次告诉浏览器在空闲的时间执行任务
   */

  if (subTask || !taskQueue.isEmpty()) {
    requestIdleCallback(performTask);
  }
};

var render = function render(element, dom) {
  /**
  * 1. 向任务队列中添加任务
  * 2. 指定在浏览器空闲时执行任务
  */

  /**
   * 任务就是通过 vdom 对象 构建 fiber 对象
   */
  taskQueue.push({
    dom: dom,
    props: {
      children: element
    }
  });
  /**
   * 指定在浏览器空闲的时间去执行任务
   */

  requestIdleCallback(performTask);
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map