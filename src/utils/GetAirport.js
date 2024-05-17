import axios from "axios";

export const getAirportListIataAndCIty = async (iata, city) => {
    let list = []
    try {
        const res = await axios.get(`https://api.api-ninjas.com/v1/airports?iata=${iata}&city=${city}`,
            {
                headers: {
                    'X-Api-Key': "wNCT7Wm4GfQrWilcOTwN0A==RiBKlWKUw7zw6Dps"
                }
            }
        );
        if (!res || res.data.length <= 0) {
            throw new Error("Data not found")
        } else {
            // list = { name: res.data[0]?.city, description: res.data[0]?.name }
            list = res.data;
            // console.log("res", res);
            // console.log("list", list);
        }
    } catch (err) {
        // console.log(err);
    }
    return list;
}
