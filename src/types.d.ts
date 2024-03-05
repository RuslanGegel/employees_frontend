type ErrorWithMessage = {
  status: number;
  data: {
    message: string;
  };
};

type Employee = {
  id: string;
  firstName: string;
  lastName: string;
  age: string;
  address: string;
  userId: string;
  user: User;
};

type User = {
  id: string;
  email: string;
  name: string;
  password: string;
  token: string;
  Employee: Employee[];
};