import domacnostHrouImage from '@/public/domacnost-hrou.png';
import poznavackaImage from '@/public/poznavacka.png';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import EmailField from '../components/EmailField';
import HobbyCard from '../components/HobbyCard';
import Navbar from '../components/Navbar';
import { ProjectCard } from '../components/ProjectCard';
import iconSvg from './icon.svg';

export default function Home() {
	return (
		<>
			<Navbar />
			<main className='flex flex-col flex-1 items-center gap-16 bg-black text-white'>
				<section id='hero' className='justify-center items-center pt-40 w-[min(90vw,800px)]'>
					<h1 className='text-center'>Jindřich Kraina</h1>
					<div className='bg-accent rounded w-12 h-1' />
					<h4 className='text-center'>Full-stack developer & UI/UX designer</h4>
					<p className='text-center'>I use React and Node.js with some help of Figma to create elegant & accessible websites and other user interfaces. Although I’m still a student, I’ve made some big projects that people use and love.</p>
					<p className='flex items-center gap-2'>
						<Icon icon='mingcute:location-fill' className='text-accent text-xl' />
						<span>Havířov, Czech Republic</span>
					</p>
					<div className='flex flex-wrap justify-center gap-4'>
						<Link className='button' href='#contact'>
							Contact me
						</Link>
						<Link className='button secondary' href='#projects'>
							View my projects
						</Link>
					</div>
				</section>
				<section id='about'>
					<h2>About me</h2>
					<div className='gap-8 grid lg:grid-cols-2'>
						<div className='layout-col-4'>
							<p>I’m a self-taught web developer and designer, currently studying at Gymnázium Komenského Havířov. In the future, I want to go to VŠB College in Ostrava to study IT. I enjoy solving problems and learning things I find interesting (not only IT and math).</p>
							<p>I started as a developer, but had to learn design along the way because my projects looked crappy. I also learned the hard way that I need to organize my stuff. Because otherwise, I would spend a lot of time just figuring out what’s happening in the codebase. And in design, I found out UX should always come in the first place. Sure, you can get creative, but there are rules you cannot bend, because users are just used to something and will bounce once they get confused.</p>
							<div className='flex gap-2'>
								<div className='p-4 rounded-2xl bg-accent-muted layout-col-2'>
									<h3 className='text-accent'>3+</h3>
									<p>Years of experience</p>
								</div>
								<div className='p-4 rounded-2xl bg-accent-muted layout-col-2'>
									<h3 className='text-accent'>2</h3>
									<p>Large projects</p>
								</div>
							</div>
							<div className='flex'>
								<div className='flex items-center gap-2 p-2'>
									<div className='place-items-center grid rounded-lg h-8 aspect-square bg-accent-muted'>
										<span className='font-bold text-accent'>C2</span>
									</div>
									<div className='layout-col-0'>
										<p className='font-bold text-white'>Czech</p>
										<p className='text-xs'>Native</p>
									</div>
								</div>
								<div className='flex items-center gap-2 p-2'>
									<div className='place-items-center grid rounded-lg h-8 aspect-square bg-accent-muted'>
										<span className='font-bold text-accent'>C1</span>
									</div>
									<div className='layout-col-0'>
										<p className='font-bold text-white'>English</p>
										<p className='text-xs'>Fluent</p>
									</div>
								</div>
							</div>
						</div>
						<div className='bg-darker p-8 border border-gray rounded-2xl h-fit layout-col-4'>
							<h3>My other hobbies</h3>
							<div className='gap-4 grid 2xl:grid-cols-2'>
								<HobbyCard title='Calisthenics' description='A cool athletic sport focused on physical exercises using your bodyweight and some bars.' icon='mingcute:barbell-line' />
								<HobbyCard title='Math' description='I like learning new concepts, going to competitions and training my brain.' icon='mynaui:math-square' />
								<HobbyCard title='Music' description='I think everyone has this on their list. I still have to include it here, because I listen to music everyday.' icon='mingcute:music-line' />
								<HobbyCard title='Random skills' description='Cubing, parkour, card tricks, juggling, stretching…' icon='mingcute:flash-line' />
							</div>
						</div>
					</div>
				</section>
				<section id='tech-stack' className='items-center'>
					<h2 className='text-center'>Tech stack</h2>
					<div className='flex gap-8 p-4 border-gray border-y'></div>
				</section>
				<section id='projects' className='items-center'>
					<h2 className='text-center'>Projects</h2>
					<div className='flex flex-wrap justify-center gap-4 w-full'>
						<ProjectCard title='Poznávačka tool' description='App that helps students learn the names of animals, plants and other biology stuff.' tags={['TypeScript', 'React', 'Tailwind CSS']} link='https://poznavacka.netlify.app' image={poznavackaImage} />
						<ProjectCard title='Domácnost hrou' description='A portfolio/e-commerce type website focused on selling my client and a brand they’re working for.' tags={['NextJS', 'React', 'Tailwind CSS', 'PHP']} link='https://domacnosthrou.cz' image={domacnostHrouImage} />
					</div>
				</section>
				<section id='contact' className='items-center'>
					<h2 className='text-center'>Contact</h2>
					<p className='text-center'>Want to work with me? Just fill out this form and I'll get back to you as soon as possible. Or you can write me an email.</p>
					<EmailField />
					<ContactForm />
				</section>
			</main>
			<footer className='items-center bg-darker shadow-2xl text-white layout-col-0'>
				<section className='gap-y-16 grid md:grid-cols-2 lg:grid-cols-3'>
					<div className='md:col-span-2 lg:col-span-1 layout-col-2'>
						<Image src={iconSvg} width={64} alt='Jindřich Kraina' />
						<h3>Jindřich Kraina</h3>
						<p>Full-stack developer & UI/UX designer</p>
					</div>
					<div className='text-light-gray layout-col-2'>
						<h4>Navigation</h4>
						<Link className='w-fit hover:underline' href='#about'>
							About me
						</Link>
						<Link className='w-fit hover:underline' href='#tech-stack'>
							Tech stack
						</Link>
						<Link className='w-fit hover:underline' href='#projects'>
							Projects
						</Link>
						<Link className='w-fit hover:underline' href='#contact'>
							Contact
						</Link>
					</div>
					<div className='layout-col-4'>
						<h4>Contact</h4>
						<div className='flex gap-2'>
							<Link href='https://github.com/Thrillonek' className='social-link' target='_blank'>
								<Icon icon='mingcute:github-line' />
							</Link>
							<Link href='https://www.instagram.com/jindra_kraina_/' className='social-link' target='_blank'>
								<Icon icon='mingcute:instagram-line' />
							</Link>
							<Link href='https://www.linkedin.com/in/jind%C5%99ich-kraina-8234b4408/' className='social-link' target='_blank'>
								<Icon icon='mingcute:linkedin-line' />
							</Link>
						</div>
						<EmailField />
					</div>
				</section>
				<div className='bg-dark w-full h-px' />
				<div className='p-4 text-sm text-center'>
					<p className='text-neutral-400!'>&copy; {new Date().getFullYear()} Jindřich Kraina. All rights reserved.</p>
				</div>
			</footer>
		</>
	);
}
