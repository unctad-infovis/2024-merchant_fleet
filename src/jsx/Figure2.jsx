import React, { useState, useEffect, memo } from 'react';
import '../styles/styles.less';

// Load helpers.
import CSVtoJSON from './helpers/CSVtoJSON.js';
import roundNr from './helpers/RoundNr.js';

import ChartBarRace from './components/ChartBarRace.jsx';

// https://www.highcharts.com/demo/highcharts/bar-race
function Figure1() {
  // Data states.
  const [dataFigure, setDataFigure] = useState(false);

  const cleanData = (data) => data.map((el) => {
    const values = Object.values(el).map(val => (val === '' ? 0 : roundNr(parseFloat(val), 0))).filter(val1 => !Number.isNaN(val1));
    return ({
      data: values.map((e) => ({
        color: (el.Name === 'Container ships') ? '#ff0' : '#009edb',
        value: e
      })),
      name: el.Name
    });
  });

  useEffect(() => {
    const data_file = `${(window.location.href.includes('unctad.org')) ? 'https://storage.unctad.org/2024-merchant_fleet/' : (window.location.href.includes('localhost:80')) ? './' : 'https://unctad-infovis.github.io/2024-merchant_fleet/'}assets/data/2024-merchant_fleet_figure2_update.csv`;
    try {
      fetch(data_file)
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.text();
        })
        .then(body => setDataFigure(cleanData(CSVtoJSON(body))));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="app">
      {dataFigure && (
      <ChartBarRace
        chart_height={800}
        data={dataFigure}
        data_decimals={1}
        idx="02"
        note=""
        show_only_first_and_last_labels={false}
        source="UNCTADstat"
        subtitle="Global fleet by type of ship, 1000 deadweight tonnage (dwt), annual, 1980–2024"
        suffix="%"
        title="45 years of merchant fleets"
        ylabel=""
      />
      )}
    </div>
  );
}

export default memo(Figure1);
