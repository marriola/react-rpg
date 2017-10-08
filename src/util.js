import React from 'react';

export function joinNonEmpty(arr, separator = ' ') {
    return arr.filter(x => x).join(separator);
}

/**
 * Clones an array and applies properties from another object into an object in it.
 */
export function cloneExtend(arr, index, props) {
    let newArr = deepCopy(arr);
    let item = newArr[index];
    newArr[index] = { ...item, ...props };
    return newArr;
}


export function required(fn, param) {
    throw `${fn}: required parameter ${param} missing`;
}

export function deepCopy(arr) {
    var out = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        var item = arr[i];
        var obj = {};
        for (var k in item) {
            obj[k] = item[k];
        }
        out.push(obj);
    }
    return out;
}

export function numberChildren(parentId, children) {
    let i = 0;
    
    return React.Children.map(children, x => {
        let j = ++i;
        if (j == 1) {
            //  j = '';
        }
    
        if (x && typeof x === 'object') {
            return React.cloneElement(x, {
                id: parentId + '.' + j,
                ...x.props
            });
        } else {
            return x;
        }
    });
}

export function range(start, end) {
    return new Array(end - start + 1)
        .fill(0)
        .map((x, i) => start + i);
}