import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import API from '../api'
import BottomNav from '../components/BottomNav'

export default function Profile() {

    const navigate = useNavigate()

    const [user, setUser] = useState(null)

    useEffect(() => {
        getProfile()
    }, [])

    const getProfile = async () => {

        try {

            const res = await API.get('/auth/profile')

            setUser(res.data)

        } catch (err) {

            console.log(err)

        }

    }

    const logout = () => {

        localStorage.removeItem('token')

        navigate('/login')

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

            {/* AVATAR */}

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '20px'
            }}>

                <div style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg,#22c55e,#16a34a)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '40px',
                    fontWeight: 'bold'
                }}>
                    {user?.name?.charAt(0)}
                </div>

                <h1 style={{
                    marginTop: '20px'
                }}>
                    {user?.name}
                </h1>

                <p style={{
                    color: '#94a3b8'
                }}>
                    +{user?.phone}
                </p>

            </div>

            {/* INFO CARD */}

            <div style={{
                background: '#1e293b',
                padding: '25px',
                borderRadius: '25px',
                marginTop: '30px',
                border: '1px solid #334155'
            }}>

                <div style={{
                    marginBottom: '20px'
                }}>

                    <p style={{
                        color: '#94a3b8'
                    }}>
                        Account Balance
                    </p>

                    <h2>
                        ${Number(user?.balance || 0).toLocaleString()}
                    </h2>

                </div>

                <div style={{
                    marginBottom: '20px'
                }}>

                    <p style={{
                        color: '#94a3b8'
                    }}>
                        Account Status
                    </p>

                    <h3 style={{
                        color: '#22c55e'
                    }}>
                        Verified
                    </h3>

                </div>

                <div>

                    <p style={{
                        color: '#94a3b8'
                    }}>
                        Wallet Type
                    </p>

                    <h3>
                        Kingston Premium
                    </h3>

                </div>

            </div>

            {/* ACTIONS */}

            <div style={{
                marginTop: '25px',
                display: 'grid',
                gap: '15px'
            }}>

                <button
                    onClick={() => navigate('/deposit')}
                    style={{
                        width: '100%',
                        padding: '18px',
                        border: 'none',
                        borderRadius: '18px',
                        background: '#22c55e',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        cursor: 'pointer'
                    }}
                >
                    Deposit Funds
                </button>

                <button
                    onClick={() => navigate('/withdraw')}
                    style={{
                        width: '100%',
                        padding: '18px',
                        border: 'none',
                        borderRadius: '18px',
                        background: '#1e293b',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        border: '1px solid #334155',
                        cursor: 'pointer'
                    }}
                >
                    Withdraw Funds
                </button>

                <button
                    onClick={logout}
                    style={{
                        width: '100%',
                        padding: '18px',
                        border: 'none',
                        borderRadius: '18px',
                        background: '#ef4444',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        cursor: 'pointer'
                    }}
                >
                    Logout
                </button>

            </div>

            <BottomNav />

        </div>

    )

}