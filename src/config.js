const config = {
  emailjs: {
    serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
    templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
  },
  contact: {
    email: process.env.REACT_APP_CONTACT_EMAIL,
    linkedinUrl: process.env.REACT_APP_LINKEDIN_URL,
    githubUrl: process.env.REACT_APP_GITHUB_URL,
  },
};

export default config;