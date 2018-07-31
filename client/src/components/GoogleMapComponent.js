import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
const AnyReactComponent = ({ text }) => <div>{ text }</div>;
export default class GoogleMapComponent extends Component {
  static defaultProps = {
    center: { lat: 49.246292, lng: -123.116226 },
    zoom: 15
  }
render() {
    return (
      <div className='google-map'>
        <div style={{ height: '200px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCmTy5R46LNuXE9cZDUCqzIU5X8weENsk4' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>
      </div>
    )
  }
}
