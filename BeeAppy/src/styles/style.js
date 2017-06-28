import React from 'react-native';
var { StyleSheet } = React;

var style = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#A5DBEB',
    flex: 1,
  },

  homeTextStyle: {
    fontSize: 20,
    backgroundColor: '#48FB0D',
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#48FB0D',
  },

  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
  },

  donateListStyle: {
    flex: 1,
    flexDirection: 'column',
  },

  donateText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },

  imageButtonStyle: {
    width: 60, height: 60,
    alignItems: 'center',
  },

  beeButtonStyle: {
    width: 100, height: 100,
    position: 'absolute',
    top: 190,
    left: 140,
  },

  donateImageButtonStyle: {
    width: 150, height: 50,
    alignItems: 'center',
  },

  donateButton: {
    position: 'absolute',
    top: 510,
    right: 50,
  },

  beehiveButton: {
    position: 'absolute',
    top: 510,
    left: 160,
  },

  beeFactButton: {
    position: 'absolute',
    top: 510,
    left: 50,
  },
});

export default style;
