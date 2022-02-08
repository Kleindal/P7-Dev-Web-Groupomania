import React from "react";
import { Link } from "react-router-dom";
import './user-setting.css'
import { Button } from 'react-bootstrap';

export const UserSetting = () => {
    return (
    <div className='settings'>
        <div className='log-out'>
            <Link to="/">
                <Button variant="outline-danger">
                    <i className='power off icon' id='log_out'></i>
                </Button>{' '}
            </Link>
        </div>
        <div className='cog'>
            <Button variant="outline-info">
                <i className='cog icon' id='setting'></i>
            </Button>{' '}
        </div>
        <div className='contact'>
            <Button variant="outline-info">
                <i className='adress book icon' id='contact'></i>
            </Button>{' '}
        </div>
    </div>
    )
};

