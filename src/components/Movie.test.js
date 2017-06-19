import React from 'react';
import Movie from './../components/Movie';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Movie
        title="Logan"
        overview="Logan is the latest installment in the Logan series of Xmen"
        poster="/9EXnebqbb7dOhONLPV9Tg2oh2KD.jpg"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
