import { gql, useQuery } from "@apollo/client";
import { ActivityIndicator, FlatList, Pressable, SafeAreaView, StyleSheet, Text } from "react-native";
import styles from "../../styles";
import React from "react";

const CHAPTERS_QUERY = gql`
  query Chapters {
    chapters {
      id
      number
      title
    }
  }
`

type ChapterItemProps = {
    chapter: Chapter;
    onPress: () => void;
};

const ChapterItem = ({ chapter, onPress }: ChapterItemProps) => {
    const { number, title } = chapter
    let header, subheader

    if (number) {
        header = `Chapter ${number}`
        subheader = title
    } else {
        header = title
    }

    return (
        <Pressable style={styles.item} onPress={onPress}>
            <Text style={styles.header}>{header}</Text>
            {subheader && <Text style={styles.subheader}>{subheader}</Text>}
        </Pressable>
    )
}

const ContentScreen = () => {
    const { data, loading } = useQuery(CHAPTERS_QUERY)

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />
    }

    // OnPress
    // navigate for detail screen
    const onPress = (item: Chapter) => {
        // navigation.navigate('MovieDetail', { item: item })
    }

    return (
        <FlatList
            data={data.chapters}
            renderItem={({ item }) => (
                <ChapterItem
                    chapter={item}
                    onPress={() => onPress(item)}
                />
            )}
            keyExtractor={(chapter) => chapter.id.toString()}
        />
    )
}

export default ContentScreen