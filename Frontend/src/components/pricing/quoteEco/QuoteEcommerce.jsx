import style from './QuoteEcommerce.module.css';
import { FaCircleCheck } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import { Wallet } from '@mercadopago/sdk-react'
import { useState } from 'react';

const QuoteEcommerce = ({handleClick, preferenceId, t, project, plan, loadingMoreBasicEco, loadingBusinessEco, loadingEnterpriseEco}) => {

    const [seeMoreBasic, setSeeMoreBasic] = useState(false);
    const [seeMoreBusiness, setSeeMoreBusiness] = useState(false);
    const [seeMoreEnterprise, setSeeMoreEnterprise] = useState(false);

    const ecommerce1 = plan[0]
    const ecommerce2 = plan[1]
    const ecommerce3 = plan[2]

    return (
        <>
            <div className={style.containerCards}>
                <div className={style.cardBox} >
                    <div className={style.containerTitleAndDescripcion}>
                        <h4 style={{ color: '#DB319B' }}>{t("plans.BasicPlan.title")}</h4>
                        <p>{t("plans.BasicPlan.description")}</p>

                    </div>
                    <div className={style.containerPricingAndButton}>
                        <div className={style.containerValue}>
                            <h4 className={style.h4}>${ecommerce3.price}</h4>
                            <p className={style.p}>{t("plans.BasicPlan.perProject")}</p>
                        </div>
                        <div className={style.containerButtonPay}>
                            <button
                                style={loadingMoreBasicEco ? {display: 'none'} : {display: ''}}
                                className={style.buttonPay}
                                name={ecommerce3.name}
                                value={ecommerce3.price}
                                onClick={handleClick}>
                                {t("plans.BasicPlan.button")}
                            </button>
                            {preferenceId && project.title === "Basic" &&
                                <Wallet
                                    initialization={{ preferenceId: preferenceId }}
                                    customization={{ texts: { valueProp: 'smart_option' }, visual: { verticalPadding: '0px', buttonHeight: '55px' } }} />}
                        </div>
                    </div>
                    <div className={style.containerIncludes}>
                        <div className={style.specifications}>
                            <p><FaCircleCheck className={style.icon} />{t("plans.BasicPlan.sec1")}</p>
                            <p><FaCircleCheck className={style.icon} />{t("plans.BasicPlan.sec2")}</p>
                            <p><FaCircleCheck className={style.icon} />{t("plans.BasicPlan.sec3")}</p>
                            <p><FaCircleCheck className={style.icon} /> 10 {t("plans.BasicPlan.sec4")}</p>
                            <p><FaCircleCheck className={style.icon} />{t("plans.BasicPlan.sec10")}</p>
                            {seeMoreBasic ? <>
                                <p><MdCancel className={style.icon} /> {t("plans.BasicPlan.sec5")}</p>
                                <p><MdCancel className={style.icon} /> {t("plans.BasicPlan.sec6")}</p>
                                <p><MdCancel className={style.icon} />{t("plans.BasicPlan.sec7")}</p>
                                <p><MdCancel className={style.icon} />{t("plans.BasicPlan.sec8")}</p>
                                <p><MdCancel className={style.icon} />{t("plans.BasicPlan.sec9")}</p>
                                <p><MdCancel className={style.icon} />{t("plans.BasicPlan.sec11")}</p>
                            </> : <></>}
                            <div className={style.containerButton}>
                                <button
                                    className={style.buttonSeeMore}
                                    onClick={() => setSeeMoreBasic(!seeMoreBasic)}
                                >{seeMoreBasic ? t("plans.BasicPlan.showLess") : t("plans.BasicPlan.showMore")}
                                    {seeMoreBasic ? <IoIosArrowDropup className={style.icon} /> : <IoIosArrowDropdown className={style.icon} />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>



                <div className={style.cardBox}>
                    <div className={style.containerTitleAndDescripcion}>
                        <h4 style={{ color: '#982090' }}>{t("plans.BusinessPlan.title")}</h4>
                        <p>{t("plans.BusinessPlan.description")}</p>
                    </div>
                    <div className={style.containerPricingAndButton}>
                        <div className={style.containerValue}>
                            <h4 className={style.h4}>${ecommerce2.price}</h4>
                            <p className={style.p}>{t("plans.BusinessPlan.perProject")}</p>
                        </div>
                        <div className={style.containerButtonPay}>
                            <button 
                            style={loadingBusinessEco ? {display: 'none'} : {display: ''}}
                            className={style.buttonPay} 
                            name={ecommerce2.name} 
                            value={ecommerce2.price} 
                            onClick={handleClick}
                            >{t("plans.BusinessPlan.button")}</button>
                            {
                                preferenceId && project.title === "Business" &&
                                <Wallet
                                    initialization={{ preferenceId: preferenceId }}
                                    customization={{ texts: { valueProp: 'smart_option' }, visual: { verticalPadding: '0px', buttonHeight: '55px' } }} />
                            }
                        </div>
                    </div>
                    <div className={style.containerIncludes}>
                        <div className={style.specifications}>
                            <p><FaCircleCheck className={style.icon} />{t("plans.BusinessPlan.sec1")}</p>
                            <p><FaCircleCheck className={style.icon} />{t("plans.BusinessPlan.sec2")}</p>
                            <p><FaCircleCheck className={style.icon} /> {t("plans.BusinessPlan.sec3")}</p>
                            <p><FaCircleCheck className={style.icon} />{t("plans.BusinessPlan.sec5")}</p>
                            <p><FaCircleCheck className={style.icon} /> {t("plans.BusinessPlan.sec6")}</p>
                            {seeMoreBusiness ? <>
                                <p><FaCircleCheck className={style.icon} /> {t("plans.BusinessPlan.sec4")}</p>
                                <p><FaCircleCheck className={style.icon} /> 10 {t("plans.BusinessPlan.sec7")}</p>
                                <p><MdCancel className={style.icon} /> {t("plans.BusinessPlan.sec8")}</p>
                                <p><MdCancel className={style.icon} />{t("plans.BusinessPlan.sec9")}</p>
                                <p><MdCancel className={style.icon} />{t("plans.BusinessPlan.sec10")}</p>
                                <p><MdCancel className={style.icon} />{t("plans.BusinessPlan.sec11")}</p>
                            </> : <></>}
                            <div className={style.containerButton}>
                                <button
                                    className={style.buttonSeeMore}
                                    onClick={() => setSeeMoreBusiness(!seeMoreBusiness)}
                                >{seeMoreBusiness ? t("plans.BusinessPlan.showLess") : t("plans.BusinessPlan.showMore")}
                                    {seeMoreBusiness ? <IoIosArrowDropup className={style.icon} /> : <IoIosArrowDropdown className={style.icon} />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={style.cardBox}>
                    <div className={style.containerTitleAndDescripcion}>
                        <h4 style={{ color: '#5425fc' }}>{t("plans.EnterprisePlan.title")}</h4>
                        <p>{t("plans.EnterprisePlan.description")}</p>
                    </div>
                    <div className={style.containerPricingAndButton}>
                        <div className={style.containerValue}>
                            <h4 className={style.h4}>${ecommerce1.price}</h4>
                            <p className={style.p}>{t("plans.EnterprisePlan.perProject")}</p>
                        </div>
                        <div className={style.containerButtonPay}>
                            <button 
                            style={loadingEnterpriseEco ? {display: 'none'} : {display: ''}}
                            className={style.buttonPay} 
                            name={ecommerce1.name} 
                            value={ecommerce1.price} 
                            onClick={handleClick}
                            >{t("plans.EnterprisePlan.button")}</button>
                            {
                                preferenceId && project.title === "Enterprise" &&
                                <Wallet
                                    initialization={{ preferenceId: preferenceId }}
                                    customization={{ texts: { valueProp: 'smart_option' }, visual: { verticalPadding: '0px', buttonHeight: '55px' } }} />
                            }
                        </div>
                    </div>
                    <div className={style.containerIncludes}>
                        <div className={style.specifications}>
                            <p><FaCircleCheck className={style.icon} />{t("plans.EnterprisePlan.sec1")}</p>
                            <p><FaCircleCheck className={style.icon} />{t("plans.EnterprisePlan.sec2")}</p>
                            <p><FaCircleCheck className={style.icon} />{t("plans.EnterprisePlan.sec3")}</p>
                            <p><FaCircleCheck className={style.icon} />{t("plans.EnterprisePlan.sec5")}</p>
                            <p><FaCircleCheck className={style.icon} />{t("plans.EnterprisePlan.sec6")}</p>
                            {seeMoreEnterprise ? <>
                                <p><FaCircleCheck className={style.icon} />{t("plans.EnterprisePlan.sec4")}</p>
                                <p><FaCircleCheck className={style.icon} />{t("plans.EnterprisePlan.sec7")}</p>
                                <p><FaCircleCheck className={style.icon} />{t("plans.EnterprisePlan.sec8")}</p>
                                <p><FaCircleCheck className={style.icon} />{t("plans.EnterprisePlan.sec9")}</p>
                                <p><FaCircleCheck className={style.icon} />{t("plans.EnterprisePlan.sec10")}</p>
                                <p><FaCircleCheck className={style.icon} />{t("plans.EnterprisePlan.sec11")}</p>
                            </> : <></>}
                            <div className={style.containerButton}>
                                <button
                                    className={style.buttonSeeMore}
                                    onClick={() => setSeeMoreEnterprise(!seeMoreEnterprise)}
                                >{seeMoreEnterprise ? t("plans.EnterprisePlan.showLess") : t("plans.EnterprisePlan.showMore")}
                                    {seeMoreEnterprise ? <IoIosArrowDropup className={style.icon} /> : <IoIosArrowDropdown className={style.icon} />}

                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuoteEcommerce