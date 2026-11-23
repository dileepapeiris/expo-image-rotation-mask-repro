import { StatusBar } from 'expo-status-bar';
import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <View style={styles.section}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.row}>
        {[0, 1, 2].map((index) => (
          <View key={index} style={styles.item}>
            {children}
          </View>
        ))}
      </View>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.screen}>
      <StatusBar style="light" />
      <Row label="expo-image">
        {null}
      </Row>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    gap: 12,
  },
  section: {
    gap: 4,
  },
  label: {
    color: 'white',
    fontSize: 13,
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 16,
  },
  item: {
    flex: 1,
    height: 90,
    backgroundColor: 'green',
  },
});
