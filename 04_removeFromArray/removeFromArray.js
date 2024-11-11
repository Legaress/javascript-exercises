const removeFromArray = function(array = [], ...removedItems) {
    const removedItemsSet = new Set(removedItems);
    return array.filter(item => !removedItemsSet.has(item));
};


// Do not edit below this line
module.exports = removeFromArray;
