import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image,FlatList} from 'react-native';
import newsAPI from '../navigation/newsAPI';
import NewsCard from '../screens/NewsCard';


const News = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        getNewsFromAPI()
    }, [])


    function getNewsFromAPI() {
        newsAPI.get('top-headlines?country=us&apiKey=aa6a097fb9fb4509958fdabd1942e6d1')
            .then(async function (response) {
                setNews(response.data);
                console.log("CAll",response.data);
            })
            .catch(function (error) {
                console.log(error)
            })
    }
 

    return (
        <View>
            <FlatList data={news.articles}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({item}) => {
                    return <NewsCard item = {item}/>
                }}
            />
        </View>
    )
}

export default News