import React from 'react';

export const RepeatItem = props => {
    const { start, stop } = props;
    let items = [];
    for (let i = start; i <= stop; i++) {
        items.push(props.children(i))
    }
    return <>{items}</>
}