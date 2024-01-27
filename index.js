// Your array of problems
const problems = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "London", "Paris", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        answer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        answer: "Blue Whale"
    },
    {
        question: "In which year did Christopher Columbus reach the Americas?",
        options: ["1492", "1512", "1601", "1620"],
        answer: "1492"
    },
    {
        question: "What is the main component of the Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
        answer: "Nitrogen"
    }
];

// Index to keep track of the current question
let currentIndex = 0;

// Counter for correct answers
let correctAnswersCounter = 0;

// Function to update the question and options on the page
function updateQuestion() {
    // Find the question element and options labels
    let questionElement = document.querySelector(".qu");

    // Update the text content of the question element
    questionElement.innerText = problems[currentIndex].question;

    // Update each label individually by its ID
    document.getElementById("firstoptionlabel").innerText = problems[currentIndex].options[0];
    document.getElementById("secondoptionlabel").innerText = problems[currentIndex].options[1];
    document.getElementById("thirdoptionlabel").innerText = problems[currentIndex].options[2];
    document.getElementById("fourthoptionlabel").innerText = problems[currentIndex].options[3];

    // Reset selected input box
    const selectedInput = document.querySelector('input[name="options"]:checked');
    if (selectedInput) {
        selectedInput.checked = false;
    }
}

// Function to handle user submission
function submit() {
    // Check the selected option
    const selectedInput = document.querySelector('input[name="options"]:checked');

    if (selectedInput) {
        // Get the selected answer and correct answer
        const selectedAnswer = selectedInput.labels[0].innerText;
        const correctAnswer = problems[currentIndex].answer;

        // Check if the selected answer is correct
        if (selectedAnswer === correctAnswer) {
            correctAnswersCounter++;
        }

        // Move to the next question
        currentIndex++;

        // Check if there are more questions
        if (currentIndex < problems.length) {
            // Update the content for the next question
            updateQuestion();
        } else {
            // No more questions, display the score
            alert("End of the quiz! Your score: " + correctAnswersCounter + " out of " + problems.length);
        }
    } else {
        // No option selected, alert the user
        alert("Please select an option before submitting.");
    }
}

// Initial update with the first question
updateQuestion();
