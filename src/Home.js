import React from "react";
import './Home.css';
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
import logoredonda from './imagem/logoredonda.png'
import homem from './imagem/homem.png'

function Home(props){
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
                                <input className="inputs" type="text"  placeholder="Nome" id="nome" />
                                <input className="inputs" type="text"  placeholder="Seu Site" id="seusite" />
                                <input className="inputs" type="text"  placeholder="Email" id="email" />
                                <input className="inputs" type="tel" placeholder="Telefone" id="telefone" />
                                <br/>
                                <br/>
                                <button className="btnEnviar" type="submit" name="enviar" value="Submit">Enviar</button>
                            </form>
                        </div>    
                    </div>    
                </div>
                <div className="Parte1">
                    <h1 className="tituloConteudo"><b className="principalTitulo">Lorem</b>ipsum dolor sit amet</h1>
                    
                    <div>
                        <img className="baseConteudo2" src={baseConteudo2}/>
                        <h2 className="tituloBase2">Lorem ipsum</h2>
                        <p className="textoBase2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <img className="baseConteudo4" src={baseConteudo4}/>
                        <h2 className="tituloBase4">Lorem ipsum</h2>
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
                        <h2 className="tituloBase1">Lorem ipsum</h2>
                        <p className="textoBase1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <img className="baseConteudo5" src={baseConteudo5}/>
                        <h2 className="tituloBase3">Lorem ipsum</h2>
                        <p className="textoBase3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    <button className="btnContato">Contato</button>
                
                </div>
                <div className="Parte2">
                    <h1 className="titParte2">Lorem<br/> ipsum</h1>
                    <h2 className="subtitParte2">Lorem Ipsum</h2>
                    <p className="subtitParte2Linha"></p>
                    <div className="quadradoParte2">
                        <p className="textParte2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <div>
                            <h1 className="xx1">XX</h1>
                            <h2 className="subXX1">Lorem<br/>ipsum</h2>
                        </div>
                        <div>
                            <div className="bordaXX2">
                                <h1 className="xx2">XX</h1>
                                <h2 className="subXX2">Lorem ipsum</h2>
                                <p className="textXX2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                        </div>
                        <div>
                            <h1 className="xx3">XX</h1>
                            <h2 className="subXX3">Lorem<br/>ipsum</h2>
                        </div>
                        <div>
                            <h1 className="xx4">XX</h1>
                            <h2 className="subXX4">Lorem ipsum</h2>
                        </div>
                    </div>
                    <div>
                        <h2 className="subtit2Parte2">Lorem ipsum</h2>
                        <p className="subtit2Parte2Linha"></p>
                    </div>
                    <div>
                        <div className="LocalParte2">
                            <img className="localIcon" src={local}/>
                            <h1 className="titLocal">Lorem ipsum</h1>
                            <p className="textLocal">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <div className="Local2Parte2">
                            <img className="localIcon2" src={local}/>
                            <h1 className="titLocal2">Lorem ipsum</h1>
                            <p className="textLocal2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </div>
                </div>
                <div className="Parte3">
                    <div>
                        <h2 className="subTitleParte3">Lorem ipsum</h2>
                        <h1 className="titleParte3">Lorem<br/> ipsum</h1>
                        <div className="subtitParte3Linha"></div>
                        <p className="textParte3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div>
                        <div className="pessoa1">
                            <div className="bola2"></div>
                            <h2 className="tituloPessoa1">Lorem ipsum</h2>
                            <p className="textoPessoa1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className="pessoa2">
                            <div className="bola2"></div>
                            <h2 className="tituloPessoa1">Lorem ipsum</h2>
                            <p className="textoPessoa1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className="pessoa3">
                            <div className="bola2"></div>
                            <h2 className="tituloPessoa1">Lorem ipsum</h2>
                            <p className="textoPessoa1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div>
                        <div className="pessoa4">
                            <div className="bola2"></div>
                            <h2 className="tituloPessoa1">Lorem ipsum</h2>
                            <p className="textoPessoa1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className="pessoa5">
                            <div className="bola2"></div>
                            <h2 className="tituloPessoa1">Lorem ipsum</h2>
                            <p className="textoPessoa1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className="pessoa6">
                            <div className="bola2"></div>
                            <h2 className="tituloPessoa1">Lorem ipsum</h2>
                            <p className="textoPessoa1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div>
                        <button className="btnContato2">CONTATO</button>
                    </div>
                </div>
                <div className="Parte4">
                    <h1 className="tituloParte4">Lorem <b className="tituloGrandeParte4">Ipsun dolor</b> sit amet</h1>
                </div>
                <div className="Parte5">
                    <div>
                        <img className="logoRedonda" src={logoredonda}/>
                        <h1 className="tituloParte5">Lorem ipsum dolor</h1>
                        <p className="textoParte5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum porta arcu vel vulputate.</p>
                    </div>
                    <div>
                        <div className="imgProduto"></div>
                        <div>
                            <p className="descProduto"><b>Lorem ipsum dolor:</b> sit amet, consectetur adipiscing</p>
                            <h1 className="tituloProduto">Lorem ipsum</h1>
                            <h1 className="precoProduto">XXX.XXX</h1>
                            <h2 className="desc2Produto">Lorem ipsum</h2>
                            <div className="linhaProduto"></div>
                            <h1 className="precoProduto2">XXX%</h1>
                            <h2 className="desc3Produto">Lorem ipsum</h2>
                            <p className="desc4Produto"><b>Lorem Ipsum:</b> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div className="Parte6">
                    <div>
                        <img className="logoRedonda" src={logoredonda}/>
                        <h1 className="tituloParte5">Lorem ipsum dolor</h1>
                        <p className="textoParte5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum porta arcu vel vulputate.</p>
                    </div>
                    <div>
                        <div className="img2Produto"></div>
                        <div>
                            <p className="descProduto"><b>Lorem ipsum dolor:</b> sit amet, consectetur adipiscing</p>
                            <h1 className="tituloProduto">Lorem ipsum</h1>
                            <h1 className="precoProduto">XXX.XXX</h1>
                            <h2 className="desc2Produto">Lorem ipsum</h2>
                            <div className="linhaProduto"></div>
                            <h1 className="precoProduto2">XXX%</h1>
                            <h2 className="desc3Produto">Lorem ipsum</h2>
                            <p className="desc4Produto"><b>Lorem Ipsum:</b> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div className="Parte7">
                    <div>
                        <img className="logoRedonda" src={logoredonda}/>
                        <h1 className="tituloParte5">Lorem ipsum dolor</h1>
                        <p className="textoParte5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum porta arcu vel vulputate.</p>
                    </div>
                    <div>
                        <div className="imgProduto"></div>
                        <div>
                            <p className="descProduto"><b>Lorem ipsum dolor:</b> sit amet, consectetur adipiscing</p>
                            <h1 className="tituloProduto">Lorem ipsum</h1>
                            <h1 className="precoProduto">XXX.XXX</h1>
                            <h2 className="desc2Produto">Lorem ipsum</h2>
                            <div className="linhaProduto"></div>
                            <h1 className="precoProduto2">XXX%</h1>
                            <h2 className="desc3Produto">Lorem ipsum</h2>
                            <p className="desc4Produto"><b>Lorem Ipsum:</b> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div className="Parte8">
                    <div>
                        <img className="logoRedonda" src={logoredonda}/>
                        <h1 className="tituloParte5">Lorem ipsum dolor</h1>
                        <p className="textoParte5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum porta arcu vel vulputate.</p>
                    </div>
                    <div>
                        <div className="img2Produto"></div>
                        <div>
                            <p className="descProduto"><b>Lorem ipsum dolor:</b> sit amet, consectetur adipiscing</p>
                            <h1 className="tituloProduto">Lorem ipsum</h1>
                            <h1 className="precoProduto">XXX.XXX</h1>
                            <h2 className="desc2Produto">Lorem ipsum</h2>
                            <div className="linhaProduto"></div>
                            <h1 className="precoProduto2">XXX%</h1>
                            <h2 className="desc3Produto">Lorem ipsum</h2>
                            <p className="desc4Produto"><b>Lorem Ipsum:</b> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div className="Parte9">
                    <img className="homem" src={homem}/>
                    <h1 className="tituloParte9">Lorem ipsum</h1>
                    <h2 className="subtituloParte9">Lorem ipsum</h2>
                    <p className="textoParte9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum porta arcu vel vulputate. Morbi quis egestas dui. Integer nibh mauris, pulvinar eu tempus eget, facilisis et nunc.</p>
                    <div className="formularioParte9">
                            <form action="submit">
                                <input className="inputs1Parte9" type="text" value="Nome" id="nome" />
                                <input className="inputs2Parte9" type="text" value="Seu site" id="seusite" />
                                <input className="inputs3Parte9" type="text" value="Email" id="email" />
                                <input className="inputs4Parte9" type="tel" value="Telefone" id="telefone" />
                                <br/>
                                <br/>
                                <button className="btnEnviarParte9" type="submit" name="enviar" value="Submit">Enviar</button>
                            </form>
                    </div>
                </div>
                <div className="Parte10">
                    <p className="copy">Todos os direitos reservados <b>&copy;André Alves e NETLINKS.</b></p>
                </div>
            </body>    
        </header>
    );
}

export default Home;