import React from "react";
import ColorBox from "devextreme-react/color-box";
import NumberBox from "devextreme-react/number-box";
import SelectBox from "devextreme-react/select-box";
import Switch from "devextreme-react/switch";
import TextBox from "devextreme-react/text-box";
import LogoContainer from "../Container/Editors/LogoContainer";
import "../Style/Editors.css";
import InputCheck from "./InputCheck";
// import Logo from "../logo.svg";

const EditorsComponent = (props) => {
	const {
		text,
		width,
		height,
		color,
		transform,
		border,
		onChangeText,
		onChangeWidth,
		onChangeHeight,
		onChangeColor,
		onChangeTransform,
		onChangeBorder,
		selectBoxGroupe,
		setselectBoxGroupe,
		items,
		applyValueModeArr,
		applyValueMode,
		onChangeApplyValueMode,
		showSpinButtons, 
		setshowSpinButtons,
	} = props;
	return (
		<div className="Container">
			<h3>Editors</h3>
			<div className="options">
				<InputCheck
					name="selectBoxGroupe"
					value={selectBoxGroupe}
					setValue={setselectBoxGroupe}
				/>
				<InputCheck
					name="showSpinButtons"
					value={showSpinButtons}
					setValue={setshowSpinButtons}
				/>
				<label>applyValueMode</label>
				<SelectBox
					value={applyValueMode}
					onValueChanged={onChangeApplyValueMode}
					items={applyValueModeArr}
				/>
			</div>
			<React.Fragment>
				<div className="settings">
					<div className="column">
						<div className="field">
							<div className="label">Title</div>
							<div className="value">
								<form onSubmit={(e) => {
									e.preventDefault();
									console.log(e)
								}}>
								<TextBox
									name="Title" // submit 시 name 접근 가능?
									value={text}
									onValueChanged={onChangeText}
									maxLength={40}
									valueChangeEvent="blur"
								/>
								<button></button>
								</form>
							</div>
						</div>
						<div className="field">
							<div className="label">Color</div>
							<div className="value">
								<ColorBox
									value={color}
									onValueChanged={onChangeColor}
									applyValueMode={applyValueMode}
								/>
							</div>
						</div>
					</div>
					<div className="column">
						<div className="field">
							<div className="label">Width</div>
							<div className="value">
								<NumberBox
									value={width}
									onValueChanged={onChangeWidth}
									showSpinButtons={showSpinButtons}
									max={700}
									min={70}
									format="#0px"
								/>
							</div>
						</div>
						<div className="field">
							<div className="label">Height</div>
							<div className="value">
								<NumberBox
									value={height}
									onValueChanged={onChangeHeight}
									showSpinButtons={showSpinButtons}
									max={700}
									min={70}
									// format="#0px"
									format="#0g"
								/>
							</div>
						</div>
					</div>
					<div className="column">
						<div className="field">
							<div className="label">Transform</div>
							<div className="value">
								<SelectBox
									value={transform}
									onValueChanged={onChangeTransform}
									items={items}
									grouped={selectBoxGroupe}
									// displayExpr="name"
									// valueExpr="value"
								/>
							</div>
						</div>

						<div className="field">
							<div className="label">Border</div>
							<div className="value">
								<Switch value={border} onValueChanged={onChangeBorder} />
							</div>
						</div>
					</div>
				</div>

				<LogoContainer
					text={text}
					width={width}
					height={height}
					color={color}
					transform={transform}
					border={border}
				/>
			</React.Fragment>
		</div>
	);
};

export default EditorsComponent;
