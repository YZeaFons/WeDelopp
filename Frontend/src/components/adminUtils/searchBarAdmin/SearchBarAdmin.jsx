import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './SearchBarAdmin.module.css'
import validator from 'validator'
import userProvider from '../../../utils/provider/userProvider/userProvider';
import projectsProvider from '../../../utils/provider/projectsProvider/projectsProvider';
import { BsSearch } from "react-icons/bs";
import pricingProvider from '../../../utils/provider/pricingProvider/pricingProvider';
import planProvider from '../../../utils/provider/planProvider/planProvider';


export default function SearchBarAdmin({ setItemsToEdit, itemsToEdit, setDetailState }) {
    const [name, setName] = useState('')

    const handleChange = (e) => {
        const { value } = e.target
        setName(value)
    }
    // const handleClick=()=>{

    // }
    const handleClick = () => {
        if (name === '') return window.alert('Debes ingresar un nombre')
        if (validator.isEmail(name)) getUsEmail(name)
        else {
            getProjectName(name)
        }
        setName('')
    }
    const getUs = async () => {
        setDetailState('')
        const usersResponse = await userProvider.getUsers()
        setItemsToEdit(usersResponse)
    }
    const getProjets = async () => {
        setDetailState('')
        const projectsResponse = await projectsProvider.getProjects()
        setItemsToEdit(projectsResponse.docs)
    }
    const getSells = async () => {
        setDetailState('')
        const projectsResponse = await pricingProvider.getPreference()
        const sellsFiltered = projectsResponse.filter(item => item.payId)
        setItemsToEdit(sellsFiltered)
    }
    const getPlanPrices = async () => {
        setDetailState('')
        const Response = await planProvider.getPlans()
        setItemsToEdit(Response)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleClick()
        }
    }
    const getProjectName = async (name) => {
        setItemsToEdit([])
        const projectsResponse = await projectsProvider.getProjectByName(name)
        if (projectsResponse.length === 0) return window.alert('No existen coincidencias con el nombre proporcionado')
        else setItemsToEdit(projectsResponse)
    }
    const getUsEmail = async (email) => {
        setItemsToEdit([])
        const usersResponse = await userProvider.getUserByEmail(email)
        if (usersResponse === null) {
            return window.alert('No existen coincidencias con el nombre proporcionado')
        }
        else setItemsToEdit([usersResponse])
    }
    console.log('esto es items to edit', itemsToEdit);
    return (
        <div className={style.searBar}>

            <div className={style.containerTitle}>
                <img src="./images/LogoPanelAdmin.png" alt="" />

            </div>
            <div className={style.containerButtons}>
                <div className={style.buttons3}>
                    <label htmlFor="">Search</label>
                    <input
                        className={style.input}
                        type="text"
                        name='search'
                        value={name}
                        placeholder='Insert email or project'
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
                    />

                    <button className={style.button} onClick={() => { handleClick() }}><BsSearch /></button>
                </div>
                <div className={style.buttons1}>
                    <label htmlFor="">Show</label>
                    <button onClick={getUs}>Users</button>
                    <button onClick={getProjets}>Projects</button>
                    <button onClick={getSells}>Sells</button>
                    <button onClick={getPlanPrices}>Plans Prices</button>
                </div>

                <div className={style.buttons2}>
                    <label htmlFor="">Create</label>
                    <button><NavLink to={'/createProject'}>Create Project</NavLink></button>
                </div>

                <div className={style.buttons2}>
                    <label htmlFor="">Back</label>
                    <button><NavLink to={'/'}>Home</NavLink></button>
                </div>
            </div>
        </div>
    )
}