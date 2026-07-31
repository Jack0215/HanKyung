import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import 'antd/dist/reset.css'
import './index.scss'
import App from './App.tsx'
import { BRAND_NAVY } from './theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: BRAND_NAVY,
          colorLink: BRAND_NAVY,
          borderRadius: 8,
          fontFamily:
            "'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, Roboto, 'Malgun Gothic', sans-serif",
        },
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </StrictMode>,
)
