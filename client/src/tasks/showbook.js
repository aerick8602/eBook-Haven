import axios from 'axios';
import Swal from 'sweetalert2';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is included in your project

const showBookDetails = (id) => {
    console.log('Showing book details with id:', id); // Debug statement
    axios.get(`http://localhost:5555/books/${id}`)
        .then((res) => {
            const book = res.data;
            Swal.fire({
                title: '<span class="font-fav text-3xl text-sky-800">Book Details</span>',
                html: `
          <div class="p-6 bg-sky-100 rounded-lg shadow-md">
            <p class="text-left mb-1 text-gray-800 font-sans text-sm text-preety"><strong class="font-bold font-mono text-base ">Book Id:</strong> ${book._id}</p>
            <p class="text-left mb-1 text-gray-800 font-sans text-sm text-preety"><strong class="font-bold font-mono text-base ">Department:</strong> ${book.Department}</p>
            <p class="text-left mb-1 text-gray-800 font-sans text-sm text-preety"><strong class="font-bold font-mono text-base ">Author:</strong> ${book.Author}</p>
            <p class="text-left mb-1 text-gray-800 font-sans text-sm text-preety"><strong class="font-bold font-mono text-base ">Publishing Timestamp :</strong> ${book.Topic}</p>
            <p class="text-left mb-1 text-gray-800 font-sans text-sm text-preety"><strong class="font-bold font-mono text-base ">Create Time:</strong> ${new Date(book.timestamp).toLocaleString()}</p>
            <p class="text-left mb-1 text-gray-800 font-sans text-sm text-preety"><strong class="font-bold font-mono text-base ">PDF Location:</strong> ${book.pdfFilePath}</p>
          </div>
        `,
                showCloseButton: true,
                customClass: {
                    title: 'text-xl font-bold text-blue-700',
                    htmlContainer: 'p-6 bg-sky-100 font-mono text-base rounded-lg shadow-md',
                    popup: 'border border-gray-200 shadow-lg rounded-lg',
                    confirmButton: 'bg-sky-400 font-sans hover:bg-sky-600 text-white py-1 px-4 rounded-lg',
                },
                buttonsStyling: false, // Disable default SweetAlert2 styling to apply custom classes
            });
        })
        .catch((err) => {
            console.log(err);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Failed to fetch book details!',
                customClass: {
                    popup: 'border border-red-300 bg-red-100 text-red-700',
                    title: 'text-red-700',
                    htmlContainer: 'font-mono',
                    confirmButton: 'bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded',
                },
                buttonsStyling: false, // Disable default SweetAlert2 styling to apply custom classes
            });
        });
};

export default showBookDetails;
