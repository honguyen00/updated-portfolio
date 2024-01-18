import profile from '../assets/profile-pic.jpg'

export default function AboutPage() {
    return (
        <div className="container">
            <h2>About me</h2>
            <div>
            <div className="hero w-100 d-flex justify-content-center mb-3"  style={{height: "8rem"}}>
                <img src={profile} alt="my personal avatar" style={{width: '8rem', borderRadius: '5rem'}}/>
            </div>
            <p>
            Greetings! I'm Felix, a passionate web developer based in Sydney with a flair for creating dynamic and user-friendly web applications.
            With a solid foundation in web development technology, I bring a creative and detail-oriented approach to every project. 
            My expertise extends to crafting responsive and visually appealing interfaces that prioritize both functionality and user experience. 
            Constantly staying abreast of the latest web development trends, I am committed to delivering high-quality solutions that seamlessly blend innovation and practicality. 
            Explore my portfolio to witness my dedication to transforming ideas into captivating online experiences.
            </p>
            </div>
        </div>
    )
}