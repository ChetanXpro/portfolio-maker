import React from 'react'

const Layout = (Component: any, idName: string) =>
    function HOC() {
        return (
            <div>
                <span className='hash-span' id={idName}>
                    &nbsp;
                </span>
                <Component />
            </div>
        )
    }


export default Layout

