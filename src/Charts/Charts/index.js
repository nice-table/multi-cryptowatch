import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import chunk from "lodash/chunk";
import { Chart } from "../Chart";

const ChartsLayoutContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ChartsRow = styled.div`
  flex: 1;
  display: flex;
`;

const ChartWrapper = styled.div`
  flex: 1;

  /* Cut off uneeded tools sidebar and footer in charts */
  overflow: hidden;
`;

class Charts extends React.PureComponent {
  static propTypes = {
    interval: PropTypes.string.isRequired,
    exchanges: PropTypes.array.isRequired,
    config: PropTypes.object.isRequired
  };

  render() {
    const { interval, exchanges, config } = this.props;

    const rows = chunk(exchanges, exchanges.length / 2);

    return (
      <ChartsLayoutContainer>
        {rows.map((row, index) => (
          <ChartsRow key={index}>
            {row.map(exchange => (
              <ChartWrapper key={exchange}>
                <Chart
                  chartConfig={config}
                  exchange={exchange}
                  interval={interval}
                />
              </ChartWrapper>
            ))}
          </ChartsRow>
        ))}
      </ChartsLayoutContainer>
    );
  }
}

export { Charts };
