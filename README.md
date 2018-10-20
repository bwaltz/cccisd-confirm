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

![alt text](https://cl.ly/41ac4b9f7bb4/Screen%20Shot%202018-10-20%20at%201.01.14%20PM.png)

