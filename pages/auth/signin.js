import { getProviders, signIn as SignIntoProvider} from "next-auth/react";
import Header from "../../components/Header";
import Image from 'next/image'
function SignIn({providers}){
    // console.log(providers)
    return (
        <>
        <div className="bg-black">
            <div className=" flex flex-col items-center justify-center min-h-screen
            py-2 mt px-14 text-center">
            <div className="mt-40">
            <img className=" ml-20 w-36 rounded " alt="" src="https://i.ibb.co/DKNDjJJ/image.jpg"/>
            <img className="w-80 rounded mt-10" alt="" src="https://i.ibb.co/XZfCLsp/image.png"/>
            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button className="mt-10 p-4 bg-blue-500 rounded-lg text-white" 
                    onClick={() => SignIntoProvider(provider.id,{callbackUrl:'/'})}>
                        Sign in with {provider.name}
                    </button>
                </div>
            ))}
            </div>
            <div className="p-4 bg-slate-100 rounded-xl px-4 shadow-sm mt-20">
            <h1>
            No login password credentials are stored in our database, they are completely authorized
            and authenticated by Google Services.
            </h1>
    
            </div>
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