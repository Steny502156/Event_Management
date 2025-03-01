//EventListing.js

'use client'
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt, faEye } from '@fortawesome/free-solid-svg-icons/faCalendarAlt';


const EventListing = () => {
    const [events, setEvents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedEvents = localStorage.getItem('events');
            const allEvents = storedEvents ? JSON.parse(storedEvents) : [];
            setEvents(allEvents);
        }
    }, []);

    const handleSearchChange = (e) => {
        const search = e.target.value;
        setSearchTerm(search);
        const filteredEvents = events.filter((event) =>
            event.name.toLowerCase().includes(search.toLowerCase())
        );
        setEvents(filteredEvents);
    };

    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <div className="row mb-3">
                    <div className="col-md-6 offset-md-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search for events..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>
                <div className="row">
                    {events.map((event) => (
                        <div key={event.id} className="col-lg-4 col-md-6 mb-4">
                            <Link href={`/event/${event.id}`} passHref>
                                <div className="card h-100" 
                                style={{ cursor: 'pointer', textDecoration: 'none' }}>
                                    <img src={event.imageUrl} 
                                className="card-img-top" alt={event.name} 
                           style={{ height: '200px', objectFit: 'cover' }} />
                                    <div className="card-body">
                                        <h5 
                                     className="card-title">{event.name}</h5>
                                        <p className="card-text">
                                            
                                        <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
                                            <strong></strong> {event.date}<br />
                                            
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                                            <strong></strong> {event.location}
                                        </p>
                                        <Link href={`/event/${event.id}`} passHref>
                                            
                                       <span className="btn btn-primary w-100 text-white">
                                                
                                  <FontAwesomeIcon icon={faEye} className="me-2" />
                                                View Details
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
        .card:hover {
          border-radius: 8px;
          transition: box-shadow 0.3s;
          width: 101%;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
        .card-title {
          color: #333;
        }
        .card-text {
          color: #555;
        }
        .btn-primary:hover {
          background-color: #0056b3;
        }
        a {
          text-decoration: none;
          color: inherit;
        }
      `}</style>
        </>
    );
};

export default EventListing;
