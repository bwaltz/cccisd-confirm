'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _modal = require('./modal.js');

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** cccisd-confirm provides you with confirmation window styled using bootstrap, like the Javascript confirm() functon */
exports.default = function (options) {
    if (typeof options === 'string' || _react2.default.isValidElement(options)) {
        options = {
            message: options
        };
    }

    var wrapper = document.body.appendChild(document.createElement('div'));
    // eslint-disable-next-line react/no-render-return-value
    var Component = _reactDom2.default.render(_react2.default.createElement(_modal2.default, options), wrapper);

    var cleanup = function cleanup() {
        _reactDom2.default.unmountComponentAtNode(wrapper);
        setTimeout(function () {
            wrapper.remove();
        });
    };

    return Component.promise.always(cleanup).promise();
};