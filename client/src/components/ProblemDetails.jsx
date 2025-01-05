import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Editor from '../Editor';
import theme from '../theme';
import { ChakraProvider } from "@chakra-ui/react";
import Loader from '../components/Loader'; // Import your custom loader

function ProblemDetails() {
  const { id } = useParams(); // Get the problem ID from the URL
  const [problemData, setProblemData] = useState(null);
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    axios.get(`/problems/${id}`)
      .then(response => {
        setProblemData(response.data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch(error => {
        console.error('Error fetching the problem data:', error);
        setLoading(false); // Ensure loading is turned off even if there is an error
      });
  }, [id]);

  return (
    <div style={{background: "red"}}>
      {loading ? (
        <Loader /> // Use your custom loader component
      ) : (
        <div>
          <ChakraProvider theme={theme}>
            <Editor problem={problemData} />
          </ChakraProvider>
          {/* Render additional problem details here */}
          <h1>{problemData.title}</h1>
          <p>{problemData.description}</p>
        </div>
      )}
    </div>
  );
}

export default ProblemDetails;
