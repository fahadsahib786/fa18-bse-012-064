
import { Box, makeStyles, Typography, Link } from '@material-ui/core';
import { GitHub, Instagram, Email } from '@material-ui/icons';

const useStyles = makeStyles({
    banner: {
        backgroundImage: `url(${'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'})`,
        width: '100%',
        height: '50vh',
        backgroundPosition: 'left 0px bottom 0px',
        backgroundSize: 'cover'
    },
    wrapper: {
        padding: 20,
        '& > *': {
            marginTop: 50
        }
    },
    text: {
        color: '#878787'
    }
})

const About = () => {
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.banner}></Box>
            <Box className={classes.wrapper}>
                <Typography variant="h3">About</Typography>
                <Typography variant="h5" className={classes.text}>I am developing eCommerce Websites for over 2 years now. I have many top clients all over the world including DIST, GYBLESS FARMS, and dozens more. I have developed over 500 websites ranging from ecommerce stores to company portfolio websites and many more. I put all of my effort in crafting websites perfectly. Lets get connected and get your ideas into reality.
<br></br>
                I am developing eCommerce Websites for over 2 years now. I have many top clients all over the world including DIST, GYBLESS FARMS, and dozens more. I have developed over 500 websites ranging from ecommerce stores to company portfolio websites and many more. I put all of my effort in crafting websites perfectly. Lets get connected and get your ideas into reality.
                <br></br>
                I am developing eCommerce Websites for over 2 years now. I have many top clients all over the world including DIST, GYBLESS FARMS, and dozens more. I have developed over 500 websites ranging from ecommerce stores to company portfolio websites and many more. I put all of my effort in crafting websites perfectly. Lets get connected and get your ideas into reality.
<br></br>
                I am developing eCommerce Websites for over 2 years now. I have many top clients all over the world including DIST, GYBLESS FARMS, and dozens more. I have developed over 500 websites ranging from ecommerce stores to company portfolio websites and many more. I put all of my effort in crafting websites perfectly. Lets get connected and get your ideas into reality.


                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/fahadsahib786" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Typography>
                <Typography variant="h5" className={classes.text}>
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/fahad_baloch_786/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="mailto:fahadsahib786@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Typography>
            </Box>
        </Box>
    )
}

export default About;