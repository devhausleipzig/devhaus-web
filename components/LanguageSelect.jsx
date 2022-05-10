import React, { Component } from 'react';
import {languages, languagesX} from './languages';

class ReactFlagsSelect extends Component {
	constructor(props){
		super(props);
		const { defaultLanguage } = this.props;

		this.state = {
			openOptions: false,
			defaultLanguage,
			filteredLanguages: []
		}

		this.toggleOptions = this.toggleOptions.bind(this);
		this.closeOptions = this.closeOptions.bind(this);
		this.onSelect = this.onSelect.bind(this);
		this.filterSearch = this.filterSearch.bind(this);
		this.setLanguages = this.setLanguages.bind(this);
	}

	toggleOptions() {
		!this.state.disabled && this.setState({
			openOptions: !this.state.openOptions
		});
	}

	toggleOptionsWithKeyboard(evt) {
		evt.preventDefault();
		if (evt.keyCode === 27) {
			//esc key: hide options
			!this.state.disabled && this.setState({
				openOptions: false
			});
		}
	}

	closeOptions(event) {
		if (event.target !== this.refs.selectedFlag && event.target !== this.refs.flagOptions && event.target !== this.refs.filterText ) {
			this.setState({
				openOptions: false
			});
		}
	}

	onSelect(languageCode) {
		this.setState({
			selected: languageCode,
			filter : '',
			openOptions: false
		});
		this.props.onSelect && this.props.onSelect(languageCode);
	}

	onSelectWithKeyboard(evt, languageCode) {
		evt.preventDefault();
		if (evt.keyCode === 13) {
			//enter key: select
			this.onSelect(languageCode);
			this.closeOptions(evt);
		} else if (evt.keyCode === 27) {
			//esc key: hide options
			this.toggleOptions();
		}
	}

	updateSelected(languageCode) {
		const isValid = languages[languageCode];

		isValid && this.setState({
			selected: languageCode
		})
	}

	filterSearch(evt) {
		let filterValue = evt.target.value;
		let filteredLanguages = filterValue && this.state.languages.filter(key => {
			let label = this.props.customLabels[key] || languages[key];
			return label && label.match(new RegExp(filterValue, 'i'))
		}) ;

		this.setState({filter : filterValue, filteredLanguages : filteredLanguages });
	}

	setLanguages() {
		const fullLanguages = Object.keys(languages);

		let selectLanguages = this.props.languages && this.props.languages.filter(language => {
			return languages[language];
		});

		//Filter BlackList
		if (this.props.blackList && selectLanguages) {
			selectLanguages = fullLanguages.filter(languageKey =>{
					return selectLanguages.filter(language =>{
						return languageKey === language;
					}).length === 0
			});
		}

		this.setState({
			languages: selectLanguages || fullLanguages
		}, ()=> {
			const { selected } = this.state;

			if (selected && !this.state.languages.includes(selected)) {
				this.setState({ selected: null });
			}
		});
	}

	componentDidMount() {
		this.setLanguages();
		!this.props.disabled && window.addEventListener("click", this.closeOptions);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.languages !== this.props.languages || prevProps.blackList !== this.props.blackList) {
			this.setLanguages();
		}
	}

	componentWillUnmount() {
		!this.props.disabled && window.removeEventListener("click", this.closeOptions);
	}

	render() {

		let isSelected = this.state.selected || this.state.defaultLanguage;
		let selectedSize = this.props.selectedSize;
		let optionsSize = this.props.optionsSize;
		let alignClass = this.props.alignOptions.toLowerCase() === 'left' ? 'to--left' : '';

		return (
			<div className={`flag-select ${this.props.className ? this.props.className :  ""}`}>
				<button
					 ref="selectedFlag"
					 style={{fontSize: `${selectedSize}px`}}
					 className="flag-select__btn"
					 onClick={this.toggleOptions}
					 onKeyUp={evt => this.toggleOptionsWithKeyboard(evt)}
					 disabled={this.props.disabled}
					 id="select_flag_button"
					 aria-haspopup="listbox"
					 aria-expanded={this.state.openOptions}
					 aria-labelledby="select_flag_button">
					{isSelected &&
						<span className="flag-select__option flag-select__option--placeholder">
							{!this.props.showSelectedLabel &&
							  <span>{
								  this.props.names == 'international' ? languagesX[isSelected].name :
								  this.props.names == 'local' ? languagesX[isSelected].localName :
								  languagesX[isSelected].name
						  	}</span>
							}
							{/*<img className="flag-select__option__icon" src={require(`../flags/${isSelected.toLowerCase()}.svg`)} alt={isSelected}/>*/}
							{this.props.showSelectedLabel &&
								<span className="flag-select__option__label">{ this.props.customLabels[isSelected] || (
									 this.props.names == 'international' ? languagesX[isSelected].name :
									 this.props.names == 'local' ? languagesX[isSelected].localName :
									 languagesX[isSelected].name
								 )}</span>
							}
						</span>
					}
					{!isSelected &&
						<span className="flag-select__option flag-select__option--placeholder">{this.props.placeholder}</span>
					}
				</button>

				{this.state.openOptions &&
					<ul tabIndex="-1" role="listbox" ref="flagOptions" style={{
						display: 'block',
						textAlign: 'left',
						listStyleType: 'none',
						fontSize: `${optionsSize}px`}} className={`flag-select__options ${alignClass}`}>
						{this.props.searchable && (
							<div className="filterBox">
								<input type="text" placeholder={this.props.searchPlaceholder} ref="filterText"  onChange={this.filterSearch}/>
							</div>
						)}

						{(this.state.filter ? this.state.filteredLanguages : this.state.languages).map(languageCode =>
							(<li
								key={languageCode}
								role="option"
								tabIndex="0"
								id={`select_flag_${languageCode}`}
								className={`flag-select__option ${this.props.showOptionLabel ? 'has-label' : ''}`}
								onClick={() => this.onSelect(languageCode)}
								onKeyUp={evt => this.onSelectWithKeyboard(evt, languageCode)}>
								<span style={{width: `${optionsSize}px`, height: `${optionsSize}px`}}>
								  {!this.props.showOptionLabel && (
									  <span><i>{/*languagesX[languageCode].name*/}
										  {
										    this.props.names == 'international' ? languagesX[languageCode].name :
												this.props.names == 'local' ? languagesX[languageCode].localName :
												this.props.names == 'both' ? languagesX[languageCode].name + ' ' + languagesX[languageCode].localName :
												languagesX[isSelected].name
											}
										</i></span>
									)}
									{/*<img
										className="flag-select__option__icon"
										alt={`flag for ${languages[languageCode]}`}
									src={require(`../flags/${languageCode.toLowerCase()}.svg`)} />*/}
									{this.props.showOptionLabel && (
										<span className="flag-select__option__label">
											{ 
  											this.props.customLabels[languageCode] || (//languages[languageCode]
													this.props.names == 'international' ? languagesX[languageCode].name :
													this.props.names == 'local' ? languagesX[languageCode].localName :
													this.props.names == 'both' ? languagesX[languageCode].name + ' ' + languagesX[languageCode].localName :
													languagesX[languageCode].name
												)
											}
									</span>
									)}
								</span>
							</li>)
						)}
					</ul>
				}
			</div>
		)
	}
}

ReactFlagsSelect.defaultProps = {
	selectedSize: 16,
	optionsSize: 14,
	placeholder: "Select a language",
	showSelectedLabel: true,
	showOptionLabel: true,
	alignOptions: "right",
	customLabels: {},
	disabled: false,
	blackList: false,
	searchable: false,
	searchPlaceholder: 'Search',
	names: 'local',
};

// ReactFlagsSelect.propTypes = {
// 	languages: PropTypes.array,
// 	blackList: PropTypes.bool,
// 	customLabels: PropTypes.object,
// 	selectedSize: PropTypes.number,
// 	optionsSize: PropTypes.number,
// 	defaultLanguage: PropTypes.string,
// 	placeholder: PropTypes.string,
// 	className: PropTypes.string,
// 	showSelectedLabel: PropTypes.bool,
// 	showOptionLabel: PropTypes.bool,
// 	alignOptions: PropTypes.string,
// 	onSelect: PropTypes.func,
// 	disabled: PropTypes.bool,
// 	searchable: PropTypes.bool,
// 	searchPlaceholder: PropTypes.string,
// 	names: PropTypes.oneOf(['local', 'international', 'both']),
// };

export default ReactFlagsSelect;