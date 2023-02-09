import React, {useState} from 'react';



function LoginPage(props) {

    const [username, setUsername] = useState('');
    const onChange = evt => setUsername(evt.target.value);
    const onClick = () => {
        props.onLogin(username);
    }

  return (
    <>
        <div className="chat-title">GusTheChat</div>
        <div className="chat-login-page-container">
        <div className="chat-login-page-controls-container">
            <h4>Set your username</h4>
            <p className='size-message'>1-25 characters</p>
            <input  className='login-input'
                    type='text'
                    placeholder="Username"
                    value={username}
                    onChange={onChange} />
            <button className="login-button"
                    type="button"
                    onClick={onClick}
                    disabled={(username.length===0) || (username.length > 25)}>
                        Login
                        </button>
        </div>
    </div>
    </>
  );
}

export default LoginPage;
