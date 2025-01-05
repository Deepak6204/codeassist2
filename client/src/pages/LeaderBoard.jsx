
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../style/leaderboard.css";
import React, { useEffect, useState } from 'react';

const LeaderBoard = () => {
  // const [data, setData] = useState([]);

  // Fetch the leaderboard data
  // useEffect(() => {
    // Simulate fetching data from an API
  //   const fetchData = async () => {
  //     const result = [
  //       { username: 'Alice', score: 250 },
  //       { username: 'Bob', score: 200 },
  //       { username: 'Charlie', score: 180 },
  //       { username: 'David', score: 160 },
  //       { username: 'Eve', score: 150 },
  //     ];
  //     setData(result);
  //   };

  //   fetchData();
  // }, []);

  // for bug bounty
  const [users, setUsers] = useState([]);  // State to store fetched users
  const [loading, setLoading] = useState(true);  // State to show loading
  const [error, setError] = useState(null);  // State to handle any errors
  const [round, setRound] = useState(1); // Default round is 1
  const [selectedRound, setSelectedRound] = useState(1);

  const compareUsersForRound = (round) => (a, b) => {
    const scoreA = a.scores?.[`round${round}`]?.score;
    const scoreB = b.scores?.[`round${round}`]?.score;
    if (scoreA == undefined){
      return 1;
    }
    else if(scoreB == undefined){
      return -1;
    }
    if (scoreA !== undefined && scoreB !== undefined) {
      if (scoreA > scoreB) return -1;
      if (scoreA < scoreB) return 1;

      const timeA = a.scores?.[`round${round}`]?.time ?? Number.MAX_SAFE_INTEGER;
      const timeB = b.scores?.[`round${round}`]?.time ?? Number.MAX_SAFE_INTEGER;

      if (timeA < timeB) return -1;
      if (timeA > timeB) return 1;
    } else if (scoreA !== undefined) {
      return -1;
    } else if (scoreB !== undefined) {
      return 1;
    }

    return 0;
  };

  // Function to sort users based on the selected round
  const sortUsersByRound = (users, round) => {
    return users.sort(compareUsersForRound(round));
  };
  // Fetch users when the component is mounted
  useEffect(() => {
    fetch('https://server-jt5f.onrender.com/get_users')  // Replace <PORT> with your backend port
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        return response.json();
      })
      .then(data => {
        const sortedUsers = sortUsersByRound([...data.users], round);
        setUsers(sortedUsers);  // Set fetched data to users state
        setLoading(false);  // Set loading to false once data is fetched
      })
      .catch(error => {
        setError(error.message);  // Set error message if any error occurs
        setLoading(false);  // Stop loading even in case of error
      });
  }, [round]);  // Empty dependency array to run effect only once on component mount

  // Show loading state
  if (loading) {
    return <div>Loading users...</div>;
  }

  // Show error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
       <Navbar/>
      <div className="leaderboard_container">
      <div className="leaderboard_main_heading leaderboard-button">
        <button 
          className={round === 1 ? "active" : ""}
          onClick={()=>setRound(1)}>
            Round-1
        </button>
        <button 
          className={round === 2 ? "active" : ""}
          onClick={()=>setRound(2)}>
            Round-2
        </button>
        <button 
          className={round === 3 ? "active" : ""}
          onClick={()=>setRound(3)}>
            Round-3
          </button>
      </div>

      <div className="leaderboard_heading">
        <h4>#Rank</h4>
        <h4>Name</h4>
        <h4>Points</h4>
        <h4>Time Taken</h4>
      </div>

      {/* Mapping over the leaderboard data */}
      {users.map((user, index) => (
        <div className="leader_boxes" key={index}>
          <div className="leader_result">
            {/* Conditional rendering for rank icons */}
            {index === 0 ? (
              <h4>🥇</h4>
            ) : index === 1 ? (
              <h4>🥈</h4>
            ) : index === 2 ? (
              <h4>🥉</h4>
            ) : (
              <h4>{index + 1}</h4> // Display rank number
            )}

            <h4 className="name">{user.name}</h4>
            <h4>{user.scores[`round${round}`].score}</h4>
            <h4>{}{Math.floor(user.scores[`round${round}`].time/60)}min {user.scores[`round${round}`].time-(Math.floor(user.scores[`round${round}`].time/60)*60)}s</h4>
          </div>
        </div>
      ))}
    </div>
    <Footer/>
    </>
  );
};

export default LeaderBoard;

