import React from 'react';
import {
  ScrollView,
  View,
  Text,
  useColorScheme,
  StyleSheet,
} from 'react-native';
import {
  Colors,
  Header,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Section} from '../../components/Section';

export function HomeScreen(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={[
        styles.scrollView,
        {
          backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        },
      ]}>
      <Header />
      <View
        style={[
          styles.content,
          {
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          },
        ]}>
        <Section title="Step One">
          Edit <Text style={styles.highlight}>App.tsx</Text> to change this
          screen and then come back to see your edits.
        </Section>
        <Section title="See Your Changes">
          <ReloadInstructions />
        </Section>
        <Section title="Debug">
          <DebugInstructions />
        </Section>
        <Section title="Learn More">
          Read the docs to discover what to do next:
        </Section>
        <LearnMoreLinks />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  highlight: {
    fontWeight: '700',
  },
});
