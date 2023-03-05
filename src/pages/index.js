import axios from "axios";
import Card from "../components/Card";
import CardsWrapper from "../components/CardsWrapper";

export default function Home({books = []}) {
  return (
    <div>
      <main>
        <div className="container">
          <div>
            <section>
                <CardsWrapper>
                  {
                    books?.length > 0  && books.map(book =>
                      <Card 
                        key={book.id}
                        id={book.id}
                        image={book.attributes?.image?.data?.attributes?.url}
                        title={book.attributes.Title}
                        year={book.attributes.Year}
                        summ={book.attributes.summ}
                      />
                    )
                  }                 
                </CardsWrapper>
            </section>
          </div>
        </div>
      </main>

    </div>
  )
}

export async function getServerSideProps(ctx) {
  try {
    const link =`${process.env.NEXT_PUBLIC_API}/api/books?populate=*&filters[inStock][$eq]=true${ctx.query.search ? `&filters[title][$containsi]=${ctx.query.search}` : ''}`
    const res = await axios.get(link)

    return {
      props: {
        books: res.data?.data || []
      }
    }
  } catch (error) {
    return {
      props: {
        books: []
      }
    }
  }
}