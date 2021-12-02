import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { getInvoice,deleteInvoice } from './data'
function Invoice() {
    const params = useParams();
    const navigate = useNavigate();
    const invoice = getInvoice(+params.invoiceNumber)
    const clickHandler = (event) => {
        deleteInvoice(+params.invoiceNumber)
        navigate("/invoices");
    }
    const payDueHandler = (event) => {
        navigate("/payment",{state:{name:invoice.name,totalDue:invoice.amount}});
    }
    return (
        <main style={{ padding: "1rem" }}>
            <h2>Total Due: {invoice.amount}</h2>
            <p>
                {invoice.name}: {invoice.number}
            </p>
            <p>Due Date: {invoice.due}</p>
            <button style={{ padding: "1rem" }} onClick={clickHandler}>Programatic Navigation</button>
            <button style={{ padding: "1rem" }} onClick={payDueHandler}>Pay Due</button>
        </main>
    )
}

export default Invoice
