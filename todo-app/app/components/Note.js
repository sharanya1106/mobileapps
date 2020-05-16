import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Note extends React.Component  {
  render() {
      return (
         <View key={this.props.keyval} style={styles.note} >
             {/* <Text> No. of Tasks: {this.props.val.notasks}</Text> */}
             <Text style={styles.noteText1}>{this.props.val.note}</Text>
             <Text style={styles.noteText}>Date: {this.props.val.date}</Text>
             <Text style={styles.noteText}>Due date: {this.props.val.duedate } </Text>
             {/* <Text style={styles.noteText}>{this.props.val.note}</Text> */}
             <TouchableOpacity onPress = {this.props.deleteMethod} style={styles.noteDelete}>
                 <Text style={styles.noteDeleteText}>Delete</Text>
             </TouchableOpacity>
         </View>
         
      );
  }
}

const styles = StyleSheet.create({
    note: {
        position: 'relative',
        padding: 20,
        paddingRight:100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
    },
    noteText: {
        // fontWeight: "bold",
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#6495ED',
    },
    noteText1: {
        fontWeight: "bold",
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#6495ED',
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#87CEFA',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    }
});
