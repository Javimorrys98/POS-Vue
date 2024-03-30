import { ref, computed } from 'vue'
import { useFirebaseStorage } from 'vuefire'
import {
    ref as storageRef,
    uploadBytesResumable,
    getDownloadURL,
} from 'firebase/storage'

export default function useImage() {
    const url = ref('')
    const storage = useFirebaseStorage()
    const onFileChange = (e) => {
        const file = e.target.files[0]
        const filename = crypto.randomUUID() + '.jpg'
        const sRef = storageRef(storage, '/products/' + filename)

        //Sube el archivo
        const uploadTask = uploadBytesResumable(sRef, file)
        uploadTask.on(
            'state_changed',
            () => {},
            (error) => {
                console.log(error)
            },
            () => {
                // La imagen ya se ha subido
                getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
                    url.value = downloadUrl
                })
            }
        )
    }

	const isImageUploaded = computed(() => {
		return url.value?? null
	})

    return {
		url,
		isImageUploaded,
        onFileChange,
    }
}
