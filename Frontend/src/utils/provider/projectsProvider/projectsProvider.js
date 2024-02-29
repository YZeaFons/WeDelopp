import axios from "axios"


const projectsProvider = {

    async getProjects(page) {
        try {
            if (!page) page = 1
            const getProjects = await axios.get(`/projects?page=${page}`)
            return getProjects.data
        } catch (error) {
            return error.message
        }
    },
    async postProjects(project) {
        try {
            const newProjects = await axios.post(`/projects`, project)
            return newProjects
        } catch (error) {
            return error.message
        }
    },
    async getProjectById(id) {
        try {
            const getProyectsId = await axios.get(`/projects/${id}`)
            return getProyectsId.data
        } catch (error) {
            return error.message
        }
    },


    async getProjectByCategory(object) {
        try {
            const getProyectsCategory = await axios.get(`/projects/category`, { params: object })
            return getProyectsCategory.data
        } catch (error) {
            return error.message
        }
    },

    async uploadImg(imgFile) {
        try {
            const url = `https://api.imgbb.com/1/upload?key=9435bd9e0656491504055e47dbc66e6c&name=${imgFile.name}`
            const data = new FormData();
            data.append("image", imgFile);
            const upload = await fetch(url, {
                method: "POST",
                body: data
            })
            const responseData = await upload.json()
            return responseData
        } catch (error) {
            return error.message
        }
    },
    async getProjectByName(name) {
        try {
            const getProjectsName = await axios.get(`/projects/name?name=${name}`)
            return getProjectsName.data
        } catch (error) {
            return error.message
        }
    },
    async putProject(info) {
        try {
            const newUserAdmin = await axios.put(`/projects`, info)
            return newUserAdmin.data
        } catch (error) {
            return error.message
        }
    },
    async getProjectsAll() {
        try {
            const allProjects = await axios.get(`/allprojects`)
            return allProjects.data
        } catch (error) {
            return error.message
        }
    },


}

export default projectsProvider