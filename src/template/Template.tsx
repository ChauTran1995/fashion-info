import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function Template(props: any) {
  return (
    <>
      <Header />
      <Content>{props.children}</Content>
      <Footer />
    </>
  );
}

export default Template;
