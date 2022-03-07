import React from 'react';
import mentorCss from "./Mentor.module.css";
import vector from "../../images/Vector (1).png"
import {Link} from "react-router-dom";
const Mentor = () => {
    return (
        <div className="container">
            <div className={mentorCss.headerFlex}>
            <div className={mentorCss.page}>
                <div>
                    <div className={mentorCss.home}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                             className="bi bi-house" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                  d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                            <path fillRule="evenodd"
                                  d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                        </svg>

                    </div>
                    <Link to="/download">
                    <div className={mentorCss.save}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                             className="bi bi-download" viewBox="0 0 16 16">
                            <path
                                d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                            <path
                                d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                        </svg>
                    </div>
                    </Link>
                </div>
            </div>
                <div className={mentorCss.textHeader}>
                    <h1>Группа</h1>
                    <div className={mentorCss.cars}>
                    <div className={mentorCss.carHeader}>
                        <img src={vector}/>
                    </div>
                        <p>
                        Языки
                        </p>
                    </div>
                    <div className={mentorCss.cars}>
                        <div className={mentorCss.carHeader}>
                            <img src={vector}/>
                        </div>
                        <p>
                            Дата
                        </p>
                    </div>
                    <div className={mentorCss.cars}>
                        <p>
                            Изменить
                        </p>
                    </div>
                </div>
            </div>
            <div className={mentorCss.borderBottom}></div>

            <div className={mentorCss.listArticle}>
                <div className={mentorCss.articleUl}>
                    <ul>
                        <li>Python morning 1</li>

                        <li className={mentorCss.nameLisk}>Python 1</li>
                        <li className={mentorCss.nameLisk}>03.04.2022</li>
                        <Link to="/change">
                        <li className={mentorCss.btnList}>
                            Изменить</li>
                        </Link>
                    </ul>
                </div>
            </div>

            <div className={mentorCss.listArticle}>
                <div className={mentorCss.articleUl}>
                    <ul>
                        <li>Python morning 1</li>

                        <li className={mentorCss.nameLisk}>Python 1</li>
                        <li className={mentorCss.nameLisk}>03.04.2022</li>
                        <li className={mentorCss.btnList}>
                            Изменить</li>
                    </ul>
                </div>
            </div>

            <div className={mentorCss.listArticle}>
                <div className={mentorCss.articleUl}>
                    <ul>
                        <li>Python morning 1</li>

                        <li className={mentorCss.nameLisk}>Python 1</li>
                        <li className={mentorCss.nameLisk}>03.04.2022</li>
                        <li className={mentorCss.btnList}>
                            Изменить</li>
                    </ul>
                </div>
            </div>
            <div className={mentorCss.listArticle}>
                <div className={mentorCss.articleUl}>
                    <ul>
                        <li>Python morning 1</li>

                        <li className={mentorCss.nameLisk}>Python 1</li>
                        <li className={mentorCss.nameLisk}>03.04.2022</li>
                        <li className={mentorCss.btnList}>
                            Изменить</li>
                    </ul>
                </div>
            </div>
            <div className={mentorCss.listArticle}>
                <div className={mentorCss.articleUl}>
                    <ul>
                        <li>Python morning 1</li>

                        <li className={mentorCss.nameLisk}>Python 1</li>
                        <li className={mentorCss.nameLisk}>03.04.2022</li>
                        <li className={mentorCss.btnList}>
                            Изменить</li>
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default Mentor;