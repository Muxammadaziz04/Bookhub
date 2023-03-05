import axios from "axios";
import SingleItem from "../../components/SingleItem";

const SinglePage = ({book}) => {
    return (
        <>
         <SingleItem 
            id={book.id}
            title={book.attributes?.Title}
            author={book.attributes?.Author}
            desc={book.attributes?.description}
            year={book.attributes?.Year}
            image={book.attributes?.image?.data?.attributes?.url}
            summ={book.attributes.summ}
         />   
        </>
    );
}

export default SinglePage;

export async function getServerSideProps(ctx) {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/api/books/${ctx.params.id}?populate=*`)
        return {
            props: {
                book: res.data?.data
            }
        }
    } catch (error) {
        
    }
}
