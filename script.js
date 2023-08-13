//Question Part
const quizData = [
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
},
{
    question: "Which is used to display the greeting message to the user in a dialog box?",
    a: "prompt()",
    b: "confirm()",
    c: "alert()",
    d: "write()",
    correct: "c",
},
{
    question: "Radix Sort is best suited for sorting:",
    a: "String",
    b: "Floating-point number",
    c: "Intergers with a fixed number of digits",
    d: "Linked lists",
    correct: "c",
},
{
    question: "Which sorting algorithm is known for the its stability and adaptiveness?",
    a: "Quick Sort",
    b: "Merge Sort",
    c: "Tim Sort",
    d: "Bubble Sort",
    correct: "c",
},
{
    question: "What type of sorting algorithm is Heap Sort?",
    a: "Comparison Sort",
    b: "Linear Sort",
    c: "Radix Sort",
    d: "Insertion Sort",
    correct: "a",
},
{
    question: "Which of the following CSS framework is used to create a responsive design?",
    a: "django",
    b: "rails",
    c: "Iarawell",
    d: "bootstrap",
    correct: "d",
},
{
    question: "Which of the following operations are supported on Time Frames?",
    a: "idxmax",
    b: "ixmax",
    c: "ixmin",
    d: "none of the  mentioned",
    correct: "a",
},
{
    question: "Which of the following is  correct way to pass the value of int a as an argument to a c++ function?",
    a: "function_name(a)",
    b: "function_name(&a)",
    c: "function_name(*a)",
    d: "function_name(*&a)",
    correct: "a",
},
{
    question: "In java, Which keyword is used to create a new instance of a class?",
    a: "New",
    b: "instance",
    c: "Create",
    d: "Class",
    correct: "a",
},
{
    question:"What is the access level of a default constructor in java",
    a: "Private",
    b: "Protected",
    c: "Public",
    d: "Package-private(default)",
    correct: "d",
},
];

let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100">  Score ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);