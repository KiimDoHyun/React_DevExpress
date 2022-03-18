import React, { useState } from "react";
import NavigationComponent from "../Components/NavigationComponent";
import { continents } from "../Data";

const NavigationContainer = () => {
	const [countryData, setcountryData] = useState(continents[0].items[0]);
	const [citiesData, setcitiesData] = useState(continents[0].items[0].cities);

	//
	/*
    1. 클릭한 리스트의(객채의) 모든 값이 e 에 담긴다.
    2. e 를 찍어보면 이전에 클릭한값, 현재 클릭한 값이 보임. 단, 값 적용은 최신 값으로 적용됨
    */
	const handleTreeViewSelectionChange = (e) => {
		console.log(e);
		const countryData = e.itemData;
		if (countryData.cities) {
			setcountryData(e.itemData);
			setcitiesData(countryData.cities);
		}
	};

	/*
    [
        {
            id -> 고유 아이디
            text -> 출력할 텍스트
            expanded -> 펼치기 옵션. true 면 초기에 펼쳐져 있음
            items: [] -> 하위에 들어갈 아이템 (하위아이템도 동일하게 계속 반복)

            나머지 아이템 설명
            https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#expanded
        },
        ...
    ]
    */
	const propDatas = { continents, handleTreeViewSelectionChange };
	return <NavigationComponent {...propDatas} />;
};

export default NavigationContainer;
