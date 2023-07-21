import { useQueryClient } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import MainLayout from "src/common/layouts/MainLayout";
import { getPoems } from "src/common/services/poems/poems";
import { NavItemConfig } from "src/common/types";
import { links } from "../links";

export const Main = () => {
  const client = useQueryClient();

  client.prefetchQuery({
    queryKey: ["poems"],
    queryFn: getPoems,
  });

  const navigation: NavItemConfig[] = [
    { url: links.home, text: "Home", end: true },
    { url: links.documentation, text: "Documentazione", end: true },
    { url: links.poems.list, text: "Catalogo", end: false },
  ];

  return (
    <MainLayout navigation={navigation}>
      <Outlet />
    </MainLayout>
  );
};
