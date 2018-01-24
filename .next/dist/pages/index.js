"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _battle = require("../components/battle");

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