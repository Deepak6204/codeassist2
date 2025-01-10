import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MonacoEditor from 'react-monaco-editor';

const ProblemDisplay = () => {
  const { id } = useParams();
  const [problem, setProblem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [code, setCode] = useState(""); 
  const [language, setLanguage] = useState("cpp"); //  

  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const { data } = await axios.get(`/api/problems/${id}`);
        setProblem(data);
        setCode(data.sampleCode || ""); 
      } catch (err) {
        setError("Unable to fetch problem details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProblem();
  }, [id]);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value); // Change the language
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

 
  const options = {
    selectOnLineNumbers: true,
    minimap: { enabled: false },
    theme: 'vs-dark',
    wordWrap: 'on',
    automaticLayout: true,
  };

  return (
    <div className="problem-page" style={{ display: "flex", height: "100vh" }}>
      <div className="left-side" style={{ width: "60%", padding: "20px" }}>
        <h1>{problem.name}</h1>
        <p>
          <strong>Description:</strong> {problem.description}
        </p>
        <p>
          <strong>Example Input:</strong> {problem.exampleInput}
        </p>
        <p>
          <strong>Example Output:</strong> {problem.exampleOutput}
        </p>
      </div>

      <div className="right-side" style={{ width: "40%", padding: "20px" }}>
        <h2>Code Editor</h2>
        <div className="editor-container" style={{ height: "80vh" }}>
          <select onChange={handleLanguageChange} value={language}  >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="cpp">C++</option>
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


