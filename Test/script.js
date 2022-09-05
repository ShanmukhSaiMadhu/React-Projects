// const test = (
//     <div className = 'wrapper'>
//         <img src="img.png" alt="" width="40px" />
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100K stars on GitHub</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// )

// ReactDOM.render(
//     test,
//     document.getElementById('root')
// )


import Header from "./Header"

function MainComponent () {
    return (
        <div>
            <h1>I am learning React</h1>

            <ol>
                <li>Trending</li>
                <li>Very helpful</li>
                <li>Easy to learn</li>
            </ol>
        </div>
    )
}

function Footer() {
    return (
        <footer className="footer">
            <small>Developed by Shanmukh. All rights reserved.</small>
        </footer>
    )
}

function Page () {
    return (
        <div className = "wrapper">
            <Header />
            
            <MainComponent />

            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById('root'))