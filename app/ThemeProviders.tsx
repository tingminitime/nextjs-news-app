// - 不可直接在 Client component 裡面放 Server component。
// - 可以把 Client component 包裝成 Provider 將 Server component 以 child 或 prop 的方式傳遞進去，next 會將 Server component 先在服務端渲染後再 Client 呈現。
// - https://beta.nextjs.org/docs/rendering/server-and-client-components#importing-server-components-into-client-components

'use client'
import { ThemeProvider } from 'next-themes'
import React from 'react'

function ThemeProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      enableSystem={true}
      attribute="class"
    >
      {children}
    </ThemeProvider>
  )
}
export default ThemeProviders
