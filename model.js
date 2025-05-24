export class MatrixModel {
  static multiply(a, b) {
    if (a[0].length !== b.length) throw new Error("Incompatible matrices");
    const result = Array(a.length).fill(null).map(() => Array(b[0].length).fill(0));
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b[0].length; j++) {
        for (let k = 0; k < b.length; k++) {
          result[i][j] += a[i][k] * b[k][j];
        }
      }
    }
    return result;
  }
}
