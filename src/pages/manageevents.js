// manageevents.js

"use client";

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/app/components/Navbar";

const ManageEvents = () => {
    const [events, setEvents] = useState([]);
    const [editingEvent, setEditingEvent] = useState(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [location, setLocation] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        const storedEvents = localStorage.getItem("events");
        if (storedEvents) {
            setEvents(JSON.parse(storedEvents));
        }
    }, []);

    const handleEdit = (event) => {
        setEditingEvent(event);
        setName(event.name);
        setDescription(event.description);
        setDate(event.date);
        setTime(event.time);
        setLocation(event.location);
        setImageUrl(event.imageUrl);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedEvents = events.map((event) =>
            event.id === editingEvent.id
                ? { ...event, name, description, date, time, location, imageUrl }
                : event
        );
        setEvents(updatedEvents);
        localStorage.setItem("events", JSON.stringify(updatedEvents));
        resetForm();
    };

    const handleDelete = (eventId) => {
        const updatedEvents = events.filter((event) => event.id !== eventId);
        setEvents(updatedEvents);
        localStorage.setItem("events", JSON.stringify(updatedEvents));
    };

    const resetForm = () => {
        setEditingEvent(null);
        setName("");
        setDescription("");
        setDate("");
        setTime("");
        setLocation("");
        setImageUrl("");
    };

    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <h2 className="mb-4">Manage Events</h2>
                {editingEvent ? (
                    <form onSubmit={handleUpdate}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Event Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" 
                              className="form-label">Description</label>
                            <textarea
                                className="form-control"
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">Date</label>
                            <input
                                type="date"
                                className="form-control"
                                id="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="time" className="form-label">Time</label>
                            <input
                                type="time"
                                className="form-control"
                                id="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="location" className="form-label">Location</label>
                            <input
                                type="text"
                                className="form-control"
                                id="location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="imageUrl" className="form-label">Image URL</label>
                            <input
                                type="text"
                                className="form-control"
                                id="imageUrl"
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" 
                            className="btn btn-primary">Update Event</button>
                        <button type="button" 
                            className="btn btn-secondary ms-2" onClick={resetForm}>Cancel</button>
                    </form>
                ) : (
                    <div className="row">
                        {events.map((event) => (
                            <div key={event.id} className="col-lg-4 col-md-6 mb-4">
                                <div className="card">
                                    {event.imageUrl ? (
                                        <img src={event.imageUrl} 
                       className="card-img-top" alt={event.name} 
                     style={{ height: "200px", objectFit: "cover" }} />
                                    ) : (
                                        <div className="card-img-top"
                      style={{ height: '200px', backgroundColor: '#f0f0f0', display: 'flex', 
                              alignItems: 'center', justifyContent: 'center' }}>
                                            <span>No Image</span>
                                        </div>
                                    )}
                                    <div className="card-body">
                                        <h5 className="card-title">{event.name}</h5>
                                        <p className="card-text">{event.description}</p>
                                        <p className="card-text"><strong>Date:</strong> {event.date}</p>
                                        <p className="card-text"><strong>Time:</strong> {event.time}</p>
                                        <p className="card-text"><strong>Location:</strong> {event.location}</p>
           
                                        <button 
                            className="btn btn-primary" onClick={() => handleEdit(event)}>Edit</button>
                                        <button 
                             className="btn btn-danger ms-2" onClick={() => handleDelete(event.id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <style jsx>{`
        .card:hover {
          border-radius: 8px;
          transition: box-shadow 0.3s;
          width: 101%;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
      `}</style>
        </>
    );
};

export default ManageEvents;
