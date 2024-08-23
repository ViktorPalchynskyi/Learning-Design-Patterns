import style from './style.module.scss';

export const Kelvin = ({ value }) => (
    <div className={style.temp}>{parseInt(value || 0) + 273.15}K</div>
);
