import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Note from './Note';
export default class Main extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      input: '',
      // date1: new Date()
    }
  }
  render() {
    let notes = this.state.tasks.map((val, key) => {
      return <Note key={key} keyval={key} val={val}
      deleteMethod={ ()=> this.deleteNote(key)} />
    });
      return (
          <View style = {styles.container}>
            <View style = {styles.header}>
              <Text style={styles.headerText}>TO-DO List</Text>
            </View>
            <ScrollView style ={styles.scrollContainer}>
              {notes}
            </ScrollView>
            <View style = {styles.footer}>
              <TextInput style = {styles.textInput}
              onChangeText={(input) => this.setState({input})}
              value = {this.state.input}
              placeholder='Enter tasks here'
              placeholderTextColor='white'
              underlineColorAndroid = 'transparent'>
              </TextInput>
            </View>
            <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
              <Text style = {styles.addButtonText}>add</Text>
            </TouchableOpacity>
          </View>
      );
  }

  addNote() {
    if(this.state.input) {
      var d = new Date();
      this.state.tasks.push({
        'date': d.getFullYear() +
        "/" +(d.getMonth() +1) +
        "/" + d.getDate(),
        'duedate': d.getFullYear() +
        "/" + (d.getMonth()+1) +
        "/" + (d.getDate()+1),
        'note':this.state.input,
        'notasks':this.state.tasks.length

      });
      this.setState({tasks: this.state.tasks})
      this.setState({input: ''});
    }
  }

  deleteNote(key) {
    this.state.tasks.splice(key,1);
    this.setState({tasks: this.state.tasks})
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
  header: {
    backgroundColor: '#6495ED',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 26,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
    
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#6495ED',
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },
});
