import axios from 'axios';
import { BASE_URL } from '../../render';

const uploadBook = (file, Department, Author, Topic, setLoading, enqueueSnackbar, navigate) => {
    if (!file) {
        console.error('No file selected');
        enqueueSnackbar('No file selected', { variant: 'error' });
        return;
    }

    const formData = new FormData();
    formData.append('Department', Department);
    formData.append('Author', Author);
    formData.append('Topic', Topic);
    formData.append('pdfFile', file); // Ensure this matches 'upload.single('pdfFile')' on the server

    setLoading(true);  // Set loading to true when upload starts

    axios.post(`${BASE_URL}/books/upload`, formData)
        .then(res => {
            console.log('File uploaded successfully', res.data);
            enqueueSnackbar('File uploaded successfully', { variant: 'success' });
            navigate('/');  // Navigate to another route on success
        })
        .catch(err => {
            console.error('Error uploading file:', err.response ? err.response.data : err.message);
            enqueueSnackbar('Error uploading file', { variant: 'error' });
        })
        .finally(() => {
            setLoading(false);  // Set loading to false when upload finishes
        });
};

export default uploadBook;
