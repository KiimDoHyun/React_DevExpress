import React from "react";

const Home = () => {
	return (
		<div className="Container">
			<h3>Home</h3>
			<div>
				<h4>React X DevExpres</h4>
				<p>
					참고:{" "}
					<a
						target={"_blank"}
						href="https://js.devexpress.com/Demos/WidgetsGallery/"
					>
						DevExtreme by DevExpress
					</a>
				</p>
			</div>
			<div>
				<ol>
					<li>
						<p>모든 데모의 Overview 만 예시로 작성됨.</p>
					</li>
					<li>
						<p>데모에 있는 몇몇 이미지는 보이지 않을수 있음.</p>
					</li>
				</ol>
			</div>
		</div>
	);
};

export default Home;
