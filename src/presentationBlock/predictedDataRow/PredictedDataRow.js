import React from 'react'
import PropTypes from 'prop-types'

import AmountPredictBarchart from './AmountPredictBarchart'
import AmountPredictPiechart from './AmountPredictPiechart'
import SpeedPredict from './SpeedPredict'

const PredictedDataRow = props => (
  <div id="predictedDataRow">
    <div className="header">未來一天路段預測資訊</div>
    <div className="contents">
      <AmountPredictBarchart data={props.predictedData} />
      <AmountPredictPiechart />
      <SpeedPredict />
    </div>
  </div>
)

PredictedDataRow.propTypes = {
  predictedData: PropTypes.array,
}

PredictedDataRow.defaultProps = {
  predictedData: null,
}

export default PredictedDataRow
