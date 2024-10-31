interface IMain {
    name: string;
    occupation: string;
    description: string;
    image: string;
    bio: string;
    contactmessage: string;
    email: string;
    phone: string;
    address: IAddress;
    website: string;
    resumedownload: string;
    social: ISocial[];
}

// Address details
interface IAddress {
    street: string;
    city: string;
    state: string;
    zip: string;
}

// Social media links
interface ISocial {
    name: string;
    url: string;
    className: string;
}

// Resume section with skills, education, and work experience
interface IResume {
    skillmessage: string;
    education: IEducation[];
    work: IWork[];
    skills: ISkill[];
}

// Education details
interface IEducation {
    school: string;
    degree: string;
    graduated: string;
    description: string;
}

// Work experience details
interface IWork {
    company: string;
    title: string;
    years: string;
    description: string;
}

// Skills with proficiency level
interface ISkill {
    name: string;
    level: string;
}

// Portfolio section with projects
interface IPortfolio {
    projects: IProject[];
}

// Project details
interface IProject {
    title: string;
    category: string;
    image: string;
    url: string;
}

// Testimonials section
interface ITestimonials {
    testimonials: ITestimonial[];
}

// Individual testimonial
interface ITestimonial {
    text: string;
    user: string;
}

// Complete data structure combining all sections
interface IDataStructure {
    main: IMain;
    resume: IResume;
    portfolio: IPortfolio;
    testimonials: ITestimonials;
}
