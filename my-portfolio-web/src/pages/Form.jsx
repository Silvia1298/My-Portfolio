import { useRef } from 'react';

export default function Form() {
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value,
        };

        alert('done!:\n' + JSON.stringify(data));
    };

    return (
        <div className="container">
            <h1>Contact me</h1>

            <form className="form" onSubmit={handleSubmit}>

                <div className="name">
                    <label for="firstName">First name</label>
                    <input
                        type="text"
                        name="firstName"
                        className="firstName"
                        tabIndex="1"
                    />
                    <label for="lastName">Last name</label>
                    <input
                        type="text"
                        name="lastName"
                        className="lastName"
                        tabIndex="2"
                    />
                    <label for="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="email"
                        placeholder="example@corp.com"
                        tabIndex="3"
                    />
                    <label for="message">Message</label>
                    <textarea
                        name="message"
                        className="message"
                        placeholder="Type here..."
                    />
                    <button type="submit" className="send">Send</button>
                </div>
            </form>
        </div>
    );
}