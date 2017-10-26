import React, {Component} from 'react';
import {View, TextInput, Text, ListView, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import DDSButton from '../statelessComponents/DDSButton';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

export default class ListScreen extends Component {
    constructor (props) {
        super(props);

        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        }

        this.renderRow = this.renderRow.bind(this)
        this.renderSectionHeader = this.renderSectionHeader.bind(this)
    }

    componentDidMount () {

    }

    renderRow (rowData) {
        return (
            <Text>{rowData.bookingDropOffArriveTime}</Text>
        )
    }

    renderSectionHeader (sectionData, sectionTitle) {
        return (
            <Text style={{fontWeight: "700"}}>{sectionTitle}</Text>
        )
    }

    render () {
        return (
            <View>
                <TextInput style={styles.filter}>
                </TextInput>
                <DDSButton onPress = {this.props.updateList} prefix = 'testButton' suffix = 'back' title = 'Get List' />
                <ListView dataSource={ds.cloneWithRowsAndSections(this.props.items)} renderRow = {this.renderRow} renderSectionHeader = {this.renderSectionHeader} />
            </View>
        );
    }
}

ListScreen.PropTypes = {
    items: PropTypes.array,
    updateList: PropTypes.func.isRequired
}

ListScreen.defaultProps = {
    items: []
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    filter: {
        width: 300,
        height: 60
    },
})
