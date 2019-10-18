import React, { useEffect , useState} from 'react';
import { View, Image, Text} from 'react-native';
import { homeStyles } from './styles';
import Header from '../Header/header';
import Tiles from '../Tiles/tiles';

const home = (props)=>{
    const [backPressed, setBackPressed] = useState(false);
    const [showBackButton, setShowBackButton] = useState(false);
    return(
        <View style={homeStyles.container}>
            <Image 
            style={homeStyles.backgroundImageStyle}
            source={require('../../assets/backgroundImage.jpg')}
            resizeMode={"contain"}
            />
            <Header   
            showBackButton={showBackButton}
            backPressed={backPressed}
            back={setBackPressed}/> 
            <Tiles
                setShowBackButton={setShowBackButton}  
                backPressed={backPressed}
            />
        </View>
    )
}

export default home;