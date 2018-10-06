'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO: rewrite it without jQuery and Bootstrap modal
// jQuery has to be global for Bootstrap
var $;
if (window.jQuery) {
    $ = window.jQuery;
} else {
    $ = require('jquery'); // eslint-disable-line global-require
    window.$ = $;
    window.jQuery = $;
}
if (!$().modal) {
    require('bootstrap'); // eslint-disable-line global-require
}

var Promise = $.Deferred;

var _class = function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, _class);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this._abort = function () {
            var $this = _this;

            var node = $(_this.refs.modal);
            node.on('hidden.bs.modal', function (e) {
                $this.promise.reject();
            });
            node.modal('hide');
        }, _this._confirm = function () {
            var $this = _this;

            var node = $(_this.refs.modal);
            node.on('hidden.bs.modal', function (e) {
                $this.promise.resolve();
            });
            node.modal('hide');
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_class, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.promise = new Promise();

            $(this.refs.modal).modal({ backdrop: 'static' });
        }
    }, {
        key: 'render',
        value: function render() {
            var body = null;
            if (this.props.description) {
                body = _react2.default.createElement(
                    'div',
                    { className: 'modal-body' },
                    this.props.description
                );
            }

            return _react2.default.createElement(
                'div',
                { className: 'modal fade', ref: 'modal' },
                _react2.default.createElement(
                    'div',
                    { className: 'modal-dialog' },
                    _react2.default.createElement(
                        'div',
                        { className: 'modal-content' },
                        _react2.default.createElement(
                            'div',
                            { className: 'modal-header' },
                            _react2.default.createElement(
                                'button',
                                { className: 'close', onClick: this._abort },
                                '\xD7'
                            ),
                            _react2.default.createElement(
                                'h4',
                                { className: 'modal-title' },
                                this.props.message
                            )
                        ),
                        body,
                        _react2.default.createElement(
                            'div',
                            { className: 'modal-footer' },
                            _react2.default.createElement(
                                'button',
                                { className: 'btn btn-default', onClick: this._abort },
                                this.props.abortLabel
                            ),
                            _react2.default.createElement(
                                'button',
                                { className: 'btn btn-primary', onClick: this._confirm },
                                this.props.confirmLabel
                            )
                        )
                    )
                )
            );
        }
    }]);

    return _class;
}(_react2.default.Component);

_class.propTypes = {
    message: _propTypes2.default.node,
    description: _propTypes2.default.node,
    confirmLabel: _propTypes2.default.string,
    abortLabel: _propTypes2.default.string
};
_class.defaultProps = {
    message: 'Are you sure?',
    description: '',
    confirmLabel: 'Yes',
    abortLabel: 'No'
};
exports.default = _class;