import React from 'react'

const GiftForm = ({ giftDetails, setGiftDetails, setOutput }) => {
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

        const input = `I am looking for gift options on an Flipkart website based in India. Can you help me out? I’m looking for a gift for ${giftDetails.occasion}, for someone who is my ${giftDetails.for}, with a budget of Rs ${giftDetails.budget}. They are interested in ${giftDetails.preferences} . Could you suggest 10 gift options(Product names) that would be a good fit? Thanks in advance . Give the response in array of ideas only .No other text should be in response.Remove number and price from it.return in the format [idea,idea]`

        // setGiftDetails({
        //     ...giftDetails,
        //     loading: true,
        // })

        const response = await fetch(
            'https://fk-gift-ai-backend.onrender.com',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prompt: input,
                }),
            }
        )

        if (response.ok) {
            const data = await response.json()
            const parsedData = data.bot.trim() // trims any trailing spaces/'\n'

            setOutput(convertStringToArray(parsedData))

            // setGiftDetails({
            //     ...giftDetails,
            //     loading: false,
            // })
        } else {
            const err = await response.text()

            console.log('Something went wrong', err)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        getGiftIdeas()

        setGiftDetails({
            ...giftDetails,
            occasion: '',
            for: '',
            preferences: '',
            loading: false,
        })
    }

    return (
        <form className="border border-gray-200 rounded text-gray-900 px-6 py-8 flex flex-col gap-10 mb-20">
            <div className="">
                <label className="block mb-2 text-sm font-medium  ">
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
                    placeholder="Birthday, Party, Anniversary etc..."
                    className="block w-full p-4  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                />
            </div>

            <div className="">
                <label className="block mb-2 text-sm font-medium  ">
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
                    placeholder="Mother, Brother, etc..."
                    className="block w-full p-4  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                />
            </div>

            <div className="">
                <label className="block mb-2 text-sm font-medium  ">
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
                    placeholder="Naruto, Barbie Dolls, Swimming  etc..."
                    className="block w-full p-4  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                />
            </div>

            <div className="">
                <label className="block mb-2 text-sm font-medium">Budget</label>
                <input
                    onChange={(e) =>
                        setGiftDetails({
                            ...giftDetails,
                            [e.target.name]: parseInt(e.target.value, 10),
                        })
                    }
                    name="budget"
                    value={giftDetails.budget}
                    type="number"
                    placeholder="20000"
                    className="block w-full p-4  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                />
            </div>

            <button
                onClick={handleSubmit}
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center mr-2 mb-2 "
            >
                Submit
            </button>
        </form>
    )
}

export default GiftForm
