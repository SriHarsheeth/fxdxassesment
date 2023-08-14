import { useEffect, useState } from 'react'
import '../styles/component3.css'
import arrow from '../images/rightcirclearrow.svg'

const Component3 = () => {
    let [data, setData] = useState([])
    console.log(data)

    useEffect(() => {
        const url = 'https://twelve-data1.p.rapidapi.com/stocks?exchange=NASDAQ&format=json';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b9d5cbba4amsh3cf7fd896444022p1662acjsn494128db6fe9',
                'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
            }
        };

        try {
            fetch(url, options)
                .then((response) => { return response.json() })
                .then((datas) => { setData(datas.data) })
        } catch (error) {
            console.error(error);
        }
    }, [])



    return (
        <div className='component3-main-container'>
            <div className="left">
                <div className="container">
                    <table>
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Name</th>
                                <th>Symbol</th>
                                <th>Currency</th>
                                <th>Exchange</th>
                            </tr>
                        </thead>
                        {
                            data.splice(0, 3).map((value, ind) => {
                                return (
                                    <tbody>
                                        <tr>
                                            <td>{ind + 1}</td>
                                            <td>{value.name}</td>
                                            <td> {value.symbol}</td>
                                            <td>{value.currency}</td>
                                            <td>{value.exchange}</td>
                                            <td><button>BUY</button></td>
                                        </tr>
                                    </tbody>
                                )
                            })
                        }
                    </table>
                </div>
            </div>
            <div className="right">
                <h1>Market Trend</h1>
                <p>Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
                    et velit interdum, ac aliquet odio mattis.</p>
                <button>Start Trading <img src={arrow} alt="" /></button>
            </div>
        </div>
    )
}
export default Component3;