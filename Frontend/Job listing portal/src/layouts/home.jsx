import React, { useEffect, useState } from 'react';
import JobCard from '../components/JobCard'; // Adjust path as needed
import Navbarcomponent from '../components/Navbarcomponent'; // Adjust path as needed
import axios from 'axios';

export default function Home() {
    const [jobs, setJobs] = useState([]); // State to hold the jobs data

    useEffect(() => {
        // Fetch data from the hosts API
        axios.get('http://localhost:3001/host/hosts')
            .then(response => {
                setJobs(response.data); // Set the data in state
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            <Navbarcomponent />
            <div className="container mt-5">
                <div className="row">
                    {jobs.map((job, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <JobCard job={job} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
