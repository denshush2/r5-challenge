import React, { useContext, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  BookDescriptionComponent,
  BookDescGoBack,
  BookDescContent,
  BookDescImage,
  BookDescInfo,
} from './styles';
import { Header } from '../../components/Header';
import { BooksContext } from '../../context/Books';
import { IBook } from '../../interfaces/Book.interface';
import { AppContext } from '../../context/App';
import { LoadingScreen } from '../../components/LoadingScreen';
import { searchBooks } from '../../api/searchBooks';
import { Comments } from '../../containers/Comments';

export const BookDescriptionScreen: React.FC = () => {
  const { appLoading } = useContext(AppContext);
  const { id } = useParams();
  const history = useHistory();
  const [book, setBook] = useState<IBook | null>(null);
  const { books, loadBooks, resetBooks } = useContext(BooksContext);
  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await searchBooks({ query: id, multiple: false });
        if (response.error === true)
          throw new Error('Error fetching data BookDescription');
        console.log(response.data);
        setBook({ ...(response.data as IBook) });
      } catch (e) {
        console.log('error');
      }
      // await loadBooks({ query: id, multiple: false });
    };
    getBooks();

    return () => resetBooks();
  }, []);

  const goBackHandler = () => {
    history.push('/');
  };

  if (appLoading) return <LoadingScreen />;
  return (
    <BookDescriptionComponent>
      <Header />
      <BookDescGoBack onClick={() => goBackHandler()}>Go back</BookDescGoBack>
      <BookDescContent>
        <BookDescImage src={book?.volumeInfo.imageLinks.thumbnail} />
        {book && (
          <BookDescInfo>
            <span>{book.volumeInfo.contentVersion}</span>
            <span>
              <b>{book.volumeInfo.title}</b>
            </span>
            <span>{book.volumeInfo.authors}</span>
            <hr />
            <span
              dangerouslySetInnerHTML={{ __html: book.volumeInfo.description }}
            ></span>
            {/* <span>{}</span> */}
          </BookDescInfo>
        )}
      </BookDescContent>
      <Comments id={id} />
    </BookDescriptionComponent>
  );
};
