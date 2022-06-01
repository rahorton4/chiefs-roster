import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './table.css';

const Table = () => {
  const [rosterData, setRosterData] = useState([]);

  const getData = () => {
    axios
      .get('https://api.sportsdata.io/v3/nfl/scores/json/Players/KC?key=c96d43e65c8d4450918e284d93059fd5')
      .then((response) => {
        const allData = response.data;
        setRosterData(allData);
      })
      .catch((error) => console.error('Error:' + { error }));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='container table__container'>
      <table className='roster-table'>
        <thead>
          <tr>
            <th className='player__border'>
              <a className='filter__link' href='#'>
                Player
              </a>
            </th>
            <th>
              <a className='filter__link' href='#'>
                #
              </a>
            </th>
            <th>
              <a className='filter__link' href='#'>
                Position
              </a>
            </th>
            <th>
              <a className='filter__link' href='#'>
                HT
              </a>
            </th>
            <th>
              <a className='filter__link' href='#'>
                WT
              </a>
            </th>
            <th>
              <a className='filter__link' href='#'>
                Age
              </a>
            </th>
            <th>
              <a className='filter__link' href='#'>
                Exp
              </a>
            </th>
            <th>
              <a className='filter__link' href='#'>
                Draft Year
              </a>
            </th>
            <th>
              <a className='filter__link' href='#'>
                College
              </a>
            </th>
          </tr>
        </thead>
        <tbody>
          {rosterData.map((player) => (
            <tr key={player.PlayerID}>
              <td className='player'>
                <img className='player__img' src={player.PhotoUrl} alt={player.FirstName} />
                <div className='player__name'>
                  {player.FirstName} {player.LastName}
                </div>
              </td>
              <td>{player.Number === null ? 'N/A' : player.Number}</td>
              <td>{player.Position}</td>
              <td>{player.Height}</td>
              <td>{player.Weight}</td>
              <td>{player.Age === null ? 'N/A' : player.Age}</td>
              <td>{player.Experience}</td>
              <td>{player.CollegeDraftYear}</td>
              <td>{player.College}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

{
  /* ; */
}
