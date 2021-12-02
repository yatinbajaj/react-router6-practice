import React from 'react'
import { Routes, Route,Navigate } from 'react-router-dom'
import Invoices from "../Invoices"
import Expenses from "./Expenses"
import Home from "./Home"
import Invoice from '../Invoice'
import Error404 from './Error404'
import Payment from './Payment'
function AppRoutes() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/myaccount" element={<Navigate to='/' replace />}/>
                <Route path="/invoices" element={<Invoices />}>
                    <Route path=":invoiceNumber" element={<Invoice/>}/>
                </Route>
                <Route path="/expenses" element={<Expenses/>}/>
                <Route path="/payment" element={<Payment/>}/>
                <Route path="*" element={<Error404/>}/>
            </Routes>
        </React.Fragment>
    )
}

export default AppRoutes
