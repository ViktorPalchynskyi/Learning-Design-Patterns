import React from 'react';
import { FlyOut } from '../../context/Flyout.context';
// import "./styles.css";

export const FlyoutMenu = () =>  {
    return (
        <FlyOut>
            <FlyOut.Toggle />
            <FlyOut.List>
                <FlyOut.Item>Edit</FlyOut.Item>
                <FlyOut.Item>Delete</FlyOut.Item>
            </FlyOut.List>
        </FlyOut>
    );
}
