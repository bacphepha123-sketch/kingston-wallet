import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import API from '../api'
import BottomNav from '../components/BottomNav'
import toast from 'react-hot-toast'
export default function Withdraw() {

    const navigate = useNavigate()

    const [amount, setAmount] = useState('')
    const [loading, setLoading] = useState(false)

    const withdraw = async () => {

        if (!amount) {

            alert('Nhập số tiền')

            return

        }

        try {

            setLoading(true)

            await API.post('/auth/withdraw', {
                amount: Number(amount)
            })

            setLoading(false)

            toast.success('Withdraw successful')

            setAmount('')

            navigate('/dashboard')

        } catch (err) {

            setLoading(false)

            console.log(err)

            toast.error('Withdraw failed')

        }

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
                Withdraw
            </h1>

            <p style={{
                color: '#94a3b8',
                marginTop: '-10px'
            }}>
                Withdraw your balance
            </p>

            <div style={{
                background: 'linear-gradient(135deg,#1e293b,#334155)',
                padding: '25px',
                borderRadius: '25px',
                marginTop: '30px',
                border: '1px solid #334155'
            }}>

                <input
                    type='number'
                    placeholder='Enter amount'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '18px',
                        borderRadius: '15px',
                        border: 'none',
                        background: '#0f172a',
                        color: 'white',
                        fontSize: '18px',
                        outline: 'none',
                        boxSizing: 'border-box'
                    }}
                />

                <button
                    onClick={withdraw}
                    disabled={loading}
                    style={{
                        width: '100%',
                        padding: '18px',
                        marginTop: '20px',
                        border: 'none',
                        borderRadius: '18px',
                        background: loading
                            ? '#334155'
                            : 'linear-gradient(135deg,#ef4444,#dc2626)',
                        color: 'white',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        boxShadow: '0 10px 25px rgba(239,68,68,0.3)',
                        opacity: loading ? 0.7 : 1,
                        cursor: 'pointer'
                    }}
                >

                    {
                        loading
                            ? 'Loading...'
                            : 'Withdraw Now'
                    }

                </button>

            </div>

            <BottomNav />

        </div>

    )

}