
interface IQuestion {
    _id: string,
    answers: []
}

interface IAnswersCurrentTest {
    questions: IQuestion[],
    testId: string,
    userTestID: string
}

// additionAnswerAtTemplateTest

export function resultTestService(templateTest: any , answersCurrentTest: IAnswersCurrentTest, uuidUser: string) {
    const resultTest = {
        _id: answersCurrentTest.userTestID,
        userId: uuidUser,
        testId: answersCurrentTest.testId,
        templateWithAnswer: JSON.stringify(additionAnswerAtTemplateTest(templateTest, answersCurrentTest))
    }
    console.log(resultTest)
    return resultTest
}

function additionAnswerAtTemplateTest(templateTest: any , answersCurrentTest: IAnswersCurrentTest) {
    answersCurrentTest.questions.map((item: any) => {
        item.answers.map((answer: any) => {
            templateTest[item._id].answers[answer].userAnswer = true
        })
    })
    return templateTest
}
