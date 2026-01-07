/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Anh Nguyen",
  title: "Hi all, I'm Anh Nguyen",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/drive/u/0/folders/1FTI4pH5alzKzA3mlBYagOuEK7dRQduc9", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/anhng1106",
  linkedin: "https://www.linkedin.com/in/anhng1106/",
  gmail: "ntvanh1106@gmail.com",
  facebook: "https://www.facebook.com/heomoiii1106/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "HARD-WORKING FULL-STACK DEVELOPER WHO LOVES LEARNING, BUILDING, AND IMPROVING EVERY DAY 🚀",
  skills: [
    emoji(
      "⚡ Build responsive, user-friendly web apps with clean and maintainable code"
    ),
    emoji(
      "⚡ Develop full-stack features from UI → API → database, with a focus on performance and reliability"
    ),
    emoji(
      "⚡ Collaborate well in teams, communicate clearly, and take ownership of delivering results"
    ),
    emoji(
      "⚡ Learn new tools and technologies quickly, and enjoy exploring better ways to solve problems"
    ),
    emoji(
      "⚡ Continuously improve through feedback, debugging, and shipping real products"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-ts"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "nextjs",
      fontAwesomeClassname: "fab fa-nextjs"
    },
    {
      skillName: "springboot",
      fontAwesomeClassname: "fab fa-springboot"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "stripe",
      fontAwesomeClassname: "fab fa-stripe"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Haaga-Helia University of Applied Sciences",
      logo: require("./assets/images/haagaHeliaLogo.png"),
      subHeader:
        "Bachelor of Business Administration in Business Information Technology",
      duration: "January 2023 - May 2025",
      desc: "Majoring in Software Development",
      descBullets: [
        "GPA: 4.43 / 5.0",
        "Relevant Coursework: Object-Oriented Programming, Web Programming, Mobile Programming, Database Systems"
      ]
    },
    {
      schoolName: "Hochiminh University of Education",
      logo: require("./assets/images/hcmueLogo.png"),
      subHeader: "Bachelor of Arts in Korean Language",
      duration: "September 2017 - May 2021",
      desc: "Schorlarship funded by university for excellent academic performance in 4 years of study",
      descBullets: ["GPA: 3.81 / 4.0", "Graduated with First Class Honors"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Maatop Oy",
      companylogo: require("./assets/images/maatopLogo.png"),
      date: "January 2025 - May 2025",
      desc: "Built a speech-driven interface for automated digging machines using Vue.js and the OpenAI API, enabling users to place structured orders in under 5 seconds.",
      icon: "🧑‍💻",
      descBullets: [
        "Improved fuzzy voice matching accuracy from 70% to 95% with Fuse.js and reduced manual input errors by 80%. Integrated with Maatop’s internal API to process 50+ real-time orders during field testing, achieving seamless frontend-backend orchestration.",
        "Collaborated with UX testers to reduce average order time by 40%."
      ]
    },
    {
      role: "Front End Developer Intern",
      company: "Neuwo Oy",
      companylogo: require("./assets/images/neuwoLogo.png"),
      date: "December 2024 - March 2025",
      desc: "Built and deployed a modular, responsive web app using Next.js, React, MUI, and TypeScript to serve over 1.2M monthly queries. ",
      icon: "🚀",
      descBullets: [
        "Integrated with Supabase to query 100M+ audience records with smart filtering and pagination, maintaining <1.5s average load time.",
        "Implemented advanced keyword search using PostgreSQL full-text search, improving audience segment precision by 85%. Led a complete UI/UX redesign in Figma, boosting engagement by 30% and session duration by 25%. Reduced initial load time by 35% via performance optimization and contributed to code reviews and documentation, accelerating onboarding by 40%."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME SIDE PROJECTS THAT I HAVE WORKED ON",
  projects: [
    {
      image: require("./assets/images/preppilotLogo.png"),
      projectName: "Prep Pilot",
      projectDesc: "Your Personalized AI Interview Coach",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://prep-pilot-kohl.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/prostoreLogo.png"),
      projectName: "Pro Store",
      projectDesc:
        "Make your life easier with ProStore - your all-in-one online shopping solution.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://prostore-prj.vercel.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Academy Graduate",
      subtitle:
        "AWS Academy Cloud Foundations — Amazon Web Services (AWS) (2025) — Core AWS services, cloud concepts, security, pricing, and architecture basics..",
      image: require("./assets/images/awsLogo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        }
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    }
    // {
    //   title: "Google Assistant Action",
    //   subtitle:
    //     "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //   image: require("./assets/images/googleAssistantLogo.webp"),
    //   imageAlt: "Google Assistant Action Logo",
    //   footerLink: [
    //     {
    //       name: "View Google Assistant Action",
    //       url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
    //     }
    //   ]
    // },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "An entry-level software engineer always eager to learn and grow.",
  number: "+358 41 576 2910",
  email_address: "ntvanh1106@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
