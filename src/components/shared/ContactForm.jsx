import React from 'react'

const ContactForm = () => {
    return (
        <div>
            <div>
                <h1>Fly For Less – Subscribe Now for Amazing Flight Deals!</h1>
                <p>Join 2.5 million travelers with insider access to our Exclusive Flight Offers and Save Big on your next flight!</p>
                <form action="">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder='Email'
                    />
                    <p>
                        {`And / OR
                            you can totally do both
                        `}
                    </p>
                    <div>
                        <select name="contry" id="contry">
                            <option>
                                
                            </option>
                        </select>
                        <input
                            type="text"
                            name='MobileNumber'
                            id='MobileNumber'
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm