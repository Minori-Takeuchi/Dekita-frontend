import { useState } from 'react';
import { auth } from '../firebase';
import { useAuthContext } from '../context/AuthContext';

const SignUp = () => {
  const { user } = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      await auth.createUserWithEmailAndPassword(email, password)
      alert("登録が完了しました")
    } catch (error) {
      alert("登録に失敗しました")
      console.log(error)
    }
  }
  const handleChangeEmail = (e) => {
    setEmail(e.currentTarget.value);
  }
  const handleChangePassword = (e) => {
    setPassword(e.currentTarget.value);
  }

  return (
    <div>
      <h1>ユーザー登録</h1>
      <p>{ user.email }</p>
      <form onSubmit={handleSubmit}>
        <div>
            <label>メールアドレス</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={(e) => handleChangeEmail(e)}
          />
        </div>
        <div>
          <label>パスワード</label>
          <input
            name="password"
            type="password"
            onChange={(e) => handleChangePassword(e)}
          />
        </div>
        <div>
          <button>登録</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;