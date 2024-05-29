import { useLazyQuery, useMutation } from "@apollo/client";
import { addUsers, getUsers } from "./graphql/query/query";
import { FormEvent, useState } from "react";

type UserType = {
  name: string;
  age: number;
  gender: string;
};

const App = () => {
  // const { data, loading, error } = useQuery(getUsers);  // Without Trigger useEffect Type
  // const [getCourses, { data, loading, error }] = useLazyQuery(getUsers); //With Trigger

  const [name, setName] = useState("");
  const [age, setAge] = useState(1);
  const [gender, setGender] = useState("");

  const [getUsersData, { data, loading, error }] = useLazyQuery<{
    sampleUser: UserType[];
  }>(getUsers);
  const [addUser, { data: addUserData }] = useMutation<
    {
      newUser: string;
    },
    {
      name: string;
      age: number;
      gender: string;
    }
  >(addUsers);

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addUser({
      variables: {
        name,
        age,
        gender,
      },
    });
  };

  if (error) return <div>Error</div>;
  console.log(addUserData);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <h1>My Courses</h1>
      {data?.sampleUser?.map((user) => (
        <div key={user.name}>{user.name}</div>
      ))}
      <button onClick={() => getUsersData()}>Get Users</button>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <input
          type="text"
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <button type="submit">Add Users</button>
      </form>
    </div>
  );
};

export default App;
