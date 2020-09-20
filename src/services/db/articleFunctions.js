// import app from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/firebase-firestore'
import React from "react";
import {Redirect} from "react-router-dom";
import firebase from "../firebase"

class Firestore {
    constructor() {
        // app.initializeApp(config)
        this.auth = firebase.auth();
        this.db = firebase.firestore();
    }

    login(email, password) {
        this.auth.signInWithEmailAndPassword(email, password);
    }

    logout() {
        return this.auth.signOut()
    }

    addArticle(article) {
        // if(!this.auth.currentUser) {
        //     return <Redirect to="/"/>
        // }
        console.log('this.auth.currentUser -> ', this.auth.currentUser);
        console.log('article -> ', article);
        return  this.db.collection('/articles').add(article);
    }

    getArticles() {
        return  this.db.collection('/articles').get();
    }

    updateArticle(article) {
        return this.db.doc(`articles/${article.id}`).set(article)
    }

    deleteArticle(id) {
        return this.db.doc(`articles/${id}`).delete();
    }

    async register(name, email, password) {
        await this.auth.createUserWithEmailAndPassword(email, password)
        return this.auth.currentUser.updateProfile({
            displayName: name
        })
    }

    addQuote(quote) {
        if(!this.auth.currentUser) {
            return alert('Not authorized')
        }

        return this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).set({
            quote
        })
    }

    isInitialized() {
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve)
        })
    }

    getCurrentUsername() {
        return this.auth.currentUser && this.auth.currentUser.displayName
    }

    async getCurrentUserQuote() {
        const quote = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
        return quote.get('quote')
    }
}

export default new Firestore()