import firebase from "../firebase";

class Firestore {
  constructor() {
    this.auth = firebase.auth();
    this.db = firebase.firestore();
  }

  login(email, password) {
    this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  addArticle(article) {
    return this.db.collection("/articles").add(article);
  }

  getArticles() {
    return this.db.collection("/articles").get();
  }

  updateArticle(article) {
    if (!article.id) return;
    return this.db.doc(`articles/${article.id}`).set(article);
  }

  deleteArticle(id) {
    return this.db.doc(`articles/${id}`).delete();
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name,
    });
  }

  isInitialized() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }
}

export default new Firestore();
