import {
    useNavigate,
    useLocation
} from 'react-router-dom'

export default function BottomNav() {

    const navigate = useNavigate()

    const location = useLocation()

    const active = (path) => {

        return location.pathname === path

    }

    return (

        <div style={{
            position: 'fixed',
            bottom: '0',
            left: '0',
            right: '0',
            background: '#0f172a',
            borderTop: '1px solid #1e293b',
            display: 'flex',
            justifyContent: 'space-around',
            padding: '15px 10px',
            zIndex: 999
        }}>

            {/* HOME */}

            <div
                onClick={() => navigate('/dashboard')}
                style={{
                    color: active('/dashboard')
                        ? '#22c55e'
                        : '#94a3b8',
                    textAlign: 'center',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                }}
            >

                <div style={{
                    fontSize: '22px'
                }}>
                    🏠
                </div>

                <p style={{
                    marginTop: '5px',
                    fontSize: '13px'
                }}>
                    Home
                </p>

            </div>

            {/* DEPOSIT */}

            <div
                onClick={() => navigate('/deposit')}
                style={{
                    color: active('/deposit')
                        ? '#22c55e'
                        : '#94a3b8',
                    textAlign: 'center',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                }}
            >

                <div style={{
                    fontSize: '22px'
                }}>
                    💰
                </div>

                <p style={{
                    marginTop: '5px',
                    fontSize: '13px'
                }}>
                    Deposit
                </p>

            </div>

            {/* WITHDRAW */}

            <div
                onClick={() => navigate('/withdraw')}
                style={{
                    color: active('/withdraw')
                        ? '#22c55e'
                        : '#94a3b8',
                    textAlign: 'center',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                }}
            >

                <div style={{
                    fontSize: '22px'
                }}>
                    💸
                </div>

                <p style={{
                    marginTop: '5px',
                    fontSize: '13px'
                }}>
                    Withdraw
                </p>

            </div>

            {/* HISTORY */}

            <div
                onClick={() => navigate('/history')}
                style={{
                    color: active('/history')
                        ? '#22c55e'
                        : '#94a3b8',
                    textAlign: 'center',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                }}
            >

                <div style={{
                    fontSize: '22px'
                }}>
                    📜
                </div>

                <p style={{
                    marginTop: '5px',
                    fontSize: '13px'
                }}>
                    History
                </p>

            </div>

            {/* PROFILE */}

            <div
                onClick={() => navigate('/profile')}
                style={{
                    color: active('/profile')
                        ? '#22c55e'
                        : '#94a3b8',
                    textAlign: 'center',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                }}
            >

                <div style={{
                    fontSize: '22px'
                }}>
                    👤
                </div>

                <p style={{
                    marginTop: '5px',
                    fontSize: '13px'
                }}>
                    Profile
                </p>

            </div>

        </div>

    )

}