function Result({ result }) {

  function formatNumber(x) {
    if (!Number.isFinite(x)) return null;
    if (x === 0) return "0";
    if (Math.abs(x) < 1e-6) return x.toExponential(6);
    return x.toFixed(6);
  }

  if (result === null) return null;

  if (!Number.isFinite(result)) {
    return (
      <>
        <h2>結果</h2>
        <p style={{ color: "red" }}>⚠ 計算できません（値が不正です）</p>
      </>
    );
  }

  const formatted = formatNumber(result);
  const percent = formatNumber(result * 100);

  return (
    <>
      <h2>結果</h2>
      <p>
        {formatted}
        {result > 1e-6 && percent !== null && ` (${percent}%)`}
      </p>
    </>
  );
}

export default Result;


