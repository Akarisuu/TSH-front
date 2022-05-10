import Login from "components/auth/loginPage";

export default function LoginPage() {
  return (
    <main>
      <Login />
    </main>
  );
}

// with correct login implemented, we should use getServerSideProps here. If user is logged in, we should redirect him back. As for testing purposes, I will assume we can use CSR.
