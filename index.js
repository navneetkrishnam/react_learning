function ListItems() {
    return (
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    )
}

const navPageElements = (
    <nav>
        <h1>This is list</h1>
        <ul>
            <li>About</li>
            <li>Pricing</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(
    navPageElements,
    document.querySelector("#root")
)