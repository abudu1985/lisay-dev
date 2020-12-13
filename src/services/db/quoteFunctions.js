import React from "react";
import firebase from "../firebase"

class QuoteFunction {
    constructor() {
    }

    login(email, password) {
        this.auth.signInWithEmailAndPassword(email, password);
    }

    logout() {
        return this.auth.signOut()
    }

    addArticle(article) {
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

    isInitialized() {
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve)
        })
    }

    getCurrentUsername() {
        return this.auth.currentUser && this.auth.currentUser.displayName
    }
}

export default new QuoteFunction()

const axios = require('axios').default;

const sendRequest = async () => {
    try {
        const resp = await axios({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            data: {
                id: 1,
                userId: 1,
                title: 'A new title',
                body: 'Update this post'
            }
        });

        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}
