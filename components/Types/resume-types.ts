export type Address = {
    street: string;
    city: string;
    state: string;
    zip: string;
};

export type SocialMedia = {
    name: string;
    url: string;
    className: string;
};

export type MainSection = {
    name: string;
    description: string;
    image: string;
    bio: string;
    contactmessage: string;
    email: string;
    phone: string;
    github: string;
    project: string;
    address: Address;
    website: string;
    resumedownload: string;
    social: SocialMedia[];
};

export type Education = {
    school: string;
    degree: string;
    graduated: string;
    description: string;
};

export type WorkExperience = {
    company: string;
    title: string;
    years: string;
    description: string;
};

export type Skill = {
    name: string;
    level: string;
};

export type ResumeSection = {
    skillmessage: string;
    education: Education[];
    work: WorkExperience[];
    skills: Skill[];
};

export type Project = {
    title: string;
    category: string;
    image: string;
    url: string;
};

export type PortfolioSection = {
    projects: Project[];
};

export type ResumeData = {
    main: MainSection;
    resume: ResumeSection;
    portfolio: PortfolioSection;
};
