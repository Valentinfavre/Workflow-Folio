import esqese from './../images/esqese.png'
import epitech from './../images/epitech.png'
import lamache from './../images/logolamache.png'

export const educationState = {
	"tabName": 'Formation',
	"education": [
		{
			"eduTitle": 'Bachelor Sciences du Numérique',
			"eduLogo": {
				"src": esqese,
				"cls": 'ed-company-logo ed-rgu-logo'
			},
			"eduLocation": 'Université catholique de Lyon | Lyon, FR',
			"eduPeriod": '09/2019 – 09/2022',
			"eduModules": [
				'Programation orienté objet (JS / C++)',
				'initiation BBD (MySQL)',
				'Dévellopement systéme réseau (Cisco)',
				'Management Serveur Windows(ITIL)',
				'Développement web (HTML, PHP, JavaScript)',
			],
			"tabOpen": true
		},
		{
			"eduTitle": 'Epitech',
			"eduLogo": {
				"src": epitech,
				"cls": 'ed-company-logo ed-rgu-logo'
			},
			"eduLocation": 'Epitech Lyon | Lyon, FR',
			"eduPeriod": '09/2018 – 09/2019',
			"eduModules": [
				'Programation C',
				'Dévellopement web HTML/CSS, ',
				'Interactive Systems Development',
				'Notion Admin. Sys. Linux',
				"Programation d'un Shell Linux",
			],

			"tabOpen": true
		},
		{
			"eduTitle": 'Bac Pro Systémes électriques et numériques',
			"eduLogo": {
				"src": lamache,
				"cls": 'ed-company-logo ed-thes-logo'
			},
			"eduLocation": 'École La Màche | Lyon, FR',
			"eduPeriod": '09/2015 – 06/2018',
			"eduModules": [
				'Administration Réseau & Telecom',
				'Certification Electrotechnique B0',
				'Cisco',


			],
			"tabOpen": true
		},

	]
};
