import React, { Component, PropTypes } from 'react';
import { IntlProvider } from 'react-intl';
import messages from '../messages';

import Calculator from './Calculator';
import Header from './Header';
import Footer from './Footer';

import './resources/stratum.css';
import './styles/Root.less';

/**
 * @TODO doc
 */
export default
class Root extends Component {

	static propTypes = {};

	state = {};

	render() {
		const locale = this.state.locale
			|| navigator.language
			|| navigator.browserLanguage;

		const intlData = {
			locale   : locale,
			messages : messages[locale] || messages[locale.match(/\w+/)[0]],
		};

		return <IntlProvider key="intl" {...intlData}>
			<div>
				<Header />
				<Calculator />
				<Footer />
			</div>
		</IntlProvider>;
	}

}
