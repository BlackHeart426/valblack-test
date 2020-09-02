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
export const Questions = (props: { question: IQuestion, onSelectedAnswer: (nextQuestions: string) => void }) => {
    const [selected, setSelected] = useState<any>([])
    const classes = useQuestion()
    const { question, onSelectedAnswer } = props

    const onSelectedAnswerHandle = (uuid: string) => {
        setSelected((prev: any) => (
            prev.includes(uuid)
                ? prev.filter((item: any) => item !== uuid)
                : [...prev, uuid]
        ))
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
                    {question && question.answers.map((item: any, index: number) => (
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

            {selected
                && <Button
                variant="contained"
                color="primary"
                size={"large"}
                fullWidth={true}
                onClick={() => onSelectedAnswer(question.nextQuestion)}
                >
                    Ответить
                </Button>
            }

        </div>
    )
}
