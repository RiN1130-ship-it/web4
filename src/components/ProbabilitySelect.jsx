function ProbabilitySelect({ probabilities, selectedIds, onChange, onDelete }) {
  const toggle = (id) => {
    onChange(
      selectedIds.includes(id)
        ? selectedIds.filter((x) => x !== id)
        : [...selectedIds, id]
    );
  };

  return (
    <div>
      <h3>確率を選択</h3>

      {probabilities.map((p) => (
        <div key={p.id} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <label>
            <input
              type="checkbox"
              checked={selectedIds.includes(p.id)}
              onChange={() => toggle(p.id)}
            />
            {p.name}（p={p.p}）
          </label>

          {/* ✅ 削除ボタン */}
          <button onClick={() => onDelete(p.id)}>削除</button>
        </div>
      ))}
    </div>
  );
}
export default ProbabilitySelect;

