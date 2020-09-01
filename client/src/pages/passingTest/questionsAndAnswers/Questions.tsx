import React from "react";
import Grid from "@material-ui/core/Grid";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import {green} from "@material-ui/core/colors";
import {Button, CardActions, Paper, Typography} from "@material-ui/core";

interface IAnswers {
    name: string,
    current: boolean
}

export interface IQuestion {
    name: string,
    order: number,
    nextQuestion: string,
    image: string,
    answers: IAnswers[],
}
export const Questions = (props: { question: IQuestion, selectedAnswer: (nextQuestions: string) => void }) => {
    const { question, selectedAnswer } = props
    return (
        <div>
            <div >
                {question && question.name}
                {/*{question.name}*/}
            </div>
            <div>

            </div>
            <div >
                {question && question.answers.map((item: any, index: number) => (
                    <Paper elevation={3} key={index}>
                        {item.name}
                    </Paper>
                ))}

            </div>
            <Button
                variant="contained"
                color="primary"
                fullWidth={true}
                onClick={() => selectedAnswer(question.nextQuestion)}
            >
                Пройти
            </Button>

        </div>
    )
}
