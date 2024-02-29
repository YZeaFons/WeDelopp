import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import NavBar from './components/navBar/NavBar'
import Home from './pages/home/Home'
import { Quote } from './pages/quote/Quote'
import ContactUs from './pages/contactUs/ContactUs'
import Projects from './pages/projects/Projects'
import AdminWindow from './pages/adminWindow/AdminWindow'
import CreateProject from './components/adminUtils/createProject/CreateProject'
import ProjectDetails from './components/details/DetailProyects'
import ReviewsAll from './pages/reviewsAll/ReviewsAll'
import UserAdmin from './components/adminUtils/usersAdmin/UserAdmin'
import NotFound from './pages/notFound/NotFound'
import AdminDetail from './components/adminUtils/adminDetail/AdminDetail'
import { useState } from 'react'
import { Payment } from './pages/payment/Payment'
import axios from 'axios'
import { getUserData } from './helpers/local'
import { useDispatch, useSelector } from 'react-redux'

axios.defaults.baseURL = 'https://wedelopp-production.up.railway.app'
// axios.defaults.baseURL = 'http://localhost:3001/'


function App() {
  const data = useSelector(state => state.userData)
  const [selectedOptions, setSelectedOptions] = useState([])
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const localStorageUser = getUserData()
  const [localData, setLocalData] = useState(localStorageUser)
  const location = useLocation()

  return (
    <>
      {location.pathname !== '/admin'
        && location.pathname !== '/createProject'
        && location.pathname !== '/createUser'
        && location.pathname !== '/useraccount'
        && location.pathname !== '/spinner'
        && location.pathname !== '/quote'
        && <NavBar setLocalData={setLocalData} />}


      < Routes >
        <Route path="/" element={<Home loading={loading} setLoading={setLoading} />}></Route>
        <Route path="/quote" element={<Quote />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/projects" element={<Projects setSelectedOptions={setSelectedOptions} selectedOptions={selectedOptions} />}></Route>
        <Route path="/projects/:id" element={<ProjectDetails />}></Route>
        <Route path="/admin" element={<AdminWindow />}></Route>
        <Route path="admin/:id" element={<AdminDetail />}></Route>
        <Route path="/createProject" element={<CreateProject />}></Route>
        <Route path="/createUser" element={<UserAdmin />}></Route>
        <Route path="/reviews" element={<ReviewsAll />}></Route>
        <Route path="/successpayment" element={<Payment />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/payment" element={<Payment />}></Route>

      </Routes >


    </>
  )
}

export default App