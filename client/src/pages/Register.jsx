import { useState } from 'react'
// ĐÃ SỬA: Import biến API từ file cấu hình api.js thay vì dùng axios gốc
import API from '../api' 
import { useNavigate } from 'react-router-dom'

export default function Register() {

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const register = async () => {

        if (!name || !phone || !password) {
            alert('Nhập đầy đủ thông tin')
            return
        }

        try {
            setLoading(true)

            // ĐÃ SỬA: Chuyển đổi từ axios.post sang API.post và dùng endpoint ngắn gọn
            await API.post('/auth/register', {
                name,
                phone,
                password
            })

            setLoading(false)
            alert('Đăng ký thành công')
            navigate('/login')

        } catch (err) {
            setLoading(false)
            console.log(err)
            alert('Đăng ký thất bại')
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
                    Create Account
                </h1>
                <p style={{ color: '#94a3b8' }}>
                    Join Kingston Wallet
                </p>
            </div>

            <input
                placeholder='Full Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                    width: '100%',
                    padding: '18px',
                    borderRadius: '18px',
                    border: '1px solid #334155',
                    background: '#1e293b',
                    color: 'white',
                    marginTop: '15px',
                    outline: 'none',
                    boxSizing: 'border-box'
                }}
            />

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
                    boxSizing: 'border-box'
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
                    boxSizing: 'border-box'
                }}
            />

            <button
                onClick={register}
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
                    opacity: loading ? 0.7 : 1,
                    cursor: 'pointer'
                }}
            >
                {loading ? 'Loading...' : 'Create Account'}
            </button>

            <div style={{
                textAlign: 'center',
                marginTop: '25px'
            }}>
                <p style={{ color: '#94a3b8' }}>
                    Already have account?
                </p>
                <p
                    onClick={() => navigate('/login')}
                    style={{
                        color: '#22c55e',
                        marginTop: '15px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    Login Here
                </p>
            </div>
        </div>
    )
}