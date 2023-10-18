import React, { useState } from "react";
import { FlatList, Image, View, Dimensions } from "react-native";

import { styles } from "./styles";

const { width } = Dimensions.get('window');

const ImageCarusel = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleScrollEnd = (event) => {
        console.log('event => ', event.nativeEvent)
        const horizontalOffSet = event.nativeEvent.contentOffset.x
        const index = horizontalOffSet / width
        setActiveIndex(index)
    }
    const renderImage = ({ item }) => {
        return (
            <Image style={styles.image} source={{ uri: item }} />
        )
    }

    return (
        <View>
            <FlatList horizontal pagingEnabled style={styles.list} data={images} renderItem={renderImage} onMomentumScrollEnd={handleScrollEnd} />
            <View style={styles.paggination}>
                {images?.map((_, i) => (
                    <View key={i} style={[styles.pagginationLine, i = activeIndex ? styles.activeLine : {}]} />
                ))}
            </View>
        </View>

    )
}

export default React.memo(ImageCarusel)