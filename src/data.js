const AboutDesc =
    "Hello there, my name is Mehdi Ben Hadj Ali and i love doing stuff for internet espacially open-source projects. My love for the development started when i was 14: i was playing a french video game called Dofus and i wanted to automate repetitive things so i built a bot for the game (it's not fair i know 🙁).";
const skillsList = [
    { title: "React JS", value: 75 },
    { title: "Node JS ", value: 60 },
    { title: "Express JS ", value: 70 },
    { title: "Firebase", value: 70 },
    { title: "CSS", value: 80 },
];
const projectList = [
    {
        id: 1,
        title: "Tunflix",
        overview:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita incidunt ab recusandae minus sequi. Nostrum debitis aliquam et recusandae ducimus.",
        technologies: ["React JS", "Node JS", "MongoDB"],
        backgroundImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/wizard-bg.jpg",
        frontImage: "https://i.ibb.co/jhCZB43/logo-9cf7f5b7.png",
    },
    {
        id: 2,
        title: "Code Hub",
        overview:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita incidunt ab recusandae minus sequi. Nostrum debitis aliquam et recusandae ducimus.",
        technologies: ["React JS", "Node JS", "MongoDB"],
        backgroundImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/wizard-bg.jpg",
        frontImage: "https://ltheme.com/wp-content/uploads/2018/05/et-fashion-free-responsive-joomla-template.png",
    },
    {
        id: 3,
        title: "Burpees.io",
        overview:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita incidunt ab recusandae minus sequi. Nostrum debitis aliquam et recusandae ducimus.",
        technologies: ["React JS", "Node JS", "MongoDB"],
        backgroundImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/wizard-bg.jpg",
        frontImage: "https://ltheme.com/wp-content/uploads/2018/05/et-fashion-free-responsive-joomla-template.png",
    },
    {
        id: 4,
        title: "Burpees.io",
        overview:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita incidunt ab recusandae minus sequi. Nostrum debitis aliquam et recusandae ducimus.",
        technologies: ["React JS", "Node JS", "MongoDB"],
        backgroundImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/wizard-bg.jpg",
        frontImage: "https://ltheme.com/wp-content/uploads/2018/05/et-fashion-free-responsive-joomla-template.png",
    },
];

const experienceList = [
    {
        id: 0,
        company: "Code Hub",
        job: "Full stack web developer",
        overview:
            "Code Hub is a space where code lovers are based in Sousse: some are freelancers, some started their startups, others work as remote developers. it's a place where we discuss about new technologies, about IT solutions, about anything in relation to Code, we also do workshops and offer a calm coworking space to the members.",
        links: {
            website:"https://www.codehub.tn",
            facebook: "https://www.facebook.com/codehubtn/",
            instagram: "https://www.instagram.com/codehub.coworking/",
        },
        duration:{
            from: "June 2021",
            to:"present"
        }
    },
    {
        id: 1,
        company: "Dar Mounira",
        job: "Founder",
        overview:
        "Dar Mounira is a guest house that i've found two years ago, it's the place to be at Sousse.",
        links: {
            facebook: "https://www.facebook.com/profile.php?id=100063463714107",
            instagram: "https://www.instagram.com/darmounira.official",
        },
        duration:{
            from: "December 2019",
            to:"present"
        }
    },
    {
        id: 2,
        company: "vapoter.tn",
        job: "Front-end web developer",
        overview:
        "Vapoter.tn is an e-commerce website that sells anything in relation with vapes. unfortunately, Tunisia has a restricted system and it's now forbidden to sell vape products. so, the website closed.",
        links: {
            instagram: "https://www.instagram.com/vapoter.tn/",
        },
        duration:{
            from: "September 2018",
            to:"December 2018"
        }
    },
];

export { AboutDesc, skillsList, projectList, experienceList };
