webpackHotUpdate(5,{

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _battle = __webpack_require__(393);

var _battle2 = _interopRequireDefault(_battle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\datat\\Desktop\\Game\\pages\\index.js?entry";


var ToDo = function (_React$Component) {
    (0, _inherits3.default)(ToDo, _React$Component);

    function ToDo(props) {
        (0, _classCallCheck3.default)(this, ToDo);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ToDo.__proto__ || (0, _getPrototypeOf2.default)(ToDo)).call(this, props));

        _this.update = function (x) {
            _this.setState({ lng: x });
        };

        _this.render = function () {
            return _react2.default.createElement("div", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }, _react2.default.createElement(_battle2.default, { update: _this.update, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }), _react2.default.createElement("hr", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }), _react2.default.createElement("span", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }, _this.state.lng));
        };

        _this.state = {
            lng: "Hello"
        };

        return _this;
    }

    return ToDo;
}(_react2.default.Component);

exports.default = ToDo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJCYXR0bGUiLCJUb0RvIiwicHJvcHMiLCJ1cGRhdGUiLCJzZXRTdGF0ZSIsImxuZyIsIngiLCJyZW5kZXIiLCJzdGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBWTs7Ozs7Ozs7O0lBR0UsQTtrQ0FFakI7O2tCQUFBLEFBQVksT0FBTzs0Q0FBQTs7c0lBQUEsQUFFVDs7Y0FGUyxBQVNuQixTQUFTLGFBQUssQUFDVjtrQkFBQSxBQUFLLFNBQVMsRUFBRSxLQUFoQixBQUFjLEFBQU8sQUFDeEI7QUFYa0I7O2NBQUEsQUFhbkIsU0FBUyxZQUFNLEFBQ1g7bUNBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxBQUFDLGtDQUFPLFFBQVEsTUFBaEIsQUFBcUI7OEJBQXJCO2dDQURKLEFBQ0ksQUFDQTtBQURBOzs7OEJBQ0E7Z0NBRkosQUFFSSxBQUNBO0FBREE7QUFBQSxnQ0FDQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSxxQkFBTyxBQUFLLE1BSnBCLEFBQ0ksQUFHSSxBQUFrQixBQUc3QjtBQXJCa0IsQUFHZjs7Y0FBQSxBQUFLO2lCQUhVLEFBR2YsQUFBYSxBQUNKO0FBREksQUFDVDs7ZUFHUDs7OztFQVQ2QixnQkFBTSxBOztrQkFBbkIsQSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9kYXRhdC9EZXNrdG9wL0dhbWUifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\datat\\Desktop\\Game\\pages\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\datat\\Desktop\\Game\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4zZWM2OTZhMWRjZjMyNDRiZmI2My5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZTgzNjRlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmF0dGxlIGZyb20gJy4uL2NvbXBvbmVudHMvYmF0dGxlJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbG5nOiBcIkhlbGxvXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSA9IHggPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsbmc6IHggfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8QmF0dGxlIHVwZGF0ZT17dGhpcy51cGRhdGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnt0aGlzLnN0YXRlLmxuZ308L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUlBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQVZBO0FBQ0E7QUFZQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQWZBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7O0FBVEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==