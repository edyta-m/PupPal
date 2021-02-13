import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View, Image, Button, StyleSheet } from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: true
        };
    }

    componentDidMount() {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((response) => response.json())
            .then((json) => {
                this.setState({ data: json.message });
            })
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({ isLoading: false });
            });
    }

    render() {
        const { data } = this.state;

        const styles = StyleSheet.create({
            container: {
                paddingTop: 175,
                paddingBottom: 500,
                backgroundColor: '#333'
            },
            titleText: {
                fontSize: 30,
                fontWeight: "bold",
                color: '#f0f8ff'
            },
            pupImage: {
                width: 400,
                height: 400
            }
        });

        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>
                    Your Pup for the Day
                </Text>
                <Image style={styles.pupImage}
                    source={{ uri: `${data}` }}
                />
                <Button
                    title="Different pup"
                    onPress={() => this.componentDidMount()}
                />
            </View>
        );
    }
};