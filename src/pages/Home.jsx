import { useState, useEffect } from "react";
import AddProbability from "../components/AddProbability";
import CalculationTypeSelect from "../components/CalculationTypeSelect";
import ProbabilitySelect from "../components/ProbabilitySelect";
import CalculateForm from "../components/CalculateForm";
import Result from "../components/Result";
import Header from "../components/Header";

const STORAGE_KEY = "probabilities";

function Home() {
  const [probabilities, setProbabilities] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });
  const [method, setMethod] = useState("single");
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setProbabilities(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(probabilities)
    );
  }, [probabilities]);


  const addProbability = (prob) => {
    setProbabilities(prev => [...prev, prob]);
  };
  const deleteProbability = (id) => {
    setProbabilities(prev => prev.filter(p => p.id !== id));
    setSelectedIds(prev => prev.filter(x => x !== id)); // 選択状態もリセット
  };



  return (
    <div>
      <Header />

      <AddProbability onAdd={addProbability} />

      <CalculationTypeSelect
        method={method}
        onChange={setMethod}
      />

      <ProbabilitySelect
        probabilities={probabilities}
        selectedIds={selectedIds}
        onChange={setSelectedIds}
        onDelete={deleteProbability}
      />

      <CalculateForm
        probabilities={probabilities}
        selectedIds={selectedIds}
        method={method}
        onResult={setResult}
      />

      <Result result={result} />
    </div>
  );
}

export default Home;

