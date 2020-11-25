import React, { Component } from 'react'
import {
    Text, View, StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    TextInput, Switch, FlatList, ScrollView,
    Image,
    Button
}
    from 'react-native';

const users = [
    { id: "1", name: "Deng Aguer", completed: true },
    { id: "2", name: "Chris Evans", completed: false },
    { id: "3", name: "Peter Griffin", completed: false },
    { id: "4", name: "Homer Simpson", completed: true },
    { id: "5", name: "Mosh Hamedani", completed: false }
]

class TodoList extends Component {
    state = {
        name: "Deng",
        showName: true,
        todo: "",
        users: users
    }

    componentDidMount() {
        // fetch('https://www.breakingbadapi.com/api/characters')
        // .then((response) => response.json())
        // .then((response) => this.setState({
        //     userDataSource: response
        // })
        // )

    }

    onChangeText = (value) => {
        this.setState({ todo: value })
    }

    onSubmit = () => {
        const { users, todo } = this.state
        if (todo !== "") {
            let Id = users.length + 1
            Id = Id.toString()
            const newlistItem = { id: Id, name: todo, completed: false }
            this.setState({ name: this.state.todo })
            this.setState({ users: [...users, newlistItem] })
            this.setState({ todo: "" })
        }
        else alert("Please enter something.")
    }

    toggleComplete = (user) => {
        const users = [...this.state.users];
        const index = users.indexOf(user)
        users[index] = { ...users[index] }
        users[index].completed = !users[index].completed
        this.setState({ users })
    }

    delUser = (user) => {
        let { users } = this.state;
        users = users.filter(t => t.id !== user.id)
        this.setState({ users })
    }


    render() {
        return (
            <View>
                <View style={styles.header} >
                    <Text style={styles.h1} >TODOS</Text>
                </View>
                <ScrollView>
                    <View style={styles.input} >
                        <TextInput style={styles.textInput}
                            onChangeText={(value) => this.onChangeText(value)}
                            placeholder="Enter Text"
                            value={this.state.todo}
                            onSubmitEditing={this.onSubmit}
                        />
                        <Button title="Add" onPress={this.onSubmit} style={styles.btn} />
                    </View>
                    <FlatList style={styles.list}
                        data={this.state.users}
                        renderItem={({ item }) =>
                            <View style={styles.listContent} >
                                <TouchableOpacity
                                    style={styles.listContent}
                                >
                                    <Text key={item.id}
                                        style={item.completed ? styles.listItemDone : styles.listItem}
                                        onPress={this.toggleComplete.bind(this, item)}
                                    >
                                        {item.name}
                                    </Text>
                                </TouchableOpacity>
                                <Text onPress={this.delUser.bind(this, item)} style={styles.delBtn} >X</Text>
                            </View>
                        }
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    effect: {
        padding: 0,
        margin: 0

    },
    header: {
        zIndex: 10,
        height: 40,
        backgroundColor: "#455a64",
        padding: "auto",
        display: 'flex',
        justifyContent: 'space-between'
    },
    h1: {
        justifyContent: "flex-start",
        fontSize: 20,
        color: "#fff",
        padding: 5
    },
    text: {
        fontSize: 18
    },
    vText: {
        color: '#fff'
    },
    input: {
        flexDirection: 'row',
        height: 50,
        marginTop: 5,
        flex: 1,
        width: '100%',
        alignItems: 'baseline',
        padding: 5
    },
    textInput: {
        fontSize: 18,
        borderBottomColor: "#ddd",
        borderBottomWidth: 1,
        margin: 5,
        width: '80%'
    },
    list: {
        marginTop: 10,
        padding: 10,
        flex: 1
    },
    listItem: {
        textDecorationLine: 'none'
    },
    listItemDone: {
        textDecorationLine: 'line-through',
        color: '#f1f',
        marginBottom: 10
    },
    listContent: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between'
    },
    btn: {
        padding: 2
    },
    delBtn: {
        textAlign: 'center',
        backgroundColor: "red",
        width: 20,
        color: "#fff",
        borderRadius: 50,
        height: 20,
        justifyContent: 'center'
    }
})


export default TodoList;