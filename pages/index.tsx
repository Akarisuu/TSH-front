import { GetServerSideProps } from "next";

export default function MainPage() {
  return <main></main>;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      permanent: true,
      destination: "/products",
    },
  };
};
