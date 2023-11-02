"use client";

import ThemeRegistry from "@/theme/themeRegistry";
import ReduxProvider from "./ReduxProvider";
import AuthLoader from "./AuthLoader";

export default function Providers({children}:{children:React.ReactNode}) {
  return (
    <ThemeRegistry>
        <ReduxProvider>
            <AuthLoader>
                {children}
            </AuthLoader>
        </ReduxProvider>
    </ThemeRegistry>
  )
}
