import axios from "axios";

const getAiportList = async (iata) => {
    let list
    try {
        const res = await axios.get(`https://api.api-ninjas.com/v1/airports?iata=${iata}`,
            {
                headers: {
                    'X-Api-Key': "wNCT7Wm4GfQrWilcOTwN0A==RiBKlWKUw7zw6Dps"
                }
            }
        );
        if (!res || res.data.length <= 0) {
            console.log("Data not found")
        } else {
            list = { name: res.data[0]?.city, description: res.data[0]?.name }
        }
    } catch (err) {
        console.log(err);
    }
    return list;
}

export default getAiportList;