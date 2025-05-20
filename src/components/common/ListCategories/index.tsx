import React, { memo, useCallback, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

// Components
import { TopicItem } from '@/components/common';

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
      {LIST_TOPICS.map(topic => (
        <TopicItem
          key={topic.id}
          label={topic.label}
          isActive={activeId === topic.label}
          onPress={() => handlePress(topic.label)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    paddingVertical: 2,
    gap: 24,
  },
});

export default memo(ListCategories);
