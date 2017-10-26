//
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Button, Text, StyleSheet} from 'react-native';

export default class DDSButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View>
                <Text>{this.props.prefix}</Text>
                <Button onPress = {this.props.onPress} {...this.props} />
                <Text>{this.props.suffix}</Text>
                <Text backgroundColor = {'#548811'}> T E S T</Text>
                <Text> teset7688</Text>
            </View>
        )
    }

}

DDSButton.propTypes = {
      prefix: PropTypes.string,
      suffix: PropTypes.string,
      onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    button: {
        height: 200,
        width: 400,
        backgroundColor: 'red'
    }
})