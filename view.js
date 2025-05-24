export class MatrixView {
  static parseMatrix(text) {
    try {
      const matrix = text.trim().split('\n').map(row =>
        row.trim().split(/\s+/).map(Number)
      );

      // Validate: all rows must be same length and all entries must be numbers
      const rowLength = matrix[0].length;
      if (!matrix.every(row => row.length === rowLength && row.every(n => !isNaN(n)))) {
        throw new Error("Invalid matrix: inconsistent row length or non-number values.");
      }

      return matrix;
    } catch {
      throw new Error("Invalid matrix format.");
    }
  }

  static getInputMatrices() {
    const textA = document.getElementById('matrixA')?.value;
    const textB = document.getElementById('matrixB')?.value;

    if (!textA || !textB) {
      throw new Error("Both matrices must be provided.");
    }

    const matrixA = this.parseMatrix(textA);
    const matrixB = this.parseMatrix(textB);
    return [matrixA, matrixB];
  }

  static displayResult(matrix) {
    const resultElement = document.getElementById('resultOutput');
    const formatted = matrix.map(row => row.join('\t')).join('\n');
    resultElement.textContent = formatted;
  }

  static showError(message) {
    const resultElement = document.getElementById('resultOutput');
    resultElement.textContent = `❌ Error: ${message}`;
  }
}
