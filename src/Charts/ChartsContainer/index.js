import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Drawer from "react-motion-drawer";
import { compose, withState } from "recompose";
import { Charts } from "../Charts";
import { ChartConfig } from "../ChartConfig";
import { defaultConfig } from "../defaultConfig";

const DrawerToggler = styled.button`
  position: absolute;
  top: 5px;
  left: 5px;
  opacity: 0;

  &:hover {
    opacity: 1;
  }
`;

const CustomDrawer = styled(Drawer)`
  background-color: #fff;
  color: #333;
  padding: 10px;
`;

class ChartsContainer extends React.Component {
  static propTypes = {
    // Drawer
    drawerIsOpen: PropTypes.bool.isRequired,
    toggleDrawer: PropTypes.func.isRequired,

    // Interval
    interval: PropTypes.string.isRequired,
    setInterval: PropTypes.func.isRequired
  };

  static defaultProps = {
    exchanges: [
      "bitfinex/btcusd",
      "bitstamp/btcusd",
      "gdax/btcusd",
      "okex/btcusdt",
      "bitmex/btcusd-perpetual-futures",
      "bitmex/btcusd-quarterly-futures",
      "bitflyer/btcfxjpy",
      "okcoin/btcusd-quarterly-futures"
    ]
  };

  render() {
    const {
      exchanges,
      drawerIsOpen,
      toggleDrawer,
      interval,
      setInterval
    } = this.props;

    return (
      <React.Fragment>
        <DrawerToggler onClick={() => toggleDrawer(true)}>Config</DrawerToggler>

        <CustomDrawer open={drawerIsOpen} width={300} onChange={toggleDrawer}>
          <h2>Configuration</h2>
          <ChartConfig interval={interval} onInterval={setInterval} />
        </CustomDrawer>

        <Charts
          config={defaultConfig.cryptowatch}
          interval={interval}
          exchanges={exchanges}
        />
      </React.Fragment>
    );
  }
}

ChartsContainer = compose(
  withState("drawerIsOpen", "toggleDrawer", false),
  withState("interval", "setInterval", defaultConfig.interval)
)(ChartsContainer);

export { ChartsContainer };
