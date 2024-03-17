import Prompt from "@/models/prompt";
import { dbConnect } from "@/utils/dbConnect";

export const GET = async (req, res) => {
        // Get the URL from the request object
        const url = new URL(req.url);

        // Access the query parameters from the URL
        const searchParams = url.searchParams;
    
        // Access the _id parameter from the query parameters
        const _id = searchParams.get('_id');
    

    console.log("This is find.api");
    console.log(_id);


    try {
        await dbConnect();
        
        // Assuming you want to retrieve a prompt based on an ID parameter
        const prompt = await Prompt.findById(_id);

        if (!prompt) {
            return res.status(404).json({ message: "Prompt not found" });
        }

        return new Response(JSON.stringify(prompt), { status: 221 })

    } catch (error) {
        console.error("Failed to fetch prompt:", error);
        return res.status(500).json({ error: "Failed to fetch prompt" });
    }
}
