import './Login.scss'

function Login() {
    return (  
        <div className="log-in">
            <div className="container">
                <p>Welcome to our online shop</p>
                <div className="lang-log">
                    <select>
                        <option value="eng">English</option>
                        <option value="rus">Russian</option>
                        <option value="uzb">Uzbek</option>
                    </select>
                    <h4>Login or Sign up</h4>
                </div>
            </div>
        </div>
    );
}

export default Login;