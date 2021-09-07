import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarWrapper, SideBtnWrap, SidebarRoute, SidebarMenu} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        Présentation
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        Compétences
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>
                        Projets
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Me contacter</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
