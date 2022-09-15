import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar, Feed, VideoDetails, ChannelDetails, SearchFeed } from "./components";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />}  > </Route>
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/search/:serchTerm" element={<SearchFeed />} />
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
