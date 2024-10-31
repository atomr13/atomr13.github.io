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
       //  projects: ['atomr13/gitprofile', 'arifsz/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Sentiment Analysis with AI',
          description:
            'This is a sentiment analysis web app that uses a pre-trained BERT model to classify user reviews as positive or negative. The app tracks and counts the total number of positive and negative reviews.',
          imageUrl:
            '/sentiment.webp',
          link: 'https://github.com/atomr13/ai-sentiment-analysis.git',
        },
        {
          title: 'Handwritten Digit Recognition with MNIST',
          description:
            'This project implements a Convolutional Neural Network (CNN) model for recognizing handwritten digits (0-9) using the MNIST dataset. The model achieves high accuracy (99.07%) on the MNIST test set and can predict handwritten digits from images that are preprocessed to match the MNIST dataset format.',
          imageUrl:
            '/imgclass.webp',
          link: 'https://github.com/atomr13/ai-digit-recognition.git',
        },
        {
          title: 'Stock Price Prediction App',
          description:
            'This project is a stock price prediction application that uses a Long Short-Term Memory (LSTM) model to predict future stock prices based on historical data. The model is built with TensorFlow/Keras and is integrated into a user-friendly web interface using Streamlit.',
          imageUrl:
            '/stockprice.webp',
          link: 'https://github.com/atomr13/ai-stock-predict.git',
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
      degree: 'BA/Economics, Bachelor',
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
