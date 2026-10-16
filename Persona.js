/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.2 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Javier",
				Photo: "man.png",
				Quote: "El mar siempre tiene algo nuevo que ofrecer",
				Age: 46,
				Occupation: "Empresario de alquiler de locales y embarcaciones",
				Family: "Casado y con dos hijos",
				Location: "Málaga (Málaga, Puerto de Málaga)",
				Character: "Tranquilo, trabajador y muy aficionado al mar y a la pesca",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 5 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				], 
				Goals: [
					"Ampliar su negocio de alquiler de locales y embarcaciones",
					"Disfrutar de más tiempo para salir a pescar",
					"Conseguir nuevos clientes mediante Internet"
				],
				Frustrations: [
					"Le cuesta gestionar todas las reservas y alquileres de forma organizada",
					"Pierde bastante tiempo contestando llamadas y mensajes",
					"Le resulta complicado encontrar información sobre nuevos clientes y reservas"
				],
				Bio: "Javier tiene 46 años y vive en Motril. Desde hace más de 15 años trabaja por cuenta propia gestionando varios locales comerciales y algunas embarcaciones destinadas al alquiler. Desde pequeño ha estado relacionado con el mar y la pesca, una afición que sigue practicando siempre que tiene tiempo. Le gusta salir a pescar con amigos y familiares, especialmente durante los fines de semana. Su negocio ha crecido durante los últimos años y cada vez recibe más reservas, por lo que busca herramientas que le permitan gestionar mejor los alquileres y mantener toda la información organizada. Aunque utiliza Internet y el móvil habitualmente, no se considera una persona especialmente experta en tecnología.",
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos: "Necesita organizar mejor las reservas de sus locales y embarcaciones. También quiere encontrar una forma sencilla de mostrar a los clientes los espacios y barcos disponibles, consultar precios y gestionar las reservas sin tener que responder constantemente llamadas y mensajes.",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 3 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Lucía",
				Photo: "woman.png",
				Quote: "Cada viaje es una oportunidad para descubrir algo nuevo",
				Age: 32,
				Occupation: "Organizadora de eventos y autónoma",
				Family: "Soltera, vive con su pareja y tiene un perro",
				Location: "Granada (Granada, Andalucía)",
				Character: "Creativa, organizada y sociable, siempre busca nuevas experiencias",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				],
				Goals: [
					"Encontrar espacios originales para organizar eventos y celebraciones",
					"Comparar precios y consultar la disponibilidad de locales fácilmente",
					"Contactar directamente con los propietarios para resolver dudas",
					"Ampliar su cartera de clientes y mejorar la organización de sus eventos"
				],
				Frustrations: [
					"Tiene dificultades para encontrar locales que se adapten a las necesidades de cada evento",
					"Pierde tiempo consultando la disponibilidad en diferentes páginas web",
					"A menudo encuentra información incompleta sobre los precios y las condiciones del alquiler",
					"Le resulta complicado coordinar las reservas con los propietarios"
				],
				Bio: "Lucía tiene 32 años y vive en Granada. Trabaja como organizadora de eventos y desde hace varios años ayuda a particulares y empresas a preparar celebraciones, reuniones y pequeñas fiestas. Le gusta encontrar lugares diferentes que se adapten a cada ocasión y ofrecer propuestas originales a sus clientes. Actualmente utiliza Internet y las redes sociales para buscar espacios y promocionar sus servicios, pero suele tener que consultar varias páginas y contactar con numerosos propietarios para encontrar el lugar adecuado. Por eso, busca una plataforma que le permita comparar locales, consultar precios y disponibilidad, y gestionar las reservas de forma rápida y sencilla.",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Movil", Value: 5 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 4 }
				],
				Contextos: "Necesita encontrar y comparar locales para diferentes tipos de eventos sin perder tiempo buscando en múltiples páginas. Quiere consultar fotografías, precios, características y disponibilidad, además de contactar con los propietarios y gestionar las reservas desde una única plataforma.",
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 2 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 3 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])