import React, {useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import {green} from "@material-ui/core/colors";
import {Button, CardActions, Paper, Typography} from "@material-ui/core";
import {useQuestion} from "./styleQuestion";
import {on} from "cluster";

interface IAnswers {
    name: string,
    current: boolean
}

export interface IQuestion {
    _id?: string,
    name: string,
    order: number,
    nextQuestion: string,
    image: string,
    answers: IAnswers[],
}
//
export const Questions = (props: { question: IQuestion, onSaveAnswer: (nextQuestions: string, selected: []) => void }) => {
    const [selected, setSelected] = useState<any>([])
    // const [preSelected, setPreSelected] = useState<any>([])
    const classes = useQuestion()
    const { question, onSaveAnswer} = props

    const onSelectedAnswerHandle = (uuid: string) => {

        setSelected((prev: any) => (
            prev.includes(uuid)
                ? prev.filter((item: any) => item !== uuid)
                : [...prev, uuid]
        ))
    }

    // useEffect(() => {
    //     if (question) {
    //         const answersCurrentTest = JSON.parse(selectedAnswer)
    //         answersCurrentTest.questions.map((item: any) => {
    //             // console.log('question', question._id)
    //             if (question._id === item._id) {
    //                 item.answers.map((answer: any) => {
    //                     console.log('answer',answer)
    //                     onSelectedAnswerHandle(answer)
    //                 })
    //             }
    //         })
    //     }
    //
    // },[question])

    const onSaveAnswerHandle = (question: string, selected: []) => {
        onSaveAnswer(question, selected)
        setSelected([])
    }

    return (
        <div>
            <div className={classes.questionBody}>
                <div className={classes.questionTitle}>
                    {question && question.name}
                </div>
                <div>

                </div>
                <div className={classes.questionAnswerList} >
                    {question && Object.values(question.answers).map((item: any, index: number) => (
                        <Paper
                            key={item._id}
                            className={(selected.includes(item._id)) ? classes.questionAnswerItemSelected : classes.questionAnswerItem}
                            square
                            onClick={() => onSelectedAnswerHandle(item._id)}
                        >
                            {item.name}
                        </Paper>
                    ))}

                </div>
            </div>

            {selected.length > 0
                && <Button
                variant="contained"
                color="primary"
                size={"large"}
                fullWidth={true}
                onClick={() => onSaveAnswerHandle(question.nextQuestion, selected)}
                >
                    Ответить
                </Button>
            }

        </div>
    )
}
