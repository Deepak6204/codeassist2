import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Component for the home page
import IdeaPitching from './pages/Idea-Pitching'; 
import Notes from './pages/Notes'; // Component for the notes page
import LeaderBoard from './pages/LeaderBoard'; // Component for the leaderboard page
import Register from './pages/Register';
import Problems from './pages/Problems';
import ProblemDetails from './components/ProblemDetails';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Roadmap from "./pages/Roadmap";
import AppDevelopment from './components/svg/svgCont/appDev';
import Ai from './components/svg/svgCont/ai';
import Backend from './components/svg/svgCont/backend';
import Frontend from './components/svg/svgCont/frontend';
import CyberSecurity from './components/svg/svgCont/cyberSecurity';
import Blockchain from './components/svg/svgCont/blockchain';
import Ios from './components/svg/svgCont/ios';
import DataAnalyst from './components/svg/svgCont/dataAnalyst';
import AiDataScientist from './components/svg/svgCont/aiDataScientist';
import Game from './components/svg/svgCont/game';
import DevOps from './components/svg/svgCont/devops';
import Graphic from './components/svg/svgCont/graphics';
import Project from './pages/Project';
import Event from './Events/BugBounty/Event';
import Login from './pages/Logintemp';
import Users from './pages/Users'
import CreditsPage from './pages/Credit'
import SetEligibility from './pages/set_eligible'
import Events from './pages/Events';

function App() {
    return (
        <Router>
            {/* <Navbar /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/idea-pitch" element={<IdeaPitching/>} />
                <Route path="/notes" element={<Notes />} />
                <Route exact path="/problems" element={<Problems />} />
                <Route exact path="/events" element={<Events />} />
                <Route exact path="/roadmaps" element={<Roadmap />} />
                <Route exact path="/projects" element={<Project />} />
                <Route path="/leaderboard" element={<LeaderBoard />} />
                <Route path="/register" element={<Register />} />
                <Route path="/problems/:id" element={<ProblemDetails/>} />
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/edit-profile" element={<EditProfile/>}/>
                <Route path="/roadmaps/appDev" element={<AppDevelopment/>}/>
                <Route path="/roadmaps/ai" element={<Ai/>}/>
                <Route path="/roadmaps/backend" element={<Backend/>}/>
                <Route path="/roadmaps/frontend" element={<Frontend/>}/>
                <Route path="/roadmaps/cyberSecurity" element={<CyberSecurity/>}/>
                <Route path="/roadmaps/dataAnalyst" element={<DataAnalyst/>}/>
                <Route path="/roadmaps/aiDataScientist" element={<AiDataScientist/>}/>
                <Route path="/roadmaps/blockchain" element={<Blockchain/>}/>
                <Route path="/roadmaps/gameDevlopment" element={<Game/>}/>
                <Route path="/roadmaps/ios" element={<Ios/>}/>
                <Route path="/roadmaps/devOps" element={<DevOps/>}/>
                <Route path="/roadmaps/graphics" element={<Graphic/>}/>
                <Route path="/event" element={<Event/>}/>
                <Route path='/login_temp' element = {<Login/>}/>
                <Route path='/users' element = {<Users/>}/>
                <Route path='/creditsPage' element = {<CreditsPage/>}/>
                <Route path='/abcd1234' element = {<SetEligibility/>}/>
            </Routes>
            {/* <Footer/> */}
        </Router>
    );
}

export default App;
