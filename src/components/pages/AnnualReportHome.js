import React from 'react';
import '../../App.css'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
        margin: '5px'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'black',
        
    }
}));



export default function AnnualReportHome() {
    const classes = useStyles();
    return (
        <>
            <Paper className={classes.paper} style={{ fontWeight: "bolder" }, { color: "blue" }}>#Financialpost
                    </Paper>
            <Grid container maxWidth="sm" spacing={5} className={classes.grid} justify="center"
                alignItems="stretch" direction="row-reverse">
                
                <Grid item xs={12} md={6}>
                    <img src="https://images.unsplash.com/photo-1596313398625-2c16b75031b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" height="100%" width="100%"></img>
                </Grid>
         
                <Grid item xs={12} md={6}>
                    <p style={{ textAlign: "center" }}>The Financial Post was an English Canadian business newspaper, which published from 1907 to 1998. In 1998, the publication was folded into the new National Post, although the name Financial Post has been retained as the banner for that paper's business section and also lives on in the Post's monthly business magazine, Financial Post Business.

                    The Financial Post started publication in 1907 by John Bayne Maclean. It was a weekly publication, and one of the core assets of Maclean's media business, which eventually became Maclean-Hunter.

                    The paper was purchased by Sun Media in 1987, and expanded into a daily tabloid on February 1, 1988, and added home delivery newspaper in 1990, with a reformatted Financial Post Magazine following shortly after. In 1998, Sun Media sold the Financial Post to Hollinger, whose CEO Conrad Black had been seeking a way to establish a national newspaper. Sun Media acquired the Kitchener-Waterloo Record, the Guelph Mercury, the Hamilton Spectator and the Cambridge Reporter from Hollinger in exchange, but has since sold all four papers.

                    The Hollinger transaction was finalized in July 1998. Originally slated to launch on October 5, 1998, the National Post's launch was delayed until October 27 by the financial complications of the Financial Post purchase.

                    The Financial Post retains a loyal audience of English business readers in Canada, offering coverage similar to the Report on Business by The Globe and Mail. Though there has been frequent speculation that the Financial Post would be merged into the business sections of the regional newspapers owned by the National Post's parent, Postmedia News, much of the Post's editorial content is now syndicated to other Postmedia newspapers through the Postmedia News Service. The Financial Post publishes several popular editorial features throughout the year, including the annual competition Financial Post's Ten Best Companies to Work For.

Editors of the paper included Floyd Chalmers, John Godfrey and Diane Francis, who was the paper's last editor prior to the launch of the National Post.</p>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Fade bottom>
                        <img src="https://images.unsplash.com/photo-1550567208-7585c88862c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" height="100%" width="100%"></img>
                        <p>More mockup text</p>
                        </Fade>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Fade bottom>
                    <img src="https://images.unsplash.com/photo-1565372782014-07e01fcc877c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" height="100%" width="100%"></img>
                     <p>More mockup text</p>
                    </Fade>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Fade bottom>
                    <img src="https://images.unsplash.com/photo-1562946420-2dc49440b87c?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" height="80%" width="100%"></img>
                    <p>More mockup text</p>
                    </Fade>
                </Grid>
                
            </Grid>
            
        </>
    );
}