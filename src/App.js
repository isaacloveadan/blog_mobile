import React, { Component } from 'react';
import { 
    StyleSheet,
    View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

const Navigator = StackNavigator(
    {
        Login: {
            screen: LoginPage,
            navigationOptions: ({navigation}) => ({
                title: '登录',
            }),
        },
        Register: {
            screen: RegisterPage,
            navigationOptions: ({navigation}) => ({
                title: '注册',
            }),
        }
    }
);

export default class App extends Component {
    render() {
        return (
            <Navigator />
        )
    }
}
