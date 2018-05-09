import React from "react";
import styled from "styled-components";

const ChartIframe = styled.iframe`
  /* Add the cryptowatch tools sidebar's width, and then cut it off with overflow hidden */
  width: calc(100% + 32px);
  /* Add the cryptowatch footer's height, and then cut it off with overflow hidden */
  height: calc(100% + 30px);
`;

class Chart extends React.Component {
  componentDidMount() {
    const { chartConfig } = this.props;
    this.iframe.onload = () => {
      this.iframe.contentWindow.postMessage(chartConfig, "*");
    };
  }

  createEmbedUrl() {
    const { exchange, interval, chartConfig } = this.props;

    return `https://embed.cryptowat.ch/${exchange}/${interval}?presetColorScheme=${
      chartConfig.theme
    }&config=external`;
  }

  render() {
    return (
      <ChartIframe
        innerRef={f => {
          this.iframe = f;
        }}
        frameBorder="0"
        src={this.createEmbedUrl()}
        width="100%"
        height="100%"
      />
    );
  }
}

export { Chart };
