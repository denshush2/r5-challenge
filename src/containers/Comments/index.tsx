import React, { useState, useEffect } from 'react';
import { ICommentsProps, IForm } from './types';
import { Form } from './styles';
import { formLabels, formPlaceholders } from './constants';
import { IComment } from '../../interfaces/Comment.interface';
import {
  StorageGetItem,
  StorageSetItem,
} from '../../services/localStorageService';
import { CommentComponent } from '../../components/Comment';
import { getTime } from '../../utils/timeFormat';

export const Comments: React.FC<ICommentsProps> = ({ id }) => {
  const [form, setForm] = useState<IForm | null>(null);
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await StorageGetItem(id);
        if (response === false) throw new Error('no comments');
        setComments(response);
      } catch (e) {
        console.log('Errror Comments component', e);
      }
    };
    getComments();
  }, []);

  const formHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setComments((prevState) => [
      ...prevState,
      { username: form?.username!, time: getTime(), text: form?.text! },
    ]);
    StorageSetItem(
      { username: form?.username!, time: getTime(), text: form?.text! },
      id
    );
    setForm({ text: '', username: '' });
  };
  const changeHandler = ({
    value,
    label,
  }: {
    value: string;
    label: keyof IForm;
  }) => {
    setForm((prevState) => ({ ...prevState, [label]: value }));
  };
  return (
    <div>
      <h2>Escribe una resenia for {id}</h2>
      <section>
        <h4>Commentarios</h4>
        {comments.map((comment) => (
          <CommentComponent comment={comment} />
        ))}
      </section>
      <Form
        onSubmit={(e) => {
          formHandler(e);
        }}
      >
        <label htmlFor="username">{formLabels.username}</label>
        <input
          id="username"
          type="text"
          value={form?.username}
          onChange={(event) => {
            changeHandler({ label: 'username', value: event.target.value });
          }}
          placeholder={formPlaceholders.username}
        />
        <label htmlFor="comment">{formLabels.comment}</label>
        <textarea
          name=""
          id="comment"
          placeholder={formPlaceholders.comment}
          cols={30}
          onChange={(event) => {
            changeHandler({ label: 'text', value: event.target.value });
          }}
          value={form?.text}
          rows={10}
        ></textarea>
        <button>{formLabels.submitButton}</button>
      </Form>
    </div>
  );
};
