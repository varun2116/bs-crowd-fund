import { isNil } from 'lodash';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button';
import Search from '../Search';
import { LOGO_TEXT, SEARCH_BUTTON } from './constants';
import './styles.css';

type Props = {
    className?: string;
    noSearch?: boolean;
    onSearchChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSearchClose?: () => void;
};

function Header(props: Props) {
    const { onSearchChange, onSearchClose, noSearch } = props;
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
            if (!isNil(onSearchClose)) {
                onSearchClose();
            }
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
                    {(isNil(noSearch) || !noSearch) && (
                        <Button
                            type="default"
                            name={SEARCH_BUTTON}
                            handleClick={e => {
                                handleSearchDisplay(e, true);
                            }}
                        />
                    )}
                </div>
            )}
            {!displayHeader && (
                <Search
                    closeClick={e => {
                        handleSearchDisplay(e);
                    }}
                    onSearchChange={e => {
                        !isNil(onSearchChange) && onSearchChange(e);
                    }}
                />
            )}
        </header>
    );
}

export default Header;
