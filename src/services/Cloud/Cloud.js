import { initializeApp } from "firebase/app";

class Cloud {
    constructor() {
        const firebaseConfig = {
            apiKey: process.env.API_KEY,
            authDomain: "gastro-chef-a8250.firebaseapp.com",
            projectId: "gastro-chef-a8250",
            storageBucket: "gastro-chef-a8250.appspot.com",
            messagingSenderId: "164631422496",
            appId: process.env.APP_ID,
            measurementId: "G-9HF9HGSFXS"
        };

        this.app = initializeApp(firebaseConfig);
    }
}

export const CloudService = new Cloud()