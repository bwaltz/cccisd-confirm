import PropTypes from 'prop-types';
import React from 'react';

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

export default class extends React.Component {
    static propTypes = {
        message: PropTypes.node,
        description: PropTypes.node,
        confirmLabel: PropTypes.string,
        abortLabel: PropTypes.string,
    };

    static defaultProps = {
        message: 'Are you sure?',
        description: '',
        confirmLabel: 'Yes',
        abortLabel: 'No',
    };

    _abort = () => {
        var $this = this;

        var node = $(this.refs.modal);
        node.on('hidden.bs.modal', e => {
            $this.promise.reject();
        });
        node.modal('hide');
    };

    _confirm = () => {
        var $this = this;

        var node = $(this.refs.modal);
        node.on('hidden.bs.modal', e => {
            $this.promise.resolve();
        });
        node.modal('hide');
    };

    componentDidMount() {
        this.promise = new Promise();

        $(this.refs.modal).modal({ backdrop: 'static' });
    }

    render() {
        var body = null;
        if (this.props.description) {
            body = <div className="modal-body">{this.props.description}</div>;
        }

        return (
            <div className="modal fade" ref="modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button className="close" onClick={this._abort}>
                                &times;
                            </button>
                            <h4 className="modal-title">{this.props.message}</h4>
                        </div>
                        {body}
                        <div className="modal-footer">
                            <button className="btn btn-default" onClick={this._abort}>
                                {this.props.abortLabel}
                            </button>
                            <button className="btn btn-primary" onClick={this._confirm}>
                                {this.props.confirmLabel}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
