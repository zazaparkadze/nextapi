type Employee = {
  id: number;
  firstname: string;
  lastname: string;
};
type BlogPost = {
  _id: string;
  date: string;
  title: string;
  body?: string;
};
type Post = {
  _id?: string | object;
  id: number;
  title: string;
  dateTime: string;
  postBody: string;
  likes?: number;
  disLikes?: number;
  comments?: string[];
  __v?: number;
  userId?: number;
};
