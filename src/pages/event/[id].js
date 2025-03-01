// pages/event/[id].js

'use client';

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '@/app/components/Navbar';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt, faClock, faInfoCircle, faUser } 
from '@fortawesome/free-solid-svg-icons';

const EventDetail = () => {
    const [event, setEvent] = useState(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (typeof window !== 'undefined' && id) {
            const storedEvents = localStorage.getItem('events');
            const allEvents = storedEvents ? JSON.parse(storedEvents) : [];
            const selectedEvent = allEvents.find((event) => event.id === parseInt(id));
            setEvent(selectedEvent);
        }
    }, [id]);

    if (!event) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <img src={event.imageUrl} alt={event.name} 
                        className="img-fluid rounded shadow-sm" style={{ objectFit: 'cover', height: '100%' }} />
                    </div>
                    <div className="col-md-6">
                        <h2 className="mb-3">{event.name}</h2>
                        <div className="mb-3">
                            <p className="mb-2"><FontAwesomeIcon 
                              icon={faCalendarAlt} className="me-2 text-primary" /> 
                              <strong>Date:</strong> {event.date}</p>
                            <p className="mb-2"><FontAwesomeIcon 
                          icon={faClock} className="me-2 text-primary" /> 
                              <strong>Time:</strong> {event.time}</p>
                            <p className="mb-2"><FontAwesomeIcon 
                      icon={faMapMarkerAlt} className="me-2 text-primary" /> 
                           <strong>Location:</strong> {event.location}</p>
                            <p className="mb-2"><FontAwesomeIcon 
                         icon={faUser} className="me-2 text-primary" /> 
                          <strong>Organizer:</strong> {event.organizerName}</p>
                        </div>
                        <div className="mb-3">
                            <p className="mb-2"><FontAwesomeIcon 
                   icon={faInfoCircle} className="me-2 text-primary" /> 
                         <strong>Description:</strong></p>
                            <p>{event.description}</p>
                        </div>
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
            <style jsx>{`
        .container {
          max-width: 1200px;
        }
        .img-fluid {
          border-radius: 8px;
        }
        .card-title {
          color: #333;
        }
        .card-text {
          color: #555;
        }
        .btn-primary {
          background-color: #007bff;
          border-color: #007bff;
        }
        .btn-primary:hover {
          background-color: #0056b3;
          border-color: #004085;
        }
      `}</style>
        </>
    );
};

export default EventDetail;
