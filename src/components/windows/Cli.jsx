import MacWindow from '../MacWindow'
import Terminal from 'react-console-emulator'

import "./cli.scss"

const Cli = ({ windowName, setWindowsState }) => {
    const commands = {
        about: {
  description: "About me",
  usage: "about",
  fn: () => `
Hi 👋

I'm Supriya Bhowmick.

B.Tech Information Technology Graduate (2025).

Full Stack Developer specializing in React, Node.js, Express, MongoDB, and AI-powered applications.

I enjoy building scalable web applications, solving DSA problems, and exploring Generative AI.
`
},
        skills: {
  description: "Technical skills",
  usage: "skills",
  fn: () => `
Frontend
• React
• JavaScript
• TypeScript
• HTML
• CSS
• Tailwind CSS

Backend
• Node.js
• Express.js
• Django

Database
• MongoDB
• MySQL
• Redis

Tools
• Git
• GitHub
• Vite
• Postman

AI
• LangGraph
• OpenAI API
• Gemini API
`
},
        projects: {
  description: "View my projects",
  usage: "projects",
  fn: () => `
1. AI Battle Arena
   MERN with AI+ LangGraph

2. Perplexity AI Clone
   MERN with AI APIs

3. Movie Recommendation System
   Machine Learning

4. macOS Portfolio
   React js + Framer Motion

5. Notes App
   MERN CURD Application
  
6. Sorting Visualizer
   React + DAS Algorithms

7. Portfolio Website
   React + Tailwind CSS
   
`
},
        education: {
  description: "Educational background",
  usage: "education",
  fn: () => `
B.Tech in Information Technology

Graduation Year: 2025

Relevant Subjects
• DSA
• DBMS
• Operating Systems
• Computer Networks
• Machine Learning
`
},
        contact: {
            description: 'Get contact information',
            usage: 'contact',
            fn: () => `Email: supriyabhowmick321@gmail.com
Phone: 7596942313
Location: Howrah, West Bengal, India`
        },
        github: {
            description: 'Open GitHub profile',
            usage: 'github',
            fn: () => {
                window.open('https://github.com/supriya759694', '_blank')
                return 'Opening GitHub...'
            }
        },
        resume: {
        description: "Download resume",
        usage: "resume",
        fn: () => {
        window.open("./public/resume.pdf", "_blank");

       return "Downloading Resume...";
  }
},
        social: {
            description: 'View social media links',
            usage: 'social',
            fn: () => `Twitter: @supriyabhowmick
            LinkedIn: https://www.linkedin.com/in/supriya-bhowmick-b31181227/
            Portfolio: supriyabhowmick.dev`
        },
        echo: {
            description: 'Echo a passed string',
            usage: 'echo <string>',
            fn: (...args) => args.join(' ')
        }
    }

    const welcomeMessage = `

╔══════════════════════════════════════════════════════╗
║            SupriyaOS Terminal v1.0                  ║
║         Interactive Developer Portfolio             ║
╚═══════════════════════════════════════════════════╝

Welcome 👋

I'm Supriya Bhowmick.

Type "help" to see all commands.

Popular commands

about
skills
projects
education
resume
github
linkedin
contact

Enjoy exploring 🚀
`

    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState} >
            <div className="cli-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    promptLabel={'supriyabhowmick:~$'}
                    promptLabelStyle={{ color: '#00ff00' }}
                />
                console.log(Terminal)
            </div>
        </MacWindow>
    )
}

export default Cli