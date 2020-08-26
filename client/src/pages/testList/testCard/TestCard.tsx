import React from "react";
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Paper, Typography} from "@material-ui/core";
import {styleTestCard} from "./styleTestCard";
import {Skeleton} from "@material-ui/lab";
import {useHistory} from "react-router-dom";

export const TestCard = (props: any) => {
    const history = useHistory();
    const classes = styleTestCard();
    const {test, loading} = props

    const handleOpenTest = (idTest: string) => {
        history.push("/t/"+idTest)
    }

    return (
        <>
            <Card className={classes.root}>
                <CardActionArea
                    disabled={loading}
                    onClick={() => handleOpenTest(test._id)}
                >
                    {loading ? (
                        <Skeleton animation="wave" variant="rect" height='140px' />
                    ) : (
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={test.imageSrc}
                                title="Contemplative Reptile"
                            />
                    )}
                    <CardContent>
                        {loading ? (
                            <>
                                <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                                <Skeleton animation="wave" height={10} width="80%" />
                                <Skeleton animation="wave" height={10} width="80%" />
                                <Skeleton animation="wave" height={10} width="80%" />
                                <Skeleton animation="wave" height={10} width="80%" />
                            </>
                        ) : (
                            <>
                            <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                                {test && test.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                            </>
                        )}

                    </CardContent>
                </CardActionArea>
                {/*<CardActions>*/}
                {/*    <Button size="small" color="primary">*/}
                {/*        Открыть*/}
                {/*    </Button>*/}
                {/*</CardActions>*/}
            </Card>
        </>
    )
}
