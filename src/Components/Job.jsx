import { MdOutlineLocationOn } from "react-icons/md";
import { PiCurrencyCircleDollarThin } from "react-icons/pi";
import { Link } from "react-router-dom";



const Job = ({ job }) => {

    const { id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className="h-24" src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div className="flex">
                        <button>{remote_or_onsite}</button>
                        <button>{job_type}</button>
                    </div>
                    <div className="flex">
                        <p className="flex items-center"><MdOutlineLocationOn></MdOutlineLocationOn>{location}</p>
                        <p className="flex items-center"><PiCurrencyCircleDollarThin></PiCurrencyCircleDollarThin>Salary: {salary}</p>
                    </div>
                    <div className="card-actions justify-start">
                        <Link to = {`/job/${id}`}>
                            <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;