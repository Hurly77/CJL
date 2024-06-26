const yearsOfExperience = new Date().getFullYear() - 2016;
export const AboutHeroSection = {
  title: "Nice to meet you,",
  subtitle: "I'm Cameron Leverett",
  description: `Hello! I'm Cameron Leverett, a software developer with  ${yearsOfExperience}+ years of experience. Dive in to learn more about my journey and work!`,
  numOfProjects: 55,
  yearsOfExperience,
};

export const AboutMyStorySection = {
  myStart: {
    title: "How I got started in Software Development",
    image: "/images/story-img-1.jpg",
    description: `
    My fascination with technology began in childhood, captivated by computers and further fueled when I built my first gaming PC.
    Before officially launching my software development career in 2019, I explored JavaScript and C++.
    Transitioning from jobs as a waiter and spa attendant, I enrolled in the Flatiron School's intensive software engineering program,
    committing to six hours of study, five days a week for a year.
    Since graduating in 2020, I have worked as a software developer, continually enhancing my skills and knowledge.
    I'm excited about the future in this field.`,
  },
  myFirstProject: {
    title: "My First Software Projects",
    image: "/images/story-img-2.jpg",
    description: `
    While studying at Flatiron School, I was assigned several projects including a Rick & Morty CLI application built with Ruby,
    a trivia server-side application using Ruby on Rails, and
    a Facebook clone developed with React and Ruby on Rails.
    I took great pride in these projects.
    However, my first significant endeavor was a full-stack application designed to offer administrative tools to school staff and teachers,
    aimed at providing wellness resources to students.
    `,
  },
};
