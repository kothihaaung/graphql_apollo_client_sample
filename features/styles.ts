import { StyleSheet } from 'react-native'

export const PINK = '#ff5dc8'

export const screenOptions = {
  headerStyle: {
    backgroundColor: PINK,
  },
  headerTintColor: '#fff',
}

export default StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#474642',
  },
  header: {
    fontWeight: 'bold',
    color: 'white',
  },
  subheader: {
    paddingTop: 10,
    color: '#bab19b',
  },
})
