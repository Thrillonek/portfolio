import { link } from 'fs';

export const projects = {
	'Poznávačka Tool': {
		description: 'An app that makes interactive quizes and lists out of image sets, so that students can learn the names of the plants, animals and other species displayed on the images. Classic dashboard UI.',
		why: 'The first time my class was assigned to learn the names of 150 plant species, I thought I could simplify the learning process with my web development skills - so I created this app. Over the years, it has evolved as my skills grew. I also introduced it to other classes and teachers in my school and because of that, over 100 students use or have used this app to make the learning process faster, easier and more fun.',
		issues: 'The app doesn’t have a backend. It saves some progress and settings in local storage, but login system with authentication would be much better here. The problem is that good backend hosting costs money and the app is not monetized.',
		link: 'https://poznavacka.netlify.app',
	},
	'Domácnost hrou': {
		description: 'The website acts mostly as a portfolio for my mom, who works for a company that has affiliate marketing model. The website is trying to introduce and sell my mom’s services and the products of the company or their brand as a whole.',
		why: 'At first, my mom needed the website just for verification on some other service she used. So the first version was not made by me and was not maintained. A few years ago, I decided to rewrite the entire thing in React as a practice and later updated the design multiple times (even created a logo). My mom then started using my version of the website, because it was so much better.',
		issues: 'The marketing could be a lot better. Even though the site looks good, I’m aware that there is not a straight-forward funnel. But right now, the site serves its purpose in the current state and I’m looking more into coding and design rather than marketing.',
		link: 'https://domacnosthrou.cz',
	},
};
