# Example

```js
import React from 'react';
import Confirm from 'cccisd-confirm';

export default () => (
    <button
        className="btn btn-danger"
        onClick={() => {
            Confirm({
                message: 'Are you sure?',
                description: 'You are about to delete a record!',
                confirmLabel: 'Yes',
                abortLabel: 'No',
            })
                .then(() => {
                    // Do something after "Yes" is pressed.
                })
                .fail(() => {
                    // Do something after "No" is pressed.
                });
        }}
    >
        Delete Button
    </button>
);
```