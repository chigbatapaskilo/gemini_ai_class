const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config()
const fs=require('fs')


const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generateResponse=async(mediaPath,theMimeType,prompt)=>{
    function fileToGenerativePart(path, mimeType) {
        return {
          inlineData: {
            data: Buffer.from(fs.readFileSync(path)).toString("base64"),
            mimeType,
          },
        };
      }
      
      const prompt = "Describe how this product might be manufactured.";
      // Note: The only accepted mime types are some image types, image/*.
      const imagePart = fileToGenerativePart(
        `${mediaPath}`,
        `${theMimeType}`,
      );
      
      const result = await model.generateContent([prompt, imagePart]);
      console.log(result.response.text());
}
generateResponse()
const generateImageFromText=async(prompt,paths,mimeTypes)=>{
function fileToGenerativePart(path,mimeType){
  return {
    inlineData: {
      data: Buffer.from(fs.readlinkSync(path)).toString("base64"),
      mimeType,
    },
  }
}
const imagePart=fileToGenerativePart(
  `${paths}`,
  `${mimeTypes}`
)
const result=await model.generateContent([prompt,imagePart])
console.log(result.response.text())

}
generateImageFromText()