import React from 'react';

import Button, { ButtonProps } from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Input, { InputProps } from '@material-ui/core/Input';
import InputLabel, { InputLabelProps } from '@material-ui/core/InputLabel';
import { withStyles, Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/core/styles/withStyles';
import { InputAdornment } from '@material-ui/core';


type ClassNames = 'root';

type FormData = {
    label: string;
    type: string;
    toggleType?: string;
    endAdornmentIcon?: string;
    endAdornmentToggleIcon?: string;
    endAdornmentAriaLabel?: string;
    endAdornmentFunction?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    autoComplete?: string;
    required?: boolean;
    InputProps?: InputProps;
    InputLabelProps?: InputLabelProps;
    field: string;
};

type Props = {
    values?: Record<string, string>;
    handleInputChange?: (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (values: Record<string, string>) => (e: React.MouseEvent<HTMLButtonElement> | null) => void;
    submitLabel: string;
    submitAriaLabel?: string;
    SubmitButtonProps?: ButtonProps;
    enterSubmit?: boolean;
    formData: FormData[];
    classes?: Record<ClassNames, string>
};

type State = {
    values: Record<string, string>;
    toggleTypes: Record<string, boolean>
    errors: Record<string, string>;
}

const styles: Styles<Theme, Props, ClassNames> = (theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
            margin: theme.spacing(),
            width: '25ch'
        }
    }
});

export class Form extends React.Component<Props, State> {
    state: State = {
        values: {},
        toggleTypes: {},
        errors: {},
    }

    handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            this.verifySubmit(null);
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

    handleToggleType = (field: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
        const { toggleTypes } = this.state;

        this.setState({
            toggleTypes: {
                ...toggleTypes,
                [field]: !toggleTypes[field],
            },
        });
    }

    handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    }

    verifySubmit = (e: React.MouseEvent<HTMLButtonElement> | null) => {
        const { formData } = this.props;
        const values = (typeof this.props.handleInputChange === 'function' && this.props.values)
            ? this.props.values
            : this.state.values;
        
        const errors: Record<string, string> = {};

        let isError: boolean = false;

        formData.forEach(f => {
            if (f.required && (!values[f.field] || values[f.field].length === 0)) {
                errors[f.field] = 'Required';
                isError = true;
            }
        });

        if (isError) {
            this.setState({ errors });
            return;
        }

        this.setState({ errors: {} });
        this.props.handleSubmit(values)(e);
    }

    render = () => {
        const {
            handleInputChange: propHandleInputChange,
            values: propValues,
            classes,
            formData,
            submitLabel,
            submitAriaLabel,
            SubmitButtonProps,
            enterSubmit,
        } = this.props;
        const { values: stateValues, toggleTypes, errors } = this.state;

        const values = (typeof propHandleInputChange === 'function' && propValues) ? propValues : stateValues;
        const handleInputChange = typeof propHandleInputChange === 'function' ? propHandleInputChange : this.handleInputChange;

        return (
            <form className={classes?.root}>
                {formData.map(f => {
                    const fHasEndAdornment = !!f.endAdornmentIcon;
                    const fHasStateToggle = !!f.toggleType && fHasEndAdornment;
                    const fUseEndAdornmentFunction = !fHasStateToggle && !!f.endAdornmentFunction;
                    const fType = (fHasStateToggle && toggleTypes[f.field]) ? f.toggleType : f.type;

                    return (
                        <FormControl key={f.field} error={!!errors[f.field]}>
                            <InputLabel htmlFor={`${classes?.root}-${f.field}`} {...f.InputLabelProps} >
                                {f.label}
                            </InputLabel>
                            <Input
                                required={f.required}
                                onKeyDown={enterSubmit ? this.handleKeyPress : undefined}
                                id={`${classes?.root}-${f.field}`}
                                value={values[f.field]}
                                type={fType}
                                onChange={handleInputChange(f.field)}
                                autoComplete={f.autoComplete}
                                endAdornment={fHasEndAdornment ? (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    tabIndex={-1}
                                                    aria-label={f.endAdornmentAriaLabel}
                                                    onClick={fUseEndAdornmentFunction ? f.endAdornmentFunction : this.handleToggleType(f.field)}
                                                    onMouseDown={this.handleMouseDown}
                                                >
                                                    <Icon>{(fHasStateToggle && toggleTypes[f.field]) ? f.endAdornmentToggleIcon : f.endAdornmentIcon}</Icon>
                                                </IconButton>
                                            </InputAdornment>) : null}
                                aria-describedby={`${classes?.root}-${f.field}-error`}
                                {...f.InputProps}
                            />
                            <FormHelperText id={`${classes?.root}-${f.field}-error`}>{errors[f.field]}</FormHelperText>
                        </FormControl>
                    )
                })}
                <Button
                    onClick={this.verifySubmit}
                    // color="primary"
                    variant="contained"
                    aria-label={submitAriaLabel}
                    {...SubmitButtonProps}
                >
                    {submitLabel}
                </Button>
            </form>
        )
    }
};

export default withStyles(styles)(Form);
