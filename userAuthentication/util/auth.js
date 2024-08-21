import axios from "axios";

const API_KEY = 'AIzaSyAoz8M8hrbum_8eMRBe4PdU-WCkSGRUi9s'

async function autheniticate(mode, email, password) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`

    const response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true
    })

    const token = response.data.idToken
    return token

}
export function createUser(email, password) {
    return autheniticate('signUp', email, password)
}
export function login(email, password) {
    return autheniticate('signInWithPassword', email, password)
}