'use strict';
const React = require('react');
const Gradient = require('ink-gradient');
const BigText = require('ink-big-text');
const { Text } = require('ink');
const importJsx = require('import-jsx');
const Table = importJsx('./src/components/Table')
const App = ({ name = 'any' }) => (
  <>
    <Gradient name="summer" >
      <BigText text="crypto cli" align='center' font='chrome' />
    </Gradient>
    <Gradient name="summer" >
      <Text align='center' font='chrome'>Powered By M.Yusuf</Text>
    </Gradient>
    <Table />
  </>
);

module.exports = App;
