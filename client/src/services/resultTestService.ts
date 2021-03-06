import {log} from "util";

interface IQuestion {
    _id: string,
    answers: []
}

interface IAnswersCurrentTest {
    questions: IQuestion[],
    testId: string,
    userTestID: string
}

interface IAnswer {
    name: string,
    _id: string,
    current: boolean,
    userAnswer: boolean
}
// additionAnswerAtTemplateTest

export function resultTestService(templateTest: any , answersCurrentTest: IAnswersCurrentTest, uuidUser: string) {
    const templateWithAnswer = additionAnswerAtTemplateTest(templateTest, answersCurrentTest)
    const count = countTheCorrectAnswersAtTemplate(templateWithAnswer)
    const testPassed = checkResultTest(count.correctQuestion, count.summaryAnswer)
    const resultTest = {
        _id: answersCurrentTest.userTestID,
        userId: uuidUser,
        rightAnswer: count.correctQuestion,
        summaryAnswer: count.summaryAnswer,
        testPassed: testPassed,
        testId: answersCurrentTest.testId,
        templateWithAnswer: JSON.stringify(templateWithAnswer)
    }
    return resultTest
}

function checkResultTest(correctQuestion: number, summaryAnswer: number) {
    const resultTestRate = (correctQuestion/summaryAnswer) * 100
    return resultTestRate > 75 ? true : false
}

function countTheCorrectAnswersAtTemplate(templateWithAnswer: any) {
    let correctQuestion = 0
    let summaryAnswer = 0
    Object.values(templateWithAnswer).forEach((question: any) => {
        summaryAnswer++
        let checkAnswers = false
        let throwFlag = false
        Object.values(question.answers).forEach((answer: any) => {
            if (answer.correct === true) {
                if (answer.userAnswer === true) {
                    checkAnswers = true
                } else {
                    checkAnswers = false
                    throwFlag = true
                }
            }
        } )
        !throwFlag && checkAnswers && ++correctQuestion
    })
    return {correctQuestion, summaryAnswer}
}

function additionAnswerAtTemplateTest(templateTest: any , answersCurrentTest: IAnswersCurrentTest) {



    answersCurrentTest.questions.map((item: any) => {
        item.answers.map((answer: any) => {
            templateTest[item._id].answers[answer].userAnswer = true
        })
    })

    const arr = Object.values(templateTest).map((question: any) => {
        let checkAnswers = false
        let throwFlag = false
        Object.values(question.answers).forEach((answer: any) => {
            if (answer.correct === true) {
                if (answer.userAnswer === true) {
                    checkAnswers = true
                } else {
                    checkAnswers = false
                    throwFlag = true
                }
            }
        } )
        if (!throwFlag && checkAnswers) {
            question.questionIsAccepted = true
        } else {
            question.questionIsAccepted = false
        }
        return  question
        //
    })
    return arr
}
