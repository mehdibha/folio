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
            "Tunflix is the tunisian Netflix.",
        technologies: ["React JS", "Node JS", "MongoDB"],
        backgroundImage: "https://cdn.cbeditz.com/cbeditz/preview/black-red-gradient-background-wallpaper-74-11614352798fbqrv1wpuv.jpg",
        frontImage: "https://i.ibb.co/L0F7mKX/tunflix.png",
    },
    {
        id: 2,
        title: "Code Hub",
        overview:
            "Code Hub is a hub for code lovers in Sousse, Tunisia.",
        technologies: ["React JS"],
        backgroundImage: "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
        frontImage: "https://i.ibb.co/zNMJFTW/Webp-net-resizeimage.png",
    },
    {
        id: 3,
        title: "Burpees.io",
        overview:
            "Burpees.io is a solution for gyms. you can see plannings, take reservations and more.",
        technologies: ["React JS", "Node JS", "MongoDB"],
        backgroundImage: "https://media.istockphoto.com/vectors/abstract-purple-vector-background-with-stripes-vector-id972475894?k=6&m=972475894&s=612x612&w=0&h=99AirGMOb64N2-1ZSMYRjEBp2USrAdzXUGzQMh5o6Js=",
        frontImage: "https://themes-backend.material-ui.com/wp-content/uploads/2021/05/01_preview.jpg",
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
