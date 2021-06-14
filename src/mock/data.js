import { nanoid } from 'nanoid';
// HEAD DATA
export const headData = {
  title: 'Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: 
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is ',
  name: 'Socheat Chhun',
  subtitle: 'Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `A self-taught Web Developer, who is doing a Bachelor of
                Information Technology, majoring in Cyber Security, trying to
                learn as much as I can during my free time. I'm focusing on bringing as much security aspect into web development as much as I can.`
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'bandquest.PNG',
    title: 'BandQuest',
    info: `A platform inspired by a start up based in
    Sydney. BandQuest is similar to Fivver. However, this platform
    is focused on Band Freelancing. User and band can interact with
    each other. For example, making requests and responding to
    requests, giving reviews and posting videos.`,
    url: `https://band-quest.web.app/`,
    repo: `https://github.com/chhunsocheat/Merus-Band`, // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'twitter-clone.PNG',
    title: 'Twitter Clone',
    info: `A fully functional social media application for user to register
    and tweet. User can change their profile picture and tweet,
    mention or even tweet hashtags. This project was part of my
    assigment for COMP3120 Advanced Web Development.`,
    url: `https://twitter-frontend-c990f.web.app/`,
    repo: `https://github.com/MQCOMP3120-2020/individual-web-development-task-SocheatChhun`, // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'color.PNG',
    title: 'Color App',
    info: `  Built with React and used various Raect Eco-System Libraries, it
    is a clone of color palette, but with some added features.`,
    url: `https://gifted-lalande-199a27.netlify.com`,
    repo: `https://github.com/chhunsocheat/React-Color-App`, // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'chhunsocheat@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/chhunsocheat',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
