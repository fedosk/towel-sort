// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (typeof matrix === "undefined") return [];
    if (matrix.length === 0) return [];
    let towel = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            towel.push(matrix[i]);
        } else {
            towel.push(matrix[i].reverse());
        }
    }
    let sorted = towel.reduce((acc, val) => acc.concat(val));
    return sorted;
};
