import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
            <div className="container d-flex justify-content-between">
                <Link className="navbar-brand text-light" href="/">Event Management</Link>
                <button className="navbar-toggler" type="button" 
                 data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" 
                 aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav gap-5"> {/* Adjust gap as needed */}
                        <li className="nav-item">
                            <Link className="nav-link text-light" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" href="/addevent">Add New Event</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" href="/manageevents">Manage Events</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
