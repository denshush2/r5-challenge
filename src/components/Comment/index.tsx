import React from 'react';
import { ICommentComponentProps } from './types';
import { CommentStyledComponent } from './styles';
import { getHistoryTime } from '../../utils/timeFormat';

export const CommentComponent: React.FC<ICommentComponentProps> = ({
  comment,
}) => (
  <CommentStyledComponent>
    <p>{comment.text}</p>
    <span>By: {comment.username}</span>
    <i>Hace {getHistoryTime(comment.time)} minutos</i>
  </CommentStyledComponent>
);
