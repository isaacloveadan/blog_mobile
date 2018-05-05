import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';
import axios from '../util/axios';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
    handleSubmit() {
        axios.post('/users/login', {
            username: this.state.username,
            password: this.state.password,
        }).then((res) => {
            console.log(res);
        }).catch((error) => {
            Alert.alert(error.response.data.message);
        });
    }
    handleRegister() {
        this.props.navigation.navigate('Register');
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    BLOG
                </Text>
                <TextInput autoCapitalize="none" onChangeText={(text) => {this.setState({ username: text })}} value={this.state.username} placeholder="请输入用户名" style={styles.infoInput} />
                <TextInput 
                    placeholder="请输入密码" 
                    style={styles.infoInputPassword}
                    value={this.state.password}
                    onChangeText={(text) => {this.setState({ password: text })}}
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.inputSubmit}
                    onPress={this.handleSubmit.bind(this)}
                >
                    <Text style={{ color: 'white' }}>登录</Text>
                </TouchableOpacity>
                <View style={styles.operationView}>
                    <Text
                        style={styles.register}
                        onPress={this.handleRegister.bind(this)}
                    >注册</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        position: 'relative',
        bottom: 10,
    },
    title: {
        marginBottom: 50,
        fontSize: 20,
        alignSelf: 'center',
    },
    infoInput: {
        width: '70%',
        height: 40,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'grey',
        paddingLeft: 10,
    },
    infoInputPassword: {
        width: '70%',
        height: 40,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 50,
        borderWidth: 1,
        borderColor: 'grey',
        paddingLeft: 10,
    },
    inputSubmit: {
        width: '70%',
        backgroundColor: 'blue',
        alignSelf: 'center',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    operationView: {
        width: '70%',
        alignSelf: 'center',
        marginTop: 5,
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    register: {
        color: 'blue',
    }
})
