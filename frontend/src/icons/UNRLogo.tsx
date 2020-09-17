import React from 'react';

import asLogo from './aslogo';

export const UNRLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" {...props} viewBox="0 0 150 150">
        <rect fill="#003366" width="100%" height="100%"/>
        <rect fill="#003366" width="100%" height="99.9%"/>
        <path fill="#FFFFFF" d="M148.31,1.7V148.3H1.69V1.7H148.31M150,0H0V150H150V0Z"/>
        <path fill="#FFFFFF" d="M88.09,110.34,62.15,78.7V94.38h6v16h-38v-16h5.76V55.53H30.09V39.66H61.33L87.74,72V55.53H82V39.66h38V55.53h-5.78V94.38h5.78v16ZM93,87,57.53,43.49H35.39v8.14h5.77V98.3H35.39v8.13H62.83V98.3H57V63.85l34.83,42.58h22.83V98.3h-5.77V51.63h5.77V43.49H87.28v8.14H93Z"/>
    </svg>
);

export default asLogo(UNRLogo);
