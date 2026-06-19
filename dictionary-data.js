const dictionaryData = [
	{
		concept: "Train & Validation",
		definition: `Es una buena pratica dividir el dataset en dos partes: Train Dataset y Validation Dataset. 
		Train se usa para entrenar los modelos, mientras que validation se usa para evaluarlos.
		Proporciones comunes son train:80% y validation:20%`,
		videoTitle: "Episodio 1 - Primer Modelo XGB vs. Modelo random",
		videoUrl: "https://youtu.be/IVkVVSHNs18?t=509", // Mantenido en 8m 29s
		comment: `Tambien se puede dividir en tres: +Test. En estos casos Train & Val se usan para hallar hyper parametros(ejemplo: parametros del modelo). 
		Y luego se usa el Test dataset para confirmar los resulados y prevenir overfitting`
	},
	{
		concept: "Vela faltante",
		definition: "Una vela que debería existir en una serie temporal, pero está ausente, incompleta o llena de valores nulos.",
		videoTitle: "Episodio 2 - Limpieza de datos Forex",
		videoUrl: "https://youtu.be/IVkVVSHNs18?t=150", // Apunta al minuto 2:30 donde empieza la explicación de "missing candles"
		comment: "Es importante porque las velas faltantes pueden crear sesgo si se manejan incorrectamente."
	},
	{
	  concept: "Interpolación",
	  definition: "Un método usado para estimar valores faltantes entre puntos de datos conocidos.",
	  videoTitle: "Episodio 2 - Limpieza de datos Forex",
	  videoUrl: "https://youtu.be/IVkVVSHNs18?t=222", // Apunta al minuto 3:42 cuando explicas cómo rellenar los gaps
	  comment: "Puede ser útil para gaps pequeños, pero peligrosa si se aplica ciegamente a períodos largos sin datos."
	},
	{
	  concept: "Dataset de validación",
	  definition: "Una porción de los datos usada para evaluar el rendimiento del modelo durante el desarrollo, antes de tocar el dataset final de test.",
	  videoTitle: "Episodio 3 - Entrenando el primer modelo",
	  videoUrl: "https://youtu.be/IVkVVSHNs18?t=509", // Mantenido en 8m 29s
	  comment: "Ayuda a comparar modelos y thresholds sin contaminar los resultados finales del test."
	},
	{
	  concept: "Threshold",
	  definition: "La probabilidad mínima predicha que se requiere antes de aceptar una señal del modelo como posible trade.",
	  videoTitle: "Episodio 3 - Entrenando el primer modelo",
	  videoUrl: "https://youtu.be/IVkVVSHNs18?t=654", // Apunta al minuto 10:54 cuando explicas la probabilidad de corte para tomar un trade
	  comment: "Thresholds más altos suelen reducir la cantidad de trades, pero pueden mejorar la precisión."
	},
	{
	  concept: "Precisión",
	  definition: "El porcentaje de señales seleccionadas que realmente fueron correctas.",
	  videoTitle: "Episodio 4 - Leyendo resultados del modelo",
	  videoUrl: "https://youtu.be/IVkVVSHNs18?t=711", // Apunta al minuto 11:51 donde analizas la métrica de aciertos (precision)
	  comment: "Muy importante cuando el objetivo es reducir malos trades en vez de predecir cada posible oportunidad."
	}
];