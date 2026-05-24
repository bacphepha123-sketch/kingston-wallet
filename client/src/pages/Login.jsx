import toast from 'react-hot-toast'
import { useState } from 'react'
// ĐÃ SỬA: Import biến API từ file cấu hình api.js thay vì dùng axios gốc
import API from '../api' 
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const navigate = useNavigate()

    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const login = async () => {

        if (!phone || !password) {
            alert('Nhập đầy đủ thông tin')
            return
        }

        try {
            setLoading(true)

            // ĐÃ SỬA: Chuyển đổi từ axios.post sang API.post và rút gọn endpoint
            const res = await API.post('/auth/login', {
                phone,
                password
            })

            localStorage.setItem(
                'token',
                res.data.token
            )

            setLoading(false)
            toast.success('Login successful')
            navigate('/dashboard')

        } catch (err) {
            setLoading(false)
            console.log(err)
            toast.error('Invalid credentials')
        }
    }

    return (
        <div style={{
            background: '#020617',
            minHeight: '100vh',
            padding: '20px',
            color: 'white',
            fontFamily: 'Arial',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>

            <div style={{ marginBottom: '40px' }}>
                <h1 style={{
                    fontSize: '42px',
                    fontWeight: 'bold',
                    marginBottom: '10px'
                }}>
                    Kingston
                </h1>
                <p style={{
                    color: '#94a3b8',
                    fontSize: '16px'
                }}>
                    Welcome back to your wallet
                </p>
            </div>

            <input
                type='number'
                placeholder='Phone Number'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{
                    width: '100%',
                    padding: '18px',
                    borderRadius: '18px',
                    border: '1px solid #334155',
                    background: '#1e293b',
                    color: 'white',
                    marginTop: '15px',
                    outline: 'none',
                    boxSizing: 'border-box',
                    fontSize: '16px'
                }}
            />

            <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                    width: '100%',
                    padding: '18px',
                    borderRadius: '18px',
                    border: '1px solid #334155',
                    background: '#1e293b',
                    color: 'white',
                    marginTop: '15px',
                    outline: 'none',
                    boxSizing: 'border-box',
                    fontSize: '16px'
                }}
            />

            <button
                onClick={login}
                disabled={loading}
                style={{
                    width: '100%',
                    padding: '18px',
                    marginTop: '25px',
                    border: 'none',
                    borderRadius: '18px',
                    background: loading
                        ? '#334155'
                        : 'linear-gradient(135deg,#22c55e,#16a34a)',
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    boxShadow: '0 10px 25px rgba(34,197,94,0.3)',
                    opacity: loading ? 0.7 : 1,
                    cursor: 'pointer'
                }}
            >
                {loading ? 'Loading...' : 'Login'}
            </button>

            <div style={{
                textAlign: 'center',
                marginTop: '25px'
            }}>
                <p style={{ color: '#94a3b8' }}>
                    Secure Crypto Wallet
                </p>
                <p
                    onClick={() => navigate('/register')}
                    style={{
                        color: '#22c55e',
                        marginTop: '15px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    Create New Account
                </p>
            </div>
        </div>
    )
}