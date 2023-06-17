import { RetweetOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import axios from "axios";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useEffect } from "react";
import CardItem from "../components/CardItem";
import parseTimestamp from "../utils/parseTimestamp";

const History = ({ orders }) => {
    const router = useRouter()
    const cookies = parseCookies()
    const { Panel } = Collapse

    useEffect(() => {
        if (!cookies.token) {
            router.push('/auth/login')
        }
    }, [])

    return ( 
        <div className="container" style={{ minHeight: '100vh' }}>
            <Collapse>
                {
                    orders?.length > 0 && orders?.map(order => {
                        const {data, month, year, minutes, hours} = parseTimestamp(order?.attributes?.createdAt)
                        return (
                            <Panel
                                key={order?.id}
                                header={`${order?.attributes?.clientName}, Date: ${data} ${month} ${year} ${hours}:${minutes}, Status: ${order?.attributes?.inProcess ? 'pending' : 'You received an order'} `}
                            >
                                {
                                    order?.attributes?.books?.data?.length > 0 && order?.attributes?.books?.data.map(book =>
                                        <CardItem
                                            key={book.id}
                                            withBtn={false}
                                            image={book?.attributes?.image?.data?.attributes?.url}
                                            title={book?.attributes?.Title}
                                            year={book?.attributes?.Year}
                                            count={book?.attributes?.summ + ' $'}
                                        />
                                    )
                                }
                            </Panel>
                        )

                    })
                }
            </Collapse>
        </div>
    );
}

export default History;

export async function getServerSideProps(ctx) {
    try {
        const cookies = ctx.req.headers.cookie?.split(';')?.reduce((acc, curr) => {
            const [key, value] = curr?.split('=')
            acc[key?.trim()] = value
            return acc
        }, {})
        const link = `${process.env.NEXT_PUBLIC_API}/api/orders?populate=*,books.image&filters[user_id][$eq]=${cookies.user_id || '0'}`
        const res = await axios.get(link)

        return {
            props: {
                orders: res.data?.data || []
            }
        }
    } catch (error) {
        return {
            props: {
                orders: []
            }
        }
    }
}
