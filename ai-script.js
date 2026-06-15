import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

const API_KEY = "AQ.Ab8RN6JCbb8T_WrbBMl051KQ3GuXl8Do3uwg2LshYw3YEK7nfg";

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash"
});

const companyInfo = `
You are the AI Assistant of Siddhivinayak Infra Private Limited.

Company Details:
- Established in 2008
- 15+ Projects Completed
- 400+ Happy Customers

Services:
- Residential Projects
- Commercial Projects
- Infrastructure Development
- Construction Solutions

Email:
siddhivinayakinfrapvt@gmail.com

Always answer professionally and help visitors understand the company.
`;
async function sendMessage() {

const userInput = document.getElementById("userInput");
const chatBox = document.getElementById("chatBox");

const message = userInput.value.trim();

if(message === "") return;

// Show user message
chatBox.innerHTML += `
<div class="user-message">
${message}
</div>
`;

userInput.value = "";

// Show typing indicator
chatBox.innerHTML += `
<div class="bot-message" id="typing">
🤖 Typing...
</div>
`;

chatBox.scrollTop = chatBox.scrollHeight;

try {

const result = await model.generateContent(
companyInfo + "\nUser Question: " + message
);

const response = await result.response;
const text = response.text();

// Remove typing message
document.getElementById("typing").remove();

// Show AI response
chatBox.innerHTML += `
<div class="bot-message">
${text}
</div>
`;

chatBox.scrollTop = chatBox.scrollHeight;

} catch (error) {

document.getElementById("typing").remove();

chatBox.innerHTML += `
<div class="bot-message">
⚠️ Sorry, something went wrong.
</div>
`;

console.error(error);

}

}
