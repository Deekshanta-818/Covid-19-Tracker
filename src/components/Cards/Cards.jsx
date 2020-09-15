import React from 'react';
import {Grid,Typography,Card,CardContent} from '@material-ui/core'
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames'

const Cards = ({data:{confirmed,deaths,recovered,lastUpdate}}) => {
if(!confirmed) {
    return 'Loading.. Please Wait For a Moment'
}
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography gutterBottom style={{color:'blue',fontWeight:'bold'}}>Infected</Typography>
                        <Typography variant='h5'  gutterBottom> <CountUp  start={0} end={confirmed.value} duration={2.5} separator=','/></Typography>
                        <Typography style={{fontFamily:'Balsamiq Sans'}}> {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant='body2' style={{marginTop:'15px',fontFamily:'Acme',fontSize:'20px'}} > Number of Active Cases Of Covid-19 </Typography>
                    </CardContent>

                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography gutterBottom style={{color:'green',fontWeight:'bold'}}>Recovered</Typography>
                        <Typography variant='h5'  gutterBottom> <CountUp  start={0} end={recovered.value} duration={2.5} separator=','/> </Typography>
                        <Typography style={{fontFamily:'Balsamiq Sans'}}> {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant='body2' style={{marginTop:'15px',fontFamily:'Acme',fontSize:'20px'}}> Number of Recoveries Of Covid-19 </Typography>
                    </CardContent>

                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography gutterBottom style={{color:'red',fontWeight:'bold'}}>Deaths</Typography>
                        <Typography variant='h5'  gutterBottom> <CountUp  start={0} end={deaths.value} duration={2.5} separator=','/> </Typography>
                        <Typography style={{fontFamily:'Balsamiq Sans'}}> {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant='body2' style={{marginTop:'15px',fontFamily:'Acme',fontSize:'20px'}}> Number of Deaths Of Covid-19 </Typography>
                    </CardContent>

                </Grid>
            </Grid>
        </div>
    )

}
export default Cards