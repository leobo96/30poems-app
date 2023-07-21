import { useQueryClient } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import MainLayout from "../common/layouts/MainLayout";
import { getPoems } from "../common/services/poems/poems";

export const Main = () => {
  const client = useQueryClient();

  client.prefetchQuery({
    queryKey: ["poems"],
    queryFn: getPoems,
  });

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};
