import styled from 'styled-components';

const Wrapper = styled.div.attrs({
	className:
		'max-w-4xl lg:px-16 md:px-10 px-6 py-14 flex flex-col items-center rounded text-base-content bg-base-100 shadow-lg',
})`
	text-align: ${(props) => props.pos};
`;

const ResumeTitle = styled.h1.attrs({
	className: 'text-center lg:text-5xl text-3xl',
})`
	text-align: ${(props) => props.pos};
`;

const Header = styled.h2.attrs({
	className: 'lg:text-2xl text-xl font-medium mt-3',
})`
	text-align: ${(props) => props.pos};
`;

const SubHeader = styled.span.attrs({
	className: 'text-center text-sm',
})`
	text-align: ${(props) => props.pos};
`;

const Body = styled.div.attrs({ className: 'w-full' })`
	text-align: ${(props) => props.pos};
`;

const Section = styled.section.attrs({
	className: 'w-full flex flex-col w-full ',
})`
	text-align: ${(props) => props.pos};
`;

const SectionHead = styled.h1.attrs({
	className: 'lg:text-xl text-lg font-medium',
})`
	text-align: ${(props) => props.pos};
`;

const SectionContent = styled.div.attrs({ className: '' })`
	text-align: ${(props) => props.pos};
`;

const List = styled.ul.attrs({
	className: 'w-full lg:font-neutral text-sm list-disc list-inside',
})`
	text-align: ${(props) => props.pos};
`;

const ListItem = styled.li.attrs({
	className: 'w-full pl-3 sm:m-0 xs:mb-1 mb-2',
})`
	text-align: ${(props) => props.pos};
`;

const Div = styled.div.attrs({ className: 'border-primary mb-3' })`
	border-top: 2px solid;
`;
const LocationAndJobTitle = styled.span.attrs({
	className:
		'text-sm font-normal opacity-50 leading-4 italic hidden xs:inline-block',
})``;
const Dates = styled.span.attrs({
	className: 'leading-4 opacity-50 text-sm italic mb-2',
})``;
const LinkTo = styled.a.attrs((props) => ({
	className: 'link link-secondary text-sm font-normal',
	href: props.href,
}))``;

export const ResumeComponent = () => {
	return (
		<Wrapper>
			<Section>
				<ResumeTitle>Cameron J. Leverett</ResumeTitle>
				<SubHeader>Anaheim, CA, 92805</SubHeader>
				<SubHeader>
					<LinkTo href='https://github.com/Hurly77'>GitHub</LinkTo> |{' '}
					<LinkTo href='https://linkedin.com/in/cameron-leverett'>
						LinkedIn
					</LinkTo>{' '}
					| <LinkTo>Portfolio</LinkTo> |{' '}
					<LinkTo href='https://camrbo.medium.com'>Blog</LinkTo>
				</SubHeader>
			</Section>
			<Div />
			<Section>
				<Header pos='center'>TECHNICAL SKILLS</Header>
				<SectionContent pos='center'>
					JavaScript, Ruby, Node, Python, TypeScript, Webpack, Linux, Babel,
					Git, firebase, MongoDB, SQL
				</SectionContent>
			</Section>
			<Body>
				<Header>EXPERIENCE</Header>
				<Div />
				<Section>
					<SectionHead>
						Genesis Iron works,{' '}
						<LocationAndJobTitle>
							Remote - Software Engineer
						</LocationAndJobTitle>
					</SectionHead>
					<Dates>June 2021 - July 2021</Dates>
					<SectionContent>
						<List className='list-inside'>
							<ListItem>
								Using NextJS framework, constructed an entire website with 8
								pages and adaptive routes for team members.{' '}
							</ListItem>
							<ListItem>
								Collaboration with IT and design teams to over 40 hours from
								remote location.
							</ListItem>
							<ListItem>
								Changed DNS, deployed application with Vercel, integrated CI,
								with GitHub and Automation, reduced deployment by 30%
							</ListItem>
						</List>
					</SectionContent>
				</Section>
				<Section>
					<SectionHead>
						Beach Coders,
						<LocationAndJobTitle> Remote - Lead Developer</LocationAndJobTitle>
					</SectionHead>
					<Dates>July 2021 - Present</Dates>
					<SectionContent>
						<List>
							<ListItem>
								Teach from one up to five, 2.5-hour part-time classes per week,
								for 4 weeks.{' '}
							</ListItem>
							<ListItem>
								Built customized projects and lessons plans in every 1on1
								private training.
							</ListItem>
							<ListItem>
								Guide students 5 students to final project customized to their
								learning styles.{' '}
							</ListItem>
							<ListItem>
								Facilitate an inclusive workspace environment for over 5
								students.{' '}
							</ListItem>
							<ListItem>
								mproved communication using discord and live share with VS Code
								to gain 100% of 2.5 hours classes.
							</ListItem>
						</List>
					</SectionContent>
				</Section>
				<Section>
					<SectionHead>
						USC- (Short Path),{' '}
						<LocationAndJobTitle>
							L.A. - Developer / co-founder
						</LocationAndJobTitle>{' '}
					</SectionHead>
					<Dates>May 2021 - Present</Dates>
					<SectionContent>
						<List>
							<ListItem>
								Saved time spent in development by 200hrs by implementing
								S.O.L.I.D principles and Agile workflows.{' '}
							</ListItem>
							<ListItem>
								Optimized and designed infrastructure/systems architecture, over
								5 months of communication and collaboration.{' '}
							</ListItem>
							<ListItem>
								Configured Tailwindcss with styled-components, Daisy UI and
								theme-changing, 80% reduction for MVP design
							</ListItem>
							<ListItem>
								Instituted easier SEO with API Data for 100 or more dynamic
								pages.
							</ListItem>
						</List>
					</SectionContent>
				</Section>
				<Section>
					<SectionHead>
						{' '}
						Medium,{' '}
						<LocationAndJobTitle>
							{' '}
							Anaheim - Freelance Blogger
						</LocationAndJobTitle>
					</SectionHead>
					<Dates>Feb. 2020 - Present</Dates>
					<SectionContent>
						<List>
							<ListItem>
								Published regularly by companies such as “Nerd for Tech” and
								“JavaScript in plain English”, overall user reads by 300+.
							</ListItem>
							<ListItem>
								Wrote over 20 personal and published blogs for respected
								publications and brought in over 300+ views per week.{' '}
							</ListItem>
							<ListItem>
								Combined 1.5 million views/week in a leading Technical
								publication.
							</ListItem>
						</List>
					</SectionContent>
				</Section>
				<Header>PROJECTS </Header>
				<Div />
				<Section>
					<SectionHead>
						Portfolio -{' '}
						<LinkTo href='https://github.com/Hurly77/cjleverett-client'>
							GitHub
						</LinkTo>{' '}
						<span className='text-sm text-normal'>|</span>{' '}
						<LinkTo href='https://cjleverett.me'>Website</LinkTo>
					</SectionHead>
					<SectionContent></SectionContent>
					<List>
						<ListItem>
							Reduced development by 50 percent with the package runner create
							react app.
						</ListItem>
						<ListItem>
							Integrated Material-UI library with friendly UX/UI, set up contact
							form, deployed and hosted projects using Heroku CLI, Surge, and
							Netlify.{' '}
						</ListItem>
					</List>
				</Section>
				<Section>
					<SectionHead>
						Next-Connect-{' '}
						<LinkTo href='https://github.com/Hurly77/next-connect-front'>
							GitHub
						</LinkTo>{' '}
						<span className='text-sm text-normal'>|</span>{' '}
						<LinkTo href='https://nextconnect.surge.sh/'>Demo</LinkTo>{' '}
					</SectionHead>
					<SectionContent>
						<List>
							<ListItem>
								Implemented User Authentication with Ruby Bcrypt gem, maintain
								user data with Redux & Thunk.{' '}
							</ListItem>
							<ListItem>
								Introduced React Router and 5 nested routes, including photo
								albums and about page, with 6 input fields stored in database.
							</ListItem>
							<ListItem>
								Updated Website 2.0 over to NextJS for CEO and Tailwind for
								better UI and responsive design
							</ListItem>
						</List>
					</SectionContent>
				</Section>
				<Header>EDUCATION</Header>
				<Div />
				<Section>
					<SectionHead>
						Flatiron School,{' '}
						<LocationAndJobTitle>
							Online - Software Engineering
						</LocationAndJobTitle>
					</SectionHead>
					<SectionContent>
						<List>
							<ListItem>
								Participated in a cohort of Software Engineers in a year-long
								intensive full-stack web development program.
							</ListItem>
							<ListItem>
								Studied core software engineering curriculum for 2000+ hours
								Learning OOP, MVC and ORMs
							</ListItem>
							<ListItem>
								Studies included JavaScript libraries and frameworks like React,
								Redux, and Ruby on Rails.
							</ListItem>
							<ListItem>
								Engineered 5 projects with 2-3 week strict deadlines for
								large-scalable web applications and CLI&apos;s.
							</ListItem>
						</List>
					</SectionContent>
				</Section>
				<Section>
					<SectionHead>
						Courses - <LocationAndJobTitle>Anaheim, CA</LocationAndJobTitle>
					</SectionHead>
					<SectionContent>
						<List>
							<ListItem>Testing React with Jest</ListItem>
							<ListItem>NodeJS - (MERN)</ListItem>
							<ListItem>Web Developer Boot camp</ListItem>
						</List>
					</SectionContent>
				</Section>
			</Body>
		</Wrapper>
	);
};

export default ResumeComponent;
