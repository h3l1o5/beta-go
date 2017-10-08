import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'

import PredictedDataRow from './predictedDataRow/PredictedDataRow'
import RealtimeDataRow from './realTimeDataRow/RealtimeDataRow'

import './PresentationBlock.css'

class PresentationBlock extends Component {
  state = {
    predictedData: null,
    realtimeData: null,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedStation) {
      const { predictedData, realtimeData } = nextProps.selectedStation
      this.setState({
        predictedData,
        realtimeData,
      })
    }
  }

  render() {
    const { predictedData, realtimeData } = this.state
    const { isLoading } = this.props.common
    return (
      <div id="presentationBlock">
        <Dimmer page active={isLoading}>
          <Loader>載入中</Loader>
        </Dimmer>
        {predictedData ? (
          <div id="rows">
            <RealtimeDataRow realtimeData={realtimeData} />
            <PredictedDataRow predictedData={predictedData} />
          </div>
        ) : (
          <div id="requireStationTip">在地圖上選擇一個路段</div>
        )}
      </div>
    )
  }
}

PresentationBlock.propTypes = {
  selectedStation: PropTypes.object,
  common: PropTypes.object.isRequired,
}

PresentationBlock.defaultProps = {
  selectedStation: null,
}

const mapStateToProps = state => ({
  selectedStation: state.selectedStation,
  common: state.common,
})

export default connect(mapStateToProps, null)(PresentationBlock)
