import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Divider from '@material-ui/core/Divider';
import { InputProps } from '@material-ui/core/Input';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles, Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/core/styles/withStyles';

import Form from 'common/Form';

import UNRLogo from 'icons/UNRLogo';

type ClassNames = 'root' | 'paper' | 'heading' | 'divider' | 'additionalActions';

type Props = {
    classes?: Record<ClassNames, string>;
    authenticateUser: (username: string, password: string) => void;
};

type State = {
    values: {
        username: string;
        password: string;
    };
    dialogOpen: boolean;
};

const styles: Styles<Theme, Props, ClassNames> = (theme) => ({
    root: {
        position: 'fixed',
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    heading: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    divider: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    additionalActions: {
        display: 'flex',
        flexDirection: 'column',
    }
});

export class LoginPage extends React.Component<Props, State> {
    state: State = {
        values: {
            username: '',
            password: ''
        },
        dialogOpen: false,
    }

    componentDidMount = () => {
        console.log(window.location.href.split('/')[1]);
        if (window.location.href.split('/')[1] !== '') {
            window.location.href = '/login';
        }
    }

    handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const { values } = this.state;
        
        this.setState({
            values: {
                ...values,
                [field]: e.target.value,
            },
        });
    }

    handleSubmit = (values: Record<string, string>) => (e: React.MouseEvent<HTMLButtonElement> | null) => {
        const { authenticateUser } = this.props;

        authenticateUser(values.username, values.password);
    }

    handleNetIDHelp = (e: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({ dialogOpen: true });
    }

    handleDialogClose = (e: {}, reason: 'backdropClick' | 'escapeKeyDown') => {
        this.setState({ dialogOpen: false });
    }

    render = () => {
        const { values, dialogOpen } = this.state;
        const { classes } = this.props;

        return (
            <div className={classes?.root} >
                <Paper className={classes?.paper}>
                    <div className={classes?.heading}>
                        <UNRLogo />
                        <Typography variant="overline">University of Nevada, Reno</Typography>
                    </div>
                    <Divider className={classes?.divider} />
                    <Form
                        enterSubmit
                        values={values}
                        handleInputChange={this.handleInputChange}
                        handleSubmit={this.handleSubmit}
                        submitLabel="Sign In"
                        submitAriaLabel="sign in"
                        SubmitButtonProps={{
                            color: 'primary',
                        }}
                        formData={[
                            {
                                label: 'NSHE ID or NetID',
                                type: 'text',
                                field: 'username',
                                autoComplete: 'username',
                                endAdornmentIcon: 'help_outline',
                                endAdornmentFunction: this.handleNetIDHelp,
                                required: true,
                            },
                            {
                                label: 'Password',
                                type: 'password',
                                toggleType: 'text',
                                endAdornmentIcon: 'visibility',
                                endAdornmentToggleIcon: 'visibility_off',
                                endAdornmentAriaLabel: 'toggle password visibility',
                                autoComplete: 'current-password',
                                field: 'password',
                                required: true,
                            }
                        ]}
                    />
                    <Divider className={classes?.divider} />
                    <div className={classes?.additionalActions}>
                        <Link
                            component="button"
                            variant="caption"
                            onClick={() => {}}
                        >
                            Activate User Account
                        </Link>
                        <Link
                            component="button"
                            variant="caption"
                            onClick={() => {}}
                        >
                            Forgot NSHE ID
                        </Link>
                        <Link
                            component="button"
                            variant="caption"
                            onClick={() => {}}
                        >
                            Forgot Password
                        </Link>
                    </div>
                </Paper>
                <Dialog onClose={this.handleDialogClose} aria-labelledby="help-dialog" open={dialogOpen}>
                    <DialogTitle id="help-dialog">NSHE ID and NetID Help</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            If you have not yet activated your MyNEVADA User Account you will need to do that before you have access to MyNEVADA
                        </DialogContentText>
                        <Divider className={classes?.divider} />
                        <DialogContentText>
                            Students please login with your <Link target="_blank" href="https://oit.unr.edu/services-and-support/login-ids-and-passwords/nshe-id/">NSHE ID</Link> <br />
                            Faculty and Staff please login with your <Link target="_blank" href="https://oit.unr.edu/services-and-support/login-ids-and-passwords/netid/">NetID</Link>
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(LoginPage);