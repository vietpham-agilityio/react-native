import React, { memo, useCallback, useState } from 'react';
import { ScrollView, View } from 'react-native';

// Components
import { TopicItem } from '@/components/common';

// Styles
import styles from './ListCategories.style';

// Constants
import { LIST_TOPICS } from '@/constants/listData';

const ListCategories = () => {
  const [activeId, setActiveId] = useState(LIST_TOPICS[0].label);

  const handlePress = useCallback((label: string) => {
    setActiveId(label);
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scroll}>
      <View style={styles.container}>
        {LIST_TOPICS.map(topic => (
          <TopicItem
            key={topic.id}
            label={topic.label}
            isActive={activeId === topic.label}
            onPress={() => handlePress(topic.label)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default memo(ListCategories);
