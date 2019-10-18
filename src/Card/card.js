import React, { useEffect, useState } from 'react';
import {
    View,
    Animated,
    Dimensions,
    Text,
    TouchableOpacity
} from 'react-native';
import { cardStyle } from './styles';
import Feed from './feed';

const navigatorStrings = {
    DETAILS: "DETAILS",
    FEED: "FEED",
    GUEST_LIST: "GUEST_LIST",
}

const HEIGHT = Dimensions.get("window").height;

const card = props => {
    const [stage, setStage] = useState(navigatorStrings.DETAILS);
    const [cardPosition, setCardPosition] = useState(new Animated.Value(HEIGHT));

    useEffect(() => {
        showCard();
    }, [])

    showCard = () => {
        Animated.timing(
            cardPosition,
            {
                toValue: HEIGHT / 2.75,
                duration: 1000,
            }
        ).start();
    }
    
    return (
        <View style={cardStyle.container}>
            <View style={cardStyle.titleHolder}>
                <Text style={cardStyle.titleStyle}>{props.title}</Text>
            </View>
            <Animated.View style={[cardStyle.cardStyle, { top: cardPosition }]}>
                <View style={cardStyle.headerLine}>
                    <View style={cardStyle.lineStyle}>

                    </View>
                </View>

                <View style={cardStyle.navigatorStyle}>
                    <TouchableOpacity
                        onPress={()=>{setStage(navigatorStrings.DETAILS)}}
                        style={[cardStyle.navigatorItem, {
                            borderBottomWidth: stage === navigatorStrings.DETAILS? 3: 0,
                            borderBottomColor: stage === navigatorStrings.DETAILS? "red": "white"

                        }]}>
                        <Text style={cardStyle.navigatorTextStyle}>Details</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=>{setStage(navigatorStrings.GUEST_LIST)}}
                    style={[cardStyle.navigatorItem, {
                            borderBottomWidth: stage === navigatorStrings.GUEST_LIST? 3: 0,
                            borderBottomColor: stage === navigatorStrings.GUEST_LIST? "red": "white"

                        }]}>
                        <Text style={cardStyle.navigatorTextStyle}>Guest List</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=>{setStage(navigatorStrings.FEED)}}
                    style={[cardStyle.navigatorItem, {
                            borderBottomWidth: stage === navigatorStrings.FEED? 3: 0,
                            borderBottomColor: stage === navigatorStrings.FEED? "red": "white"

                        }]}>
                        <Text style={cardStyle.navigatorTextStyle}>Feed</Text>
                    </TouchableOpacity>
                </View>

                {stage === navigatorStrings.FEED &&
                    <Feed 
                    {...props}/> 
                }
                {stage === navigatorStrings.DETAILS &&
                    <Feed 
                    {...props}/> 
                }
                {stage === navigatorStrings.GUEST_LIST &&
                    <Feed 
                    {...props}/> 
                }
            </Animated.View>
        </View>
    )
}

export default card;