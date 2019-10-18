import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, TextInput } from 'react-native';
import { bodyStyle } from './styles';
import { getDummyPosts } from '../helpers/apis/index';
import SingleTile from './singleTile';
import SinglePost from '../Card/card';

const tiles = props => {
    const [posts, setPosts] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [singlePost, setSinglePost] = useState(null);

    handlePosts = () => {
        setLoading(true);

        getDummyPosts()
            .then(res => {
                setPosts(res.data);
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        handlePosts();
    }, []);

    useEffect(() => {
        props.setShowBackButton(false);
        setSinglePost(null);
    }, [props.backPressed])

    handleTilePress = (item) => {
        props.setShowBackButton(true);
        setSinglePost(item);
    }

    _renderTile = ({ item }) => {
        return <SingleTile onPress={() => { handleTilePress(item) }} {...item} />
    }

    handleSearch = (text) => {
        if (text.length === 0) {
            setPosts(searchResult);
            return;
        }
        // console.log(posts);
        let temp = posts.filter(item => {
            return (item.title.toLowerCase()).includes(text.toLowerCase());
        });
        setPosts(temp);
    }
    return (
        <View style={bodyStyle.container}>
            {!singlePost &&
                <View
                    style={bodyStyle.textInputStyle}>
                    <TextInput
                        style={{ color: "white" }}
                        onChangeText={handleSearch}
                        placeholder={"Seach For tiles"}
                        placeholderTextColor={"white"}
                    />
                </View>
            }

            {loading &&
                <View style={bodyStyle.loadingStyles}>
                    <ActivityIndicator
                        size={30}
                        color={"white"}
                    />
                </View>
            }
            {posts.length > 0 && !loading && !singlePost &&
                <FlatList
                    style={bodyStyle.listStyle}
                    renderItem={_renderTile}
                    data={posts}
                />
            }

            {singlePost &&
                <SinglePost
                    {...singlePost} />
            }

        </View>
    )
}

export default tiles;