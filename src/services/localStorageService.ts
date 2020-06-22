import { IComment } from '../interfaces/Comment.interface';

export const StorageSetItem = (comment: IComment, id: string): boolean => {
  try {
    const commentsInStore = localStorage.getItem(id);
    if (commentsInStore === null)
      localStorage.setItem(id, JSON.stringify([{ ...comment }]));
    else {
      const parsedComments = JSON.parse(commentsInStore) as IComment[];
      parsedComments.push(comment);
      localStorage.setItem(id, JSON.stringify(parsedComments));
    }
    return true;
  } catch (e) {
    console.log('Storage Error Setting Item');
    return false;
  }
};

export const StorageGetItem = (id: string): false | IComment[] => {
  try {
    const commentsInStore = localStorage.getItem(id);
    if (commentsInStore === null) throw new Error('no comments');
    return JSON.parse(commentsInStore) as IComment[];
  } catch (e) {
    console.log('Storage Error  getting Item');
    return false;
  }
};
