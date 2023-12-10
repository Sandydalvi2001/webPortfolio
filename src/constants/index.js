import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    nvent,
    tesla,
    sandy,
    shopify,
    sparks,
    carrent,
    jobit,
    tripguide,
    threejs,
    java,
    cpp,
    sql,
    rs1,
    rs2,
    rs3,
    po1,
    po2,
    po3,
    python,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "FullStack Developer",
      icon: web,
    },
    {
      title: "Android Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UI Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Software Development Engineer",
      company_name: "NVENT",
      icon: nvent,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developed Shoe Store project by utilizing the Angular framework fordevelopment, effectively applying BDD and TDD methodologies toensure code robustness.",
        "Employed Agile methodology in sprints, collaborating with cross-functional teams fortimely delivery.",
        "Performed automated testing with frameworks such as Cypress, Jasmine, and Cucumber for comprehensive functional and unit testing, ensuring a high standard of application quality and reliability.",
      ],
    },
    {
      title: "Mobile App Developer (Founder)",
      company_name: "Sandy.Inc",
      icon: sandy,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Built 30+ Android Applications that are trusted by over 20,000+ users.",
        "Achieved an aggregate rating of 4.8/5 on one of the application.",
      ],
    },
    {
      title: "Mobile App Developer Intern",
      company_name: "The Sparks Foundation",
      icon: sparks,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Created and designed an Android app with a backend on Java and a front-end on XML and SQLite for the database.",
        "Implemented Front-end & back-end logic for improved design & interactive user interface and also implemented CRUD functionality using an SQLite DB.",
        "Influenced and implemented a feature that stores all transaction history.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Shivaji Maharaj App",
      description:
        "Chhatrapati Shivaji Maharaj Wallpapers app is an Wallpaper app,It is an online app with daily new updated wallpapers for FREE.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "XML",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
      ],
      image: po1,
      source_code_link: "https://play.google.com/store/apps/details?id=com.sandydalvi.chhatrapatishivajimaharaj",
    },
    {
      name: "Pashu Care App",
      description:
        "Pashu Care App makes animal husbandry easy by providing the fatures of finding the nearby veterinary centres and do Trading of Animals and Manure.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Java",
          color: "green-text-gradient",
        },
        {
          name: "Android",
          color: "pink-text-gradient",
        },
      ],
      image: po2,
      source_code_link: "https://github.com/Sandydalvi2001/Pashu-Care",
    },
    {
      name: "CryptoSecure App",
      description:
        "CryptoSecure is a Secured messaging application where we can send text messages with Text encryption algorithm.",
      tags: [
        {
          name: "Android",
          color: "blue-text-gradient",
        },
        {
          name: "Java",
          color: "green-text-gradient",
        },
        {
          name: "XML",
          color: "pink-text-gradient",
        },
      ],
      image: po3,
      source_code_link: "https://github.com/Sandydalvi2001/Stegnography-App",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };