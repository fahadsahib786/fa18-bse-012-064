
import { Box, makeStyles, Typography, Link } from '@material-ui/core';
import { GitHub, Instagram, Email } from '@material-ui/icons';

const useStyles = makeStyles({
    banner: {
        backgroundImage: `url(${'https://media.istockphoto.com/photos/contact-us-concept-icon-telephone-address-and-email-on-blue-3d-picture-id1312566254?b=1&k=20&m=1312566254&s=170667a&w=0&h=6a3bBX8L-53D30tKFVAQlA6_3lclcsWThP1ZVTDwcGE='})`,
        width: '100%',
        height: '50vh',
        backgroundPosition: 'left 0px top -100px',
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


const Contact = () => {
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.banner}></Box>
            <Box className={classes.wrapper}>
                <Typography variant="h3">Getting In Touch With Us</Typography>    
                <Typography variant="h5" className={classes.text}>
                    Reach out to me on Instagram
                    <br></br>
                    <Link href="https://www.instagram.com/fahad_baloch_786/" color="inherit" target="_blank">
                        <Instagram/>
                    </Link>
                    <br></br>
                    Send me an Email
                    <br></br> 
                    <Link href="mailto:fahadsahib786@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                    <br></br>
                    <br></br>
                </Typography>
            </Box>
        </Box>
    );
}

export default Contact;