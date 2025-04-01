export const quizQuestions = {
  English: {
    mcq: [
      {
        question: "Which phrase would you use to order coffee?",
        options: [
          "I am coffee", 
          "Can I have a coffee?", 
          "Coffee me", 
          "You give coffee"
        ],
        correctAnswer: 1
      },
      {
        question: "What's the missing word? 'She ___ a doctor.'",
        options: ["am", "is", "are", "be"],
        correctAnswer: 1
      },
      {
        question: "Which sentence is correct?",
        options: [
          "He go to school", 
          "He goes to school", 
          "He going to school", 
          "He to go school"
        ],
        correctAnswer: 1
      },
      {
        question: "What's the opposite of 'cheap'?",
        options: ["Small", "Expensive", "Heavy", "Soft"],
        correctAnswer: 1
      },
      {
        question: "Which word doesn't fit? 'Cat, dog, ___, car'",
        options: ["Bird", "Fish", "Tree", "Cow"],
        correctAnswer: 2
      },
      {
        question: "How would you ask for the time?",
        options: [
          "What time is?", 
          "Time now?", 
          "What's the time?", 
          "Tell me time"
        ],
        correctAnswer: 2
      },
      {
        question: "Complete: 'There are ___ apples in the fridge.'",
        options: ["much", "many", "a few", "any"],
        correctAnswer: 1
      },
      {
        question: "Which is a greeting?",
        options: ["Goodbye", "Thank you", "Hello", "Sorry"],
        correctAnswer: 2
      }
    ],
    fillBlank: [
      {
        question: "The plural of 'child' is ____.",
        answer: "children"
      },
      {
        question: "I ____ to the store yesterday. (go)",
        answer: "went"
      },
      {
        question: "The opposite of 'hot' is ____.",
        answer: "cold"
      },
      {
        question: "She ____ reading a book right now. (be)",
        answer: "is"
      },
      {
        question: "We need milk, eggs, ____ bread.",
        answer: "and"
      },
      {
        question: "How ____ apples are in the basket?",
        answer: "many"
      },
      {
        question: "The past tense of 'eat' is ____.",
        answer: "ate"
      },
      {
        question: "You ____ wash your hands before eating. (should/must)",
        answer: "should"
      }
    ],
    imageMatch: [
      {
        questionImage: require('../assets/Images/car.png'),
        options: ["Car", "Truck", "Bus", "Motorcycle"],
        correctAnswer: "Car"
      },
      {
        questionImage: require('../assets/Images/house.png'),
        options: ["House", "Apartment", "Office", "Barn"],
        correctAnswer: "House"
      },
      {
        questionImage: require('../assets/Images/butterfly.png'),
        options: ["Butterfly", "Moth", "Dragonfly", "Bee"],
        correctAnswer: "Butterfly"
      },
      {
        questionImage: require('../assets/Images/strawberry.png'),
        options: ["Strawberry", "Raspberry", "Blueberry", "Blackberry"],
        correctAnswer: "Strawberry"
      },
      {
        questionImage: require('../assets/Images/gloves.png'),
        options: ["Gloves", "Mittens", "Socks", "Scarf"],
        correctAnswer: "Gloves"
      }
    ]
  },
  Spanish: {
    mcq: [
      {
        question: "¿Cómo se pide agua en un restaurante?",
        options: [
          "Dame agua", 
          "Quiero agua", 
          "¿Me trae agua, por favor?", 
          "Agua ahora"
        ],
        correctAnswer: 2
      },
      {
        question: "¿Cuál es la forma correcta? 'Yo ___ estudiante.'",
        options: ["soy", "eres", "es", "somos"],
        correctAnswer: 0
      },
      {
        question: "¿Qué palabra no es un color?",
        options: ["Azul", "Gato", "Rojo", "Verde"],
        correctAnswer: 1
      },
      {
        question: "¿Cómo se dice 'I'm hungry'?",
        options: [
          "Tengo frío", 
          "Tengo hambre", 
          "Estoy hambre", 
          "Tengo sed"
        ],
        correctAnswer: 1
      },
      {
        question: "¿Cuál es la pregunta correcta para '¿Cuántos años tienes?'?",
        options: [
          "How old are you?", 
          "What’s your age?", 
          "How many years you have?", 
          "When is your birthday?"
        ],
        correctAnswer: 0
      },
      {
        question: "¿Qué significa '¡Cuidado!'?",
        options: ["Hello!", "Thank you!", "Careful!", "Goodbye!"],
        correctAnswer: 2
      },
      {
        question: "Complete: 'Necesito ___ libro.' (a/an)",
        options: ["un", "una", "el", "la"],
        correctAnswer: 0
      },
      {
        question: "¿Cuál es una despedida?",
        options: ["Hola", "Por favor", "Adiós", "Gracias"],
        correctAnswer: 2
      }
    ],
    fillBlank: [
      {
        question: "El plural de 'ciudad' es ____.",
        answer: "ciudades"
      },
      {
        question: "Yo ____ comer paella. (querer/presente)",
        answer: "quiero"
      },
      {
        question: "Lo opuesto de 'grande' es ____.",
        answer: "pequeño"
      },
      {
        question: "Nosotros ____ estudiantes. (ser)",
        answer: "somos"
      },
      {
        question: "Tengo un perro ____ dos gatos.",
        answer: "y"
      },
      {
        question: "¿____ años tienes?",
        answer: "Cuántos"
      },
      {
        question: "El femenino de 'niño' es ____.",
        answer: "niña"
      },
      {
        question: "____ favor, pásame el agua.",
        answer: "Por"
      }
    ],
    imageMatch: [
      {
        questionImage: require('../assets/Images/car.png'),
        options: ["Coche", "Camión", "Autobús", "Motocicleta"],
        correctAnswer: "Coche"
      },
      {
        questionImage: require('../assets/Images/house.png'),
        options: ["Casa", "Apartamento", "Oficina", "Granero"],
        correctAnswer: "Casa"
      },
      {
        questionImage: require('../assets/Images/butterfly.png'),
        options: ["Mariposa", "Polilla", "Libélula", "Abeja"],
        correctAnswer: "Mariposa"
      },
      {
        questionImage: require('../assets/Images/strawberry.png'),
        options: ["Fresa", "Frambuesa", "Arándano", "Mora"],
        correctAnswer: "Fresa"
      },
      {
        questionImage: require('../assets/Images/gloves.png'),
        options: ["Guantes", "Manoplas", "Calcetines", "Bufanda"],
        correctAnswer: "Guantes"
      }
    ]
  },
  French: {
    mcq: [
      {
        question: "Comment demande-t-on l'addition au restaurant?",
        options: [
          "Donne-moi l'addition", 
          "Je veux payer", 
          "L'addition, s'il vous plaît", 
          "Argent maintenant"
        ],
        correctAnswer: 2
      },
      {
        question: "Complete: 'Je ___ français.' (parler)",
        options: ["parles", "parle", "parlons", "parlez"],
        correctAnswer: 1
      },
      {
        question: "Quel mot est un animal?",
        options: ["Chaise", "Livre", "Chien", "Fenêtre"],
        correctAnswer: 2
      },
      {
        question: "Comment dit-on 'It's raining'?",
        options: [
          "Il fait soleil", 
          "Il pleut", 
          "Il neige", 
          "Il fait chaud"
        ],
        correctAnswer: 1
      },
      {
        question: "Quelle phrase est correcte?",
        options: [
          "Je vais au supermarché", 
          "Je va au supermarché", 
          "Je aller supermarché", 
          "Je vais à supermarché"
        ],
        correctAnswer: 0
      },
      {
        question: "Que signifie 'Dépêche-toi!'?",
        options: ["Stop!", "Hurry up!", "Quiet!", "Come here!"],
        correctAnswer: 1
      },
      {
        question: "Complete: 'J'ai ___ frère.' (a/an)",
        options: ["un", "une", "le", "la"],
        correctAnswer: 0
      },
      {
        question: "Quand dit-on 'Bonne nuit'?",
        options: [
          "Le matin", 
          "Quand on se couche", 
          "Quand on mange", 
          "À midi"
        ],
        correctAnswer: 1
      }
    ],
    fillBlank: [
      {
        question: "Le pluriel de 'journal' est ____.",
        answer: "journaux"
      },
      {
        question: "Je ____ français. (parler/present)",
        answer: "parle"
      },
      {
        question: "Le contraire de 'grand' est ____.",
        answer: "petit"
      },
      {
        question: "Nous ____ étudiants. (être)",
        answer: "sommes"
      },
      {
        question: "J'ai un chat ____ un chien.",
        answer: "et"
      },
      {
        question: "____ t'appelles-tu?",
        answer: "Comment"
      },
      {
        question: "La forme féminine de 'acteur' est ____.",
        answer: "actrice"
      },
      {
        question: "____ excusez-moi, où est la gare?",
        answer: "Pardon"
      }
    ],
    imageMatch: [
      {
        questionImage: require('../assets/Images/car.png'),
        options: ["Voiture", "Camion", "Bus", "Moto"],
        correctAnswer: "Voiture"
      },
      {
        questionImage: require('../assets/Images/house.png'),
        options: ["Maison", "Appartement", "Bureau", "Grange"],
        correctAnswer: "Maison"
      },
      {
        questionImage: require('../assets/Images/butterfly.png'),
        options: ["Papillon", "Phalène", "Libellule", "Abeille"],
        correctAnswer: "Papillon"
      },
      {
        questionImage: require('../assets/Images/strawberry.png'),
        options: ["Fraise", "Framboise", "Myrtille", "Mûre"],
        correctAnswer: "Fraise"
      },
      {
        questionImage: require('../assets/Images/gloves.png'),
        options: ["Gants", "Moufles", "Chaussettes", "Écharpe"],
        correctAnswer: "Gants"
      }
    ]
  }
  // TODO: more languages 
};

