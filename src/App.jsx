import { Global } from "@emotion/react"
import { global } from "./styles/global"
import MainLayout from "./common/MainLayout/MainLayout"
import MainContainer from "./common/MainContainer/MainContainer"
import MainSidebar from "./common/MainSidebar/MainSidebar"
import LoginPage from "./pages/LoginPage/LoginPage"
import { Route, Routes } from "react-router-dom"
import JoinPage from "./pages/JoinPage/JoinPage"

function App() {

  return (
    	<>
    		<Global styles={global} />
			<MainLayout>
				<MainSidebar />
				<MainContainer>
					<Routes>
						<Route path="/auth/login" element={<LoginPage />}/>
						<Route path="/auth/join" element={<JoinPage />}/>
					</Routes>
				</MainContainer>
			</MainLayout>
    	</>
  	)
}

export default App
