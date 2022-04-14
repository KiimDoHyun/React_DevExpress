import React from "react";
import Form, { SimpleItem, GroupItem, Label } from "devextreme-react/form";
import "../Style/FormsandMulti.css";
const FormsandMulit_purposeComponent = (props) => {
	const {
		employee,
		birthDateOptions,
		positionOptions,
		stateOptions,
		phoneOptions,
		notesOptions,
		formData,
		avatarRender,
		onchange,
		onEditorEnterKey,
		onsubmit,
	} = props;
	return (
		<div className="Container">
			<h3>FormsandMulit_purpose</h3>
			<div className="options"></div>
			<Form
				formData={formData}
				onFieldDataChanged={onchange}
				onEditorEnterKey={onEditorEnterKey}
			>
				<GroupItem cssClass="first-group" colCount={4} >
					<SimpleItem render={avatarRender} />
					<GroupItem colSpan={3}>
						<SimpleItem dataField="FirstName" />
						<SimpleItem dataField="LastName" />
						<SimpleItem
							dataField="BirthDate"
							editorType="dxDateBox"
							editorOptions={birthDateOptions}
						/>
					</GroupItem>
				</GroupItem>
				<GroupItem cssClass="second-group" colCount={2}>
					<GroupItem>
						<SimpleItem dataField="Address" />
						<SimpleItem dataField="City" />
						<SimpleItem
							dataField="Position"
							editorType="dxSelectBox"
							editorOptions={positionOptions}
						/>
					</GroupItem>
					<GroupItem>
						<SimpleItem
							dataField="State"
							editorType="dxSelectBox"
							editorOptions={stateOptions}
						/>
						<SimpleItem dataField="ZipCode" />
						<SimpleItem dataField="typ1" />
						<SimpleItem dataField="typ2" />
						<SimpleItem dataField="Mobile" editorOptions={phoneOptions}>
							<Label text="Phone" />
						</SimpleItem>
					</GroupItem>
					<SimpleItem
						colSpan={2}
						dataField="Notes"
						editorType="dxTextArea"
						editorOptions={notesOptions}
					/>
				</GroupItem>
			</Form>
			{/* Form 데이터 확인 */}
			<button onClick={onsubmit}>Save</button>
		</div>
	);
};

export default FormsandMulit_purposeComponent;
