import axios from "axios";
import { LANGUAGE_VERSIONS } from "./constants";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (language, sourceCode, input = "") => {
  try {
    const version = LANGUAGE_VERSIONS[language];
    if (!version) {
      throw new Error(`Unsupported language: ${language}`);
    }

    const payload = {
      language: language,
      version: version,
      files: [
        {
          content: sourceCode,
        },
      ],
      stdin: input,
    };

    console.log("Request payload:", payload);

    const response = await API.post("/execute", payload);
    console.log("API Response:", response);
    console.log("Response Data:", response.data);
    console.log("Type of Response Data:", typeof response.data);
    console.log("Keys of Response Data:", response.data.run.output);
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error("API Error:", error.response.data);
    }
    throw new Error(`Error executing code: ${error.message}`);
  }
};