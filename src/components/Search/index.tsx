import React from 'react';
import './styles.css';
import Button from '../Button';
import { isNil } from 'lodash';
import Input from '../Input';
import { REG_EXP } from '../../utils/constants';

type Props = {
    closeClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function Search(props: Props) {
    const { closeClick } = props;
    return (
        <div className="search-bar">
            <Input
                type="text"
                className="search-input"
                placeholder="Search for Bus Stops"
                pattern={REG_EXP.ALPHA_NUMERIC}
            />
            <Button
                className="btn-close"
                type="default"
                name="x"
                handleClick={e => {
                    !isNil(closeClick) && closeClick(e);
                }}
            />
        </div>
    );
}

export default Search;
