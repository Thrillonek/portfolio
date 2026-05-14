import domacnostHrouImage from '@/public/domacnost-hrou.png';
import poznavackaImage from '@/public/poznavacka.png';
import '@/src/assets/_base.scss';
import '@/src/assets/_form.scss';
import '@/src/assets/_nav.scss';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import EmailField from '../components/EmailField';
import HobbyCard from '../components/HobbyCard';
import { ProjectCard } from '../components/ProjectCard';
import iconSvg from './icon.svg';

export default function Home() {
	return (
		<>
			<nav>
				<Link href='#hero' className='flex items-center gap-2'>
					<Image src={iconSvg} width={32} alt={'Logo'} />
					<h4>Jindřich Kraina</h4>
				</Link>
				<div className='flex gap-4'>
					<Link href='#about'>About</Link>
					<Link href='#tech-stack'>Tech stack</Link>
					<Link href='#projects'>Projects</Link>
					<Link href='#contact'>Contact</Link>
				</div>
				<button className='flex items-center gap-1 px-2 py-1 rounded text-white'>
					<Icon icon='mdi:language' />
					<span className='text-sm'>EN</span>
				</button>
			</nav>
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
					<div className='flex gap-4'>
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
							<p>I started as a developer, but had to learn design along the way because my projects looked crappy. I also learned the hard way that I need to organize my stuff. Because otherwise, you spend a lot of time just figuring out what’s happening in the codebase. And in design, I found out UX should always come in the first place. Sure, you can get creative, but there are rules you cannot bend, because users are just used to something and will bounce once they get confused.</p>
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
					<div className='flex flex-wrap gap-4'>
						<ProjectCard title='Poznávačka tool' description='App that helps students learn the names of animals, plants and other biology stuff.' tags={['TypeScript', 'React', 'Tailwind CSS']} link='https://poznavacka.netlify.app' image={poznavackaImage} />
						<ProjectCard title='Domácnost hrou' description='A portfolio/e-commerce type website focused on selling my client and a brand they’re working for.' tags={['NextJS', 'React', 'Tailwind CSS', 'PHP']} link='https://domacnosthrou.cz' image={domacnostHrouImage} />
					</div>
				</section>
				<section id='contact' className='items-center'>
					<h2 className='text-center'>Contact</h2>
					<p>Want to work with me? Just fill out this form and I'll get back to you as soon as possible. Or you can write me an email.</p>
					<EmailField />
					<form className='items-center bg-darker shadow-xl p-8 rounded-2xl w-[min(480px,100%)] layout-col-4' action=''>
						<div>
							<input type='text' placeholder=' ' id='name' />
							<label htmlFor='name'>Your Name</label>
						</div>
						<div>
							<input type='text' placeholder=' ' id='email' />
							<label htmlFor='email'>Your Email</label>
						</div>
						<div>
							<textarea placeholder=' ' id='message' rows={4} />
							<label htmlFor='message'>Your Message</label>
						</div>
						<button type='submit' className='form-button button'>
							Send!
						</button>
					</form>
				</section>
			</main>
			<footer className='items-center bg-darker shadow-2xl text-white layout-col-0'>
				<section className='grid grid-cols-3'>
					<div className='layout-col-2'>
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
