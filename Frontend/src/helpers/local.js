export const userDate = (key, elements) => {
    const getUserLocal = JSON.parse(localStorage.getItem('info'));
    if(!getUserLocal?.email){
        const setUserLocal = localStorage.setItem(key, JSON.stringify(elements))   
        return setUserLocal
    }
    return getUserLocal
}

export const clearLocalStorage = () => {
    localStorage.removeItem('info');
};


export const getUserData = () => {
    const userLocal = JSON.parse(localStorage.getItem('info'));
    return userLocal
};
