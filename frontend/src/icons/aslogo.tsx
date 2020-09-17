import React from 'react';

type Size = 'small' | 'medium' | 'large';

type Props = {
    size?: Size;
};

type DivStyling = {
    width: number;
    height: number;
};

const sizeMap: Record<Size, DivStyling> = {
    small: {
        width: 50,
        height: 50,
    },
    medium: {
        width: 150,
        height: 150,
    },
    large: {
        width: 250,
        height: 250,
    },
};

export const asLogo = (Component: React.ComponentType<React.SVGProps<SVGSVGElement>>) => (
    class WrappedComponent extends React.Component<Props & React.SVGProps<SVGSVGElement>> {
        render = () => {
            const { size = 'medium', ...rest } = this.props;

            const style = sizeMap[size];

            return (
                <div style={style}>
                    <Component {...rest as React.SVGProps<SVGSVGElement>} />
                </div>
            )
        }
    }
);

export default asLogo;