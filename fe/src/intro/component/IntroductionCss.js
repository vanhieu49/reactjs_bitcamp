import { createUseStyles } from 'react-jss'
let backgroundIntro = require('../../images/company1.jpg').default

var useStyles = createUseStyles({
    aaa: {
        fontSize: 50,
        '& .h1': {
            color: 'red'
        }
    },
    container: {
        maxWidth: 1200,
        margin: [[0, 'auto']],
        '@media only screen and (max-width: 1199px) and (min-width: 360px)': {
            maxWidth: '95%',
        }
    },
    purple: {
        color: '#7b49b9'
    },
    coral: {
        color: '#da5c5f'
    },
    title: {
        display: 'grid',
        alignItems: 'center',
        justifyItems: 'center',
        position: 'relative',
    },
    title_img: {
        width: '100%',
        '@media only screen and (max-width: 1199px) and (min-width: 360px)': {
            height: 200
        }
    },
    title_p: {
        position: 'absolute',
        top: '50%',
        textAlign: 'center',
        color: '#fff',
        fontSize: '35px',
        '@media only screen and (max-width: 1199px) and (min-width: 360px)': {
            fontSize: 25
        }
    },
    bold: {
        fontWeight: 700,
    },
    history: {
        paddingTop: 150,
        paddingBottom: 50,
        position: 'relative',
        '@media only screen and (max-width: 600px) and (min-width: 360px)': {
            maxWidth: '95%',
            margin: [[0, 'auto']],
            paddingTop: 60,
            textAlign: 'center',
        },
        '@media only screen and (max-width: 1199px) and (min-width: 601px)': {
            maxWidth: '95%',
            margin: [[0, 'auto']],
            textAlign: 'center',
        }
    },
    history_span: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        fontSize: 35,
        textAlign: 'center',
        '@media only screen and (max-width: 600px) and (min-width: 360px)': {
            fontSize: 25,
            display: 'inline'
        },
        '@media only screen and (max-width: 1199px) and (min-width: 601px)': {
            fontSize: 25
        }
    },
    intro: {
        background: 'url(' + backgroundIntro + ') no-repeat center center',
        position: 'relative',
        marginTop: 250,
        '@media only screen and (max-width: 600px) and (min-width: 360px)': {
            marginTop: 0,
            background: 'unset'
        }
    },
    img_robot: {
        position: 'absolute',
        top: -250,
        left: '33%',
        '& img': {
            '@media only screen and (max-width: 600px) and (min-width: 360px)': {
                width: '100%'
            }
        },
        '@media only screen and (max-width: 600px) and (min-width: 360px)': {
            position: 'unset',
            maxWidth: '95%',
            margin: [[0, 'auto']],
            marginBottom: 20
        },
        '@media only screen and (max-width: 768px) and (min-width: 601px)': {
            left: '10%'
        },
        '@media only screen and (max-width: 1024px) and (min-width: 769px)': {
            left: '22%'
        }
    },
    intro_text: {
        paddingBottom: 60,
        '@media only screen and (max-width: 600px) and (min-width: 360px)': {
            paddingBottom: 70,
            background: 'url(' + backgroundIntro + ') no-repeat center center',
        }
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 250,
        paddingBottom: 50,
        '& img': {
        },
        '& span': {
            color: 'white',
            fontWeight: 'bold',
            fontSize: '25px'
        },
        '@media only screen and (max-width: 599px) and (min-width: 360px)': {
            paddingTop: 70,
            fontSize: 20,
            paddingBottom: 5,
        }
    },
    intro_p: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        textAlign: 'center',
        '@media only screen and (max-width: 1199px) and (min-width: 360px)': {
            maxWidth: '95%',
            margin: [[0, 'auto']]
        }
    },
    line: {
        fontSize: 20,
        color: 'white',
        padding: [[5, 0]],
        '@media only screen and (max-width: 1199px) and (min-width: 360px)': {
            fontSize: 16,
        }
    },
    section: {
        paddingTop: 150,
        paddingBottom: 50,
        '@media only screen and (max-width: 768px) and (min-width: 360px)': {
            paddingTop: 70,
            paddingBottom: 25,
        },
        '@media only screen and (max-width: 1199px) and (min-width: 769px)': {
            paddingBottom: 25,
        }
    },
    business: {
        margin: 'auto',
        fontSize: 25,
        textAlign: 'center',
        padding: [[5, 0]],
        '@media only screen and (max-width: 1199px) and (min-width: 360px)': {
            fontSize: 20,
            textAlign: 'center',
        }
    },
    business_after: {
        fontSize: 25,
        fontWeight: 300,
        width: 200,
        border: [[1, 'solid', '#333']],
        margin: 'auto',
        borderRadius: 30,
        padding: [[10, 20]],
        lineHeight: '23px',
        '@media only screen and (max-width: 1199px) and (min-width: 360px)': {
            fontSize: 20,
            textAlign: 'center',
            lineHeight: '10px'
        }
    },
    section_title: {
        textAlign: 'center',
        color: '#252525',
        fontSize: 30,
        '@media only screen and (max-width: 1199px) and (min-width: 360px)': {
            fontSize: 20
        }
    },
    tradition: {
        display: 'grid',
        gridTemplateColumns: [['1fr', '1fr']],
        gridColumnGap: 50,
        '& img': {
            width: '100%'
        },
        '& li': {
            fontSize: '20px',
            margin: [['10px', '10px', '10px', '40px']],
            lineHeight: '1.6em',
            '@media only screen and (max-width: 1199px) and (min-width: 360px)': {
                fontSize: 16
            }
        },
        '@media only screen and (max-width: 768px) and (min-width: 360px)': {
            gridTemplateColumns: '1fr',
        },
        '@media only screen and (max-width: 1024px) and (min-width: 769px)': {
            gridTemplateColumns: [['1fr', '1fr']],
            gridColumnGap: 0
        }
    },
    train: {
        display: 'grid',
        gridTemplateColumns: [['1fr', '1fr', '1fr']],
        justifyItems: 'center',
        textAlign: 'center',
        '@media only screen and (max-width: 768px) and (min-width: 360px)': {
            gridTemplateColumns: '1fr',
        },
        '@media only screen and (max-width: 768px) and (min-width: 360px)': {
            justifyItems: 'initial',
        }
    },
    step_num: {
        fontSize: 30,
        '@media only screen and (max-width: 1199px) and (min-width: 360px)': {
            fontSize: 25
        }
    },
    step_title: {
        fontSize: 25,
        '@media only screen and (max-width: 1199px) and (min-width: 360px)': {
            fontSize: 20
        }
    },
    step_content: {
        fontSize: 20,
        marginTop: 20,
        '@media only screen and (max-width: 1199px) and (min-width: 360px)': {
            fontSize: 16
        },
        '@media only screen and (max-width: 768px) and (min-width: 360px)': {
            display: '-webkit-inline-box',
        }
    },
    slogan: {
        display: 'grid',
        gridTemplateColumns: [['1fr', '1fr']],
        '@media only screen and (max-width: 768px) and (min-width: 360px)': {
            gridTemplateColumns: '1fr'
        }
    },
    slogan_img_before: {
        width: '100%'
    },
    slogan_main: {
        marginTop: 10,
        fontSize: 29,
        '& span': {
            fontWeight: 'bold'
        },
        '@media only screen and (max-width: 1199px) and (min-width: 360px)': {
            fontSize: 20
        }
    },
    slogan_main_after: {
        fontSize: 29,
        '& span': {
            fontWeight: 'bold',
        },
        '@media only screen and (max-width: 1199px) and (min-width: 360px)': {
            fontSize: 20
        }
    },
    slogan_img: {

    },
    slogan_ex: {
        fontSize: 20,
        color: '#c1c1c1',
    },
    slogan_img_main: {
        '& img': {
            width: '100%'
        }
    }

})
export default useStyles