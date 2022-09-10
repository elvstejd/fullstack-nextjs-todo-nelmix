import { Box, Title } from "@mantine/core";
import type { NextPage } from "next";
import { useTasksQuery } from "../hooks/useTasksQuery";
import { Task } from "../components/Task";
import { TaskInput } from "../components/TaskInput";
import { UserBox } from "../components/UserBox";

const Home: NextPage = () => {
  const { data: tasks } = useTasksQuery();

  return (
    <>
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
        <UserBox />
        <Box
          sx={{
            maxWidth: "30rem",
            margin: "0 auto",
            marginTop: "3rem",
            marginBottom: "4.5rem",
          }}
        >
          <Title mb={16}>My Todos</Title>
          {tasks.map((task) => (
            <Task key={task.id} data={task} />
          ))}
        </Box>
        <TaskInput />
      </Box>
    </>
  );
};

export default Home;
