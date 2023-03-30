import { useState } from 'react'
// eslint-disable-next-line import/no-named-as-default
import GiftForm from './components/GiftForm'
import Header from './components/Header'

function App() {
    const [output, setOutput] = useState('')

    return (
        <div className="">
            {/* header */}
            <Header />

            {/* Form  */}
            <GiftForm setOutput={setOutput} />
            {/* list of items with links  */}

            <ul className="m-auto max-w-lg mb-20 text-sm font-medium border rounded-lg bg-gray-700 border-gray-600 text-white">
                {output &&
                    output?.map((item) => (
                        <a
                            href={`https://www.flipkart.com/search?q=${item} under 20000`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <li
                                className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg"
                                key={item}
                            >
                                {item}
                            </li>
                        </a>
                    ))}
            </ul>
        </div>
    )
}

export default App
