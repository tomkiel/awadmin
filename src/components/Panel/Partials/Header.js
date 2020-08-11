import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

//icons //
import {
    CloseIcon,
    UserIcon,
    BellIcon,
    SettingsIcon,
    MenuIcon,
    ArrowUpRightIcon
} from '../../Icons/index';

const Header = ({
    classColor = ''
}) => {

    let state = {
        dashActive: false,
        services: [
            { label: 'E-mails', icon: 'assets/images/enviar.svg', route: '/' },
            { label: 'Sites', icon: 'assets/images/empilhados.svg', route: 'websites' },
            { label: 'Bancos de dados', icon: 'assets/images/servidor-sql.svg', route: '/' },
            { label: 'Arquivos', icon: 'assets/images/pasta.svg', route: '/' },
            { label: 'Relatórios', icon: 'assets/images/grafico.svg', route: '/' },
            { label: 'Financeiro', icon: 'assets/images/dolar.svg', route: '/' },
            { label: 'Ajuda', icon: 'assets/images/socorro.svg', route: '/' }
        ]
    };
    const history = useHistory();
    const dispatch = useDispatch();
    const dashShow = useSelector(state => state.dashShow);
    const userSidebar = useSelector(state => state.userSidebar);

    const toggleDash = () => {
        dispatch({ type: 'set', dashShow: !dashShow });
    };

    const toggleUserSidebar = () => {
        dispatch({ type: 'set', userSidebar: !userSidebar });
    };

    const toRoute = (route) => {
        dispatch({ type: 'set', dashShow: false });
        history.push(route);
    };

    return (
        <div className={`header ${classColor ? classColor : ""}`} >
            <nav className="navHeader">
                <div className="navBrand">
                    <div className="dashAction">
                        <button className="openDash" onClick={toggleDash}>
                            <MenuIcon></MenuIcon>
                        </button>
                    </div>
                    <div className="brandText">
                        <div className="container">
                            <span>awadmin host</span>
                        </div>
                    </div>
                    <div className={`dashOptions ${dashShow ? "active" : "hiden"}`} >
                        <div className="dashBar">
                            <div className="dashItem">
                                <button className="openDash" onClick={toggleDash}>
                                    <MenuIcon></MenuIcon>
                                </button>
                            </div>
                            <div className="dashItem">
                                <button className="openDashFullScreen">
                                    <span>awadmin</span>
                                    <ArrowUpRightIcon></ArrowUpRightIcon>
                                </button>
                            </div>
                        </div>

                        <div className="dashMain">
                            <div className="dashTitle">
                                <span>Meus serviços</span>
                            </div>
                            <div className="listApps">

                                {state.services.map((service, i) => (
                                    <button className="app" onClick={() => toRoute(service.route)} key={i}>
                                        <img className="appIcon" src={service.icon} alt={service.label + ' image icon'}></img>
                                        <span className="appLabel">{service.label}</span>
                                    </button>
                                ))}

                            </div>
                            <div className="dashCopyright">
                                <a href='/' className="copyrightAnchor">© 2020 awadmin/Regis Tomkiel</a>
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
