import ccoder from '../../assets/projects_images/ccoder.png';
import homeseek from '../../assets/projects_images/homeseek.png';
import breakingbadapi from '../../assets/projects_images/breakingbadapi.png';
import mtube from '../../assets/projects_images/mtube.png';
import shorturl from '../../assets/projects_images/shorturl.png';

const data_projects = [
	{
		name: 'Home Seek',
		image: homeseek,
		deployed_url: 'http://projecthomeseek.herokuapp.com',
		github_url: 'https://github.com/Teja-s-au6/homeseek',
		category: [ 'node.js', 'mongoDB', 'react.js' ]
	},

	{
		name: 'Ccoder',
		image: ccoder,
		deployed_url: 'https://ccoder.herokuapp.com',
		github_url: 'https://github.com/Teja-s-au6/Ccoder',
		category: [ 'node.js', 'mongoDB' ]
	},

	{
		name: 'MTube (YouTube Clone)',
		image: mtube,
		deployed_url: 'https://mtube.netlify.app',
		github_url: 'https://github.com/Teja-s-au6/mtube',
		category: [ 'react.js' ]
	},

	{
		name: 'URL Shortner',
		image: shorturl,
		deployed_url: 'https://shorturlapper.herokuapp.com',
		github_url: 'https://github.com/Teja-s-au6/urlshortener',
		category: [ 'node.js', 'mongoDB', 'express.js' ]
	},

	{
		name: 'Breaking Bad API',
		image: breakingbadapi,
		deployed_url: 'https://walter-breaking-bad.netlify.app/',
		github_url: 'https://github.com/Teja-s-au6/breakingbadapi',
		category: [ 'react.js' ]
	}
];

export default data_projects;
