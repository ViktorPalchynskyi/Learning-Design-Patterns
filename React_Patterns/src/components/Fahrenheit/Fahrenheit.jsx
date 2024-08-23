import style from './style.module.scss';

export const Fahrenheit = ({ value }) => (
    <div className={style.temp}>
        {(parseInt(value || 0) * 9) / 5 + 32}°F
    </div>
);
