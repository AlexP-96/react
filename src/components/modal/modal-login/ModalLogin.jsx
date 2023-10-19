import React from 'react';

import './ModalLogin.css';

const ModalLogin = ({showModalLogin}) => {

    const handleCloseModal = () => {
        showModalLogin(false);
    }

    return (
        <div className='modal-login'>
            <form className="aside-modal-login">
                <div className="title__modal__login">Вход в учетную запись</div>
                <input type="text" className="username__modal__login" placeholder='Логин'/>
                <input type="password" className="password__modal__login" placeholder='Пароль'/>
                <div className="aside-btns-modal-login">
                    <button className="submit__modal__login">Вход</button>
                    <div className="cancel__modal__login"
                        onClick={handleCloseModal}
                    >Отмена</div>
                </div>
            </form>
        </div>
    );
};

export default ModalLogin;