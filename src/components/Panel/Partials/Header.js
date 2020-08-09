import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

//icons //
import {
    CloseIcon,
    UserIcon,
    BellIcon,
    SettingsIcon,
    MenuIcon,
    ArrowUpRightIcon
} from '../../Icons/index';

const Header = () => {

    let state = {
        dashActive: false,
        services: [
            { label: 'E-mails', icon: 'assets/images/enviar.svg' },
            { label: 'Sites', icon: 'assets/images/empilhados.svg' },
            { label: 'Bancos de dados', icon: 'assets/images/servidor-sql.svg' },
            { label: 'Arquivos', icon: 'assets/images/pasta.svg' },
            { label: 'Relatórios', icon: 'assets/images/grafico.svg' },
            { label: 'Financeiro', icon: 'assets/images/dolar.svg' },
            { label: 'Ajuda', icon: 'assets/images/socorro.svg' }
        ]
    };

    const dispatch = useDispatch();
    const dashShow = useSelector(state => state.dashShow);
    const userSidebar = useSelector(state => state.userSidebar);

    const toggleDash = () => {
        dispatch({ type: 'set', dashShow: !dashShow });
    }

    const toggleUserSidebar = () => {
        dispatch({ type: 'set', userSidebar: !userSidebar });
    }

    return (
        <div className="header">
            <nav className="navHeader">
                <div className="navBrand">
                    <div className="dashAction">
                        <button className="openDash" onClick={toggleDash}>
                            <MenuIcon></MenuIcon>
                        </button>
                    </div>
                    <div className="brandText">
                        <div className="container">
                            <span>Umba Host</span>
                        </div>
                    </div>
                    <div className={`dashOptions ${dashShow ? "active" : "hiden"}`}>
                        <div className="dashBar">
                            <div className="dashItem">
                                <button className="openDash" onClick={toggleDash}>
                                    <MenuIcon></MenuIcon>
                                </button>
                            </div>
                            <div className="dashItem">
                                <button className="openDashFullScreen">
                                    <span>umbahost</span>
                                    <ArrowUpRightIcon></ArrowUpRightIcon>
                                </button>
                            </div>
                        </div>

                        <div className="dashMain">
                            <div className="dashTitle">
                                <span>Meus serviços</span>
                            </div>
                            <div className="listApps">

                                {state.services.map(service => (
                                    <div className="app">
                                        <img className="appIcon" src={service.icon} alt={service.label + ' image icon'} ></img>
                                        <span className="appLabel">{service.label}</span>
                                    </div>
                                ))}

                            </div>
                            <div className="dashCopyright">
                                <a href='/' className="copyrightAnchor">© 2020 MyReactJS App/Regis Tomkiel</a>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="navActions">
                    <div className=""></div>

                    <div className="appActions">
                        <div className="item">
                            <button>
                                <div className="icon navSettings">
                                    <SettingsIcon></SettingsIcon>
                                </div>
                            </button>
                        </div>
                        <div className="item">
                            <button>
                                <div className="icon navNotifications">
                                    <BellIcon></BellIcon>
                                </div>
                            </button>
                            <div className='navNotificationStatus'>
                                <span className='ntiCounter'>9</span>
                            </div>
                        </div>
                        <div className={`item user ${userSidebar ? "active" : "hiden"}`}>
                            <button onClick={toggleUserSidebar}>
                                <div className="icon userIcon">
                                    <UserIcon></UserIcon>
                                </div>
                            </button>
                            <div className="userStatus"></div>
                            <div className={`userSidebar ${userSidebar ? "active" : "hiden"}`}>
                                <div className="userSidebarHeader">
                                    <h1 className="titleSidebar">Minha conta</h1>
                                    <div className="closeSidebar">
                                        <button onClick={toggleUserSidebar}>
                                            <CloseIcon></CloseIcon>
                                        </button>
                                    </div>
                                </div>
                                <div className="sidebarContent">
                                    <div className="sidebarAvatar">
                                        <div className="icon">
                                            <UserIcon></UserIcon>
                                        </div>
                                    </div>
                                    <div className="sidebarResume">
                                        <span className="userName">Régis Tomkiel</span>
                                        <span className="userEmail">regis.tomkiel@outlook.com</span>
                                        <div className="moreInfos">
                                            <a href="/">
                                                Meu perfil
                                            </a>
                                            <a href="/">
                                                Minha Conta
                                            </a>
                                            <a href="/">
                                                Sair
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </nav>
        </div>
    )
}

export default Header;
