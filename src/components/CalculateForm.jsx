import { useState } from "react";
import { calcSingle } from "../utils/calculations";
import { calcAnd } from "../utils/calculations";
import { calcOr } from "../utils/calculations";
import { calcBinomial } from "../utils/calculations";
function CalculateForm({ method, selectedIds, probabilities, onResult }) {
  const [n, setN] = useState();
  const [k, setK] = useState();
  const handleCalculate = () => {
    switch (method) {
      case "single": {
        if (selectedIds.length !== 1) {
          alert("1つ選択してください");
          return;
        }
        const p = calcSingle(probabilities, selectedIds);
        onResult(p);
        break;
      }

      case "and": {
        if (selectedIds.length < 2) {
          alert("2つ以上選択してください");
          return;
        }
        const ps = calcAnd(probabilities, selectedIds);
        const result = ps;
        onResult(result);
        break;
      }
      case "or": {
        if (selectedIds.length < 2) {
          alert("2つ以上選択してください");
          return;
        }

        const ps = calcOr(probabilities, selectedIds);
        onResult(ps);
        break;
      }
      case "binomial": {
        if (selectedIds.length !== 1) {
          alert("確率は1つ選択してください");
          return;
        }
        if (k > n) {
          alert("k は n 以下である必要があります");
          return;
        }
        const result = calcBinomial(probabilities, selectedIds, n, k);
        onResult(result);
        break;
      }
      default:
        alert("計算方法を選択してください");
    }
  };

  return (
    <>
      {method === "binomial" && (
        <>
          <input
            type="number"
            value={n}
            onChange={(e) => setN(Number(e.target.value))}
            placeholder="試行回数 n"
          />
          <input
            type="number"
            value={k}
            onChange={(e) => setK(Number(e.target.value))}
            placeholder="成功回数 k"
          />
        </>
      )}

      <button onClick={handleCalculate}>計算</button>
    </>
  );
}
export default CalculateForm;

