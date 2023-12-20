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
  aws,
  tailwind,
  azure,
  django,
  git,
  python,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  // carrent,
  // jobit,
  // tripguide,
  redis,
  ar_sharp,
  games,
  whisper,
  libertypay,
  paybox,
  datafestafrica,
  liberty,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Programmer",
    icon: creator,
  },
];

const technologies = [
    {
        name: "Python",
        icon: python,
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
        name: "Django",
        icon: django,
    },
    {
        name: "Redis",
        icon: redis,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "Azure",
        icon: azure,
    },
    {
        name: "AWS",
        icon: aws,
    },
    {
        name: "docker",
        icon: docker,
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
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    }

];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Liberty Assured Limited",
    icon: liberty,
    iconBg: "#E6DEDD",
    date: "May 2022 - Present",
    points: [
      "Key contributor in the backend development of 'PayBox360' an innovative Human Resource Information System and Payroll solution with over 100,000 users across Nigeria and Africa. ",
      "Collaborated as a team member to build and design the architecture, design and backend development of 'Wisewinn,' an online Lotto platform featuring various game options.",
      "Designed and Developed 'Liberty Pay' an agency banking application that facilitates money transfers, ATM transactions, bills and utility payment functioning similar to a banking platform.",
      "Proficiently handled maintenance and addressed software fixes for these projects, ensuring optimal performance and user satisfaction.",
    ],
  },
  {
    title: "Full stack Developer (Volunteer)",
    company_name: "DataFestAfrica",
    icon: datafestafrica,
    iconBg: "#383E56",
    date: "March 2022 - Present",
    points: [
      "Created a dynamic and user-friendly frontend with HTML5/CSS£, ensuring seamless interaction and a responsive design.",
      "Created a ticketing and merchandise payment gateway.",
      "Demonstrated strong problem-solving skills by successfully managing all aspects of the project independently.",
    ],
  }
];

const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
];

const projects = [
  {
    name: "AR Sharp",
    description:
      "A framework built from scratch from the C# Programming Language to create a fullstack webpage easily",
    tags: [
      {
        name: "C-Sharp",
        color: "blue-text-gradient",
      },
    //   {
    //     name: "redux",
    //     color: "green-text-gradient",
    //   },
    //   {
    //     name: "tailwind",
    //     color: "pink-text-gradient",
    //   },
    //   {
    //     name: "typescript",
    //     color: "blue-text-gradient",
    //   },
    ],
    image: ar_sharp,
    source_code_link: "https://github.com/RooseveltTech/ARSharp.Net",
  },
//   {
//     name: "Whisper SMS",
//     description:
//       "Web application that enables users send promotional and transactional messages to limitless number of people with instant OTPs, transactional Email notifications, voice OTP, two-way interactions",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "Django",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//       {
//         name: "typescript",
//         color: "blue-text-gradient",
//       },
//     ],
//     image: whisper,
//     source_code_link: "https://whispersms.com",
//   },
  {
    name: "PayBox",
    description:
      "A web application for to manage employees and payroll",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "redis",
        color: "blue-text-gradient",
      },
      {
        name: "celery",
        color: "pink-text-gradient",
      },
      {
        name: "api",
        color: "blue-text-gradient",
      },
    ],
    image: paybox,
    source_code_link: "https://paybox360.com/",
  },
  {
    name: "Wise Winn",
    description:
      "An online jackpot lottery platform, with amazing game options to win cash prize and others",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "redis",
        color: "pink-text-gradient",
      },
      {
        name: "celery",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: games,
    source_code_link: "https://wisewinn.com/",
  },
  {
    name: "Liberty Pay",
    description:
      "A financial application that enables users to make transactions, pay bills, transfer funds, and more",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },

      {
        name: "redis",
        color: "blue-text-gradient",
      },
      {
        name: "celery",
        color: "pink-text-gradient",
      },
    //   {
    //     name: "threeJS",
    //     color: "green-text-gradient",
    //   },
    ],
    image: libertypay,
    source_code_link: "https://www.libertypayng.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
