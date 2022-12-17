import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { cloudService } from "../Cloud";

class Storage {
    constructor() {
        this._storage = getStorage(cloudService.app);
    }


    uploadPoster(file) {
        const posterRef = ref(this._storage, `/posters/${file.name}`);
        return uploadBytes(posterRef, file);
    }

    getDownloadURL(ref) {
        return getDownloadURL(ref);
    }

}

export const storageService = new Storage();
