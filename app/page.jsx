

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Form from "../components/Form";

const CreatePrompt = () => {
  const router = useRouter();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ text1: "", text2: "", num1: "" });

  const createPrompt = async (e) => {
    e.preventDefault();
    console.log("CreatePrompt!!");
    console.log(post);
    setIsSubmitting(true);
  
    try {
      const response = await fetch("/api/new", {
        method: "POST",
        body: JSON.stringify({
          text1: post.text1,
          text2: post.text2,
          num1: post.num1,
        }),
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
      });
  
      if (response.ok) {
        console.log("RESPONSE OK");
        const responseData = await response.json(); // Parse the JSON data from the response
        console.log("Response Data", responseData); // Access the parsed JSON data

        const objectID = responseData._id
        console.log("NEW ID", objectID);

        router.push(`/${objectID}`);
      } else {
        console.log("RESPONSE NOT OK");
        const errorMessage = await response.text(); // Get error message if available
        console.error("Error:", errorMessage);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type='Create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;