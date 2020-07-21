import React from 'react';
import * as layout from './index.module.css';

const Layout = ({children}) => {
        return(
            <div className={layout.layout}> 
            <div className={layout.header}>
                New Abhishek
            </div>
            <div className={layout.body}>
                {children}
            </div>
            <div className={layout.footer}>
            ©2020 by New Abhishek. Proudly Created by meShakti
            </div>
            </div>
        )
};
export default Layout;