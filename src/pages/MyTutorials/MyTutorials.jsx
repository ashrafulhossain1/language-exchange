import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import MYTutorialData from './MYTutorialData';
import Swal from 'sweetalert2';

const MyTutorials = () => {
    const { user } = useAuth()
    const [tutorials, setTutorials] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchMyTutorials()
    }, [user.email])

    const fetchMyTutorials = async () => {
        try {
            const { data } = await axios.get(`https://language-express-server-a-10.vercel.app/tutors/${user.email}`)
            setTutorials(data)
            setLoading(false)
        }
        catch (error) {
            // console.log('fetching error')
        }
    }

    // delete function and again data fetch
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://language-express-server-a-10.vercel.app/delete-tutor/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Tutorial has been deleted.",
                                icon: "success"
                            });
                            fetchMyTutorials()
                        }
                    })
                    .catch(error => {
                        // console.log(error)
                    })
            }
        });
    }

    if (tutorials.length == 0) {
        return (
            <div className="dark:bg-gray-900 bg-gray-100 min-h-screen">
                <h1 className="text-4xl text-center text-gray-800 dark:text-white">
                    {loading ? <p>wait</p> : "You haven't added any Tutorial yet"}
                </h1>
            </div>
        )
    }

    return (
        <div className="dark:bg-gray-900 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">My Tutorials</h1>
            <div className='overflow-x-auto'>
                <table className="w-full bg-white shadow-lg rounded-lg dark:bg-gray-800 dark:text-white">
                    <thead>
                        <tr className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white text-sm md:text-base">
                            <th className="p-2">Name</th>
                            <th className="p-2">Image</th>
                            <th className="p-2">Language</th>
                            <th className="p-2">Price</th>
                            <th className="p-2">Description</th>
                            <th className="p-2">Review</th>
                            <th className="p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tutorials.map((tutorial) => (
                            <MYTutorialData
                                tutorial={tutorial}
                                key={tutorial._id}
                                handleDelete={handleDelete}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyTutorials;
