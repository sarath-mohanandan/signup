// import logo from "./logo.svg";
import "./App.css";
import FanSignup from "./components/FanSignup";
import TalentSignUp from "./components/TalentSignUp";

import { Container, Tabs } from "react-bootstrap";
import { Tab } from "bootstrap";
import Header from "./components/Header";

function App() {
	return (
		<>
			<Container>
				<Header />
				<Container className="form-tabs">
					<Tabs
						defaultActiveKey="fan"
						className="form-tabs"
						id="uncontrolled-tab">
						<Tab
							eventKey="fan"
							className="custom-tab"
							title="FAN SIGNUP">
							<FanSignup />
						</Tab>
						<Tab eventKey="talent" title="TALENT SIGNUP">
							<Container className="App">
								<TalentSignUp />
							</Container>
						</Tab>
					</Tabs>
				</Container>
			</Container>
		</>
	);
}

export default App;
