import { useEffect, useState } from 'react'
import style from './AdminWindow.module.css'
import { Bar, BarChart, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, CartesianGrid, YAxis } from 'recharts'
import SearchBarAdmin from '../../components/adminUtils/searchBarAdmin/SearchBarAdmin'
import AdminItemCard from '../../components/adminUtils/adminItemCard/AdminItemCard'
import AdminDetail from '../../components/adminUtils/adminDetail/AdminDetail'
import userProvider from '../../utils/provider/userProvider/userProvider'
import projectsProvider from '../../utils/provider/projectsProvider/projectsProvider'
import reviewsProvider from '../../utils/provider/reviewsProvider/reviewsProvider'
import pricingProvider from '../../utils/provider/pricingProvider/pricingProvider'
import SpinnerResumen from '../../components/spinners/spinnerResumen/SpinnerResumen'
const AdminWindow = () => {
    const [itemsToEdit, setItemsToEdit] = useState([])
    const [detailState, setDetailState] = useState('')
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setLoading(!loading)

        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);

    }, [itemsToEdit])
    const [pieGraphCountPreference, setPieGraphCountPreference] = useState([
        { name: 'Basic Plan', value: 0, },
        { name: 'Business Plan', value: 0, },
        { name: 'Enterprise Plan', value: 0, }
    ])
    const [pieGraphSumPreference, setPieGraphSumPreference] = useState([
        { name: 'Basic Plan', value: 0, },
        { name: 'Business Plan', value: 0, },
        { name: 'Enterprise Plan', value: 0, }
    ])
    const [sumTotPreference, setSumTotPreference] = useState(0)

    const [pieGraph, setPieGraph] = useState([
        { name: 'Inactive', value: 0, valuePercent: `${25}%` },
        { name: 'Active', value: 0, valuePercent: `${75}%` }
    ])
    const pieGraphColors = ['#F9C74F', '#fc2f00']

    const [pieGraphTipo, setpieGraphTipo] = useState([
        { name: 'E-commerce', value: 40, valuePercent: `${25}%` },
        { name: 'Entertainment', value: 23, valuePercent: `${75}%` },
        { name: 'Health', value: 15, valuePercent: `${75}%` },
        { name: 'Landing Page', value: 15, valuePercent: `${75}%` },
        { name: 'Portfolio', value: 15, valuePercent: `${75}%` },
        { name: 'Social Network', value: 15, valuePercent: `${75}%` },
        { name: 'Tourism', value: 15, valuePercent: `${75}%` },
    ])

    const pieGraphTipoColors = ['#f94144', '#f3722c', '#f9844a', '#f9c74f', '#90be6d', '#43aa8b', '#277da1']
    const piecountpreferencesColors = ['#f94144', '#f3722c', '#f9844a']
    const piesumpreferencesColors = ['#90be6d', '#43aa8b', '#277da1']

    const [barGraph, setBarGraph] = useState([
        { name: '5', valoraciones: 70 },
        { name: '4', valoraciones: 20 },
        { name: '3', valoraciones: 5 },
        { name: '2', valoraciones: 3 },
        { name: '1', valoraciones: 2 },
    ])
    useEffect(() => {
        bringData()
    }, [])

    const bringData = async () => {
        const users = await userProvider.getUsers()
        const docs = await projectsProvider.getProjectsAll()
        const reviews = await reviewsProvider.getReview()
        const paymentsTemp = await pricingProvider.getPreference()
        const payments = paymentsTemp.filter(item => item.status === "approved")

        const counterProjects = docs.reduce((counter, item) => {
            const categoryModif = item.category.replace(/-/g, ' ').replace(/\s+/g, '_');
            counter[categoryModif] = (counter[categoryModif] || 0) + 1;
            return counter;
        }, {});

        const counterUsers = users.reduce((counter, item) => {
            counter[item.suspended] = (counter[item.suspended] || 0) + 1;
            return counter;
        }, { true: 0, false: 0 });

        const counterRatings = reviews.reduce((counter, item) => {
            counter[item.rating] = (counter[item.rating] || 0) + 1;
            return counter;
        }, {});

        const counterPreferences = payments.reduce((counter, item) => {
            const titleModif = item.title.replace(/-/g, ' ').replace(/\s+/g, '_');
            counter[titleModif] = (counter[titleModif] || 0) + 1;
            return counter;
        }, {});
        const SumPreferences = payments.reduce((counter, item) => {
            const titleModif = item.title.replace(/-/g, ' ').replace(/\s+/g, '_');
            counter[titleModif] = (counter[titleModif] || 0) + item.amount;
            return counter;
        }, {});
        const SumTotPreferences = payments.reduce((totalAmount, item) => {
            return totalAmount + item.amount;
        }, 0);

        setBarGraph([
            { name: '5', valoraciones: counterRatings[5] ? counterRatings[5] : 0 },
            { name: '4', valoraciones: counterRatings[4] ? counterRatings[4] : 0 },
            { name: '3', valoraciones: counterRatings[3] ? counterRatings[3] : 0 },
            { name: '2', valoraciones: counterRatings[2] ? counterRatings[2] : 0 },
            { name: '1', valoraciones: counterRatings[1] ? counterRatings[1] : 0 },
        ])
        setPieGraph([
            { name: 'Active', value: counterUsers.false, valuePercent: `${25}%` },
            { name: 'Inactive', value: counterUsers.true, valuePercent: `${75}%` }
        ])
        setpieGraphTipo([
            { name: 'E-commerce', value: counterProjects.E_commerce, valuePercent: `${25}%` },
            { name: 'Entertainment', value: counterProjects.Entertainment, valuePercent: `${75}%` },
            { name: 'Health', value: counterProjects.Health, valuePercent: `${75}%` },
            { name: 'Landing Page', value: counterProjects.Landing_Page, valuePercent: `${75}%` },
            { name: 'Portfolio', value: counterProjects.Portfolio, valuePercent: `${75}%` },
            { name: 'Social Network', value: counterProjects.Social_Network, valuePercent: `${75}%` },
            { name: 'Tourism', value: counterProjects.Tourism, valuePercent: `${75}%` },
        ])
        setPieGraphCountPreference([
            { name: 'Basic Plan', quantity: counterPreferences?.Basic_Plan },
            { name: 'Business Plan', quantity: counterPreferences?.Business_Plan },
            { name: 'Enterprise Plan', quantity: counterPreferences?.Enterprise_Plan }
        ])
        setPieGraphSumPreference([
            { name: 'Basic Plan', value: Number(SumPreferences?.Basic_Plan) },
            { name: 'Business Plan', value: Number(SumPreferences?.Business_Plan) },
            { name: 'Enterprise Plan', value: Number(SumPreferences?.Enterprise_Plan) }
        ])
        setSumTotPreference(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'ARS' }).format(
            SumTotPreferences,
        ),)
    }
    console.log('esto es detail', detailState);
    return (
        <div className={style.adminWindow}>
            <SearchBarAdmin setItemsToEdit={setItemsToEdit} itemsToEdit={itemsToEdit} setDetailState={setDetailState} />
            <div className={style.containerPanel}>
                {
                    itemsToEdit !== undefined && itemsToEdit[0]?.payId
                        ? (
                            <div className={style.graphscontainer}>
                                <div className={style.box}>
                                    <div className={style.title} style={{ backgroundColor: '#2F61E4' }}>
                                        <h3>Total Amount</h3>
                                    </div>
                                    <div className={style.containerH2}>
                                        <p>{sumTotPreference}</p>
                                    </div>
                                </div>
                                <div className={style.box}>
                                    <div className={style.title} style={{ backgroundColor: '#2F61E4' }}>
                                        <h3>Quantity per type</h3>
                                    </div>
                                    <ResponsiveContainer width='100%' height={320} className={style.graph}>
                                        <PieChart >
                                            <Pie
                                                dataKey='quantity'
                                                data={pieGraphCountPreference}
                                                innerRadius={60}
                                                outerRadius={100}
                                                fill='#82ca9d'
                                                labelLine={false}
                                                label={pieGraphCountPreference}
                                            >
                                                {pieGraphCountPreference.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={piecountpreferencesColors[index % piecountpreferencesColors.length]} />
                                                ))}
                                            </Pie>
                                            <Tooltip />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className={style.box}>
                                    <div className={style.title} style={{ backgroundColor: '#2F61E4' }}>
                                        <h3>Total value per type</h3>
                                    </div>
                                    <ResponsiveContainer width='100%' height={320} className={style.graph}>
                                        <PieChart >
                                            <Pie
                                                dataKey='value'
                                                data={pieGraphSumPreference}
                                                innerRadius={60}
                                                outerRadius={100}
                                                fill='#82ca9d'
                                                labelLine={false}
                                                label={pieGraphSumPreference}
                                            >
                                                {pieGraphSumPreference.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={piesumpreferencesColors[index % piesumpreferencesColors.length]} />
                                                ))}
                                            </Pie>
                                            <Tooltip />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        )
                        : (
                            <div className={style.graphscontainer}>
                                <div className={style.box}>
                                    <div className={style.title} style={{ backgroundColor: '#2F61E4' }}>
                                        <h3>Users Status</h3>
                                    </div>
                                    <ResponsiveContainer width='100%' height={320} className={style.graph}>
                                        <PieChart>
                                            <Pie
                                                dataKey='value'
                                                data={pieGraph}
                                                innerRadius={0}
                                                outerRadius={90}
                                                fill='#82ca9d'
                                                labelLine={false}
                                                label={pieGraphTipo}
                                            >
                                                {pieGraph.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={pieGraphColors[index % pieGraphColors.length]} />
                                                ))}
                                            </Pie>
                                            <Tooltip />
                                            <Legend />
                                        </PieChart>
                                    </ResponsiveContainer>

                                </div>
                                <div className={style.box}>
                                    <div className={style.title} style={{ backgroundColor: '#2F61E4' }}>
                                        <h3>Type of Project</h3>
                                    </div>
                                    <ResponsiveContainer width='100%' height={320} className={style.graph}>
                                        <PieChart >
                                            <Pie
                                                dataKey='value'
                                                data={pieGraphTipo}
                                                innerRadius={60}
                                                outerRadius={100}
                                                fill='#82ca9d'
                                                labelLine={false}
                                                label={pieGraphTipo}
                                            >
                                                {pieGraphTipo.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={pieGraphTipoColors[index % pieGraphTipoColors.length]} />
                                                ))}
                                            </Pie>
                                            <Tooltip />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className={style.box}>
                                    <div className={style.title} style={{ backgroundColor: '#2F61E4' }}>
                                        <h3>Ratings by number of stars</h3>
                                    </div>
                                    <ResponsiveContainer width='100%' height={320} className={style.graph}>
                                        <BarChart
                                            data={barGraph}
                                            height={200}
                                            margin={{
                                                top: 20,
                                                right: 20,
                                                left: 20,
                                            }}
                                        >
                                            <XAxis dataKey='name' />
                                            <Tooltip />
                                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                            <Bar dataKey='valoraciones' fill='#3F963F' barSize={50} />
                                            <Legend />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        )
                }
                {loading ? <div className={style.containerSpinner}><SpinnerResumen /></div> :
                    <div className={style.adminusers}>
                        {!itemsToEdit.length
                            ? ''
                            : itemsToEdit[0].type
                                ? <div className={style.containerInfoProject}>
                                    <p className={style.image}>Name</p>
                                    <p className={style.name}>Type</p>
                                    <p className={style.category}>Price</p>
                                </div>
                                : itemsToEdit[0].payId
                                    ? <div className={style.containerInfo}>
                                        <p className={style.user}>Title</p>
                                        <p className={style.email}>Email</p>
                                        <p>Status</p>
                                        <p className={style.role}>Amount</p>
                                    </div>
                                    : itemsToEdit[0].email ?
                                        <div className={style.containerInfo}>
                                            <p className={style.user}>User</p>
                                            <p className={style.email}>Email</p>
                                            <p>Status</p>
                                            <p className={style.role}>Role</p>
                                        </div> : <div className={style.containerInfoProject}>
                                            <p className={style.image}>Image</p>
                                            <p className={style.name}>Name</p>
                                            <p className={style.category}>Category</p>
                                        </div>}

                        <div className={style.adminCards}>
                            {
                                detailState
                                    ? <AdminDetail
                                        detailState={detailState}
                                        setDetailState={setDetailState}
                                        setItemsToEdit={setItemsToEdit}
                                        itemsToEdit={itemsToEdit}
                                    />
                                    : !itemsToEdit.length
                                        ? <div className={style.titleContaine}><h3>No se han seleccionado items</h3></div>
                                        : itemsToEdit[0].type
                                            ? itemsToEdit.map(item => (
                                                <AdminItemCard
                                                    key={item._id}
                                                    id={item._id}
                                                    name={item.name}
                                                    type={item.type}
                                                    price={item.price}
                                                    setDetailState={setDetailState}
                                                />
                                            ))
                                            : itemsToEdit[0].payId
                                                ? itemsToEdit.map(item => (
                                                    <AdminItemCard
                                                        key={item._id}
                                                        id={item._id}
                                                        title={item.title}
                                                        email={item.email}
                                                        status={item.status}
                                                        amount={item.amount}
                                                        payId={item.payId}
                                                        setDetailState={setDetailState}
                                                    />
                                                ))
                                                : itemsToEdit[0].email
                                                    ? itemsToEdit.map(item => (
                                                        <AdminItemCard
                                                            key={item._id}
                                                            id={item._id}
                                                            name={item.name}
                                                            email={item.email}
                                                            suspended={item.suspended}
                                                            role={item.role}
                                                            setDetailState={setDetailState}
                                                        />
                                                    ))
                                                    : itemsToEdit.map(item => (
                                                        <AdminItemCard
                                                            key={item._id}
                                                            id={item._id}
                                                            name={item.name}
                                                            images={item.images}
                                                            category={item.category}
                                                            setDetailState={setDetailState}
                                                        />
                                                    ))
                            }
                        </div>
                    </div>}
            </div>
        </div>
    )
}
export default AdminWindow