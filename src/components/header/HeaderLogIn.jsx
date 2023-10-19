import React from 'react';

import './HeaderLogIn.css';

const HeaderLogIn = ({showModalLogin}) => {

    const handleCloseModal = () => {
        showModalLogin(true);
    }

    return (
        <div className='wrapper-aside-header-login'>
            <div className="aside-header-login">
                <img src="" alt="logo" className="logo__login"/>
                <div className="aside-btns-login">
                    <button className="btn__login login_signup"
                            onClick={handleCloseModal}
                    >Войти
                    </button>
                    <button className="btn__login login_registration">Регистрация</button>
                </div>
            </div>
        </div>
    );
};

export default HeaderLogIn;