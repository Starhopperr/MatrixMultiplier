import { MatrixModel } from './model.js';
import { MatrixView } from './view.js';

document.getElementById("multiplyBtn").addEventListener("click", () => {
  try {
    const [a, b] = MatrixView.getInputMatrices();
    const result = MatrixModel.multiply(a, b);
    MatrixView.displayResult(result);
  } catch (e) {
    MatrixView.showError(e.message);
  }
});
