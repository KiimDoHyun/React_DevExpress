import React, { useMemo, useState } from "react";
import FilemanagementComponent from "../Components/FilemanagementComponent";
import RemoteFileSystemProvider from "devextreme/file_management/remote_provider";

const FilemanagementContainer = () => {
	const remoteProvider = useMemo(() => {
		return new RemoteFileSystemProvider({
			endpointUrl:
				"https://js.devexpress.com/Demos/Mvc/api/file-manager-file-system-images",
		});
	}, []);
	const [currentPath, setCurrentPath] = useState("Widescreen");
	const [popupVisible, setPopupVisible] = useState(false);
	const [imageItemToDisplay, setImageItemToDisplay] = useState({
		name: "",
		url: "",
	});

	// Permissions
	const [create, setCreate] = useState(true);
	const [copy, setCopy] = useState(true);
	const [move, setMove] = useState(true);
	const [deleteOpt, setDelete] = useState(true);
	const [rename, setRename] = useState(true);
	const [upload, setUpload] = useState(true);
	const [download, setDownload] = useState(true);

	/*
    파일 데이터 형태 [
        {
            name: String
            isDirectory: Bool
            size: Number (크기값ㅇㄴ isDirectory 가 false 인 경우에만 보임.)
            items: [
                {
                    name: 
                    ...
                }
            ]

        }
    ]
    파일 클릭할때 
    1 -> 3 -> 3
    파일을 클릭하면 현재 디렉터리 변경 함수를 2번 호출하지만 변경하진 않음.
    (실제로 변경안하는게 아닌 동일한 값이 들어가기 때문에 useEffect 에서 잡히지 않는것)

    파일 닫을때
    2 -> 3
    */

	/*
    특정 파일을 클릭했을때 
    해당 아이템이 속한 객체의 모든 값은 e.file 에 들어있음
    */
	const displayImagePopup = (e) => {
		setPopupVisible(true);
		setImageItemToDisplay({
			name: e.file.name,
			url: e.file.dataItem.url,
		});
	};

	const hideImagePopup = () => {
		setPopupVisible(false);
	};

	const onCurrentDirectoryChanged = (e) => {
		// 다를때만 수행하도록 변경
		if (e.component.option("currentPath") !== currentPath) {
			setCurrentPath(e.component.option("currentPath"));
		}
	};

	const propDatas = {
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
	};
	return <FilemanagementComponent {...propDatas} />;
};

export default FilemanagementContainer;
