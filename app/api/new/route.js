import Prompt from "@/models/prompt";
import { dbConnect } from "@/utils/dbConnect";

export const POST = async (request) => {
    const { text1, text2, num1 } = await request.json();

    try {
        await dbConnect();
        const newPrompt = new Prompt({ text1, text2, num1 });
        console.log("ROUTE.JS")
        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), { status: 221 })
        // return new Response({ status: 200 });

    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}