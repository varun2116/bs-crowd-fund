import React, { useState } from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';
import Button from '../Button';
import Search from '../Search';
import { LOGO_TEXT, SEARCH_BUTTON } from './constants';

function Header(props: {}) {
    const [displayHeader, setdisplayHeader] = useState(true);

    /**
     * toggles the search and header display
     * @param event
     * @param searchBtnClicked
     */
    const handleSearchDisplay = (
        event: React.MouseEvent<HTMLButtonElement>,
        searchBtnClicked = false,
    ) => {
        event.preventDefault();
        if (searchBtnClicked) {
            setdisplayHeader(false);
        } else {
            setdisplayHeader(true);
        }
    };

    return (
        <header>
            {displayHeader && (
                <div className="header">
                    <NavLink className="logo" to="/">
                        {LOGO_TEXT}
                    </NavLink>
                    <Button
                        type="default"
                        name={SEARCH_BUTTON}
                        handleClick={e => {
                            handleSearchDisplay(e, true);
                        }}
                    />
                </div>
            )}
            {!displayHeader && (
                <Search
                    closeClick={e => {
                        handleSearchDisplay(e);
                    }}
                />
            )}
        </header>
    );
}

export default Header;
