// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'atomr13', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Sentiment Analysis with AI',
          description:
            'Soon to be Updated',
          imageUrl:
            '/public/sentiment.webp',
          link: 'https://example.com',
        },
        {
          title: 'Image Classification with Transfer Learning',
          description:
            'Soon to be Updated',
          imageUrl:
            '/imgclass.webp',
          link: 'https://example.com',
        },
        {
          title: 'Trials',
          description:
            'Soon to be Updated',
          imageUrl:
            '/imgclass.webp',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Atakan Omur',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'atomr13',
    //twitter: 'arif_szn',
    //mastodon: 'arifszn@mastodon.social',
    //researchGate: '',
    //facebook: '',
    //instagram: '',
    //reddit: '',
    //threads: '',
    //youtube: '', // example: 'pewdiepie'
    //udemy: '',
    //dribbble: '',
    //behance: '',
    //medium: 'arifszn',
    dev: 'atomr13',
    //stackoverflow: '', // example: '1/jeff-atwood'
    //skype: '',
    //telegram: '',
    website: 'atomr13.github.io',
    //phone: '',
    email: 'atakanomur3@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    { name: 'Python', rating: 3 },
    { name: 'HTML', rating: 2 },
    { name: 'JavaScript', rating: 2 },
    { name: 'CSS', rating: 2 },
    { name: 'SQL', rating: 3 },
    { name: 'Git', rating: 3 },
    { name: 'Power BI', rating: 4 },
    { name: 'Power Apps', rating: 4 },
    { name: 'Power Automate', rating: 4 },
  ],
  experiences: [
    {
      company: 'NTT DATA Business Solutions Turkey',
      position: 'Business Intelligence Consultant',
      from: 'February 2022',
      to: 'September 2024',
      //companyLink: 'https://example.com',
    },
    {
      company: 'Genco Medical Devices',
      position: 'Business Development Associate',
      from: 'September 2020',
      to: 'January 2022',
      //companyLink: 'https://example.com',
    },
  ],
  certifications: [
     {
      name: 'IBM AI Developer',
      body: 'IBM on Coursera',
      year: 'October 2024',
      link: 'https://coursera.org/share/a9190a9c33c5c9f54ba0dda68f2b6e15',
    },
    {
      name: 'Power Platform App Maker Associate',
      body: 'Microsoft',
      year: 'March 2023',
      //link: 'https://www.credly.com/badges/a449c62c-20ae-4303-8194-8106d6b36963/linked_in_profile',
    },
    {
      name: 'Power BI Data Analyst Associate',
      body: 'Microsoft',
      year: 'March 2022',
      //link: 'https://www.credly.com/badges/a449c62c-20ae-4303-8194-8106d6b36963/linked_in_profile',
    },
  ],
  educations: [
    {
      institution: 'University of Wroclaw',
      degree: 'Bachelor',
      from: '2018',
      to: '2021',
    },
  ],

  // Display articles from your medium or dev account. (Optional)
  
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'luxury',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
