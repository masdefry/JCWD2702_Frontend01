import Sidebar from "~/components/sidebar";

export const metadata = {
    title: "Products Page",
    description: "This is Products Page",
  };

export default function LayoutProducts({children}){
    return(
        <>
            <Sidebar />
            {children}
        </>
    )
}