import { useRef, useState } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import Output from "./Output";

const CodeEditor = ({problem}) => {
  const editorRef = useRef();
  const [language, setLanguage] = useState("cpp");
  console.log(problem.language)
  const [value, setValue] = useState(problem[language]);
  const [testCases, setTestCases] = useState(problem.testcase.slice(0, 3));

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(problem[language]);
  };

  return (
    <Box>
      <meta name="description" content="API reference for the <meta> component in React DOM" />
      <HStack spacing={4}>
        <Box w="50%">
        <Box w="100%" border='1px' borderColor='gray.200' h="75vh" overflowY="scroll" className="unique-problem-details">
            <h1 style={{ fontSize: '24px', textAlign: 'center' }}>{problem.name}</h1>
            
            <p className="unique-problem-statement">{problem.problem_statement}</p>
            
            <div className="unique-constraints">
                <strong>Constraints:</strong>
                <p>{problem.constraints}</p>
            </div>
            
            <div className="unique-testcases">
                <strong>Test Cases:</strong>
                {problem.testcase.slice(0, 3).map((tc, index) => (
                    <div key={index} className="unique-testcase-item">
                        <p><strong>Input:</strong> {tc.input}</p>
                        <p><strong>Output:</strong> {tc.output}</p>
                        <p><strong>Explanation:</strong> {tc.explanation}</p>
                    </div>
                ))}
            </div>
        </Box>
        </Box>
        <Box w="50%">
          <Box w="100%">
            <LanguageSelector language={language} onSelect={onSelect} />
            <Editor
              options={{
                minimap: {
                  enabled: false,
                },
              }}
              height="40vh"
              theme="vs-dark"
              language={language}
              defaultValue={problem[language]}
              onMount={onMount}
              value={value}
              onChange={(value) => setValue(value)}
            />
          </Box>
          <Output editorRef={editorRef} language={language} testCases={testCases}/>
        </Box>
        
      </HStack>
    </Box>
  );
};
export default CodeEditor;
