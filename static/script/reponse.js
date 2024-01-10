function getBotResponse(input) {
    // Rock, paper, scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "what is your name") {
        return "My name is Chatbot.";
    } else if (input == "how are you") {
        return "I'm just a program, but thanks for asking!";
    } else if (input == "what is full form of html") {
        return "Hyper Text Mrkup Language";
    } else if (input == "who created you") {
        return "I was created by OpenAI.";
    } else if (input == "where are you from") {
        return "I exist in the digital realm, created by OpenAI.";
    } else if (input == "tell me a joke") {
        return "Why did the computer go to therapy? It had too many bytes of emotional baggage!";
    } else if (input == "what's the meaning of life") {
        return "The meaning of life is a philosophical question that varies for each individual.";
    } else if (input == "bye") {
        return "Goodbye! If you have more questions, feel free to ask.";
    } else {
        return "I'm not sure how to respond to that. Try asking something else!";
    }
}
