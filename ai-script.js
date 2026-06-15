import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

const API_KEY = "YOUR_NEW_PRIVATE_API_KEY";

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
