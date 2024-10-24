const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config()

const generativeAi=async(prompt)=>{
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    // const prompt = "Write a story about a magic backpack.";
    
    // const result = await model.generateContent(prompt);
    // console.log(result.response.text());

    const result = await model.generateContentStream(prompt);

// Print text as it comes in.
for await (const chunk of result.stream) {
  const chunkText = chunk.text();
  console.log(process.stdout.write(chunkText));
}
}

generativeAi("what is LLM")
