const permutations = array => {
  let permut = [];
  helperFunction(0, array, permut);
  return permut;
};