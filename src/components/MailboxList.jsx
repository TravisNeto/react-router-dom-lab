import { Link } from "react-router-dom"

const MailboxList = (props) => {
    const mailboxes = props.mailboxes.map((mailbox) => (
        <li key={mailbox._id}>
            <Link to={`$mailbox._id}`}>Mailbox{mailbox._id}</Link>
        </li>
    ))

    return <ul>{mailboxes._id}</ul>
}

export default MailboxList