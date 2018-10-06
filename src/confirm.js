import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './modal.js';

/** cccisd-confirm provides you with confirmation window styled using bootstrap, like the Javascript confirm() functon */
export default options => {
    if (typeof options === 'string' || React.isValidElement(options)) {
        options = {
            message: options,
        };
    }

    var wrapper = document.body.appendChild(document.createElement('div'));
    // eslint-disable-next-line react/no-render-return-value
    var Component = ReactDOM.render(<Modal {...options} />, wrapper);

    var cleanup = () => {
        ReactDOM.unmountComponentAtNode(wrapper);
        setTimeout(() => {
            wrapper.remove();
        });
    };

    return Component.promise.always(cleanup).promise();
};
