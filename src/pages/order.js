import dynamic from "next/dynamic";
const COrder = dynamic(() => import('../components/COrder'), {ssr: false});

const Order = () => {
    return (
        <COrder />
    );
}

export default Order;
