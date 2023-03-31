/* eslint-disable no-nested-ternary */
import { useState } from 'react'
// eslint-disable-next-line import/no-named-as-default
import GiftForm from './components/GiftForm'
import Header from './components/Header'

function App() {
    const [output, setOutput] = useState(null)

    const [giftDetails, setGiftDetails] = useState({
        occasion: '',
        for: '',
        preferences: '',
        budget: 0,
        loading: false,
    })

    return (
        <div className="bg-white">
            <Header />

            <div className="flex justify-around bg-white pb-28 mt-10 flex-wrap">
                <GiftForm
                    giftDetails={giftDetails}
                    setGiftDetails={setGiftDetails}
                    setOutput={setOutput}
                />

                {/* list of items with links  */}

                <ul className="text-gray-900">
                    {output ? (
                        output?.map((item) => (
                            <a
                                href={`https://www.flipkart.com/search?q=${item} ${giftDetails.budget} `}
                                target="_blank"
                                rel="noreferrer"
                                key={item}
                            >
                                <div className="flex flex-col w-[32rem] pb-3 border-b border-gray-200 hover:text-blue-500">
                                    <div className="text-lg w-full font-semibold">
                                        {item}
                                    </div>
                                </div>
                            </a>
                        ))
                    ) : (
                        <div className="flex h-full justify-center items-center">
                            <div className="max-w-lg text-3xl font-semibold leading-relaxed text-gray-900">
                                Please fill the form with the details to get AI
                                powered gift recommendation
                            </div>
                        </div>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default App
