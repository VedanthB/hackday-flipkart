import React, { useState } from 'react'

// eslint-disable-next-line react/prop-types
const GiftForm = ({ setOutput }) => {
    const [giftDetails, setGiftDetails] = useState({
        occasion: '',
        for: '',
        preferences: '',
        Budget: 1000,
    })

    function convertStringToArray(str) {
        // Remove the opening and closing square brackets from the string
        // eslint-disable-next-line no-param-reassign
        str = str.slice(1, -1)

        // Split the string into an array using the comma as the separator
        const arr = str.split(', ')

        // Return the resulting array
        return arr
    }
    const getGiftIdeas = async () => {
        //        const input = `Generate a Gift List of 5 items for my ${giftDetails.for} who likes ${giftDetails.preferences} and my budget is Rs.${giftDetails.budget} . Give the response in array format. Remove number and price from it `

        const input = `I am looking for gift options on an Flipkart website based in India. Can you help me out? I’m looking for a gift for ${giftDetails.occasion}, for someone who is my ${giftDetails.for}, with a budget of Rs ${giftDetails.budget}. They are interested in ${giftDetails.preferences} . Could you suggest 20 gift options(Product names) that would be a good fit? Thanks in advance . Give the response in array of ideas only .No other text should be in response.Remove number and price from it.return in the format [idea,idea]`

        const response = await fetch('http://localhost:8000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt: input,
            }),
        })

        if (response.ok) {
            const data = await response.json()
            const parsedData = data.bot.trim() // trims any trailing spaces/'\n'

            setOutput(convertStringToArray(parsedData))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        getGiftIdeas()
    }

    return (
        <form className="mb-6 mt-10 border border-white rounded px-6 py-8 flex flex-col gap-10 max-w-lg m-auto">
            <div className="">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Who occasion are you purchasing this gift for?
                </label>
                <input
                    value={giftDetails.occasion}
                    onChange={(e) =>
                        setGiftDetails({
                            ...giftDetails,
                            [e.target.name]: e.target.value,
                        })
                    }
                    name="occasion"
                    type="text"
                    id="large-input"
                    placeholder="Birthday, Party, Anniversary etc..."
                    className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>

            <div className="">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Who are you purchasing this gifting for?
                </label>
                <input
                    value={giftDetails.for}
                    onChange={(e) =>
                        setGiftDetails({
                            ...giftDetails,
                            [e.target.name]: e.target.value,
                        })
                    }
                    name="for"
                    type="text"
                    id="large-input"
                    placeholder="Mother, Brother, etc..."
                    className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>

            <div className="">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Add a few hobbies / interests / preferences about the person
                    you wish to gift.
                </label>
                <input
                    value={giftDetails.preferences}
                    onChange={(e) =>
                        setGiftDetails({
                            ...giftDetails,
                            [e.target.name]: e.target.value,
                        })
                    }
                    name="preferences"
                    type="text"
                    id="large-input"
                    placeholder="Naruto, Barbie Dolls, Swimming  etc..."
                    className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>

            <div className="">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Budget
                </label>
                <input
                    onChange={(e) =>
                        setGiftDetails({
                            ...giftDetails,
                            [e.target.name]: e.target.value,
                        })
                    }
                    name="budget"
                    value={giftDetails.budget}
                    type="number"
                    id="large-input"
                    placeholder="20000"
                    className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>

            <button
                onClick={handleSubmit}
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Submit
            </button>
        </form>
    )
}

export default GiftForm
