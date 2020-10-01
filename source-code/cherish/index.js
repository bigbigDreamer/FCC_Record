// 快速排序

const arr = [1, 2, 3, 4, 5, 6, 1, 2, 7, 8, 9, 10];

const quickSort = (arr, type = 'asc') => {

    if(arr.length <= 1) { return arr }

    const sentinel = arr?.splice(Math.round(arr.length/2), 1)[0],
        right = [],
        left = [];
    for (let i = 0; i< arr.length; i++) {
        if( arr[i] <= sentinel) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return type === 'asc' ? quickSort(left).concat([sentinel], quickSort(right)) :  quickSort(left).concat([sentinel], quickSort(right)).reverse();
};


console.log(quickSort(arr, 'desc'))