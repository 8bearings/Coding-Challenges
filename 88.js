// Find the middle element

const gimme = function (arr) {
    return arr.indexOf([...arr].sort((a, b) => a > b)[1]);
  };