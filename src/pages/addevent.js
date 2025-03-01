// addevent.js

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '@/app/components/Navbar';

const AddEvent = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');
    const [organizerName, setOrganizerName] = useState('');
    const [organizerContact, setOrganizerContact] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [capacity, setCapacity] = useState('');
    const [eventType, setEventType] = useState('Conference');

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = Date.now(); // Generate a unique ID using the current timestamp

        console.log({ id, name, description, date, time, location, 
                     organizerName, organizerContact, imageUrl, capacity, eventType });

        // Save the form data to local storage
        const eventData = { id, name, description, date, time, location, 
                            organizerName, organizerContact, imageUrl, capacity, eventType };
        const events = JSON.parse(localStorage.getItem('events')) || [];
        events.push(eventData);
        localStorage.setItem('events', JSON.stringify(events));

        // Reset form fields after submission
        setName('');
        setDescription('');
        setDate('');
        setTime('');
        setLocation('');
        setOrganizerName('');
        setOrganizerContact('');
        setImageUrl('');
        setCapacity('');
        setEventType('Conference');
    };

    return (
        <>
            <Navbar />
            <div className="container" style={{ width: "70%" }}>
                <h2 className="mt-3 mb-4">Add New Event</h2>
                <form onSubmit={handleSubmit}>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="name" 
                             className="form-label">Event Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-md-6">
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
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-6">
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
                        <div className="col-md-6">
                            <label htmlFor="location" className="form-label" 
                            style={{ textDecoration: 'none' }}>Location</label>
                            <input
                                type="text"
                                className="form-control"
                                id="location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="organizerName" 
                             className="form-label">Organizer Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="organizerName"
                                value={organizerName}
                                onChange={(e) => setOrganizerName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="organizerContact" 
                             className="form-label">Organizer Contact</label>
                            <input
                                type="text"
                                className="form-control"
                                id="organizerContact"
                                value={organizerContact}
                                onChange={(e) => setOrganizerContact(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="capacity" className="form-label">Capacity</label>
                            <input
                                type="number"
                                className="form-control"
                                id="capacity"
                                value={capacity}
                                onChange={(e) => setCapacity(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="eventType" className="form-label">Event Type</label>
                            <select
                                className="form-control"
                                id="eventType"
                                value={eventType}
                                onChange={(e) => setEventType(e.target.value)}
                                required
                            >
                                <option value="Conference">Conference</option>
                                <option value="Workshop">Workshop</option>
                                <option value="Seminar">Seminar</option>
                                <option value="Meetup">Meetup</option>
                            </select>
                        </div>
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

                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea
                            className="form-control"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">Add Event</button>
                </form>
            </div>
        </>
    );
};

export default AddEvent;
