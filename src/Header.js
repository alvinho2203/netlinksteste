import React from "react";
import './Header.css';
import logo from './imagem/logo.png'
import mulher from './imagem/mulher.png'
import lateralmulheresq from './imagem/lateralmulher.png'
import lateralmulherdir1 from './imagem/lateralmulherdir1.png'
import lateralmulherdir2 from './imagem/lateralmulherdir2.png'
import lateralmulherdir3 from './imagem/lateralmulherdir3.png'
import suaslogos from './imagem/sualogo.png'
import baseConteudo2 from './imagem/baseConteudo2.png'
import torre from './imagem/torre.png'
import exclamacao from './imagem/exclamacao.png'
import grafico from './imagem/grafico.png'
import config from './imagem/config.png'
import baseConteudo3 from './imagem/baseConteudo3.png'
import baseConteudo4 from './imagem/baseConteudo4.png'
import baseConteudo5 from './imagem/baseConteudo5.png'
import local from './imagem/local.png'

function Header(props){
    return(
        <header>
            <body> 
                <div className="header">
                    <div className="colunaesq">
                        <img className="logo" src={logo}/>
                        <p className="subTitle1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className="subTitle2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p className="subTitle3">Lorem ipsum #dolor</p>
                            <div className="colunaesq">
                                <div >
                                    <img className="suasLogos" src={suaslogos}/>
                                </div>
                                <div>
                                    <p className="textoLogos"><b className="negrito">Lorem ipsum dolor</b><br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                                <div >
                                    <img className="suasLogos3" src={suaslogos}/>
                                </div>
                                <div>
                                    <p className="textoLogos3"><b className="negrito">Lorem ipsum dolor</b><br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                            </div>
                            <div className="colunadir">
                                <div>
                                        <img className="suasLogos2" src={suaslogos}/>
                                </div>
                                <div>
                                        <p className="textoLogos2"><b className="negrito">Lorem ipsum dolor</b><br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                                <div>
                                        <img className="suasLogos4" src={suaslogos}/>
                                </div>
                                <div>
                                        <p className="textoLogos4"><b className="negrito">Lorem ipsum dolor</b><br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                </div>        
                            </div>
                    </div>
                        
                    <div className="colunadir">
                        <img className="mulher" src={mulher}/>
                        <img className="lateralmulheresq" src={lateralmulheresq}/>
                        <img className="lateralmulherdir1" src={lateralmulherdir1}/>
                        <img className="lateralmulherdir2" src={lateralmulherdir2}/>
                        <img className="lateralmulherdir3" src={lateralmulherdir3}/>
                        <div className="formulario">
                            <h2 className="tituloForm">Lorem ipsum dolor sit amet?</h2>
                            <form action="submit">
                                <input className="inputs" type="text" value="Nome" id="nome" />
                                <input className="inputs" type="text" value="Seu site" id="seusite" />
                                <input className="inputs" type="text" value="Email" id="email" />
                                <input className="inputs" type="tel" value="Telefone" id="telefone" />
                                <br/>
                                <br/>
                                <button className="btnEnviar" type="submit" name="enviar" value="Submit">Enviar</button>
                            </form>
                        </div>    
                    </div>    
                </div>
                <div className="Parte1">
                    <p className="tituloConteudo"><b className="principalTitulo">Lorem</b>ipsum dolor sit amet</p>
                    
                    <div>
                        <img className="baseConteudo2" src={baseConteudo2}/>
                        <p className="tituloBase2">Lorem ipsum</p>
                        <p className="textoBase2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <img className="baseConteudo4" src={baseConteudo4}/>
                        <p className="tituloBase4">Lorem ipsum</p>
                        <p className="textoBase4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="baseTorre">
                        <img className="torre" src={torre}/>
                        <div id="linha-vertical1"></div>
                        <img className="exclamacao" src={exclamacao}/>
                        <div id="linha-vertical2"></div>
                        <img className="grafico" src={grafico}/>
                        <div id="linha-vertical3"></div>
                        <img className="config" src={config}/>
                        <div id="linha-vertical4"></div>
                        <div className="bola"></div>
                    </div>
                    <div>
                        <img className="baseConteudo3" src={baseConteudo3}/>
                        <p className="tituloBase1">Lorem ipsum</p>
                        <p className="textoBase1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <img className="baseConteudo5" src={baseConteudo5}/>
                        <p className="tituloBase3">Lorem ipsum</p>
                        <p className="textoBase3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    <button className="btnContato">Contato</button>
                
                </div>
                <div className="Parte2">
                    <p className="titParte2">Lorem<br/> ipsum</p>
                    <p className="subtitParte2">Lorem Ipsum</p>
                    <p className="subtitParte2Linha"></p>
                    <div className="quadradoParte2">
                        <p className="textParte2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <div>
                            <p className="xx1">XX</p>
                            <p className="subXX1">Lorem<br/>ipsum</p>
                        </div>
                        <div>
                            <div className="bordaXX2">
                                <p className="xx2">XX</p>
                                <p className="subXX2">Lorem ipsum</p>
                                <p className="textXX2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                        </div>
                        <div>
                            <p className="xx3">XX</p>
                            <p className="subXX3">Lorem<br/>ipsum</p>
                        </div>
                        <div>
                            <p className="xx4">XX</p>
                            <p className="subXX4">Lorem ipsum</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="subtit2Parte2">Lorem ipsum</h2>
                        <p className="subtit2Parte2Linha"></p>
                    </div>
                    <div>
                        <div className="LocalParte2">
                            <img className="localIcon" src={local}/>
                            <p className="titLocal">Lorem ipsum</p>
                            <p className="textLocal">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <div className="Local2Parte2">
                            <img className="localIcon2" src={local}/>
                            <p className="titLocal2">Lorem ipsum</p>
                            <p className="textLocal2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </div>
                </div>
                <div className="Parte3">
                    
                </div>
            </body>    
        </header>
    );
}

export default Header;