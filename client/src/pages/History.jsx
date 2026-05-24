import { useEffect, useState } from 'react'

import API from '../api'
import BottomNav from '../components/BottomNav'
import Loading from './Loading'

export default function History() {

    const [transactions, setTransactions] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        getTransactions()

    }, [])

    const getTransactions = async () => {

        try {

            const res = await API.get('/auth/transactions')

            setTransactions(res.data)

            setLoading(false)

        } catch (err) {

            console.log(err)

            setLoading(false)

        }

    }

    if (loading) {

        return <Loading />

    }

    return (

        <div style={{
            background: '#020617',
            minHeight: '100vh',
            padding: '20px',
            color: 'white',
            fontFamily: 'Arial',
            paddingBottom: '100px'
        }}>

            <h1>
                Transaction History
            </h1>

            <p style={{
                color: '#94a3b8',
                marginTop: '-10px'
            }}>
                Your recent activities
            </p>

            {
                transactions.length === 0 && (

                    <div style={{
                        background: '#1e293b',
                        padding: '30px',
                        borderRadius: '25px',
                        marginTop: '20px',
                        textAlign: 'center',
                        border: '1px solid #334155'
                    }}>

                        <h3>
                            No Transactions
                        </h3>

                        <p style={{
                            color: '#94a3b8'
                        }}>
                            Your transaction history is empty
                        </p>

                    </div>

                )
            }

            {
                transactions.map((item) => (

                    <div
                        key={item._id}
                        style={{
                            background: '#1e293b',
                            padding: '20px',
                            borderRadius: '25px',
                            marginTop: '15px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            border: '1px solid #334155'
                        }}
                    >

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px'
                        }}>

                            <div style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '15px',
                                background:
                                    item.type === 'deposit'
                                        ? 'rgba(34,197,94,0.15)'
                                        : 'rgba(239,68,68,0.15)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontSize: '22px'
                            }}>

                                {
                                    item.type === 'deposit'
                                        ? '💰'
                                        : '💸'
                                }

                            </div>

                            <div>

                                <h3 style={{
                                    textTransform: 'capitalize',
                                    margin: 0
                                }}>
                                    {item.type}
                                </h3>

                                <p style={{
                                    color: '#94a3b8',
                                    marginTop: '5px',
                                    fontSize: '14px'
                                }}>
                                    Successful transaction
                                </p>

                            </div>

                        </div>

                        <div style={{
                            textAlign: 'right'
                        }}>

                            <h2 style={{
                                color:
                                    item.type === 'deposit'
                                        ? '#22c55e'
                                        : '#ef4444',
                                margin: 0
                            }}>
                                {item.type === 'deposit' ? '+' : '-'}
                                ${Number(item.amount).toLocaleString()}
                            </h2>

                            <p style={{
                                color: '#64748b',
                                fontSize: '13px',
                                marginTop: '5px'
                            }}>
                                Completed
                            </p>

                        </div>

                    </div>

                ))
            }

            <BottomNav />

        </div>

    )

}