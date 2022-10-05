import { getProviders, signIn as SignIntoProvider} from "next-auth/react";
import Header from "../../components/Header";
function SignIn({providers}){
    console.log(providers)
    return (
        <>
        <Header/>
        <div className=" flex flex-col items-center justify-center min-h-screen
        py-2 -mt-56 px-14 text-center">

        <div className="mt-40">
        <img className="w-80" src="https://links.papareact.com/ocw"/>
        {Object.values(providers).map((provider) => (
            <div key={provider.name}>
                <button className="p-4 bg-blue-500 rounded-lg text-white" 
                onClick={() => SignIntoProvider(provider.id,{callbackUrl:'/'})}>
                    Sign in with {provider.name}
                </button>
            </div>
        ))}
        </div>
        </div>
        </>
    );
}
export async function getServerSideProps(context){
    const providers = await getProviders();
    return{
        props: {
            providers
        }
    }
}
export default SignIn;