function trimArray(
  arr: Array<number>,
  leftTrim: number,
  rightTrim: number
): Array<number> {
  const trimmed = [...arr];
  trimmed.splice(0, leftTrim);
  trimmed.splice(-1 * rightTrim, rightTrim);
  return trimmed;
}

console.log(trimArray([1, 2, 3, 4, 5, 6], 2, 1));
console.log(trimArray([6, 2, 4, 3, 7, 1, 3], 5, 0));
console.log(trimArray([1, 7], 0, 0));
console.log(trimArray([1, 2, 3, 4, 5, 6], 2, 2));
