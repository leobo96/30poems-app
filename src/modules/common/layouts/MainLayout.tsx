import { PropsWithChildren } from "react";
import { NavItemConfig } from "src/modules/common/types";
import Footer from "./components/Footer";
import Header from "./components/Header";

export type MainLayoutProps = PropsWithChildren & {
  navigation: NavItemConfig[];
};

function MainLayout({ children, navigation }: MainLayoutProps) {
  return (
    <>
      <Header navigation={navigation} />
      <main>{children}</main>
      <Footer navigation={navigation} />
    </>
  );
}

export default MainLayout;
