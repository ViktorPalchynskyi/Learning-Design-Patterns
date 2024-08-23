import React, { createContext, useContext, useState } from 'react';
import { Icon } from '../components/Icon/Icon';

// const FlyOutContext = createContext();

// const FlyoutProvider = ({ children }) => {
//     const [open, toggle] = useState(false);

//     return (
//         <FlyoutContext.provider value={{ open, toggle }}>
//             {children}
//         </FlyoutContext.provider>
//     );
// };

// const useFlyoutContext = () => {
//     const context = useContext(FlyoutContext);

//     if (!context) {
//         throw new Error(
//             'useFlyoutContext must be used within a FlyoutContext'
//         );
//     }

//     return context;
// };

// export { FlyoutProvider, useFlyoutContext };

export function FlyOut({ children }) {
    const [open, toggle] = useState(false);

    return (
        <div>
            {React.Children.map(children, (child) =>
                React.cloneElement(child, { open, toggle })
            )}
        </div>
    );

    // return (
    //     <FlyOutContext.Provider value={{ open, toggle }}>
    //         {children}
    //     </FlyOutContext.Provider>
    // );
}

function Toggle({ open, toggle }) {
    // const { open, toggle } = useContext(FlyOutContext);

    return (
        <div onClick={() => toggle(!open)}>
            <Icon />
        </div>
    );
}

function List({ children, open }) {
    // const { open } = useContext(FlyOutContext);
    return open && <ul>{children}</ul>;
}

function Item({ children }) {
    return <li>{children}</li>;
}

FlyOut.Toggle = Toggle;
FlyOut.List = List;
FlyOut.Item = Item;
