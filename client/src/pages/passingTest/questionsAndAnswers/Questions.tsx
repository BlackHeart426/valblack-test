import React from "react";
import Grid from "@material-ui/core/Grid";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import {green} from "@material-ui/core/colors";
import {Button, CardActions, Paper, Typography} from "@material-ui/core";
import {useQuestion} from "./styleQuestion";

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
    const classes = useQuestion()
    const { question, selectedAnswer } = props
    return (
        <div>
            <div className={classes.questionBody}>
                <div className={classes.questionTitle}>
                    {question && question.name}
                    {/*{question.name}*/}
                </div>
                <div>

                </div>
                <div className={classes.questionAnswerList}>
                    {question && question.answers.map((item: any, index: number) => (
                        <Paper key={index} className={classes.questionAnswerItem} square >
                            {item.name}
                        </Paper>
                    ))}

                </div>
            </div>

            <Button
                variant="contained"
                color="primary"
                size={"medium"}
                fullWidth={true}
                onClick={() => selectedAnswer(question.nextQuestion)}
            >
                Ответить
            </Button>

        </div>
    )
}
