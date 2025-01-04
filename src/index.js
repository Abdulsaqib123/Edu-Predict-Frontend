import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthContextProvider } from "./contexts/AuthContext";
import { UserContextProvider } from "./contexts/UserContext";
import { UploadContextProvider } from "./contexts/UploadContext";
import { SummaryContextProvider } from "./contexts/SummaryContext";
import { RoleContextProvider } from "./contexts/RoleContext";
import { DashboardContextProvider } from "./contexts/DashboardContext";
import { StudentContextProvider } from "./contexts/StudentContext";
import { NotificationContextProvider } from "./contexts/NotificationContext";
import { ReportContextProvider } from "./contexts/ReportContext";
import { ContactContextProvider } from "./contexts/ContactContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <UserContextProvider>
        <UploadContextProvider>
          <SummaryContextProvider>
            <RoleContextProvider>
              <DashboardContextProvider>
                <StudentContextProvider>
                  <NotificationContextProvider>
                    <ReportContextProvider>
                      <ContactContextProvider>
                        <App />
                      </ContactContextProvider>
                    </ReportContextProvider>
                  </NotificationContextProvider>
                </StudentContextProvider>
              </DashboardContextProvider>
            </RoleContextProvider>
          </SummaryContextProvider>
        </UploadContextProvider>
      </UserContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
