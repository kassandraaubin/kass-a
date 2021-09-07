import React from 'react'; 
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesP>
                Actuellement formatrice numérique, référente de la formation développeur web Front-End.
            </ServicesP>
            <ServicesP>
                2020/2021 : Développement web et web mobile. HTML | CSS | JS - PHP | MySQL | Wordpress
            </ServicesP>
            <ServicesP>
                2021/2022 : Développement web Front-End : HTML | CSS | JS | React
            </ServicesP>
            <ServicesH1> Compétences</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Communication</ServicesH2>
                    <ServicesP>
                        Com'Interne (Carsat Bretagne), je suis diplômée d'un M2 en communication publique et politique.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Rédaction-web</ServicesH2>
                    <ServicesP>
                        Insaniam. Rédaction de fiches produits & articles de blog pour un particuliers dans la PLV. 
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Développement web</ServicesH2>
                    <ServicesP>
                        Formatrice aux langages de programmation web. (HTML, CSS, JS, React, PHP, MySQL)
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
