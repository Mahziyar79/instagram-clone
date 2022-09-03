import { getProviders, signIn as signIntoProvider } from "next-auth/react";
import Header from "../../components/Header";
import Modal from "../../components/Modal";

export default function SignIn({ providers }) {
  return (
    <>
      <Modal />

      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-32 px-14 text-center">
        <img src="https://links.papareact.com/ocw" className="w-80" alt="" />
        <p className="font-xs italic">
          This is not a REAL app , it is built just for Practice!
        </p>
        <div className="mt-12">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() =>
                  signIntoProvider(provider.id, { callbackUrl: "/" })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
