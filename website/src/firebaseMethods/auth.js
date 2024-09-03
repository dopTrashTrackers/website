import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, set, get, child, ref, push } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyA1tk4TVFZG_58-lYvRaV8LcXvEbGx-H9U",
    authDomain: "sih2024-559e6.firebaseapp.com",
    projectId: "sih2024-559e6",
    storageBucket: "sih2024-559e6.appspot.com",
    messagingSenderId: "1013042255761",
    appId: "1:1013042255761:web:bfe4657e7d978efec36c30",
    databaseURL: "https://sih2024-559e6-default-rtdb.firebaseio.com/",
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
        createUserWithEmailAndPassword(this.auth, email, password)
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
}
const authService = new AuthService()
export default authService
