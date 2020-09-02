import React, {useState} from "react";
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
    const [selected, setSelected] = useState<string | null>(null)
    const classes = useQuestion()
    const { question, selectedAnswer } = props

    const selectedAnswerHandle = (uuid: string) => {
        console.log(uuid)
        setSelected(uuid)
    }

    return (
        <div>
            <div className={classes.questionBody}>
                <div className={classes.questionTitle}>
                    {question && question.name}
                    {/*{question.name}*/}
                </div>
                <div>

                </div>
                <div className={classes.questionAnswerList} >
                    {question && question.answers.map((item: any, index: number) => (
                            <Paper
                                key={item._id}
                                className={(selected === item._id) ? classes.questionAnswerItemSelected : classes.questionAnswerItem}
                                square
                                onClick={() => selectedAnswerHandle(item._id)}
                            >
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
