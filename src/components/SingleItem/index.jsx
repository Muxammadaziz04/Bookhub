import cls from './SingleItem.module.scss'

const SingleItem = () => {
    return (
        <div className='container'>
            <div className={cls.box}>
                <div className={cls.box__image}>
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20190709182914/Programming-Python.jpg" alt="" />
                </div>
                <div className={cls.box__info}>
                    <div className={cls.text}><span>Name:</span> Python</div>
                    <div className={cls.text}><span>Author:</span> Shaxriyor Abbosov</div>
                    <div className={cls.text}><span>Year:</span> 2009</div>
                    <div className={cls.text}><span>Description:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor necessitatibus minus cum labore animi sequi nam accusamus a, illo debitis possimus aspernatur inventore doloribus. Accusantium ad corporis odit! Molestiae, at.</div>
                    <button className={cls.btn}>Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default SingleItem;
