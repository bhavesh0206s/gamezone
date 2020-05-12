import React , {useState} from 'react';
import {globalStyles} from '../styles/global'
import { View, Text, FlatList, Modal, StyleSheet, Keyboard } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Card from '../shared/card';
import {MaterialIcons} from '@expo/vector-icons'
import ReviewForm from './reviewForrm';

const Home = ({navigation}) => {

  const [modalOpen, setModalOpen] = useState(false);

  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: 1 },
    { title: 'Gotta catch Them All(again)', rating: 4, body: 'lorem ipsum', key: 2 },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: 3 },
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews(currentReview => {
      return [review, ...currentReview]
    })
    setModalOpen(false)
  }

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType='slide'>
        <MaterialIcons 
          name='close'
          size={24}
          style={{...styles.modalToggle, ...styles.modalClose}}
          onPress={() => setModalOpen(false)}
        />
        <View style={styles.modal}>
          <ReviewForm addReview={addReview}/>
        </View>
      </Modal>
      <MaterialIcons 
        name='add'
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />
      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', {item})}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center'
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0
  }
})

 
export default Home;