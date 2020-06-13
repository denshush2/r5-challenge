import React, { useEffect, useContext } from 'react';
import { BooksContext } from '../../context/Books';

export const HomeScreen: React.FC = () => {
  //   const { loadBooks } = useContext(BooksContext);
  //   useEffect(() => {
  //     const test = async () => {
  //       const response = await loadBooks({ query: 'None' });
  //       console.log('Response', response);
  //     };
  //     test();
  //   }, []);
  return (
    <div>
      <h1>Books</h1>
    </div>
  );
};
