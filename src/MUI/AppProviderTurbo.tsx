
import { AppProviderProps } from "@toolpad/core";
import { AppProvider as W } from "@toolpad/core/nextjs";
import { Suspense } from "react";


export default async function AppProvider(props: AppProviderProps) {
    if (process.env.NODE_ENV != "production") {
        return (
            <Suspense>
                <W {...props} />
            </Suspense>
        )
    } else {
        return <W {...props} />
    }
}