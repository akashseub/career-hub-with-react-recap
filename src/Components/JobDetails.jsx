import { useLoaderData, useParams } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/localStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();

    const idInt = parseInt(id);

    const job = jobs.find(job => job.id === idInt);

    const handleApplyButton = () =>{
        saveJobApplication(idInt);
        toast('You have applied successfully');
    }

    return (
        <div>
            <h2 className="text-center text-5xl font-bold mb-12">Job Details</h2>
            <div className="grid grid-cols-4 gap-4 my-4">
                <div className="col-span-3 space-y-4">
                    <p><span className="font-bold">Job Description: </span>{job.job_description}</p>
                    <p><span className="font-bold">Job Responsibility: </span>{job.job_responsibility}</p>

                    <div>
                        <h2 className="font-bold">Educational Requirements:</h2>
                        <p>{job.educational_requirements}</p>
                    </div>
                    <div>
                        <h2 className="font-bold">Experiences:</h2>
                        <p>{job.experiences}</p>
                    </div>
                </div>
                <div className="">
                    <h2 className="font-bold">Job Details</h2>
                    <hr />
                    <div>
                        <p><span className="font-bold">Salary: </span>{job.salary} (PerMonth)</p>
                        <p><span className="font-bold">Job Title: </span>{job.job_title}</p>
                    </div>

                    <div>
                        <h2 className="font-bold">Contact Information</h2>
                        <hr />
                        <div>
                            <p><span className="font-bold">Phone: </span>{job.contact_information.phone}</p>
                            <p><span className="font-bold">Email: </span>{job.contact_information.email}</p>
                            <p><span className="font-bold">Address: </span>{job.contact_information.address}</p>
                        </div>
                        <div>
                            <button onClick={handleApplyButton} className="btn btn-primary">Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default JobDetails;