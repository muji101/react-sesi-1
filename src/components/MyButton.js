const MyButton = (props) => {
    return (
        <div>
            <button onClick={() => props.clicked()}>Click me bro!</button>
        </div>
    )
}

export default MyButton;