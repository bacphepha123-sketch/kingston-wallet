export default function Loading() {

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
                width: '70px',
                height: '70px',
                border: '6px solid #1e293b',
                borderTop: '6px solid #22c55e',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
            }} />

            <h2 style={{
                marginTop: '25px'
            }}>
                Kingston Loading...
            </h2>

            <style>
                {`
                    @keyframes spin {
                        0% {
                            transform: rotate(0deg);
                        }

                        100% {
                            transform: rotate(360deg);
                        }
                    }
                `}
            </style>

        </div>

    )

}