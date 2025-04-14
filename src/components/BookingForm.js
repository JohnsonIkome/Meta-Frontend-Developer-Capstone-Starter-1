import React from 'react';

const BookingForm = (props) => {
    const [date, setDate] = React.useState('');
    const [times, setTimes] = React.useState('');
    const [guests, setGuests] = React.useState('');
    const [occasion, setOccasion] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        props.submitForm(event);
    };

    const handleChange = (event) => {
        setDate(event.target.value);
        props.dispatch(event.target.value);
    };

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Choose Date</label>
                            <input type='date' id='book-date' value={date} onChange={handleChange} required />
                        </div>

                        <div>
                            <label htmlFor='book-time'>Choose Time</label>
                            <select id='book-time' value={times} onChange={(e) => setTimes(e.target.value)} required>
                                <option value="">Select a Time</option>
                                {props.availableTimes.availableTimes.map(availableTime => (
                                    <option key={availableTime}>{availableTime}</option>
                                ))}
                            </select>
                        </div>

                        {/* for number of guests */}
                        <div>
                            <label htmlFor='book-guests'>Number of Guests:</label>
                            <input id='book-guests' min='1' value={guests} onChange={(e) => setGuests(e.target.value)} />
                        </div>

                        {/* occasion field */}
                        <div>
                            <label htmlFor='book-occasion'>Occasion:</label>
                            <select id='book-occasion' value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>

                        {/* submit button */}
                        <div className='btnReceive'>
                            <input aria-label='On Click' type='submit' value="Make Your Reservation" />
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;