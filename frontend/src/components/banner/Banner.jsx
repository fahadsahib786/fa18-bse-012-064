
import { makeStyles, Box, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    image: {
        width: '100%',
        background: `url(${'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJhbm5lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}) center/55% repeat-x #000`,
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& :first-child': {
            fontSize: 70,
            color: '#000',
            lineHeight: 1
        },
        '& :last-child': {
            fontSize: 20,
            // background: '#FFFFFF',
        }
    }
})

const Banner = () => {
    const classes = useStyle();
    const url = 'https://cdn.pixabay.com/photo/2017/10/10/21/47/laptop-2838921_960_720.jpg';
    return (
        <>
            <Box className={classes.image}>
                <Typography>BLOG</Typography>
                <Typography>WELCOME TO MY BLOG</Typography>
            </Box>
        </>
    )
}

export default Banner;