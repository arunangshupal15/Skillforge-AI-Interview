import { CreateAssistantDTO, CreateWorkflowDTO } from "@vapi-ai/web/dist/api";
import { z } from "zod";


export const mappings = {
  "react.js": "react",
  reactjs: "react",
  react: "react",
  "next.js": "nextjs",
  nextjs: "nextjs",
  next: "nextjs",
  "vue.js": "vuejs",
  vuejs: "vuejs",
  vue: "vuejs",
  "express.js": "express",
  expressjs: "express",
  express: "express",
  "node.js": "nodejs",
  nodejs: "nodejs",
  node: "nodejs",
  mongodb: "mongodb",
  mongo: "mongodb",
  mongoose: "mongoose",
  mysql: "mysql",
  postgresql: "postgresql",
  sqlite: "sqlite",
  firebase: "firebase",
  docker: "docker",
  kubernetes: "kubernetes",
  aws: "aws",
  azure: "azure",
  gcp: "gcp",
  digitalocean: "digitalocean",
  heroku: "heroku",
  photoshop: "photoshop",
  "adobe photoshop": "photoshop",
  html5: "html5",
  html: "html5",
  css3: "css3",
  css: "css3",
  sass: "sass",
  scss: "sass",
  less: "less",
  tailwindcss: "tailwindcss",
  tailwind: "tailwindcss",
  bootstrap: "bootstrap",
  jquery: "jquery",
  typescript: "typescript",
  ts: "typescript",
  javascript: "javascript",
  js: "javascript",
  "angular.js": "angular",
  angularjs: "angular",
  angular: "angular",
  "ember.js": "ember",
  emberjs: "ember",
  ember: "ember",
  "backbone.js": "backbone",
  backbonejs: "backbone",
  backbone: "backbone",
  nestjs: "nestjs",
  graphql: "graphql",
  "graph ql": "graphql",
  apollo: "apollo",
  webpack: "webpack",
  babel: "babel",
  "rollup.js": "rollup",
  rollupjs: "rollup",
  rollup: "rollup",
  "parcel.js": "parcel",
  parceljs: "parcel",
  npm: "npm",
  yarn: "yarn",
  git: "git",
  github: "github",
  gitlab: "gitlab",
  bitbucket: "bitbucket",
  figma: "figma",
  prisma: "prisma",
  redux: "redux",
  flux: "flux",
  redis: "redis",
  selenium: "selenium",
  cypress: "cypress",
  jest: "jest",
  mocha: "mocha",
  chai: "chai",
  karma: "karma",
  vuex: "vuex",
  "nuxt.js": "nuxt",
  nuxtjs: "nuxt",
  nuxt: "nuxt",
  strapi: "strapi",
  wordpress: "wordpress",
  contentful: "contentful",
  netlify: "netlify",
  vercel: "vercel",
  "aws amplify": "amplify",
};

export const generator: CreateWorkflowDTO = 
{
  "name": "Interview Prep",
  "nodes": [
    {
      "name": "introduction",
      "type": "conversation",
      "isStart": true,
      "metadata": {
        "position": {
          "x": -425.9253133428808,
          "y": -1000.7972434063201
        }
      },
      "prompt": "Greet the user. Inform them that you will get some information from them, to create a perfect interview. Ask the caller for data required to extract. Ask the questions one by one, and await an answer.",
      "variableExtractionPlan": {
        "output": [
          {
            "enum": [
              "entry",
              "mid",
              "senior"
            ],
            "type": "string",
            "title": "level",
            "description": "The job experience level. "
          },
          {
            "enum": [],
            "type": "string",
            "title": "amount",
            "description": "How many questions would you like me to prepare for you?"
          },
          {
            "enum": [],
            "type": "string",
            "title": "techstack",
            "description": "A list of technologies to cover during the job interview."
          },
          {
            "enum": [],
            "type": "string",
            "title": "role",
            "description": "What role should would you like to train for?"
          },
          {
            "enum": [
              "technical",
              "behavioural",
              "mixed"
            ],
            "type": "string",
            "title": "type",
            "description": "What type of the interview should it be?"
          }
        ]
      },
      "messagePlan": {
        "firstMessage": "Hello, {{username}}! Let's prepare your\r\n interview. I'll ask you a few questions and\r\ngenerate a perfect interview just for you.\r\n Are you ready?\r\n"
      },
      "toolIds": []
    },
    {
      "name": "apiRequest_1756937165138",
      "type": "tool",
      "metadata": {
        "position": {
          "x": -423.88041437302695,
          "y": -499.8862599200143
        }
      },
      "tool": {
        "url": "https://skillforge-ai-interview.vercel.app/api/vapi/generate",
        "body": {
          "type": "object",
          "required": [
            "role",
            "type",
            "level",
            "amount",
            "userid",
            "techstack"
          ],
          "properties": {
            "role": {
              "type": "string",
              "default": "{{role}}",
              "description": ""
            },
            "type": {
              "type": "string",
              "default": "{{type}}",
              "description": ""
            },
            "level": {
              "type": "string",
              "default": "{{level}}",
              "description": ""
            },
            "amount": {
              "type": "string",
              "default": "{{amount}}",
              "description": ""
            },
            "userid": {
              "type": "string",
              "default": "{{userid}}",
              "description": ""
            },
            "techstack": {
              "type": "string",
              "default": "{{techstack}}",
              "description": ""
            }
          }
        },
        "name": "getUserData",
        "type": "apiRequest",
        "method": "POST",
        "function": {
          "name": "api_request_tool",
          "parameters": {
            "type": "object",
            "required": [],
            "properties": {}
          },
          "description": "API request tool"
        },
        "messages": [
          {
            "type": "request-start",
            "content": "Please hold on. I am sending a request to the app",
            "blocking": true
          },
          {
            "role": "assistant",
            "type": "request-complete",
            "content": "The request has been sent and your interview has been generated. Thank you for the call! Bye!",
            "endCallAfterSpokenEnabled": true
          },
          {
            "type": "request-failed",
            "content": "Oops! Looks like something went wrong when sending the data to the app! Please try again",
            "endCallAfterSpokenEnabled": true
          }
        ],
        "variableExtractionPlan": {
          "schema": {
            "type": "object",
            "required": [],
            "properties": {}
          },
          "aliases": []
        }
      }
    },
    {
      "name": "hangup_1756937749340",
      "type": "tool",
      "metadata": {
        "position": {
          "x": -428.5030464914755,
          "y": -209.56820737749732
        }
      },
      "tool": {
        "type": "endCall",
        "function": {
          "name": "untitled_tool",
          "parameters": {
            "type": "object",
            "required": [],
            "properties": {}
          }
        },
        "messages": [
          {
            "type": "request-start",
            "content": "Thank you for the call",
            "blocking": true
          }
        ]
      }
    }
  ],
  "edges": [
    {
      "from": "introduction",
      "to": "apiRequest_1756937165138",
      "condition": {
        "type": "ai",
        "prompt": ""
      }
    },
    {
      "from": "apiRequest_1756937165138",
      "to": "hangup_1756937749340",
      "condition": {
        "type": "ai",
        "prompt": ""
      }
    }
  ],
  "globalPrompt": "You are a voice assistant helping with creating new AI interviewers. Your task is to collect data from the user. Remember that this is a voice conversation - do not use any special characters."
};



export const interviewer: CreateAssistantDTO = {
  name: "Interviewer",
  firstMessage:
    "Hello! Thank you for taking the time to speak with me today. I'm excited to learn more about you and your experience.",
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en",
  },
  voice: {
    provider: "11labs",
    voiceId: "sarah",
    stability: 0.4,
    similarityBoost: 0.8,
    speed: 0.9,
    style: 0.5,
    useSpeakerBoost: true,
  },
  model: {
    provider: "openai",
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are a professional job interviewer conducting a real-time voice interview with a candidate. Your goal is to assess their qualifications, motivation, and fit for the role.

Interview Guidelines:
Follow the structured question flow:
{{questions}}

Engage naturally & react appropriately:
Listen actively to responses and acknowledge them before moving forward.
Ask brief follow-up questions if a response is vague or requires more detail.
Keep the conversation flowing smoothly while maintaining control.
Be professional, yet warm and welcoming:

Use official yet friendly language.
Keep responses concise and to the point (like in a real voice interview).
Avoid robotic phrasing—sound natural and conversational.
Answer the candidate’s questions professionally:

If asked about the role, company, or expectations, provide a clear and relevant answer.
If unsure, redirect the candidate to HR for more details.

Conclude the interview properly:
Thank the candidate for their time.
Inform them that the company will reach out soon with feedback.
End the conversation on a polite and positive note.


- Be sure to be professional and polite.
- Keep all your responses short and simple. Use official language, but be kind and welcoming.
- This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long.`,
      },
    ],
  },
};

export const feedbackSchema = z.object({
  totalScore: z.number(),
  categoryScores: z.array(
    z.object({
      name: z.enum([
        "Communication Skills",
        "Technical Knowledge",
        "Problem-Solving",
        "Cultural & Role Fit",
        "Confidence & Clarity",
      ]),
      score: z.number(),
      comment: z.string(),
    })
  ).length(5), // ✅ must always have exactly 5
  strengths: z.array(z.string()),
  areasForImprovement: z.array(z.string()),
  finalAssessment: z.string(),
});



export const interviewCovers = [
  "/adobe.png",
  "/amazon.png",
  "/facebook.png",
  "/hostinger.png",
  "/pinterest.png",
  "/quora.png",
  "/reddit.png",
  "/skype.png",
  "/spotify.png",
  "/telegram.png",
  "/tiktok.png",
  "/yahoo.png",
];

export const dummyInterviews: Interview[] = [
  {
    id: "1",
    userId: "user1",
    role: "Frontend Developer",
    type: "Technical",
    techstack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    level: "Junior",
    questions: ["What is React?"],
    finalized: false,
    createdAt: "2024-03-15T10:00:00Z",
  },
  {
    id: "2",
    userId: "user1",
    role: "Full Stack Developer",
    type: "Mixed",
    techstack: ["Node.js", "Express", "MongoDB", "React"],
    level: "Senior",
    questions: ["What is Node.js?"],
    finalized: false,
    createdAt: "2024-03-14T15:30:00Z",
  },
];

 // Add this line
