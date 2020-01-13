import MockChatFlow from '../data/sample_chat_flow'

let questionIndex = 0;

function getNewQuestion(){
    console.log("Current Index:" + questionIndex)
    const newQ = MockChatFlow.questions[questionIndex];
    questionIndex = questionIndex + 1;
}


export default {
    getNewQuestion
}