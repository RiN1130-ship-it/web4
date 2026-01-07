function CalculationTypeSelect({ calcType, onChange }) {
  return (
    <div>
      <h3>計算方法</h3>

      <select
        value={calcType}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="single">1つの確率</option>
        <option value="and">同時に起こる確率（AND）</option>
        <option value="or">どれか起こる確率（OR）</option>
        <option value="binomial">二項分布（n回中k回）</option>
      </select>
    </div>
  );
}

export default CalculationTypeSelect;
