const express = require('express');
const postUsers = require('../controllers/postUsers');
const postProject = require('../controllers/postProject');
const getUsers = require('../controllers/getUsers');
const postReviews = require('../controllers/postReviews');
const getReviews = require('../controllers/getReviews');
const getUserByEmail = require('../controllers/getUserByEmail');
const getProjects = require('../controllers/getProjects');
const getProjectById = require('../controllers/getProjectById');
const putProject = require('../controllers/putProject');
const getProjectByName = require('../controllers/getProjectByName');
const getProjectByCategory = require('../controllers/getProjectByCategory');
const putUser = require('../controllers/putUser');
const getAllProjects = require('../controllers/getAllProjects');
const postPreference = require('../controllers/postPreference');
const getReviewByRating = require('../controllers/getReviewByRating');
const postMercadoPago = require('../controllers/postMercadoPago');
const getPaymentMP = require('../controllers/getPaymentMP');
const getPreferenceByEmailBD = require('../controllers/getPreferenceByEmail');
const getReviewsAll = require('../controllers/getReviewsAll');
const getPreferences = require('../controllers/getPreferences');
const getPreferenceByMail = require('../controllers/getPreferenceByMail');
const getPlans = require('../controllers/getPlans');
const getPlanByType = require('../controllers/getPlanByType');
const putPlan = require('../controllers/putPlan');
const postPlan = require('../controllers/postPlan');
const getPlanById = require('../controllers/getPlanById');
const refreshPaymentMP = require('../controllers/refreshPayment');



const router = express.Router();

router.post("/createpreference", postPreference)
router.get('/projects/category', getProjectByCategory)
router.get('/projects/name', getProjectByName)
router.get('/projects/:id', getProjectById)
router.get('/projects', getProjects)
router.get('/allprojects', getAllProjects)
router.get('/users', getUsers)
router.get('/users/email', getUserByEmail)
router.put('/projects', putProject)
router.post('/login', postUsers)
router.post('/projects', postProject)
router.post('/reviews', postReviews)
router.get('/reviews/rating', getReviewByRating)
router.get('/reviewsall', getReviewsAll)
router.get('/reviews', getReviews)
router.put('/users', putUser)
router.get("/preference", getPreferences)
router.post("/preference", postPreference)
router.post('/success', postMercadoPago);
router.get('/successpayment', getPaymentMP);
router.get('/refreshpayment', refreshPaymentMP);
router.get('/getpreference', getPreferenceByEmailBD);
router.get('/getpreference/email', getPreferenceByMail);
router.get('/plans', getPlans);
router.get('/getplanbyid', getPlanById);
router.put('/plans', putPlan);
router.get('/planstype', getPlanByType);
router.post('/plans', postPlan);


module.exports = router