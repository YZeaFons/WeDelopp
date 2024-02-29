import style from './Pricing.module.css';
import { useEffect, useState } from 'react';
import { initMercadoPago } from '@mercadopago/sdk-react'
import { useTranslation } from 'react-i18next';
import pricingProvider from "../../../utils/provider/pricingProvider/pricingProvider.js";
import planProvider from '../../../utils/provider/planProvider/planProvider.js';
import QuoteWeb from '../quoteWeb/QuoteWeb.jsx';
import QuoteEcommerce from '../quoteEco/QuoteEcommerce.jsx';
import { useSelector } from 'react-redux';


const Pricing = ({ quote, plan }) => {

    initMercadoPago('TEST-a17e8b8f-91a1-4351-bc9c-cdb9d1033859', { locale: "es-AR" });

    const [t, i18n] = useTranslation("global");
    const [preferenceId, setPreferenceId] = useState('')

    const [loadingMoreBasic, setLoadingMoreBasic] = useState(false);
    const [loadingBusiness, setLoadingBusiness] = useState(false);
    const [loadingEnterprise, setLoadingEnterprise] = useState(false);

    const [loadingMoreBasicEco, setLoadingMoreBasicEco] = useState(false);
    const [loadingBusinessEco, setLoadingBusinessEco] = useState(false);
    const [loadingEnterpriseEco, setLoadingEnterpriseEco] = useState(false);


    const infoUser = useSelector(state => state.userData)

    const [project, setProject] = useState({
        title: "",
        price: 0,
        quantity: 1,
        quote,
        email: infoUser.email
    })


    const handleClick = async (e) => {
        setLoadingMoreBasic(false)
        setLoadingEnterprise(false)
        setLoadingBusiness(false)
        setLoadingMoreBasicEco(false)
        setLoadingBusinessEco(false)
        setLoadingEnterpriseEco(false)

        const dolar = await planProvider.getDolar()
        setPreferenceId('')
        const newProject = {
            ...project,
            'title': e.target.name,
            'price': e.target.value * dolar
        };

        await setProject(newProject)

        if(quote.purpose === 'web') {
            if (e.target.name === 'Basic') {
                setLoadingMoreBasic(true)
            } else if (e.target.name === 'Business') {
                setLoadingBusiness(true)
            } else if (e.target.name === 'Enterprise'){
                setLoadingEnterprise(true)
            }
        } else {
            if (e.target.name === 'Basic') {
                setLoadingMoreBasicEco(true)
            } else if (e.target.name === 'Business') {
                setLoadingBusinessEco(true)
            } else if (e.target.name === 'Enterprise'){
                setLoadingEnterpriseEco(true)
            }
        }
    }

    useEffect(() => {
        handleBuy();
    }, [project])


    const handleBuy = async () => {
        const id = await pricingProvider.createPreference(project)
        if (id) {
            await setPreferenceId(id)
        }
    }

    return (
        <>
            <div className={style.pricingContainer}>
                <div className={style.titleCuestion}>
                    <h3>{t("plansTitle.title")}</h3>
                    <p>{t("plansTitle.subtitle")}</p>
                </div>
                {
                    quote.purpose === 'web'
                        ?
                        <QuoteWeb handleClick={handleClick}
                            preferenceId={preferenceId}
                            t={t}
                            project={project}
                            plan={plan}
                            loadingMoreBasic={loadingMoreBasic}
                            loadingBusiness={loadingBusiness}
                            loadingEnterprise={loadingEnterprise}
                        />
                        :                       
                        <QuoteEcommerce 
                        handleClick={handleClick} 
                        preferenceId={preferenceId} 
                        t={t} 
                        project={project} 
                        plan={plan} 
                        loadingMoreBasicEco={loadingMoreBasicEco}
                        loadingBusinessEco={loadingBusinessEco}
                        loadingEnterpriseEco={loadingEnterpriseEco}
                        />
                }
            </div>
        </>
    );
};

export default Pricing;