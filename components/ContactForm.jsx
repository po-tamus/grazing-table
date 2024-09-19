import { FormField } from "./ui/form"
import { useState } from "react"
import { Form } from "react-hook-form"

export default function ContactForm () {

    const [messageText, setMessageText] = useState("");

    // "e" means this function will handle an event
    // taking in that event as a param
    const handleMessageChange = (e) => {

    }

    return (
        <section className="feed">
            <form className="relative w-full flex-center">
                <input
                    type="text"
                    placeholder="Contact Us"
                    value={messageText}
                    onChange={handleMessageChange}
                    required
                    className="search_input"
                />
                <button className="black_btn">
                    Send
                </button>
            </form>
        </section>
    )
}