import React from "react";
import HtmlEditor, {
	Toolbar,
	MediaResizing,
	Item,
} from "devextreme-react/html-editor";
import InputCheck from "./InputCheck";
const HtmlEditorComponent = (props) => {
	const {
		sizeValues,
		fontValues,
		headerValues,
		multiline,
		setmultiline,
		markup,
	} = props;
	return (
		<div className="Container">
			<h3>HtmlEditor</h3>
			<div className="options">
				<InputCheck
					name="multiline"
					value={multiline}
					setValue={setmultiline}
				/>
			</div>
			<HtmlEditor height="725px" defaultValue={markup}>
				<MediaResizing enabled={true} />
				<Toolbar multiline={multiline}>
					{/* 
                    아이템 속성들 참고
                    https://js.devexpress.com/Documentation/Guide/UI_Components/HtmlEditor/Toolbar/Predefined_Items/ */}
					<Item name="undo" />
					<Item name="redo" />

					<Item name="separator" />
					<Item name="size" acceptedValues={sizeValues} />
					<Item name="font" acceptedValues={fontValues} />

					<Item name="separator" />
					<Item name="bold" />
					<Item name="italic" />
					<Item name="strike" />
					<Item name="underline" />

					<Item name="separator" />
					<Item name="alignLeft" />
					<Item name="alignCenter" />
					<Item name="alignRight" />
					<Item name="alignJustify" />

					<Item name="separator" />
					<Item name="orderedList" />
					<Item name="bulletList" />

					<Item name="separator" />
					<Item name="header" acceptedValues={headerValues} />

					<Item name="separator" />
					<Item name="color" />
					<Item name="background" />

					<Item name="separator" />
					<Item name="link" />
					<Item name="image" />

					<Item name="separator" />
					<Item name="clear" />
					<Item name="codeBlock" />
					<Item name="blockquote" />

					<Item name="separator" />
					<Item name="insertTable" />
					<Item name="deleteTable" />
					<Item name="insertRowAbove" />
					<Item name="insertRowBelow" />
					<Item name="deleteRow" />
					<Item name="insertColumnLeft" />
					<Item name="insertColumnRight" />
					<Item name="deleteColumn" />

					{/* 예제엔 없던 항목들 */}
					<Item name="separator" />
					<Item name="subscript" />
					<Item name="superscript" />
					<Item name="increaseIndent" />
					<Item name="decreaseIndent" />
					<Item name="variable" />
					<Item name="cellProperties" />
					<Item name="tableProperties" />
					<Item name="insertHeaderRow" />
				</Toolbar>
			</HtmlEditor>
		</div>
	);
};

export default HtmlEditorComponent;
