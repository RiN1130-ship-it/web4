import { useState } from "react";
function AddProbability({ onAdd }) {
  const [name, setName] = useState("");
  const [p, setP] = useState("");

  const submit = () => {
    const nextId =
      Number(localStorage.getItem("probability_id_counter") || 1);

    const prob = {
      id: nextId,
      name,
      p: Number(p),
    };

    localStorage.setItem(
      "probability_id_counter",
      nextId + 1
    );

    onAdd(prob);
  };

  return (
    <>
      <h2>確率の登録</h2>
      <input
        placeholder="名前" 
        onChange={e => setName(e.target.value)} />
      <input
        type="number"
        step ="0.01"
        placeholder="確率p"
        onChange={e => setP(e.target.value)} />
      <button onClick={submit}>登録</button>
    </>
  );
}
export default AddProbability;


