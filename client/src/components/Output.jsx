import { useState } from "react";
import {
  Box,
  Button,
  Text,
  useToast,
  ButtonGroup,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { executeCode } from "../api";

const Output = ({ editorRef, language, testCases }) => {
  const toast = useToast();
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTestCase, setSelectedTestCase] = useState(null);
  const [selectedTestCaseOutput, setSelectedTestCaseOutput] = useState(null);
  const [testCaseOutputs, setTestCaseOutputs] = useState([]);

  const handleRunAllTestCases = async () => {
    setIsLoading(true);
    try {
      const testCaseOutputs = [];
  
      for (const testCase of testCases) {
        try {
          const result = await executeCode(
            language,
            editorRef.current.getValue(),
            testCase.input
          );
          if (!result || !result.run.output) {
            continue;
          }
          testCaseOutputs.push({
            testCase: `Test Case ${testCases.indexOf(testCase) + 1}`,
            input: testCase.input,
            output: result.run.output,
          });
        } catch (error) {
          toast({
            title: "An error occurred.",
            description: error.message || "Unable to run code",
            status: "error",
            duration: 6000,
          });
          break;
        }
      }
      setTestCaseOutputs(testCaseOutputs);
      if (testCaseOutputs.length > 0) {
        setSelectedTestCase(testCases[testCases.length - 1]);
        setSelectedTestCaseOutput(testCaseOutputs[testCaseOutputs.length - 1]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTestCaseClick = (testCase) => {
    setSelectedTestCase(testCase);
    const selectedOutput = testCaseOutputs.find(
      (output) => output.testCase === `Test Case ${testCases.indexOf(testCase) + 1}`
    );
    setSelectedTestCaseOutput(selectedOutput);
  };

  return (
    <Box w="100%">
      <Text mb={2} fontSize="lg">
        Output:
      </Text>
      <ButtonGroup variant="outline" spacing="6">
        <Button
          variant="outline"
          colorScheme="green"
          mb={4}
          isLoading={isLoading}
          onClick={handleRunAllTestCases}
        >
          Run
        </Button>
        <Button
          variant="outline"
          colorScheme="green"
          mb={4}
          isLoading={isLoading}
        >
          Submit
        </Button>
      </ButtonGroup>
      <Box
        height="20vh"
        p={2}
        border="1px solid"
        borderRadius={4}
        borderColor="#333"
        overflowY="auto" // Add this line to add a scrollbar
      >
        <Heading
          as="h6"
          size="xs"
          background="#e2e8f04d"
          padding="5px"
          m="-7px"
          borderRadius={4}
        >
          Testcase
        </Heading>
        <Flex marginTop="20px">
          {testCases.map((testCase, index) => (
            <Text
              key={index}
              fontSize="xs"
              marginRight="30px"
              padding="5px"
              borderRadius={4}
              background="#e2e8f04d"
              cursor="pointer"
              onClick={() => handleTestCaseClick(testCase)}
            >
              Case {index + 1}
            </Text>
          ))}
        </Flex>
        {selectedTestCase && (
          <Box>
            <Text>Test Case:</Text>
            <Text>Input: {selectedTestCase.input}</Text>
            <Text>Output: {selectedTestCaseOutput?.output}</Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Output;