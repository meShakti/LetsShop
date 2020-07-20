import React from 'react';
import * as layout from './index.module.css';

const Layout = ({children}) => {
        return(
            <div className={layout.layout}> 
            <div className={layout.header}>
                Header
            </div>
            <div className={layout.body}>
                {children}
            </div>
            <div className={layout.footer}>
                Footer
            </div>
            </div>
        )
};
export default Layout;