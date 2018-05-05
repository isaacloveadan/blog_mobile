import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class RegisterPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    BLOG
                </Text>
                <TextInput autoCapitalize="none" placeholder="请输入用户名" style={styles.infoInput} />
                <TextInput 
                    placeholder="请输入密码" 
                    style={styles.infoInputPassword}
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.inputSubmit}
                >
                    <Text style={{ color: 'white' }}>注册</Text>
                </TouchableOpacity>
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