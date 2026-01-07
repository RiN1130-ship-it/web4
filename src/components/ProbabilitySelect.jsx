
function ProbabilitySelect({ probabilities, selectedIds, onChange }) {
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
        <label key={p.id} style={{ display: "block" }}>
          <input
            type="checkbox"
            checked={selectedIds.includes(p.id)}
            onChange={() => toggle(p.id)}
          />
          {p.name}（{"p="}{p.p}）
        </label>
      ))}
    </div>
  );
}

export default ProbabilitySelect;

