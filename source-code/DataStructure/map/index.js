const findSameValue = (sum1, sum2) => {
    const _sumMap = new Map();
    sum1.forEach(item => _sumMap.set(item, false));
    sum2.forEach(item => _sumMap.set(item, true));
};

findSameValue([1,2,3], [1,2]);