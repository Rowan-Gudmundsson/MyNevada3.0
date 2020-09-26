import React from 'react';

import Container from '@material-ui/core/Container';
import MUITable from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow, { TableRowProps } from '@material-ui/core/TableRow';
import TableCell, { TableCellProps } from '@material-ui/core/TableCell';
import { withStyles, Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/core/styles/withStyles';
import { TableBody } from '@material-ui/core';

type ClassNames = 'root';

interface Props {
    className?: string;
    classes?: Record<ClassNames, string>
    component?: React.ComponentType;
    rows: {
        name: string;
        props: TableRowProps;
        cols: {
            props: TableCellProps;
            text: string;
        }[]
    }[];
    head: {
        props: TableCellProps;
        text: string;
    }[];
    size?: 'small' | 'medium';
}

interface State {

}

const styles: Styles<Theme, Props, ClassNames> = (theme) => ({
    root: {},
});

export class Table extends React.Component<Props, State> {
    state: State = {}

    render = () => {
        const {
            className,
            component,
            classes,
            rows,
            head,
            size = 'medium',
        } = this.props;

        return (
            <TableContainer component={component || Container} className={className}>
                <MUITable className={classes?.root} size={size}>
                    <TableHead>
                        <TableRow>
                            {head.map(({ props, text }) => (
                                <TableCell key={text} {...props}>{text}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(({ name, props: rowProps, cols }) => (
                            <TableRow key={name} {...rowProps}>
                                {cols.map(({ text, props: cellProps }) => (
                                    <TableCell key={`${name}-${text}`} {...cellProps}>
                                        {text}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </MUITable>
            </TableContainer>
        );
    }
}

export default withStyles(styles)(Table);