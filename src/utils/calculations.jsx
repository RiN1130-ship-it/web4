

// ① 1つの確率で計算（元々の計算）
export function calcSingle(probabilities, selectedIds) {
  if (selectedIds.length === 0) return null;

  const p = probabilities.find(p => p.id === selectedIds[0]);
  return p ? p.p : null;
}

// ② 同時に起こる確率（AND）
export function calcAnd(probabilities, selectedIds) {
  if (selectedIds.length === 0) return null;

  return probabilities
    .filter(p => selectedIds.includes(p.id))
    .reduce((acc, p) => acc * p.p, 1);
}
export function calcOr(probabilities, selectedIds) {
  const ps = probabilities
  .filter(p => selectedIds.includes(p.id))
  .map(p => Number(p.p));
  if (ps.length < 2) return 0;
    return 1 - ps.reduce((acc, p) => acc * (1 - p),1);
}
export function calcBinomial(probabilities, selectedIds, n, k) {
  if (selectedIds.length !== 1) {
    throw new Error("確率は1つ選択してください");
  }
  if (k > n) {
    throw new Error("k は n 以下である必要があります");
  }

  const p = Number(
    probabilities.find(p => p.id === selectedIds[0]).p
  );

  return combination(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
}

function combination(n, k) {
  return factorial(n) / (factorial(k) * factorial(n - k));
}

function factorial(n) {
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
}