import axios from 'axios'

class UploadServices {

    constructor() {

        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_APP_API_URL}/api/upload`
        })
    }

    uploadOneImage(imageForm) {
        return this.api.post('/image', imageForm)
    }

    uploadSomeImages(imagesForm) {
        return this.api.post('/images', imagesForm)
    }
}

const uploadServices = new UploadServices()

export default uploadServices