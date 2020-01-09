export default 
    { 
        questions: [
            { 
                id: 123,
                question: "We will now ask you some questions about how you are recovering following your hip surgery",
                type: "MSG",
                next: 124
            },
            { 
                id: 124,
                question: "Have you experienced any unconfortable bleeding from the wound site?",
                type: "CATEGORICAL_RANGE",
                values: ["No", "Some", "A lot"],
                next: 125
            },
            { 
                id: 125,
                question: "Have you changed your wound dressing because it was soaked?",
                type: "CATEGORICAL",
                answers: ["Yes", "No"],
                next: 126
            },
            { 
                id: 126,
                question: "How many times?",
                type: "VIDEO",
                next: 127
            },
            { 
                id: 127,
                question: "Can you check your tempreature?",
                type: "VIDEO",
                next: 128
            },
            { 
                id: 128,
                question: "What is your temperature?",
                type: "VIDEO",
                next: 129
            },
            { 
                id: 129,
                question: "How long have you been at that temperature for? An estimate is enough",
                type: "VIDEO",
                next: 130
            },
            { 
                id: 130,
                question: "Are you currently in pain?",
                type: "VIDEO",
                next: 131
            },
            { 
                id: 131,
                question: "Where?",
                type: "VIDEO",
                next: 132
            },
            { 
                id: 132,
                question: "How bad is your pain out of 10? where 1 being you can hardly feel it , and 10 being unbearable",
                type: "VIDEO",
                next: 133
            },
            { 
                id: 133,
                question: "Point the camera at the wound to take a picture. If there's a dressing on, just leave it on.",
                type: "VIDEO",
                next: "NONE"
            },
        ]
    }