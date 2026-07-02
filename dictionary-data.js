const dictionaryData = [
// Episodio 1
	{
		concept: "Train & Validation",
		definition: `Es una buena pratica dividir el dataset en dos partes: Train Dataset y Validation Dataset. 
		Train se usa para entrenar los modelos, mientras que validation se usa para evaluarlos.
		Proporciones comunes son train:80% y validation:20%`,
		videoTitle: "Episodio 1",
		videoUrl: "https://youtu.be/IVkVVSHNs18?t=509", 
		comment: `Tambien se puede dividir en tres: +Test. En estos casos Train & Val se usan para hallar hyper parametros(ejemplo: parametros del modelo). 
		Y luego se usa el Test dataset para confirmar los resulados y prevenir overfitting`
	},
	{
	  concept: "Dataset de validación",
	  definition: "Una porción de los datos usada para evaluar el rendimiento del modelo durante el desarrollo, antes de tocar el dataset final de test.",
	  videoTitle: "Episodio 1",
	  videoUrl: "https://youtu.be/IVkVVSHNs18?t=509", 
	  comment: "Ayuda a comparar modelos y thresholds sin contaminar los resultados finales del test."
	},
	{
	  concept: "Threshold",
	  definition: "La probabilidad mínima predicha que se requiere antes de aceptar una señal del modelo como posible trade.",
	  videoTitle: "Episodio 1",
	  videoUrl: "https://youtu.be/IVkVVSHNs18?t=588", 
	  comment: "Thresholds más altos suelen reducir la cantidad de trades, pero pueden mejorar la precisión."
	},
	{
	  concept: "Variable Binaria",
	  definition: "Una variable binaria es una variable que solo puede tomar dos valores posibles, generalmente 0 y 1. En este proyecto, la utilizamos para representar si una condición específica se cumple o no se cumple. Por ejemplo, si el precio alcanza el Take Profit dentro del período analizado, la variable toma el valor 1; si no lo alcanza, toma el valor 0. Esto permite convertir un evento del mercado en una salida clara y estructurada para entrenar y evaluar un modelo de machine learning.",
	  videoTitle: "Episodio 1",
	  videoUrl: "https://youtu.be/IVkVVSHNs18?t=413",
	  comment: "En este contexto, la variable binaria transforma una pregunta de mercado en una respuesta medible: ocurrió o no ocurrió."
	}
	
// Episodio 2 
	{
		concept: "Vela faltante",
		definition: "Una vela que debería existir en una serie temporal, pero está ausente, incompleta o llena de valores nulos.",
		videoTitle: "Episodio 2",
		videoUrl: "https://youtu.be/IVkVVSHNs18?t=150", 
		comment: "Es importante porque las velas faltantes pueden crear sesgo si se manejan incorrectamente."
	},
	{
	  concept: "Interpolación",
	  definition: "Un método usado para estimar valores faltantes entre puntos de datos conocidos.",
	  videoTitle: "Episodio 2",
	  videoUrl: "https://youtu.be/IVkVVSHNs18?t=222", 
	  comment: "Puede ser útil para gaps pequeños, pero peligrosa si se aplica ciegamente a períodos largos sin datos."
	},
	{
	  concept: "Reconciliacion",
	  definition: "El objetivo es asegurarme de que el dataset de 5 minutos sea consistente con el dataset de 1 hora",
	  videoTitle: "Episodio 2",
	  videoUrl: "https://youtu.be/IVkVVSHNs18?t=711", 
	  comment: `Para cada vela de 1 hora, las velas de 5 minutos dentro de esa hora deberían reconstruir los mismos valores principales:
				Open = apertura de la primera vela de 5 minutos.
				High = máximo entre todas las velas de 5 minutos.
				Low = mínimo entre todas las velas de 5 minutos.
				Close = cierre de la última vela de 5 minutos.
				Esto es importante porque uso los datos de 5 minutos para evaluar qué pasó después de una señal: si ambos datasets no están alineados, la evaluación de performance puede quedar inconsistente.
				En simple: antes de confiar en los resultados, necesito confirmar que el timeframe menor reconstruye correctamente el timeframe mayor.`
	}
// Episodio 3
// Episodio 4
// Episodio 5
// Episodio 6
	
];