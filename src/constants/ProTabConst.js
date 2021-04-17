import logocamping from './../images/logo-camping.png'
import ntshost from './../images/ntshost.jpeg'
import silogo from './../images/sudinfo.png'


export const careerState = {
	"tabName": 'Career',
	"roles": [
		{
			"jobTitle": 'NTS HOST',
			"jobLogo": {
				"src": ntshost,
				"cls": 'cr-company-logo cr-pt-logo'
			},
			"jobLocation": 'NTS-host | Lyon, Fr',
			"jobPeriod": '04/2018 – 07/2020',
			"jobDesc": "Responsable d'un herbergeur de services web",
			"jobResp": 'Gestion du parc Web Via WHMCS, Gestion Clients et ticketing',
			"sampleWork": [
				"Mise en Place de solutions d'hébergement",
				'Services Après Vente.',
				'Migration de nom de domaines',
				'Développement pour certains clients de solution clé en main (Wordpress, Joomla, ect...)',

			],
			"jobTech": [
				{
					"category": 'CMS gestion',
					"text": 'Whcms, cPanel, Plesk'
				},
				{
					"category": 'Front End',
					"text": 'Javascript, HTML, CSS, ReactJs , (Faible base) Vue.js'
				},
				{
					"category": 'VCS',
					"text": 'GIT'
				},
				{
					"category": 'Databases',
					"text": ' MongoDB, MySQL'
				},
				{
					"category": 'Other',
					"text": 'Docker'
				}
			],
			"cls": '',
			"tabOpen": true
		},
		{
			"jobTitle": 'Alpes Lodges',
			"jobLogo": {
				"src": logocamping,
				"cls": 'cr-company-logo cr-sg-logo'
			},
			"jobLocation": 'Camping / Hôtel | Pralognan La Vanoise, Fr',
			"jobPeriod": '10/2015 – 09/2020',
			"jobDesc": 'Entreprise Familliale',
			"jobResp": 'Responsable Reception Caping été / Extras Réception ',
			"sampleWork": [
				'Travail au Bar, Cuisine, Plonge en Extra',
				'Receptioniste',
				'Ménage des locatifs',
				'Entretien et Réparations',
				'Administrateur Réseau'
			],
			"jobTech": [
				{
					"category": 'CMS',
					"text": 'ESeason'
				}
			],
			"cls": '',
			"tabOpen": true
		},
		{
			"jobTitle": 'SudInfo',
			"jobLogo": {
				"src": silogo,
				"cls": 'cr-company-logo cr-gh-logo'
			},
			"jobLocation": 'Sudinfo | Venissieux, Fr',
			"jobPeriod": '02/2017 – 03/2017',
			"jobDesc": "Stage : BTP, Réalisation de l'instalation éléctrique d'un batiments de 2000M²",
			"jobResp": 'Mise en place courants Forts / Faibles' ,
			"sampleWork": [
				'Instalations des càbles et gaines',
				'instalations chemin de câbles, Câble de terre, instalations des prises et càbles réseaux',
			],
			"jobTech": [

			],
			"cls": 'cr-page-break',
			"tabOpen": true
		},
	]
};
