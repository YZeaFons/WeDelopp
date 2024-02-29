import style  from './BarProgress.module.css'
const BarProgress = ({progressBar}) => {
    return (
        <div className={style.containerBar}>
        <div className={style.bar}>
            <div className={style.porcentaje} style={{ width: `${progressBar}%` }}></div>
        </div>
        </div>
    )
}

export default BarProgress