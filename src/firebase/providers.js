import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";


const googleProvider = new GoogleAuthProvider()

export const singInWithGoogle = async() => {

    try {
        
        const result = await signInWithPopup( FirebaseAuth, googleProvider )
        // const credentials = GoogleAuthProvider.credentialFromResult( result ) // desde aqui obtenemos las credenciales como el access token para verificar usuarios y muchas cosas
        
        const { displayName, email, photoURL, uid } = result.user

        return{
            ok: true,
            // User info
            displayName, email, photoURL, uid
        }

    } catch (error) {
        const errorCode = error.code
        const errorMessage = error.message
        // Cuenta de mail utilizada por el usuario
        // const email = error.customData.email
        // Tipo de credencial de autenticación utilizada
        // const credential = GoogleAuthProvider.credentialFromError(error)

        return{
            ok: false,
            errorCode,
            errorMessage,
        }
    }

}


export const registerUserWithEmailPassword = async({ email, password, displayName }) => {

    try {

        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password )
        const { uid, photoURL, displayName } = resp.user

        await updateProfile( FirebaseAuth.currentUser, { displayName } )

        return {
            ok: true,
            uid, photoURL, email, displayName
        }
        
    } catch (error) {
        // console.log(error)
        return { ok: false, errorMessage: !!'auth/email-already-in-use' ? 'Existe un usuario registrado con el mismo email' : error.message }
    }

}

export const loginWithEmailpassword = async({ email, password }) => {

    try {

        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password )
        const { uid, photoURL, displayName } = resp.user
        return {
            ok: true,
            uid, photoURL, email, displayName
        }
        
    } catch (error) {
        console.log(error)
        return { ok: false, errorMessage: !!'auth/invalid-credential' ? 'Usuario o contraseña incorrecta' : error.message }

    }

}

export const logoutFirebase = async() => {

    return await FirebaseAuth.signOut()

}