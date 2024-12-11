import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, set, get, child, ref, push } from "firebase/database";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_fireKey ,
    authDomain: import.meta.env.VITE_fireAuthDomain,
    projectId: import.meta.env.VITE_fireProjectId,
    storageBucket: import.meta.env.VITE_fireStorageBucket,
    messagingSenderId: import.meta.env.VITE_fireMessagingSenderId,
    appId: import.meta.env.VITE_fireAppID,
    databaseURL: import.meta.env.VITE_fireDatabaseURL,
};  

export class AuthService{
    app;
    auth;
    database;

    constructor(){
        this.app = initializeApp(firebaseConfig);
        this.auth = getAuth(this.app);
        this.database = getDatabase(this.app);
    }

    async createAccount({email, password}){
        return createUserWithEmailAndPassword(this.auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return user;
        })
        .catch((error) => {
            console.error("error :: create account :: ",error);
            return false;
        });
    }
    async login({email, password}){
        try{
            const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
            if(userCredential){
                const user = userCredential.user;
                return user;
            }
            else{
                return false;
            }
        }
        catch(error){
            console.error("error :: login :: ",error);
            return false;
        };
    }
    async getCurrentUser(){
        const user = this.auth.currentUser;
        if (user) {
            return user.uid;
        } else {
            return null;
        }
    }
    async logout(){
        signOut(this.auth).then(() => {
            return true;
        }).catch((error) => {
            console.error("error :: logout :: ",error);
            return false;
        });
    }
    putData(path, data){
        try{
            const newPostRef = push(ref(this.database, path));
            data.key = newPostRef.key;
            set(newPostRef, data).then(
                () => true
            ).catch(
                (error) => {
                    console.error("error :: putData :: ",error);
                    return false;
                }
            );
        }
        catch(error){
            console.error("error :: putData :: ",error);
            return false;
        }
    }
    async getData(path){
        try{
            const snapshot = await get(child(ref(this.database), path));
            if(snapshot.exists()){
                return snapshot.val();
            } 
            else{
                console.log("No data available");
                return null;
            }
        }
        catch(error){
            console.error("error :: getData :: ",error);
            return null;
        }
    }
    getRef(path){
        try{
            const reference = ref(this.database, path);
            return reference;
        }
        catch(error){
            console.error("error :: getRef :: ",error);
            return null;
        }
    }
    async setAdminPermission({email, permission}){
        try{
            const currentUser = this.auth.currentUser;
            if(!currentUser){
                return false;
            }
            const superAdminSnapshot = await get(ref(this.database, '/superAdmin'));
            let isSuperAdmin = false;
            superAdminSnapshot.forEach((childSnapshot) => {
                if (childSnapshot.val() === currentUser.uid) {
                    isSuperAdmin = true;
                }
            });
            if (!isSuperAdmin) {
                return false;
            }
            const usersSnapshot = await get(ref(this.database, 'users'));
            let uidOfEmail = null;
            usersSnapshot.forEach((childSnapshot) => {
                const user = childSnapshot.val();
                if (user.email === email) {
                    uidOfEmail = user.uid;
                }
            });
            if(!uidOfEmail){
                console.log('here');
                return false;
            }
            if(permission === 'admin'){
                const userRef = push(ref(this.database, '/admin'));
                set(userRef, uidOfEmail).then(
                    () => true
                ).catch(
                    (error) => {
                        console.error("error :: setAdminPermission :: ",error);
                        return false;
                    }
                );
            }
            else if(permission === 'superAdmin'){
                const userRef = push(ref(this.database, '/superAdmin'));
                set(userRef, uidOfEmail).then(
                    () => true
                ).catch(
                    (error) => {
                        console.error("error :: setAdminPermission :: ",error);
                        return false;
                    }
                );
            }
            else{
                return false;
            }
        }
        catch(error){
            console.error("error :: setAdminPermission :: ",error);
            return false;
        }
    }
    async curUserType(){
        try{
            const currentUser = this.auth.currentUser;
            if(!currentUser){
                return false;
            }
            const superAdminSnapshot = await get(ref(this.database, '/superAdmin'));
            let superAdmin = false;
            superAdminSnapshot.forEach((childSnapshot) => {
                if (childSnapshot.val() == currentUser.uid) {
                    superAdmin = true;
                }
            });
            if(superAdmin){
                return 'superAdmin';
            }

            const adminSnapshot = await get(ref(this.database, '/admin'));
            let admin = false;
            adminSnapshot.forEach((childSnapshot) => {
                if (childSnapshot.val() == currentUser.uid) {
                    admin = true;
                }
            });
            if(admin){
                return 'admin';
            }
            return 'user';
        }
        catch(error){
            console.error("error :: curUserType :: ",error);
            return false;
        }
    }
}
const authService = new AuthService()
export default authService
