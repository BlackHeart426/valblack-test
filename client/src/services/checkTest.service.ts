
interface IQuestion {
    _id: string,
    answers: []
}

interface IAnswersUser {
    questions: IQuestion[],
    testID: string,
    userTestID: string
}

export async function checkTestService(templateTest: any , answersUser: IAnswersUser) {
    console.log('templateTest', templateTest)
    console.log('answersUser', answersUser)

    console.log('templateTest', templateTest)
    answersUser.questions.map((item: any) => {
        item.answers.map((answer: any) => {
            // console.log('answer', answer)
        })

    })
}
