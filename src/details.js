export let initialPersonalDetails = {
    name: "John Doe Patel",
    position: "Software Development Engineer",
    location: "Bengaluru, Karnataka",
    email: "dummy.dev@gmail.com",
    phone: "+91 98765 43210",
    linkedIn: "satyanadella",
    about: "Results-driven Software Developer with 4+ years of experience designing, developing, and maintaining scalable web applications. Proficient in JavaScript, React, Node.js, and modern development practices, with a strong foundation in problem-solving and software design. Passionate about building user-focused applications, writing clean and maintainable code, and collaborating with cross-functional teams to deliver high-quality software solutions."
}

export let initialWorkEx = [{
    id: crypto.randomUUID(),
    role: "Software Developer",
    company: "Banana Co.",
    startDate: "2022-11",
    endDate: "2024-03",
    jobDesc: `Designed and developed full-stack web applications using React, Node.js, and Express. 
    Created RESTful APIs and integrated databases such as PostgreSQL and MongoDB.
    Implemented authentication, authorization, and secure data handling. 
    Wrote modular, reusable, and well-documented code following industry best practices. 
    Collaborated with product managers and QA engineers to deliver production-ready features. 
    Monitored application performance and resolved production issues to ensure reliability.`
}]

export let initalEducation = [{
    id: crypto.randomUUID(),
    degree: "Bachelor of Technology - Computer Science",
    university: "IIT Bombay",
    location: "Mumbai, IN",
    startDate: "2018-07",
    endDate: "2022-08",
}]

export let initialSkills = [{id: crypto.randomUUID(), skill: "React" }, 
    { id: crypto.randomUUID(), skill: "JavaScript" },
    { id: crypto.randomUUID(), skill: "HTML" }, 
    { id: crypto.randomUUID(), skill: "CSS" },
    { id: crypto.randomUUID(), skill: "TypeScript" },]