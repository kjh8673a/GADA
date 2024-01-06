import React from 'react';

interface Props {
    children: React.ReactNode;
}

const Header: React.FC<Props> = ({children}) => {

    const Click = () => {
        
    }
    return (
        <>
            {children}
        </>
    )
}

export default Header;