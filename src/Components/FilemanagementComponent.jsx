import React from "react";
import FileManager, { Permissions } from "devextreme-react/file-manager";
import { Popup } from "devextreme-react/popup";
import "../Style/FileManagement.css";
import InputCheck from "./InputCheck";
const FilemanagementComponent = (props) => {
	const {
		remoteProvider,
		currentPath,
		popupVisible,
		imageItemToDisplay,
		displayImagePopup,
		hideImagePopup,
		onCurrentDirectoryChanged,
		create,
		setCreate,
		copy,
		setCopy,
		move,
		setMove,
		deleteOpt,
		setDelete,
		rename,
		setRename,
		upload,
		setUpload,
		download,
		setDownload,
		onClick,
	} = props;
	const test = [
		{
            name: 'file1',
            isDirectory: true,
            // size: Number (크기값d isDirectory 가 false 인 경우에만 보임.)
            items: [
                // {
                //     name: 
                //     ...
                // }
            ]

        }
	]

	return (
		<div className="Container">
			<h3>FileManagement</h3>
			<div className="options">
				<p>Permissions</p>
				<InputCheck name="create" value={create} setValue={setCreate} />
				<InputCheck name="copy" value={copy} setValue={setCopy} />
				<InputCheck name="move" value={move} setValue={setMove} />
				<InputCheck name="delete" value={deleteOpt} setValue={setDelete} />
				<InputCheck name="rename" value={rename} setValue={setRename} />
				<InputCheck name="upload" value={upload} setValue={setUpload} />
				<InputCheck name="download" value={download} setValue={setDownload} />
				{/* <input type={"file"} webkitdirectory={"true"} /> */}
				<button onClick={onClick}>Get data</button>
			</div>
			<div>
				<FileManager
					// currentPath={"Documents"} // 초기에 defult 로 설정할 위치
					fileSystemProvider={remoteProvider}
					// fileSystemProvider={test}
					onSelectedFileOpened={displayImagePopup}
					onCurrentDirectoryChanged={onCurrentDirectoryChanged}
				>
					{/* 파일 관련 권한들 */}
					<Permissions
						create={create}
						copy={copy}
						move={move}
						delete={deleteOpt}
						rename={rename}
						upload={upload}
						download={download}
					></Permissions>
				</FileManager>

				<Popup
					maxHeight={600}
					closeOnOutsideClick={true} // 외부 클릭으로도 닫을수 있게 할지 여부
					title={imageItemToDisplay.name}
					visible={popupVisible}
					onHiding={hideImagePopup}
					className="photo-popup-content"
				>
					<img
						src={imageItemToDisplay.url}
						className="photo-popup-image"
						style={{ width: "100%", height: "100%", objectFit: "contain" }}
					/>
				</Popup>
			</div>
		</div>
	);
};

export default FilemanagementComponent;
