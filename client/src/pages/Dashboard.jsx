import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import API from '../api'
import BottomNav from '../components/BottomNav'
import Loading from './Loading'

export default function Dashboard() {

    const navigate = useNavigate()

    const [user, setUser] = useState(null)
    const [btc, setBtc] = useState(62450)
    const [eth, setEth] = useState(3120)
    const [sol, setSol] = useState(145)

    useEffect(() => {
        const market = setInterval(() => {

    setBtc(prev =>
        prev + Math.floor(Math.random() * 200 - 100)
    )

    setEth(prev =>
        prev + Math.floor(Math.random() * 20 - 10)
    )

    setSol(prev =>
        prev + Math.floor(Math.random() * 10 - 5)
    )

}, 3000)

    getProfile()

    const interval = setInterval(() => {

        getProfile()

    }, 5000)

    return () => {

    clearInterval(interval)

    clearInterval(market)

}

}, [])  

    const getProfile = async () => {

    try {

        const res = await API.get('/auth/profile')

        setUser(res.data)

    } catch (err) {

        console.log(err)

        localStorage.removeItem('token')

        navigate('/login')

    }

}

    const logout = () => {

        localStorage.removeItem('token')

        navigate('/login')

    }
    if (!user) {

    return <Loading />

}
    return (

        <div style={{
            background: '#020617',
            minHeight: '100vh',
            color: 'white',
            padding: '20px',
            fontFamily: 'Arial',
            paddingBottom: '100px'
        }}>

            {/* HEADER */}

            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>

                <div>

                    <p style={{
                        color: '#94a3b8'
                    }}>
                        Welcome Back 👋
                    </p>

                    <h1>
                        {user?.name}
                    </h1>

                </div>

                <div style={{
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'center'
                }}>

                    <div style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg,#22c55e,#16a34a)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontWeight: 'bold',
                        fontSize: '20px'
                    }}>
                        {user?.name?.charAt(0)}
                    </div>

                </div>

            </div>

            {/* BALANCE CARD */}

            <div style={{
                background: 'linear-gradient(135deg,#22c55e,#16a34a)',
                padding: '30px',
                borderRadius: '30px',
                marginTop: '30px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
            }}>

                <p>Total Balance</p>

                <h1 style={{
                    fontSize: '45px',
                    marginTop: '10px',
                    fontWeight: 'bold'
                }}>
                    ${Number(user?.balance || 0).toLocaleString()}
                </h1>

                <div style={{
                    display: 'flex',
                    gap: '10px',
                    marginTop: '20px'
                }}>

                    <button
                        onClick={() => navigate('/deposit')}
                        style={{
                            flex: 1,
                            padding: '15px',
                            borderRadius: '15px',
                            border: 'none',
                            background: 'white',
                            color: 'black',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}
                    >
                        Deposit
                    </button>

                    <button
                        onClick={() => navigate('/withdraw')}
                        style={{
                            flex: 1,
                            padding: '15px',
                            borderRadius: '15px',
                            border: 'none',
                            background: '#15803d',
                            color: 'white',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}
                    >
                        Withdraw
                    </button>

                </div>

            </div>
{/* PORTFOLIO CARD */}

<div style={{
    background: '#1e293b',
    padding: '25px',
    borderRadius: '25px',
    marginTop: '20px',
    border: '1px solid #334155'
}}>

    <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }}>

        <div>

            <p style={{
                color: '#94a3b8'
            }}>
                Portfolio Growth
            </p>

            <h2 style={{
                marginTop: '10px'
            }}>
                +24.80%
            </h2>

        </div>

        <div style={{
            width: '70px',
            height: '70px',
            borderRadius: '20px',
            background: 'rgba(34,197,94,0.15)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '30px'
        }}>
            📈
        </div>

    </div>

    <div style={{
        width: '100%',
        height: '10px',
        background: '#0f172a',
        borderRadius: '20px',
        marginTop: '20px',
        overflow: 'hidden'
    }}>

        <div style={{
            width: '78%',
            height: '100%',
            background: 'linear-gradient(135deg,#22c55e,#16a34a)',
            borderRadius: '20px'
        }} />

    </div>

</div>
            {/* MARKET */}

            <div style={{
                display: 'flex',
                gap: '15px',
                marginTop: '25px',
                overflowX: 'auto'
            }}>

                <div style={{
                    minWidth: '140px',
                    background: '#1e293b',
                    padding: '20px',
                    borderRadius: '20px'
                }}>

                    <p style={{
                        color: '#94a3b8'
                    }}>
                        BTC
                    </p>

                    <h2>${btc.toLocaleString()}</h2>

                    <p style={{
                        color: '#22c55e'
                    }}>
                        +4.25%
                    </p>

                </div>

                <div style={{
                    minWidth: '140px',
                    background: '#1e293b',
                    padding: '20px',
                    borderRadius: '20px'
                }}>

                    <p style={{
                        color: '#94a3b8'
                    }}>
                        ETH
                    </p>

                    <h2>$${eth.toLocaleString()}</h2>

                    <p style={{
                        color: '#22c55e'
                    }}>
                        +2.14%
                    </p>

                </div>

                <div style={{
                    minWidth: '140px',
                    background: '#1e293b',
                    padding: '20px',
                    borderRadius: '20px'
                }}>

                    <p style={{
                        color: '#94a3b8'
                    }}>
                        SOL
                    </p>

                    <h2>${sol.toLocaleString()}</h2>

                    <p style={{
                        color: '#22c55e'
                    }}>
                        +8.72%
                    </p>

                </div>

            </div>

            {/* QUICK ACTIONS */}

            <h2 style={{
                marginTop: '30px'
            }}>
                Quick Actions
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '15px',
                marginTop: '15px'
            }}>

                <div
                    onClick={() => navigate('/history')}
                    style={{
                        background: '#1e293b',
                        padding: '25px',
                        borderRadius: '20px',
                        cursor: 'pointer'
                    }}
                >

                    <h3>History</h3>

                    <p style={{
                        color: '#94a3b8'
                    }}>
                        Transactions
                    </p>

                </div>

                <div
                    style={{
                        background: '#1e293b',
                        padding: '25px',
                        borderRadius: '20px'
                    }}
                >

                    <h3>Invest</h3>

                    <p style={{
                        color: '#94a3b8'
                    }}>
                        Crypto Plans
                    </p>

                </div>

            </div>

            {/* INVESTMENT PLANS */}

            <h2 style={{
                marginTop: '30px'
            }}>
                Investment Plans
            </h2>

            {/* STARTER */}

            <div style={{
                background: 'linear-gradient(135deg,#1e293b,#334155)',
                padding: '25px',
                borderRadius: '25px',
                marginTop: '15px',
                border: '1px solid #334155'
            }}>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>

                    <div>

                        <h3>Starter Plan</h3>

                        <p style={{
                            color: '#94a3b8',
                            marginTop: '5px'
                        }}>
                            15% ROI in 7 days
                        </p>

                    </div>

                    <h2 style={{
                        color: '#22c55e'
                    }}>
                        +15%
                    </h2>

                </div>

                <button
                    style={{
                        width: '100%',
                        padding: '15px',
                        border: 'none',
                        borderRadius: '15px',
                        marginTop: '20px',
                        background: '#22c55e',
                        color: 'white',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}
                >
                    Invest Now
                </button>

            </div>
{/* NEWS SECTION */}

<h2 style={{
    marginTop: '30px'
}}>
    Crypto News
</h2>

<div style={{
    background: '#1e293b',
    padding: '20px',
    borderRadius: '25px',
    marginTop: '15px',
    border: '1px solid #334155'
}}>

    <p style={{
        color: '#22c55e',
        fontWeight: 'bold'
    }}>
        Bitcoin Surges
    </p>

    <p style={{
        color: '#94a3b8',
        marginTop: '10px',
        lineHeight: '24px'
    }}>
        BTC continues strong momentum as investors increase crypto exposure globally.
    </p>

</div>

<div style={{
    background: '#1e293b',
    padding: '20px',
    borderRadius: '25px',
    marginTop: '15px',
    border: '1px solid #334155'
}}>

    <p style={{
        color: '#22c55e',
        fontWeight: 'bold'
    }}>
        Ethereum ETF Approved
    </p>

    <p style={{
        color: '#94a3b8',
        marginTop: '10px',
        lineHeight: '24px'
    }}>
        Institutional investors are moving heavily into Ethereum markets this quarter.
    </p>

</div>
            {/* PREMIUM */}

            <div style={{
                background: 'linear-gradient(135deg,#0f172a,#1e293b)',
                padding: '25px',
                borderRadius: '25px',
                marginTop: '15px',
                border: '1px solid #334155'
            }}>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>

                    <div>

                        <h3>Premium Plan</h3>

                        <p style={{
                            color: '#94a3b8',
                            marginTop: '5px'
                        }}>
                            35% ROI in 30 days
                        </p>

                    </div>

                    <h2 style={{
                        color: '#22c55e'
                    }}>
                        +35%
                    </h2>

                </div>

                <button
                    style={{
                        width: '100%',
                        padding: '15px',
                        border: 'none',
                        borderRadius: '15px',
                        marginTop: '20px',
                        background: 'linear-gradient(135deg,#22c55e,#16a34a)',
                        color: 'white',
                        fontWeight: 'bold',
                        boxShadow: '0 10px 20px rgba(34,197,94,0.3)',
                        cursor: 'pointer'
                    }}
                >
                    Invest Now
                </button>

            </div>

            {/* LOGOUT */}

            <button
                onClick={logout}
                style={{
                    width: '100%',
                    padding: '18px',
                    marginTop: '30px',
                    border: 'none',
                    borderRadius: '18px',
                    background: '#ef4444',
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                }}
            >
                Logout
            </button>

            <BottomNav />

        </div>

    )

}