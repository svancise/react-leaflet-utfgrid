import React from 'react';
import L from 'leaflet'
import { MapLayer } from 'react-leaflet';
import './leaflet.utfgrid';

export default class UtfGrid extends MapLayer {
	addEvents() { 
		if (this.props.mouseMove) {
			this.leafletElement.on('mousemove', this.props.onClick);
		};

		if (this.props.mouseOver) {
			this.leafletElement.on('mouseover', this.props.onClick);
		};

		if (this.props.mouseOut) {
			this.leafletElement.on('mouseout', this.props.onClick);
		};

		if (this.props.onClick) {
			this.leafletElement.on('click', this.props.onClick);
		};
	}

	removeEvents() {
		if (this.props.mouseMove) {
			this.leafletElement.off('mousemove', this.props.onClick);
		};

		if (this.props.mouseOver) {
			this.leafletElement.off('mouseover', this.props.onClick);
		};

		if (this.props.mouseOut) {
			this.leafletElement.off('mouseout', this.props.onClick);
		};

		if (this.props.onClick) {
			this.leafletElement.off('click', this.props.onClick);
		};
	}


	componentWillMount() {
		this.leafletElement = new L.UtfGrid(this.props.url, this.props.options);
		this.addEvents();
	}

	componentWillUnmount() {
		this.removeEvents();
	}	

	createLeafletElement() {
		return this.leafletElement;
	}
};
