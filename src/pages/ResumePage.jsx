import resume from '../assets/Ho_Nguyen_(Felix)_Le_Resume.pdf'
export default function ResumePage() {
    return (
        <div className="container">
            <h2>Resume</h2>
            <section>
                <p>Download my <span><a href={resume} download="Ho_Nguyen_Le_Resume.pdf">resume</a></span></p>
            </section>
            <section>
                <h3>Front-end Proficiencies</h3>
                <ul>
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        Javascript
                    </li>
                    <li>
                        React
                    </li>
                    <li>
                        Bootstrap
                    </li>
                    <li>
                        Tailwind
                    </li>
                </ul>
            </section>
            <section>
                <h3>Back-end Proficiencies</h3>
                <ul>
                    <li>
                        APIs
                    </li>
                    <li>
                        Node
                    </li>
                    <li>
                        Express
                    </li>
                    <li>
                        MySQL, Sequelize
                    </li>
                    <li>
                        MongoDB, Mongoose
                    </li>
                    <li>
                        GraphQL
                    </li>
                </ul>
            </section>
        </div>
    )
}