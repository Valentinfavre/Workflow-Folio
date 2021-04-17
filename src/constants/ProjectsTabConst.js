import octoLogo from './../images/Octocat.png'


export const projectsState = {
	"tabName": 'Projects',
	"projects": [
		{
			"projectTitle": 'TmodLoader Astaworld Black Clover',
			"projectLabels": [
				'C#', 'Terraria',
			],
			"projectDesc": [
				"Dans le but d'apprendre le C#, j'ai décider de crée un mod sur l'univers du Manga de Black Clover",
				'Actuellement il est toujours en dévellopement et une version stable sortira courant juillet 2021',
				'Mod pour le jeu Terraria sur PC',
			],
			"projectTech": [
				{
					"category": 'Gaming Mod',
					"text": 'C#, Visual Studio community'
				}
			],
			"projectLogos": [
				{
					"src": octoLogo,
					"href": 'https://github.com/Valentinfavre/Tmodloader-BlackClover-Astaworld',
					"cls": 'pr-octo-logo'
				},
			],
			"tabOpen": true
		},

	]
};
