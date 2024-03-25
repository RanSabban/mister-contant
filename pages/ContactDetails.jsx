import { contactService } from "../services/contact.service.js"

const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouterDOM

export function ContactDetails() {
    const params = useParams()
    const navigate = useNavigate()
    const [currContact, setCurrContact] = useState(null)

    useEffect(() => {
        const { id } = params
        contactService.getById(id)
            .then(contact => {
                if (!contact) return navigate('/contacts')
                setCurrContact(contact)
            })
            .catch(() => {
                console.log('Had issues loading contact');
            })
    }, [])

    if (!currContact) return <h4>Loading...</h4>
    const { _id, firstName, lastName, phoneNum, createdAt } = currContact
    const formattedDate = new Date(createdAt).toLocaleString('he')

    return (
        <div className="contact-details">
            <section className="contact-data-container">
                <h1>{firstName} {lastName}</h1>
                <h2>{phoneNum}</h2>
                <h3>Created at {createdAt}</h3>

                <button onClick={() => navigate('/contacts')}>Back</button>
            </section>
        </div>
    )
}