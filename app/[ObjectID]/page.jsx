"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";

const PromptDetailsPage = ( {params} ) => {
  
  const [promptData, setPromptData] = useState(null);
  console.log(`../api/find?_id=${params.ObjectID}`)

  useEffect(() => {
    const fetchPromptData = async () => {
      try {
        const response = await fetch(`../api/find?_id=${params.ObjectID}`);

        if (!response.ok) {
          throw new Error('Failed to fetch prompt');
        }
        const data = await response.json();
        setPromptData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPromptData();
  }, []);

  const editPrompt = async (e) => {
    e.preventDefault();


    try {
      if (params) {
        const response = await fetch("../api/edit", {
          method: "POST",
          body: JSON.stringify({
            text1: "POTATO",
            text2: "POTATO2",
            num1: "POTATONUM",
            ObjectID: params.ObjectID,
          })
        });

        if (response.ok) {
          console.log("Response OK")
          window.location.reload()
        }
      } else {
        console.error("Router or params is undefined.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


  

  return (
    <div>
      <h1>Prompt Details</h1>
      {promptData ? (
        <div>
          <p>Prompt ID: {promptData._id}</p>
          <p>Prompt Text1: {promptData.text1}</p>
          <p>Prompt Text2: {promptData.text2}</p>
          <p>Prompt num1: {promptData.num1}</p>
          {/* Display other properties of promptData */}

          <div>
            <button onClick={editPrompt}>
              submit
            </button>
          </div>

        </div>
        
        
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PromptDetailsPage;