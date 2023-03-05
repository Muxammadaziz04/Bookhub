import cls from "./Loader.module.scss"

const Loader = () => {
    return (
        <div className={cls.loader}>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ margin: 'auto', background: 'rgb(241, 242, 243)', display: 'block', shapeRendering: 'auto' }} width="51px" height="51px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <path d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#194b42" stroke="none">
                        <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 51;360 50 51" />
                    </path>
                </svg>
            </div>
        </div>
    );
}

export default Loader;