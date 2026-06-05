import domacnostHrouImage from '@/public/domacnost-hrou.png';
import poznavackaImage from '@/public/poznavacka.png';
import ContactForm, { ContactModal } from '@/src/components/ContactForm';
import EmailField from '@/src/components/EmailField';
import Navbar from '@/src/components/Navbar';
import OtherHobbies from '@/src/components/OtherHobbies';
import { ProjectCard } from '@/src/components/ProjectCard';
import ProjectModal from '@/src/components/ProjectModal';
import SkillIcon from '@/src/components/SkillIcon';
import { projects } from '@/src/data/projects';
import { Icon } from '@iconify/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import iconSvg from '../icon.svg';

export default function Home() {
	const t = useTranslations();

	return (
		<>
			{Object.keys(projects).map((projectName) => (
				<ProjectModal key={projectName} name={projectName as keyof typeof projects} />
			))}
			<Navbar />
			<ContactModal />
			<main className='flex flex-col flex-1 items-stretch gap-16 text-white'>
				<div className='texture-bg'></div>
				<section id='hero' className='justify-center items-center mx-auto pt-40 w-[min(90vw,800px)]'>
					<h1 className='text-center'>Jindřich Kraina</h1>
					<div className='bg-accent rounded w-12 h-1' />
					<h4 className='text-center'>Full-stack developer & UI/UX designer</h4>
					<p className='text-center'>{t('hero.description')}</p>
					<p className='flex items-center gap-2'>
						<Icon icon='mingcute:location-fill' className='text-accent text-xl' />
						<span>{t('hero.location')}</span>
					</p>
					<div className='flex flex-wrap justify-center gap-4'>
						<Link className='button' href='#contact'>
							{t('hero.primaryCTA')}
						</Link>
						<Link className='button secondary' href='#projects'>
							{t('hero.secondaryCTA')}
						</Link>
					</div>
				</section>
				<section id='about'>
					<h2>{t('nav.about')}</h2>
					<div className='gap-8 grid lg:grid-cols-2'>
						<div className='layout-col-4'>
							<p>{t('about.description1')}</p>
							<p>{t('about.description2')}</p>
							<div className='flex gap-2'>
								<div className='p-4 rounded-2xl bg-accent-muted layout-col-2'>
									<h3 className='text-accent'>3+</h3>
									<p>{t('about.yearsOfExperience')}</p>
								</div>
								<div className='p-4 rounded-2xl bg-accent-muted layout-col-2'>
									<h3 className='text-accent'>2</h3>
									<p>{t('about.largeProjects')}</p>
								</div>
							</div>
							<div className='flex'>
								<div className='flex items-center gap-2 p-2'>
									<div className='place-items-center grid rounded-lg h-8 aspect-square bg-accent-muted'>
										<span className='font-bold text-accent'>C2</span>
									</div>
									<div className='layout-col-0'>
										<p className='font-bold text-white'>{t('about.lang1.name')}</p>
										<p className='text-xs'>{t('about.lang1.level')}</p>
									</div>
								</div>
								<div className='flex items-center gap-2 p-2'>
									<div className='place-items-center grid rounded-lg h-8 aspect-square bg-accent-muted'>
										<span className='font-bold text-accent'>C1</span>
									</div>
									<div className='layout-col-0'>
										<p className='font-bold text-white'>{t('about.lang2.name')}</p>
										<p className='text-xs'>{t('about.lang2.level')}</p>
									</div>
								</div>
							</div>
						</div>
						<OtherHobbies />
					</div>
				</section>
				<section id='skills' className='items-center'>
					<h2 className='text-center'>{t('nav.skills')}</h2>
					<div className='flex flex-col gap-8'>
						<div className='items-center gap-4 grid lg:grid-cols-[8rem_1fr] px-4 py-2'>
							<h4 style={{ textDecoration: 'underline 4px var(--accent)' }} className='max-lg:pt-2 max-lg:text-center'>
								Frontend
							</h4>
							<div className='flex flex-wrap max-lg:justify-center gap-4'>
								<SkillIcon icon='mdi:react' color='#61DAFB' name='React' level={4} />
								<SkillIcon icon='mdi:language-typescript' color='#2D79C7' name='TypeScript' level={4} />
								<SkillIcon icon='mdi:language-html5' color='#E44D26' name='HTML' level={4} />
								<SkillIcon icon='mdi:language-css3' color='#214CE5' name='CSS' level={4} />
								<SkillIcon icon='mdi:sass' color='#CE6B9C' name='Sass' level={3} />
								<SkillIcon icon='mdi:tailwind' color='#3EBFF8' name='Tailwind&nbsp;CSS' level={4} />
							</div>
						</div>
						<div className='items-center gap-4 grid lg:grid-cols-[8rem_1fr] px-4 py-2'>
							<h4 style={{ textDecoration: 'underline 4px var(--accent)' }} className='max-lg:pt-2 max-lg:text-center'>
								Backend
							</h4>
							<div className='flex flex-wrap max-lg:justify-center gap-4'>
								<SkillIcon icon='mdi:nodejs' color='#539E43' name='Node.js' level={3} />
								<SkillIcon icon='lineicons:mongodb' color='#086E50' name='MongoDB' level={3} />
								<SkillIcon icon='simple-icons:express' color='#F3E024' name='Express.js' level={2} />
								<SkillIcon icon='devicon:nextjs' color='#FFF' name='Next.js' level={3} />
								<SkillIcon icon='material-symbols:sql' color='#3EBFF8' name='SQL' level={3} />
							</div>
						</div>
						<div className='items-center gap-4 grid lg:grid-cols-[8rem_1fr] px-4 py-2'>
							<h4 style={{ textDecoration: 'underline 4px var(--accent)' }} className='max-lg:pt-2 max-lg:text-center'>
								{t('tools')}
							</h4>
							<div className='flex flex-wrap max-lg:justify-center gap-4'>
								<SkillIcon icon='mdi:git' color='#F05030' name='Git' level={3} />
								<SkillIcon icon='devicon:figma' color='#F40' name='Figma' level={4} />
								<SkillIcon icon='devicon:vscode' color='#F40' name='VS Code' level={4} />
							</div>
						</div>
					</div>
				</section>
				<section id='projects' className='items-center'>
					<h2 className='text-center'>{t('nav.projects')}</h2>
					<div className='flex flex-wrap justify-center gap-4 w-full'>
						{Object.entries(projects).map(([projectName, project], idx) => (
							<ProjectCard key={idx} title={projectName} description={t(`projects.${project.translationAlias}.description`)} tags={project.tags} link={project.link} images={project.images} />
						))}
					</div>
				</section>
				<section id='contact' className='items-center'>
					<h2 className='text-center'>{t('nav.contact')}</h2>
					<p className='text-center'>{t('contact.paragraph')}</p>
					<EmailField />
					<ContactForm />
				</section>
			</main>
			<footer className='items-center bg-darker shadow-2xl text-white layout-col-0'>
				<section className='gap-y-16 grid md:grid-cols-2 lg:grid-cols-3 w-full'>
					<div className='md:col-span-2 lg:col-span-1 layout-col-2'>
						<Image src={iconSvg} width={64} alt='Jindřich Kraina' />
						<h3>Jindřich Kraina</h3>
						<p>Full-stack developer & UI/UX designer</p>
					</div>
					<div className='text-light-gray layout-col-2'>
						<h4>{t('nav.navigation')}</h4>
						<Link className='w-fit hover:underline' href='#about'>
							{t('nav.about')}
						</Link>
						<Link className='w-fit hover:underline' href='#skills'>
							{t('nav.skills')}
						</Link>
						<Link className='w-fit hover:underline' href='#projects'>
							{t('nav.projects')}
						</Link>
						<Link className='w-fit hover:underline' href='#contact'>
							{t('nav.contact')}
						</Link>
					</div>
					<div className='layout-col-4'>
						<h4>{t('nav.contact')}</h4>
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
					<p className='text-neutral-400!'>
						&copy; {new Date().getFullYear()} Jindřich Kraina. {t('license')}
					</p>
				</div>
			</footer>
		</>
	);
}
