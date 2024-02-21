import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardelevated]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.imageCard}
        />
        <View style={styles.cardbody}>
          <Text style={styles.cardtitle}>A phographer woman</Text>
          <Text style={styles.cardlabel}>Forest somewhere in australia</Text>
          <Text style={styles.carddescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            excepturi ratione accusantium maiores ad facere tempore dolorum
            commodi tempora ullam!
          </Text>
          <Text style={styles.cardfooter}>Forest somewhere in australia</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 400,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardelevated: {
    backgroundColor: '#ffffff',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  imageCard: {
    height: 200,
    width: 300,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardbody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardtitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardlabel: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 4,
  },
  carddescription: {
    color: 'red',
    fontSize: 12,
    padding: 5,
    marginTop: 6,

    marginBottom: 12,
  },
  cardfooter: {},
});

export default FancyCard;
