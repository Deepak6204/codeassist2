import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MonacoEditor from "react-monaco-editor";

const ProblemDisplay = () => {
  const { id } = useParams();
  const [problem, setProblem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("cpp");

  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const { data } = await axios.get(`/api/problems/${id}`);
        setProblem(data);
        setCode(data[language] || "");
      } catch (err) {
        setError("Unable to fetch problem details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProblem();
  }, [id, language]);

  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    setLanguage(newLanguage);
    if (problem) {
      setCode(problem[newLanguage] || "");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const options = {
    selectOnLineNumbers: true,
    minimap: { enabled: false },
    theme: "vs-dark",
    wordWrap: "on",
    automaticLayout: true,
  };

  return (
    <div className="problem-page" style={{ display: "flex", height: "100vh" }}>
      <div className="left-side" style={{ width: "60%", padding: "20px", overflowY: "auto" }}>
        <h1>{problem.name}</h1>
        <p>
          <strong>Description:</strong> {problem.problem_statement}
        </p>
        <p>
          <strong>Constraints:</strong> {problem.constraints}
        </p>
        <p>
          <strong>Level:</strong> {problem.level}
        </p>
        <h2>Test Cases</h2>
        {problem.testcase.map((test, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <p>
              <strong>Input:</strong> {test.input}
            </p>
            <p>
              <strong>Output:</strong> {test.output}
            </p>
            <p>
              <strong>Explanation:</strong> {test.explanation}
            </p>
          </div>
        ))}
      </div>

      <div className="right-side" style={{ width: "40%", padding: "20px" }}>
        <h2>Code Editor</h2>
        <div className="editor-container" style={{ height: "80vh" }}>
          <select onChange={handleLanguageChange} value={language} style={{ marginBottom: "10px" }}>
            <option value="cpp">C++</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
            <option value="c">C</option>
          </select>
          <MonacoEditor
            height="80vh"
            language={language}
            theme="vs-dark"
            value={code}
            options={options}
            onChange={(newValue) => setCode(newValue)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProblemDisplay;
