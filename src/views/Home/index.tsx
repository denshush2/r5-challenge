import React, { useContext, useState } from 'react';
import { BooksContext } from '../../context/Books';
import { Header } from '../../components/Header';
import { HomeComponent, InputSearchComponent } from './styles';
import { searchPlaceholderText } from './constants';
import { BooksSection } from '../../containers/BooksSection';
import { AppContext } from '../../context/App';
import { LoadingScreen } from '../../components/LoadingScreen';

export const HomeScreen: React.FC = () => {
  const { appLoading } = useContext(AppContext);

  const { loadBooks, books } = useContext(BooksContext);
  const [searchKey, setsearchKey] = useState<string>('');

  if (appLoading) return <LoadingScreen />;
  return (
    <HomeComponent>
      <Header />
      <InputSearchComponent
        placeholder={searchPlaceholderText}
        onKeyPress={(event) =>
          event.key === 'Enter' &&
          loadBooks({ query: searchKey, multiple: true })
        }
        onChange={(event) => {
          setsearchKey(event.target.value);
        }}
      />
      {books && <BooksSection books={books} />}
    </HomeComponent>
  );
};
