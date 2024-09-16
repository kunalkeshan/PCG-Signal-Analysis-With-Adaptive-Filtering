export type TeamMember = {
	name: string;
	image: string;
	about: string;
	slug: string;
};

export const FACULTY_ADVISORS: TeamMember[] = [
	{
		name: 'Dr. Faculty Advisor',
		image: 'https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=FacultyAdvisor',
		about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		slug: 'faculty-advisor',
	},
];

export const STUDENT_TEAM: TeamMember[] = [
	{
		name: 'Student 1',
		image: 'https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Student1',
		about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		slug: 'student1',
	},
	{
		name: 'Student 2',
		image: 'https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Student2',
		about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		slug: 'student2',
	},
	{
		name: 'Student 3',
		image: 'https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Student3',
		about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		slug: 'student3',
	},
	{
		name: 'Student 4',
		image: 'https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Student4',
		about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		slug: 'student4',
	},
];
