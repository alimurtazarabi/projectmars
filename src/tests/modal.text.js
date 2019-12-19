import React from 'react';
import { render } from '@testing-library/react';
import { act } = from 'react-dom/test-utils';
import Modal from './modal';

let container;

beforeEach( () => {
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach( () => {
	document.body.removeChild(container);
	container = null;
});

it('can render a modal', () => {
	// Test first render
	act( () => {
		ReactDOM.render(<Modal />, container);
	});
	
	const button = container.querySelector('button');
	act( () => {
		button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
	});
});



