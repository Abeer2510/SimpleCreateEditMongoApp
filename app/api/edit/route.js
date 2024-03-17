import Prompt from "@/models/prompt";
import { dbConnect } from "@/utils/dbConnect";

export const POST = async (request) => {
    try {
        await dbConnect();

        const { text1, text2, num1, ObjectID } = await request.json();
        
        console.log("Request Body:", request.body); // Log the request body to check if ObjectID is included

        const existingPrompt = await Prompt.findById(ObjectID);

        if (!existingPrompt) {
            console.log("Prompt not found for ObjectID:", ObjectID);
            return new Response("Prompt not found", { status: 404 });
        }

        existingPrompt.text1 = text1;
        existingPrompt.text2 = text2;
        existingPrompt.num1 = num1;

        await existingPrompt.save();

        console.log("Prompt updated successfully.");

        return new Response({ status: 201 });

    } catch (error) {
        console.error("Error:", error);
        return new Response("Failed to update prompt", { status: 500 });
    }
}