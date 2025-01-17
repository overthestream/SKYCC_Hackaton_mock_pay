import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Done from './Done';
import {createBrowserRouter, Route, BrowserRouter, HashRouter, Routes} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<HashRouter>
			<Routes>
				<Route
					path='/:transportationId'
					element={<App />}
					basename={'https://kucodemaster.github.io/SKYCC_Hackaton_mock_pay'}
				/>
			</Routes>
		</HashRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
