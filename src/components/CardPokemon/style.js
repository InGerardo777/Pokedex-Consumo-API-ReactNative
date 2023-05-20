import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    display: 'flex',
  },

  boxCard: {
    backgroundColor: 'grey',
    width: '85%',
    height: 300,
    margin: 30,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: '10%',
    justifyContent: 'flex-end',
  },
  boxName: {
    position: 'absolute',
    margin: '1%',
    width: '100%',
    height: 50,
    opacity: 0.5,
    backgroundColor: 'black',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  boxIcons: {
    width: 80,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 6,
    color: 'blue',
  },
  boxIconsActivate: {
    width: 80,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 6,
    color: 'red',
  },
  textBoxName: {
    fontSize: 30,
    color: '#FFFB00',
  },
});
