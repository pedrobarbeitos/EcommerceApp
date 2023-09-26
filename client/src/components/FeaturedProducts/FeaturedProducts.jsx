import React from 'react'
import {useState, useEffect} from "react"
import axios from "axios"
import "./FeaturedProducts.scss"
import Card from '../../components/Card/Card';

function FeaturedProducts({type}) {


  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await axios.get(
                `http://localhost:1337/api/products?populate=*&[filters][[type][$eq]=${type}`,
                {
                    headers:{
                        Authorization: "Bearer d5ebe562187669b23fffb7af54713eb35bf3dc68dd63bb569107f2da9ff392d4ce4852fb2a3d05b74b2e03f43cf37e75975616079afd4775deb3fff7ee3436535052c3ab4f874add8b5a930f21098b55289369cd752071c7c92e5bff689b6c06d84d0d801993c02072ba208f7a9301375a58b4464c3e4d5f39f379dca2cc0873",
                    },
                }
                );

            setData(res.data.data);

                    } catch (err) {
            console.log(err);
        }
    };
    fetchData();
  }, []);




  return (
    <div className="featuredProducts">
        <div className="top">
                 </div>
        <div className="bottom">
            {data.map(item => (
                <Card item={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts




