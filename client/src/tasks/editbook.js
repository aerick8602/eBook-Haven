import axios from 'axios';
import Swal from 'sweetalert2';
import { BASE_URL } from '../../render';

const handleEditBook = async (id, Department, Author, Topic, setLoading, enqueueSnackbar, navigate) => {
    try {
        const result = await Swal.fire({
            title: 'Confirm Edit',
            text: 'Are you sure you want to save changes?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, save it!',
            cancelButtonText: 'Cancel',

        });

        if (result.isConfirmed) {
            const data = { Department, Author, Topic };
            setLoading(true);

            await axios.put(`${BASE_URL}/books/${id}`, data);

            setLoading(false);
            enqueueSnackbar('Book Edited Successfully', { variant: 'success' });
            navigate("/");
        }
    } catch (err) {
        setLoading(false);
        console.error(err);
        enqueueSnackbar('Error editing book', { variant: 'error' });
    }
};

export default handleEditBook;
