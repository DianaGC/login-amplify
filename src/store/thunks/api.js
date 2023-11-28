import {signOut} from '@aws-amplify/auth'

export const logout = async () => {
    try {
        await signOut({ global: true });
        window.location.replace("/");

    } catch (error) {
        console.log('error signing out: ', error);
    }
}
