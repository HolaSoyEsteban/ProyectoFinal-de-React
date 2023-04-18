const productos = [
    {
    "id": 1,
    "title": "John Wick N°1",
    "img": "https://i.postimg.cc/tTW0Gpgp/John-Wick-n1.jpg",
    "description": "Historia de origen que cuenta cómo John Wick se unió a los asesinos de El Continental. Una historia de origen que no desdice el mito de las películas y que amplia el trasfondo de su escenario. PARTE 1",
    "category": "John_Wick",
    "price": 800
    },
    {
    "id": 2,
    "title": "John Wick N°2",
    "img": "https://i.postimg.cc/65BkFsxx/John-Wick-n2.jpg",
    "description": "Historia de origen que cuenta cómo John Wick se unió a los asesinos de El Continental. Una historia de origen que no desdice el mito de las películas y que amplia el trasfondo de su escenario. PARTE 2",
    "category": "John_Wick",
    "price": 800
    },
    {
    "id": 3,
    "title": "John Wick N°3",
    "img": "https://i.postimg.cc/3NFPW1pq/John-Wick-n3.jpg",
    "description": "Historia de origen que cuenta cómo John Wick se unió a los asesinos de El Continental. Una historia de origen que no desdice el mito de las películas y que amplia el trasfondo de su escenario. PARTE 3",
    "category": "John_Wick",
    "price": 800
    },
    {
    "id": 4,
    "title": "John Wick N°4",
    "img": "https://i.postimg.cc/QNgL68Pq/John-Wick-n4.jpg",
    "description": "Historia de origen que cuenta cómo John Wick se unió a los asesinos de El Continental. Una historia de origen que no desdice el mito de las películas y que amplia el trasfondo de su escenario. PARTE 4",
    "category": "John_Wick",
    "price": 800
    },
    {
    "id": 5,
    "title": "John Wick N°5",
    "img": "https://i.postimg.cc/ncTyJdnj/John-Wick-n5.jpg",
    "description": "Historia de origen que cuenta cómo John Wick se unió a los asesinos de El Continental. Una historia de origen que no desdice el mito de las películas y que amplia el trasfondo de su escenario. PARTE 5",
    "category": "John_Wick",
    "price": 800
    },
    {
    "id": 6,
    "title": "New Avengers Vol 3 #24",
    "img": "https://i.postimg.cc/y8YCMFHY/Avengers-n24.jpg",
    "description": "Ocho meses después de la formación de la Cábala, Namor visita al Doctor Doom, contándole todo lo que ha ocurrido con los Illuminati, la Cábala y las Incursiones. Declara que la Cábala es ingobernable. Al principio Namor los había considerado un mal necesario, ya que los Illuminati no estaban dispuestos a hacer lo que había que hacer para salvar el universo, pero declara que se ha cansado de que la Cábala se deleite con la matanza, quedándose en la otra Tierra para luchar y matar en lugar de limitarse a colocar la bomba y partir. Afirma que han empezado a percibir sus dudas, y le dice al Doctor Doom que le necesita, creyendo que juntos podrían enfrentarse a la Cábala y hacer sólo lo que hay que hacer, ni más ni menos. Doom rechaza su oferta, diciendo que debería haber acudido a él primero en lugar de liberar a la Cábala, despidiendo a Namor.",
    "category": "Marvel",
    "price": 1200
    },
    {
    "id": 7,
    "title": "Avengers Vol 5 #35",
    "img": "https://i.postimg.cc/WpGRt9p1/Avengers-n35.jpg",
    "description": "Planetas, estrellas, incluso el universo mismo... todo esto está llegando a su fin.",
    "category": "Marvel",
    "price": 1200
    },
    {
    "id": 8,
    "title": "Avengers Vol 5 #41",
    "img": "https://i.postimg.cc/MKqCByXb/Avengers-n41.jpg",
    "description": "EN 3 MESES... ¡EL TIEMPO SE ACABA!",
    "category": "Marvel",
    "price": 1200
    },
    {
    "id": 9,
    "title": "La Imperativa Thanos #1",
    "img": "https://i.postimg.cc/vHhptcVR/La-imperativa-Thanos-n1.jpg",
    "description": "¡Thanos ha vuelto! A un lado, tienes a la amenaza número uno del Universo Marvel. Al otro, una nueva fuerza oscura determinada a destruirlo todo. Y en el medio sólo queda un puñado de héroes para evitar la devastación definitiva. Todos los héroes cósmicos han de reunirse de nuevo para afrontar una batalla que cambiará su destino para siempre.",
    "category": "Marvel",
    "price": 1500
    },
    {
    "id": 10,
    "title": "Loki agente de Asgard, Last of days #14",
    "img": "https://i.postimg.cc/zfyZB8vs/Loki-n14.jpg",
    "description": "Es el yo futuro más viejo, más desagradable y mucho más poderoso de Loki. Sus maquinaciones le han costado todo a Loki... pero ¿quién es el Rey Loki? ¿Qué reino lo tendría? ¿Y qué plan malvado ha estado gestando todo este tiempo? Loki comenzó su tercera vida aniquilando el alma de su segundo yo, su yo mejor y más puro. Ahora paga el precio.",
    "category": "Marvel",
    "price": 1000
    },
    {
    "id": 11,
    "title": "Loki agente de Asgard, Last of days #17",
    "img": "https://i.postimg.cc/MHbg4G3Q/Loki-n17.jpg",
    "description": "El ÚLTIMO DÍA de LOKI, a medida que muere el Universo Marvel, queda tiempo para una última historia: ¡la historia del enfrentamiento que estabas esperando!, es Loki contra Loki al final de todo lo que es, ¡y solo uno hará una reverencia cuando caiga el telón!",
    "category": "Marvel",
    "price": 1100
    },
    {
    "id": 12,
    "title": "Spider-Man Noir #1",
    "img": "https://i.postimg.cc/WzPQXZ8V/Spider-man-Noir-n1.jpg",
    "description": "¡ASESINATO Y MISTERIO A LA MANERA MIGHTY MARVEL! ¡FECHA, 1939! A medida que el espectro de la guerra se cierne en el horizonte, SPIDER-MAN: NOIR pelea la buena batalla en casa, deteniendo las injusticias de una variedad de vecindario más amigable. Pero después de que una dama es asesinada en el club nocturno The Black Cat y todas las pistas apuntan al extranjero, Spidey no tendrá más remedio que abordar el próximo vuelo a Europa y comenzar una aventura trotamundos a través del pasado del Universo Marvel.",
    "category": "Marvel",
    "price": 1000
    },
    {
    "id": 13,
    "title": "Spider-Man Noir #2",
    "img": "https://i.postimg.cc/ydRMmjFn/Spider-man-Noir-n2.jpg",
    "description": "¡FECHA 1933! Después de meses de esfuerzos infructuosos, los nazis han descubierto un antiguo mal en uno de sus sitios de excavación en el otro lado del mundo. Después de que un amigo de un amigo es asesinado, SCRAPPY YOUNG REPORTER y novato PETER PARKER se encuentra arrancado de su distrito y empujado a la acción! Inseguro de en quién puede confiar, nuestro héroe se encuentra rápidamente en UNA AVENTURA TROTAMUNDOS, encontrándose con amigos y enemigos por igual, ¡algunos de los cuales incluso pueden tener un parecido pasajero con caras familiares del Universo Marvel!",
    "category": "Marvel",
    "price": 1000
    },
    {
    "id": 14,
    "title": "SUPERIOR Iron Man #1",
    "img": "https://i.postimg.cc/0NhgKFJb/Superior-Iron-man-n1.jpg",
    "description": "¡Se Superior! ¿Cuánto pagarías por la perfección? ¿Belleza? ¿Inmortalidad? Tony Stark lo sabe, ¡y está listo para dártelo en SUPERIOR IRON MAN #1! Pero a un precio terrible. Saliendo de Avengers & X-Men: AXIS, el viejo Tony Stark está de regreso, ¡solo que esta vez es SUPERIOR! Más elegante, más seguro y más astuto que nunca. ¡Y está listo para guiarte hacia el futuro! San Francisco está a punto de convertirse en el prototipo de su nuevo concepto mundial. ¿El primer paso? ¡Libera a Extremis sobre toda la ciudad! Solo Daredevil no está de acuerdo con la nueva visión del futuro de Stark. ¿Tiene el Hombre sin miedo un lugar en la ciudad del mañana?",
    "category": "Marvel",
    "price": 1200
    },
    {
    "id": 15,
    "title": "STRANGER THINGS: Seis #2",
    "img": "https://i.postimg.cc/qRGhQPHv/Stranger-Things-Seis-n2.jpg",
    "description": "La talentosa adolescente Francine lucha con pesadillas y flashbacks oscuros mientras el Dr. Brenner intenta desbloquear sus poderes precognitivos, pero cuando un viejo amigo intenta hacer las paces, se pregunta si realmente puede confiar en él.",
    "category": "Stranger_Things",
    "price": 900
    },
    {
    "id": 16,
    "title": "STRANGER THINGS: El otro lado #1",
    "img": "https://i.postimg.cc/vTH1K0GL/Stranger-Things-n1.jpg",
    "description": "El pequeño pueblo de Hawkins se estremece tras una trágica noticia: la desaparición del pequeño Will Byers. Tras una desesperada búsqueda, algunos lo dan por muerto, pero la intuición amorosa de su madre lo encuentra no muy lejos de su hogar, donde Will le hace saber que está vivo y donde conviven diariamente, pero en otra dimensión. La serie original de Netflix nos mostró los sucesos que vivieron sus familiares y amigos, pero, a través de este cómic, ahora tú puedes saber lo que vivió Will antes de volver a casa y las angustiantes horas transcurridas en lo que por ahora solo podemos llamar como el otro lado.",
    "category": "Stranger_Things",
    "price": 900
    },
    {
    "id": 17,
    "title": "STRANGER THINGS: El otro lado #2",
    "img": "https://i.postimg.cc/02jMdXW9/Stranger-Things-n2.jpg",
    "description": "Atrapado en el misterioso Mundo del Revés, Will Byers tiene frío, miedo y hambre. Utiliza su última bala para alejarse temporalmente del Demogorgon.",
    "category": "Stranger_Things",
    "price": 900
    },
    {
    "id": 18,
    "title": "STRANGER THINGS: El otro lado #3",
    "img": "https://i.postimg.cc/C5PZpb1y/Stranger-Things-n3.jpg",
    "description": "Huyendo del Demogorgon en un reflejo retorcido de su propio mundo, Will Byers todavía lucha por comunicarse con el otro lado. En una carrera desesperada por mantenerse un paso por delante de la peligrosa criatura, Will debe usar todo su ingenio para mantenerse a salvo. Pero, ¿podrá mantener a salvo a sus amigos y familiares cuando está atrapado en el Mundo del Revés sin salida?",
    "category": "Stranger_Things",
    "price": 900
    },
    {
    "id": 19,
    "title": "STRANGER THINGS: El otro lado #4",
    "img": "https://i.postimg.cc/59nQzWmP/Stranger-Things-n4.jpg",
    "description": "Agotado y sin fuerzas, Will Byers busca refugio en un reflejo oscuro del fuerte que creó en tiempos más felices, el Castillo Byers. Will debe luchar para mantener la cordura con tanta seguridad como debe luchar para mantenerse fuera de las garras del Demogorgon en esta conclusión llena de suspenso.",
    "category": "Stranger_Things",
    "price": 900
    },
    {
    "id": 20,
    "title": "The Walking Dead #1",
    "img": "https://i.postimg.cc/SxssCgrc/The-walking-dead-n1.jpg",
    "description": "Tras ser herido en el cumplimiento del deber, el oficial de pueblo Rick Grimes despierta en un mundo infestado por muertos vivientes y se ve obligado a decirle adiós a los días pasados.",
    "category": "The_Walking_Dead",
    "price": 800
    },
    {
    "id": 21,
    "title": "The Walking Dead #3",
    "img": "https://i.postimg.cc/rm6w6ML9/The-walking-dead-n3.jpg",
    "description": "Rick logra reunirse con su familia y se une además a un grupo de sobrevivientes en las afueras de Atlanta. Los campistas hacen un sorprendente descubrimiento respecto a los caminantes.",
    "category": "The_Walking_Dead",
    "price": 800
    },
    {
    "id": 22,
    "title": "The Walking Dead #6",
    "img": "https://i.postimg.cc/2648rMkN/The-walking-dead-n6.jpg",
    "description": "Los roces entre los miembros del grupo comienzan a explotar y pronto uno de ellos es incapaz de contener al monstruo que lleva adentro. La obsesión engendra ira y la inocencia se esfuma en un disparo.",
    "category": "The_Walking_Dead",
    "price": 800
    },
    {
    "id": 23,
    "title": "The Walking Dead #103",
    "img": "https://i.postimg.cc/nhPLkqRg/The-walking-dead-n103.jpg",
    "description": "Negan ha impuesto un nuevo orden y la gente de Alexandría tiene un duro momento tratando de adaptarse a lo que viene después.",
    "category": "The_Walking_Dead",
    "price": 800
    },
    {
    "id": 24,
    "title": "The Walking Dead #145",
    "img": "https://i.postimg.cc/nL9hwMNz/The-walking-dead-n145.jpg",
    "description": "Llenos de tristeza y odio, los supervivientes procesan lo ocurrido antes de tomar una decisión sobre el rumbo de acción a seguir. Rick organiza una reunión para dar a conocer una realidad sin vuelta atrás.",
    "category": "The_Walking_Dead",
    "price": 800
    }
]

export default productos;