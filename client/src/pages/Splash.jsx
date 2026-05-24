import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Splash() {

    const navigate = useNavigate()

    useEffect(() => {

        const token = localStorage.getItem('token')

        setTimeout(() => {

            if (token) {

                navigate('/')

            } else {

                navigate('/login')

            }

        }, 2500)

    }, [])

    return (

        <div style={{
            background: '#020617',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: 'white',
            fontFamily: 'Arial'
        }}>

            <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '30px',
                background: 'linear-gradient(135deg,#22c55e,#16a34a)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '45px',
                fontWeight: 'bold',
                boxShadow: '0 20px 50px rgba(34,197,94,0.3)'
            }}>
                K
            </div>

            <h1 style={{
                marginTop: '30px',
                fontSize: '45px'
            }}>
                Kingston
            </h1>

            <p style={{
                color: '#94a3b8',
                marginTop: '-10px'
            }}>
                Secure Crypto Wallet
            </p>

            <div style={{
                width: '180px',
                height: '6px',
                background: '#1e293b',
                borderRadius: '20px',
                marginTop: '40px',
                overflow: 'hidden'
            }}>

                <div style={{
                    width: '60%',
                    height: '100%',
                    background: '#22c55e',
                    animation: 'loading 2s linear infinite'
                }} />

            </div>

            <style>
                {`
                    @keyframes loading {

                        0% {
                            margin-left: -60%;
                        }

                        100% {
                            margin-left: 100%;
                        }

                    }
                `}
            </style>

        </div>

    )

}