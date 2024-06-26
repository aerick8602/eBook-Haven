import axios from 'axios';
import Swal from 'sweetalert2';
import { BASE_URL } from '../../render';

const handleDeleteBook = (id, setBooks, enqueueSnackbar) => {
    console.log('Deleting book with id:', id); // Debug statement
    Swal.fire({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this book!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#27C215",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel",
    }).then((result) => {
        if (result.isConfirmed) {
            axios
                .delete(`${BASE_URL}/books/${id}`)
                .then((res) => {
                    if (res.status === 200) {
                        enqueueSnackbar('Deleted successfully', { variant: 'success' });
                        setTimeout(() => {
                            window.location.reload(); // Reload the page after 0.5 second
                        }, 500);
                        // Update state or fetch data again to reflect changes
                        // Assuming setBooks is a function to update books state
                        // setBooks(books.filter(book => book._id !== id));
                    } else {
                        throw new Error('Delete request failed');
                    }
                })
                .catch((err) => {
                    enqueueSnackbar('Error deleting book', { variant: 'error' });
                    console.log(err);
                });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
        }
    });
};

export default handleDeleteBook;
