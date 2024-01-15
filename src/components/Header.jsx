import Navigation from "./Navigation";

export default function Header() {
    return (
        <header className={"w-100 d-flex flex-row justify-content-between align-items-stretch mb-3"} style={{backgroundColor: "#314347", color: "#EBC799"}}>
            <h1 className='m-0 ps-2' style={{color: "#EBC799", backgroundColor: "#A36041"}}>Felix Le</h1>
            <Navigation />
        </header>
    )
}