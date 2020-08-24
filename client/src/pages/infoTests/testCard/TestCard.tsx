import React from "react";
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Paper, Typography} from "@material-ui/core";
import {styleTestCard} from "./styleTestCard";

export const TestCard = (props: any) => {
    const classes = styleTestCard();
    const {test} = props
    return (
        <>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={test.imageSrc}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                            {test.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Открыть
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}
