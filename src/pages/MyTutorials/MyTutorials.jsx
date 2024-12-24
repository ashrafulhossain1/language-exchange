import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import MYTutorialData from './MYTutorialData';

const MyTutorials = () => {
    const { user } = useAuth()
    const [tutorials, setTutorials] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchMyTutorials()
    }, [])

    const fetchMyTutorials = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3000/find-tutors?email=${user.email}`)
            setTutorials(data)
            setLoading(false)
        }
        catch (error) {
            console.log('fetching error')
        }
    }


    const handleDelete = (id) => {
        console.log(id)
    }


    if (tutorials.length == 0) {
        return (
            <div>
                <h1 className="text-4xl text-center">
                    {loading ? <p>wait</p> : "You haven't added any Tutorial yet"}
                </h1>
            </div>
        )
    }

    return (
        <div className="bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold text-center mb-6">My Tutorials</h1>
            <table className="w-full bg-white shadow-lg rounded-lg">
                <thead>
                    <tr className="bg-gray-200 text-gray-700 text-sm md:text-base">
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
                        ></MYTutorialData>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyTutorials;