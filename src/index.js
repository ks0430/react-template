import React from 'react'
import ReactDOM from 'react-dom'

console.log('I get called from hello index.js!')

const App = () => {
    return <div>Testhello</div>
}

ReactDOM.render(<App />, document.getElementById('root'))
