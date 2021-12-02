import React from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom';
import { getInvoices } from './data'

function Invoices() {
    let invoices = getInvoices();
    const [searchParams, setSearchParams] = useSearchParams();
    const changeHandler = (event) => {

        let filter = event.target.value;
        if (filter) {
            setSearchParams( {filter} );
        } else {
            setSearchParams({});
        }

    }
    console.log("hello");
    const filteredInvoices = invoices.filter(invoice => {
        if (!searchParams.get('filter')) return true;
        return invoice.name.toLowerCase().startsWith(searchParams.get('filter').toLowerCase());
    })

    return (
        <div style={{ display: "flex" }}>
            <nav
                style={{
                    borderRight: "solid 1px",
                    padding: "1rem"
                }}
            >
                <input
                    value={searchParams.get("filter") || ""}
                    onChange={changeHandler}
                />
                {filteredInvoices.map(invoice => (
                    <Link
                        style={{ display: "block", margin: "1rem 0" }}
                        to={`/invoices/${invoice.number}`}
                        key={invoice.number.toString()}
                    >
                        {invoice.name}
                    </Link>
                ))}
            </nav>
            <Outlet />
        </div>
    )
}

export default Invoices
