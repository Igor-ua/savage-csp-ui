export const useStyles = theme => ({
    online: {
        flexGrow: '1',
        maxWidth: '600px'
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap-reverse',
        maxWidth: '1700px',
        justifyContent: 'center',
    },
    innerGridContainer: {
        flexDirection: 'row',
        maxWidth: '1700px',
        justifyContent: 'center',
    },
    world: {
        display: 'block',
        width: '75%',
        height: '75%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '10px 10px 10px 10px',
    },
    gridWorld: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    imageWrapper: {
    },
    playersLeft: {
        textAlign: 'left'
    },
    clanIcon: {
        display: 'inline-block',
        verticalAlign: 'middle',
        width: theme.spacing(2),
        height: theme.spacing(2)
    },
    resultsContainer: {
        paddingTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
        backgroundColor: '#2b3542',
        borderRadius: '10px 10px 10px 10px'
    },
    table: {
        tableLayout: 'auto',
        width: '100%',
        border: 'none',
        borderRadius: '10px 10px 10px 10px',
        borderSpacing: '5px',
        "& tr": {
            background: "#144856",
            border: 'none'
        },
        "& td": {
            border: 'none',
            paddingBottom: '0'
        }
    },
    tableContainer: {
        margin: 'auto',
        width: '78%',
    },
    tablePlayers: {
        tableLayout: 'fixed',
        width: '100%',
        border: 'none',
        borderRadius: '10px 10px 10px 10px',
        borderSpacing: '3px',
        paddingLeft: '5px',
        paddingBottom: '2px',
        "& th": {
            background: '#2c6868',
            marginBottom: '5px',
            textAlign: 'left',
        },
        "& tr": {
            backgroundColor: '#144856',
            border: 'none',
        },
        "& td": {
            border: 'none',
        }
    },
    tdInnerDiv: {
        display: 'table',
        height: '20px',
        overflow: 'hidden',
        "& span": {
            display: 'table-cell',
            verticalAlign: 'middle'
        },
        wordBreak: 'break-all'
    },
    emptyTD: {
        backgroundColor: '#283544',
    },
    tableWrapper: {
        paddingRight: '4px',
        [theme.breakpoints.down('sm')]: {
            paddingRight: theme.spacing(0)
        },
    },
    gridWrapper: {
        display: 'flex',
        justifyContent: 'center'
    },
    extendedGridWrapper: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '5px',
        width: '100%',
        alignItems: 'stretch',
    },
    extendedTableWrapper: {
        [theme.breakpoints.down('sm')]: {
            paddingRight: theme.spacing(0)
        },
        width: '100%',
    },
    extendedTablePlayers: {
        tableLayout: 'auto',
        width: '100%',
        border: 'none',
        borderRadius: '10px 10px 10px 10px',
        borderSpacing: '1px',
        paddingBottom: '2px',
        "& th": {
            background: '#2c6868',
            marginBottom: '5px',
            textAlign: 'left',
        },
        "& tr": {
            backgroundColor: '#144856',
            border: 'none',
        },
        "& td": {
            border: 'none',
        }
    },
});