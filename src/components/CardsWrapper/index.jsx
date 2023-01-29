import cls from './CardsWrapper.module.scss'

const CardsWrapper = ({children}) => {
    return (
        <div className={cls.box}>
            {children}
        </div>
    );
}

export default CardsWrapper;
