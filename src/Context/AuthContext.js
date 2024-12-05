import { createContext, useState } from "react";

export const AuthContext = createContext(0);

function AuthProvider({ children }) {
    const [logado, setLogado] = useState(true);
    const [error, setError] = useState(true);
    const [ usuario, setUsuario ] = useState();
    const [procedimento, setProcedimento] = useState();

    async function Login(email, senha) {

        if (email != "" && senha != "") {
            await fetch('http://10.133.22.24:5251/api/Cliente/Login', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    emailCliente: email,
                    senhaCliente: senha
                })
            })
                .then(res => res.json() )
                .then(json => {
                    setUsuario( json );
                    setLogado(true);
                    setError(false);
                }
                )
                .catch(err => setError(true))
        } else {
            setError(true)
        }
    }

    return (
        <AuthContext.Provider value={{ logado: logado, Login, error: error, usuario: usuario, procedimento: procedimento, setProcedimento }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;