/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Javier",
                Photo: "man.png",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Le gustaría invertir en su futuro proyecto relacionado con el mar",
                touch1: "Archivos",
                feel1: "4",
                con1: "Los ahorros incrementan muy lentamente y se convierte en un proceso relativamente lento",
                ima1: "cartoon-planning.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Piensa en hacer horas extras para conseguir un mejor sueldo",
                touch2: "Ordenador",
                feel2: "2",
                con2: "Se acumula el cansansio con el paso de los días",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide privarse de hacer sus hobbies durante un tiempo para poder ahorrar más dinero",
                touch3: "Tiempo invertido",
                feel3: "3",
                con3: "Se siente bien por el progreso (aunque un poco agobiante)",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Los amigos le recomiendan una página para escoger alojamientos",
                touch4: "ordenador",
                feel4: "4",
                con4: "Buscar opciones en el lugar que había seleccionado, viendo precios y distancias, tiene que ver si hay aparcamiento fácil",
                ima4: "cartoon-PCtyping.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Se encuentra 3 opciones que encajan en sus preferencias",
                touch5: "móvil (whatsapp)",
                feel5: "2",
                con5: "Llama a sus amigos (whatsapp no responen) para ver cual es su preferencia, tienen que reservar rápido por los precios",
                ima5: "cartoon-phoning.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue reservar, otro año se encarga otro!",
                touch6: "ordenador",
                feel6: "3",
                con6: "algunos amigos no confirmaron por lo que tuvo que seleccionar reserva con posibilidad de cancelación",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
                Name: "Lucía",
                Photo: "woman.png",

                /*** PASO #1: INSPIRACION ***/
                goal1: "Necesita encontrar un local original para organizar una celebración para uno de sus clientes",
                touch1: "Ordenador (búsqueda web)",
                feel1: "5",
                con1: "Tiene muchas ideas y quiere encontrar un espacio especial que se adapte al tipo de evento y a su presupuesto",
                ima1: "cartoon-going.png",

                /*** PASO #2: DECISION ***/
                goal2: "Comparar diferentes locales para encontrar el que mejor se adapte a las necesidades del cliente",
                touch2: "Móvil (web y redes sociales)",
                feel2: "4",
                con2: "Encuentra varias opciones, pero tiene que consultar diferentes páginas para conocer los precios, las características y la disponibilidad",
                ima2: "cartoon-teamthinking.png",

                /*** PASO #3: ACTUA ***/
                goal3: "Contactar con los propietarios de los locales que más le interesan",
                touch3: "Móvil (llamadas y mensajes)",
                feel3: "2",
                con3: "Algunos propietarios tardan en responder y no consigue confirmar rápidamente si los locales están disponibles",
                ima3: "cartoon-phoningangry.png",

                /*** PASO #4: OBSERVA ***/
                goal4: "Buscar una plataforma que le permita consultar locales, precios y disponibilidad en un mismo sitio",
                touch4: "Móvil (plataforma web)",
                feel4: "4",
                con4: "Descubre una plataforma donde puede ver fotografías y características de los espacios, lo que le facilita comparar las opciones",
                ima4: "cartoon-phone-street.png",

                /*** PASO #5: ANALIZA ***/
                goal5: "Elegir el local adecuado y completar la solicitud de reserva",
                touch5: "Móvil (plataforma web)",
                feel5: "5",
                con5: "Puede consultar la información del local y sus condiciones antes de reservar, aunque necesita comprobar algunos detalles con el propietario",
                ima5: "cartoon-phone-sitting.png",

                /*** PASO #6: CONCLUSION ***/
                goal6: "Confirmar la reserva del local y organizar el evento con su cliente",
                touch6: "Ordenador (reserva confirmada)",
                feel6: "5",
                con6: "Consigue el espacio que buscaba y ahorra tiempo al tener la información de la reserva organizada. Está satisfecha y volvería a utilizar la plataforma para futuros eventos",
                ima6: "cartoon-PChard.png"
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



